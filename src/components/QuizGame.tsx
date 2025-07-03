import { useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'sonner';
import { useSupabaseQuestions } from '../hooks/useSupabaseQuestions';
import { QuestionService } from '../services/questionService';

interface Avatar {
  gender: 'boy' | 'girl';
  skinColor: string;
  name: string;
}

interface Question {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  difficulty: string;
  category: string;
  originalIndex?: number;
}

interface GameProgress {
  avatar: Avatar;
  currentPhase: number;
  score: number;
  currentQuestion: number;
  usedQuestions?: {
    easy: string[];
    medium: string[];
    hard: string[];
  };
}

interface QuizGameProps {
  avatar: Avatar;
  initialProgress?: GameProgress;
  onProgressUpdate?: (progress: GameProgress) => void;
}

const QuizGame = ({ avatar, initialProgress, onProgressUpdate }: QuizGameProps) => {
  const [currentPhase, setCurrentPhase] = useState(initialProgress?.currentPhase || 1);
  const [currentQuestion, setCurrentQuestion] = useState(initialProgress?.currentQuestion || 0);
  const [score, setScore] = useState(initialProgress?.score || 0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [avatarAnimation, setAvatarAnimation] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [currentDifficulty, setCurrentDifficulty] = useState<'Fácil' | 'Médio' | 'Difícil'>('Fácil');
  const [difficultyPattern, setDifficultyPattern] = useState<('Fácil' | 'Médio' | 'Difícil')[]>([]);
  const [usedQuestions, setUsedQuestions] = useState<{
    easy: string[];
    medium: string[];
    hard: string[];
  }>(initialProgress?.usedQuestions || { easy: [], medium: [], hard: [] });

  // Hook do Supabase
  const supabaseQuestions = useSupabaseQuestions();
  const questionService = useMemo(() => new QuestionService(supabaseQuestions), [supabaseQuestions]);

  // Memoize the progress object to prevent unnecessary re-renders
  const gameProgress = useMemo(() => ({
    avatar,
    currentPhase,
    score,
    currentQuestion,
    usedQuestions
  }), [avatar, currentPhase, score, currentQuestion, usedQuestions]);

  // Update progress in parent component with a ref to prevent loops
  const updateProgress = useCallback(() => {
    if (onProgressUpdate) {
      onProgressUpdate(gameProgress);
    }
  }, [onProgressUpdate, gameProgress]);

  // Only update progress when game state actually changes
  useEffect(() => {
    updateProgress();
  }, [updateProgress]);

  // Function to generate a mixed difficulty pattern for 10 questions
  const generateDifficultyPattern = useCallback(() => {
    const patterns = [
      ['Fácil', 'Fácil', 'Fácil', 'Fácil', 'Médio', 'Fácil', 'Difícil', 'Fácil', 'Médio', 'Fácil'],
      ['Fácil', 'Médio', 'Fácil', 'Fácil', 'Fácil', 'Difícil', 'Fácil', 'Médio', 'Fácil', 'Fácil'],
      ['Fácil', 'Fácil', 'Médio', 'Fácil', 'Fácil', 'Fácil', 'Difícil', 'Fácil', 'Médio', 'Difícil'],
      ['Médio', 'Fácil', 'Fácil', 'Difícil', 'Fácil', 'Fácil', 'Médio', 'Fácil', 'Fácil', 'Fácil'],
      ['Fácil', 'Fácil', 'Fácil', 'Médio', 'Difícil', 'Fácil', 'Fácil', 'Médio', 'Fácil', 'Difícil']
    ];
    
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    return randomPattern as ('Fácil' | 'Médio' | 'Difícil')[];
  }, []);

  const loadQuestions = useCallback(async (phase: number) => {
    console.log(`=== CARREGANDO PERGUNTAS DA FASE ${phase} (SUPABASE) ===`);
    console.log('Perguntas já utilizadas:', usedQuestions);
    
    setLoading(true);
    
    try {
      // Generate difficulty pattern for this phase
      const pattern = generateDifficultyPattern();
      setDifficultyPattern(pattern);
      console.log('✅ Padrão de dificuldade gerado:', pattern);
      
      // Get questions from Supabase using the service
      const phaseQuestions = await questionService.getQuestionsForPattern(pattern, usedQuestions);
      
      if (phaseQuestions.length > 0) {
        setQuestions(phaseQuestions);
        
        // Update used questions list
        const newUsedQuestions = { ...usedQuestions };
        phaseQuestions.forEach((question, index) => {
          const difficulty = pattern[index];
          
          if (difficulty === 'Fácil') {
            if (!newUsedQuestions.easy.includes(question.id)) {
              newUsedQuestions.easy.push(question.id);
            }
          } else if (difficulty === 'Médio') {
            if (!newUsedQuestions.medium.includes(question.id)) {
              newUsedQuestions.medium.push(question.id);
            }
          } else {
            if (!newUsedQuestions.hard.includes(question.id)) {
              newUsedQuestions.hard.push(question.id);
            }
          }
        });
        
        setUsedQuestions(newUsedQuestions);
        
        console.log(`✅ ${phaseQuestions.length} perguntas do Supabase carregadas para a fase ${phase}`);
        console.log('Estatísticas das perguntas utilizadas:');
        console.log(`- Fáceis: ${newUsedQuestions.easy.length}`);
        console.log(`- Médias: ${newUsedQuestions.medium.length}`);
        console.log(`- Difíceis: ${newUsedQuestions.hard.length}`);
        
        toast.success(`Fase ${phase} carregada com ${phaseQuestions.length} perguntas!`);
      } else {
        throw new Error('Nenhuma pergunta foi carregada do Supabase');
      }
      
    } catch (error) {
      console.error('❌ ERRO ao carregar perguntas do Supabase:', error);
      toast.error('Erro ao carregar perguntas. Tentando novamente...');
      
      // Tentar resetar tudo e carregar novamente
      try {
        console.log('🔄 Tentando reset completo...');
        await supabaseQuestions.resetUsedQuestions();
        setUsedQuestions({ easy: [], medium: [], hard: [] });
        
        // Tentar carregar novamente com reset
        const pattern = generateDifficultyPattern();
        const phaseQuestions = await questionService.getQuestionsForPattern(pattern, { easy: [], medium: [], hard: [] });
        
        if (phaseQuestions.length > 0) {
          setQuestions(phaseQuestions);
          setDifficultyPattern(pattern);
          toast.success('Perguntas carregadas após reset!');
        } else {
          toast.error('Não foi possível carregar perguntas mesmo após reset.');
        }
      } catch (retryError) {
        console.error('❌ Erro mesmo após retry:', retryError);
        toast.error('Erro crítico ao carregar perguntas. Verifique sua conexão.');
      }
    } finally {
      setLoading(false);
      console.log('=== CARREGAMENTO DE PERGUNTAS FINALIZADO ===\n');
    }
  }, [generateDifficultyPattern, usedQuestions, questionService, supabaseQuestions]);

  // Load questions when phase changes
  useEffect(() => {
    console.log(`useEffect monitoramento - Fase: ${currentPhase}, Questions: ${questions.length}`);
    
    if (questions.length === 0) {
      console.log('🚀 Disparando carregamento de perguntas do Supabase...');
      loadQuestions(currentPhase);
    }
  }, [currentPhase, loadQuestions, questions.length]);

  // Update current difficulty based on the question being shown
  useEffect(() => {
    if (difficultyPattern.length > 0 && currentQuestion < difficultyPattern.length) {
      setCurrentDifficulty(difficultyPattern[currentQuestion]);
    }
  }, [currentQuestion, difficultyPattern]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const currentQ = questions[currentQuestion];
    
    if (answerIndex === currentQ.correct_answer) {
      // Different points based on difficulty
      const points = currentDifficulty === 'Fácil' ? 1 : currentDifficulty === 'Médio' ? 2 : 3;
      setScore(prev => prev + points);
      setAvatarAnimation('correct');
      toast.success(`Resposta correta! +${points} ponto${points > 1 ? 's' : ''}`);
    } else {
      setAvatarAnimation('wrong');
      toast.error('Resposta incorreta!');
    }
    
    setShowExplanation(true);
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setAvatarAnimation('idle');
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAvatarAnimation('idle');
    } else {
      // End of phase
      if (currentPhase < 100) {
        setCurrentPhase(prev => prev + 1);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAvatarAnimation('idle');
        setQuestions([]); // Clear questions to trigger new generation
        toast.success(`Fase ${currentPhase} concluída! Avançando para a fase ${currentPhase + 1}`);
      } else {
        toast.success(`Parabéns! Você completou todas as 100 fases com ${score} pontos! Você é um verdadeiro mestre da fé católica!`);
      }
    }
  };

  if (loading || supabaseQuestions.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Carregando perguntas da fase {currentPhase}...</p>
          <p className="text-blue-300 text-sm mt-2">Conectando com o banco de dados...</p>
          <p className="text-green-300 text-xs mt-1">🎯 Selecionando perguntas aleatoriamente</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return null;

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="bg-slate-800/80 backdrop-blur-lg border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/ebf9a6d5-503e-4a4a-813b-cab50ba45b0e.png" 
                alt="Carlo Acutis" 
                className="w-12 h-12 rounded-full border-2 border-blue-300"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                  backgroundColor: 'transparent'
                }}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-white">Paróquia N.S. Aparecida</h1>
              <p className="text-sm text-blue-300">Grupo de Jovens Carlo Acutis</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
              style={{ backgroundColor: avatar.skinColor }}
            >
              {avatar.gender === 'boy' ? '👦' : '👧'}
            </div>
            <span className="text-white font-semibold text-sm">{avatar.name}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar for Overall Game */}
      <div className="bg-slate-800/60 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-blue-300">Progresso Geral</span>
            <span className="text-sm text-blue-300">{currentPhase}/100 fases</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(currentPhase / 100) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Questions Section */}
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8">
            {/* Header with Avatar, Question, and Score */}
            <div className="flex items-start justify-between mb-6">
              {/* Avatar Section */}
              <div className="flex flex-col items-center gap-2">
                <div className={`transition-all duration-300 ${
                  avatarAnimation === 'correct' 
                    ? 'animate-bounce scale-110' 
                    : avatarAnimation === 'wrong' 
                      ? 'animate-pulse scale-90' 
                      : ''
                }`}>
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-xl border-4 ${
                      avatarAnimation === 'correct' 
                        ? 'border-green-400 bg-green-100' 
                        : avatarAnimation === 'wrong' 
                          ? 'border-red-400 bg-red-100' 
                          : 'border-slate-600'
                    }`}
                    style={{ backgroundColor: avatarAnimation === 'idle' ? avatar.skinColor : undefined }}
                  >
                    {avatarAnimation === 'correct' ? '😊' : 
                     avatarAnimation === 'wrong' ? '😔' : 
                     avatar.gender === 'boy' ? '👦' : '👧'}
                  </div>
                </div>
                <span className="text-white font-semibold text-xs">{avatar.name}</span>
              </div>

              {/* Question Section - Center */}
              <div className="flex-1 mx-8">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    currentDifficulty === 'Fácil' 
                      ? 'bg-green-600 text-green-100' 
                      : currentDifficulty === 'Médio'
                        ? 'bg-yellow-600 text-yellow-100'
                        : 'bg-red-600 text-red-100'
                  }`}>
                    {currentDifficulty}
                  </span>
                  <span className="text-blue-300 text-sm">Fase {currentPhase}</span>
                  <span className="text-slate-400 text-sm">({currentQuestion + 1}/10)</span>
                  <span className="text-green-400 text-xs">📊 Supabase</span>
                </div>
                
                <h2 className="text-xl font-bold text-white text-center">
                  {currentQ.question}
                </h2>
              </div>

              {/* Score Section */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold text-yellow-400">{score}</div>
                <div className="text-xs text-yellow-200">pontos</div>
              </div>
            </div>

            <div className="grid gap-4 mb-6">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedAnswer === null
                      ? 'bg-slate-700 hover:bg-slate-600 text-white'
                      : selectedAnswer === index
                        ? index === currentQ.correct_answer
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 text-white'
                        : index === currentQ.correct_answer
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-700 text-gray-400'
                  }`}
                >
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className="bg-blue-900/50 border border-blue-700 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-200 mb-2">
                  Explicação:
                </h3>
                <p className="text-blue-100">{currentQ.explanation}</p>
                {currentQ.category && (
                  <div className="mt-3">
                    <span className="inline-block px-2 py-1 bg-blue-800 text-blue-200 rounded text-sm">
                      📚 {currentQ.category}
                    </span>
                  </div>
                )}
              </div>
            )}

            {showExplanation && (
              <div className="text-center">
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  {currentQuestion < questions.length - 1 
                    ? 'Próxima Pergunta' 
                    : currentPhase < 100 
                      ? 'Próxima Fase' 
                      : 'Finalizar Quiz'
                  }
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
