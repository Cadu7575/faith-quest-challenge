import { useState, useEffect } from 'react';
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
  const [currentDifficulty, setCurrentDifficulty] = useState<'Fácil' | 'Difícil'>('Fácil');

  // Update progress in parent component whenever state changes
  useEffect(() => {
    if (onProgressUpdate) {
      onProgressUpdate({
        avatar,
        currentPhase,
        score,
        currentQuestion
      });
    }
  }, [currentPhase, score, currentQuestion, avatar, onProgressUpdate]);

  // Function to randomly alternate between easy and difficult
  const getRandomDifficulty = () => {
    return Math.random() < 0.5 ? 'Fácil' : 'Difícil';
  };

  // Function to get topics based on difficulty (simplified)
  const getTopicsForDifficulty = (difficulty: 'Fácil' | 'Difícil') => {
    const easyTopics = [
      'santos católicos básicos e suas vidas',
      'história básica da Igreja Católica',
      'milagres eucarísticos famosos',
      'doutrina católica fundamental',
      'orações tradicionais básicas',
      'festividades litúrgicas principais'
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

    return difficulty === 'Fácil' ? easyTopics : difficultTopics;
  };

  const generateQuestions = async (phase: number) => {
    setLoading(true);
    
    // Randomly choose difficulty for this set of questions
    const difficulty = getRandomDifficulty();
    setCurrentDifficulty(difficulty);
    
    try {
      const topics = getTopicsForDifficulty(difficulty);
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      
      const prompt = `Gere exatamente 10 perguntas de múltipla escolha sobre ${randomTopic} para a fase ${phase} de um jogo católico. 
      Dificuldade: ${difficulty}.
      ${difficulty === 'Difícil' ? 'Inclua detalhes históricos específicos, datas importantes e conhecimento aprofundado que requer estudo especializado.' : 'Faça perguntas acessíveis para católicos em geral, com conhecimento básico da fé.'}
      
      Formato JSON:
      {
        "questions": [
          {
            "question": "pergunta aqui",
            "options": ["opção 1", "opção 2", "opção 3", "opção 4"],
            "correctAnswer": 0,
            "explanation": "explicação detalhada da resposta correta"
          }
        ]
      }
      
      Certifique-se de que as perguntas sejam educativas e apropriadas para católicos de todas as idades.`;

      console.log(`Gerando perguntas para fase ${phase} - Dificuldade: ${difficulty}`);

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCBOdpOuYHal7QRi2se-_u9bwjidAVUBsY`, {
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

      console.log('Resposta recebida:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro da API:', errorData);
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Erro desconhecido'}`);
      }

      const data = await response.json();
      console.log('Dados recebidos:', data);

      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Formato de resposta inválido da API');
      }

      const generatedText = data.candidates[0].content.parts[0].text;
      console.log('Texto gerado:', generatedText);
      
      // Extract JSON from the response
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsedData = JSON.parse(jsonMatch[0]);
        
        if (!parsedData.questions || !Array.isArray(parsedData.questions)) {
          throw new Error('Formato de perguntas inválido');
        }
        
        // Filter out used questions
        const newQuestions = parsedData.questions.filter((q: Question) => 
          !usedQuestions.has(q.question)
        );
        
        if (newQuestions.length > 0) {
          setQuestions(newQuestions);
          // Add questions to used questions set
          newQuestions.forEach((q: Question) => {
            setUsedQuestions(prev => new Set([...prev, q.question]));
          });
          console.log(`${newQuestions.length} perguntas carregadas para a fase ${phase} - Dificuldade: ${difficulty}`);
        } else {
          // If all questions were used, clear some of the set and try again
          console.log('Muitas perguntas já foram usadas, limpando parte do histórico...');
          const usedArray = Array.from(usedQuestions);
          const keepRecent = usedArray.slice(-500); // Keep only last 500 questions
          setUsedQuestions(new Set(keepRecent));
          await generateQuestions(phase);
          return;
        }
      } else {
        throw new Error('Não foi possível extrair JSON da resposta');
      }
    } catch (error) {
      console.error('Error generating questions:', error);
      toast.error('Erro ao carregar perguntas. Tentando novamente...');
      
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
          question: "Qual é a oração mais importante do cristianismo?",
          options: ["Ave Maria", "Pai Nosso", "Credo", "Glória"],
          correctAnswer: 1,
          explanation: "O Pai Nosso é a oração que Jesus Cristo ensinou aos seus discípulos, sendo considerada a oração fundamental do cristianismo."
        }
      ];
      
      setQuestions(fallbackQuestions);
      setCurrentDifficulty('Fácil');
      console.log('Usando perguntas de fallback');
    }
    setLoading(false);
  };

  useEffect(() => {
    generateQuestions(currentPhase);
  }, [currentPhase]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const currentQ = questions[currentQuestion];
    
    if (answerIndex === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
      setAvatarAnimation('correct');
      toast.success('Resposta correta! +1 ponto');
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
          <p className="text-blue-300 text-sm mt-2">Dificuldade: {currentDifficulty}</p>
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
                      : 'bg-red-600 text-red-100'
                  }`}>
                    {currentDifficulty}
                  </span>
                  <span className="text-blue-300 text-sm">Fase {currentPhase}</span>
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
