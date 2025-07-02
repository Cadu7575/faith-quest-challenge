import { useState, useEffect, useCallback, useMemo } from 'react';
import { toast } from 'sonner';

interface Avatar {
  gender: 'boy' | 'girl';
  skinColor: string;
  name: string;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface GameProgress {
  avatar: Avatar;
  currentPhase: number;
  score: number;
  currentQuestion: number;
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
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const [avatarAnimation, setAvatarAnimation] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [currentDifficulty, setCurrentDifficulty] = useState<'Fácil' | 'Médio' | 'Difícil'>('Fácil');
  const [difficultyPattern, setDifficultyPattern] = useState<('Fácil' | 'Médio' | 'Difícil')[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Nova API key fornecida pelo usuário
  const apiKey = 'AIzaSyCHGe5lPFUUF0LpHSm9kOvKcdQu0lHjFDY';

  // Memoize the progress object to prevent unnecessary re-renders
  const gameProgress = useMemo(() => ({
    avatar,
    currentPhase,
    score,
    currentQuestion
  }), [avatar, currentPhase, score, currentQuestion]);

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

  // Function to get topics based on difficulty
  const getTopicsForDifficulty = useCallback((difficulty: 'Fácil' | 'Médio' | 'Difícil') => {
    const easyTopics = [
      'santos católicos básicos e suas vidas',
      'história básica da Igreja Católica',
      'milagres eucarísticos famosos',
      'doutrina católica fundamental',
      'orações tradicionais básicas',
      'festividades litúrgicas principais'
    ];

    const mediumTopics = [
      'sacramentos e sua teologia',
      'vida dos papas importantes',
      'história dos concílios',
      'santos padroeiros e sua devoção',
      'tradições litúrgicas específicas',
      'escrituras sagradas e interpretação básica',
      'virtudes teologais e cardeais',
      'ordens religiosas importantes'
    ];

    const difficultTopics = [
      'concílios ecumênicos e decisões dogmáticas',
      'teologia católica avançada',
      'santos doutores da Igreja',
      'encíclicas papais importantes',
      'patrística e Padres da Igreja',
      'mariologia e dogmas marianos',
      'teologia moral complexa',
      'filosofia escolástica',
      'direito canônico',
      'exegese bíblica católica'
    ];

    if (difficulty === 'Fácil') return easyTopics;
    if (difficulty === 'Médio') return mediumTopics;
    return difficultTopics;
  }, []);

  const generateQuestions = useCallback(async (phase: number) => {
    console.log(`=== INICIANDO GERAÇÃO DE PERGUNTAS ===`);
    console.log(`Fase: ${phase}`);
    console.log(`isGenerating: ${isGenerating}`);
    console.log(`API Key: ${apiKey.substring(0, 10)}...`);
    
    if (isGenerating) {
      console.log('❌ Já está gerando perguntas, cancelando...');
      return;
    }
    
    setIsGenerating(true);
    setLoading(true);
    
    try {
      // Generate difficulty pattern for this phase
      const pattern = generateDifficultyPattern();
      setDifficultyPattern(pattern);
      console.log('✅ Padrão de dificuldade gerado:', pattern);
      
      const allQuestions: Question[] = [];
      
      // Generate questions for each difficulty in the pattern
      for (let i = 0; i < pattern.length; i++) {
        const difficulty = pattern[i];
        const topics = getTopicsForDifficulty(difficulty);
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        
        console.log(`\n--- Pergunta ${i + 1}/10 ---`);
        console.log(`Dificuldade: ${difficulty}`);
        console.log(`Tópico: ${randomTopic}`);
        
        const prompt = `Gere exatamente 1 pergunta de múltipla escolha sobre ${randomTopic} para a fase ${phase} de um jogo católico. 
        Dificuldade: ${difficulty}.
        ${difficulty === 'Fácil' ? 'Faça perguntas acessíveis para católicos em geral, com conhecimento básico da fé.' : 
          difficulty === 'Médio' ? 'Inclua conhecimento intermediário que católicos praticantes conhecem.' :
          'Inclua detalhes históricos específicos, datas importantes e conhecimento aprofundado que requer estudo especializado.'
        }
        
        Formato JSON:
        {
          "question": "pergunta aqui",
          "options": ["opção 1", "opção 2", "opção 3", "opção 4"],
          "correctAnswer": 0,
          "explanation": "explicação detalhada da resposta correta"
        }
        
        Certifique-se de que a pergunta seja educativa e apropriada para católicos de todas as idades.`;

        try {
          console.log('🔄 Fazendo requisição para API...');
          
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: prompt
                }]
              }]
            })
          });

          console.log(`📊 Status da resposta: ${response.status}`);
          console.log(`📊 Status text: ${response.statusText}`);

          if (!response.ok) {
            const errorText = await response.text();
            console.error(`❌ Erro da API:`, {
              status: response.status,
              statusText: response.statusText,
              body: errorText
            });
            
            // Log detalhado do erro para debug
            if (response.status === 429) {
              console.error('🚫 ERRO 429: Quota excedida ou muitas requisições');
            } else if (response.status === 403) {
              console.error('🚫 ERRO 403: API key inválida ou sem permissão');
            } else if (response.status === 400) {
              console.error('🚫 ERRO 400: Requisição malformada');
            }
            
            throw new Error(`API Error: ${response.status} - ${errorText}`);
          }

          const data = await response.json();
          console.log('✅ Resposta da API recebida:', data);
          
          const generatedText = data.candidates[0].content.parts[0].text;
          console.log('📝 Texto gerado:', generatedText);
          
          // Extract JSON from the response
          const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const parsedQuestion = JSON.parse(jsonMatch[0]);
            console.log('✅ Pergunta parseada:', parsedQuestion);
            
            if (!usedQuestions.has(parsedQuestion.question)) {
              allQuestions.push(parsedQuestion);
              setUsedQuestions(prev => new Set([...prev, parsedQuestion.question]));
              console.log(`✅ Pergunta ${i + 1} adicionada com sucesso`);
            } else {
              console.log('⚠️ Pergunta já foi usada, mas continuando...');
              allQuestions.push(parsedQuestion); // Adiciona mesmo assim para não travar
            }
          } else {
            console.error('❌ Não foi possível extrair JSON da resposta:', generatedText);
            throw new Error('Resposta da API não contém JSON válido');
          }
          
        } catch (error) {
          console.error(`❌ Erro ao gerar pergunta ${i + 1}:`, error);
          throw error; // Re-throw para ser capturado pelo catch principal
        }

        // Add delay between questions to avoid rate limiting
        if (i < pattern.length - 1) {
          console.log('⏳ Aguardando 1 segundo antes da próxima pergunta...');
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
      
      if (allQuestions.length > 0) {
        setQuestions(allQuestions);
        console.log(`✅ ${allQuestions.length} perguntas carregadas com sucesso para a fase ${phase}`);
        toast.success(`${allQuestions.length} perguntas carregadas para a fase ${phase}!`);
      } else {
        throw new Error('Nenhuma pergunta foi gerada');
      }
      
    } catch (error) {
      console.error('❌ ERRO GERAL na geração de perguntas:', error);
      toast.error('Erro ao carregar perguntas. Usando perguntas de fallback...');
      
      // Fallback: use predefined questions if API fails
      const fallbackQuestions: Question[] = [
        {
          question: "Qual é o padroeiro do Brasil?",
          options: ["São Pedro", "Nossa Senhora Aparecida", "São Francisco", "Santo Antônio"],
          correctAnswer: 1,
          explanation: "Nossa Senhora Aparecida é a padroeira do Brasil, proclamada pelo Papa Pio XI em 1930."
        },
        {
          question: "Quantos sacramentos existem na Igreja Católica?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 2,
          explanation: "São sete os sacramentos: Batismo, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Ordem e Matrimônio."
        },
        {
          question: "Em que ano foi realizado o Concílio Vaticano II?",
          options: ["1960-1963", "1962-1965", "1965-1968", "1958-1961"],
          correctAnswer: 1,
          explanation: "O Concílio Vaticano II foi realizado entre 1962 e 1965, sendo um dos mais importantes concílios da Igreja Católica."
        }
      ];
      
      setQuestions(fallbackQuestions);
      setDifficultyPattern(['Fácil', 'Fácil', 'Médio']);
      console.log('⚠️ Usando perguntas de fallback');
    } finally {
      setLoading(false);
      setIsGenerating(false);
      console.log('=== GERAÇÃO DE PERGUNTAS FINALIZADA ===\n');
    }
  }, [isGenerating, generateDifficultyPattern, getTopicsForDifficulty, usedQuestions, apiKey]);

  // Generate questions only when needed
  useEffect(() => {
    console.log(`useEffect monitoramento - Fase: ${currentPhase}, Questions: ${questions.length}, isGenerating: ${isGenerating}`);
    
    if (!isGenerating && questions.length === 0) {
      console.log('🚀 Disparando geração de perguntas...');
      generateQuestions(currentPhase);
    }
  }, [currentPhase, generateQuestions, isGenerating, questions.length]);

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
    
    if (answerIndex === currentQ.correctAnswer) {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Carregando perguntas da fase {currentPhase}...</p>
          <p className="text-blue-300 text-sm mt-2">Preparando mix de dificuldades...</p>
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
                        ? index === currentQ.correctAnswer
                          ? 'bg-green-600 text-white'
                          : 'bg-red-600 text-white'
                        : index === currentQ.correctAnswer
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
