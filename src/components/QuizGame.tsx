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

interface QuizGameProps {
  avatar: Avatar;
}

const QuizGame = ({ avatar }: QuizGameProps) => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const [avatarAnimation, setAvatarAnimation] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Function to determine difficulty based on phase
  const getDifficulty = (phase: number) => {
    if (phase <= 20) return 'Fácil';
    if (phase <= 40) return 'Fácil';
    if (phase <= 60) return 'Médio';
    if (phase <= 80) return 'Difícil';
    return 'Muito Difícil';
  };

  // Function to get more specific topics as phases progress
  const getTopicsForPhase = (phase: number) => {
    const basicTopics = [
      'santos católicos básicos e suas vidas',
      'história básica da Igreja Católica',
      'milagres eucarísticos famosos',
      'doutrina católica fundamental'
    ];

    const intermediateTopics = [
      'papas históricos e pontificado',
      'sacramentos católicos em detalhe',
      'orações tradicionais e liturgia',
      'festividades litúrgicas do ano',
      'mártires católicos através da história',
      'aparições marianas reconhecidas'
    ];

    const advancedTopics = [
      'concílios ecumênicos e decisões dogmáticas',
      'teologia católica avançada',
      'santos doutores da Igreja',
      'história das ordens religiosas',
      'encíclicas papais importantes',
      'patrística e Padres da Igreja',
      'mariologia e dogmas marianos',
      'escatologia católica',
      'liturgia e ritos orientais',
      'canonização e beatificação'
    ];

    const expertTopics = [
      'teologia moral complexa',
      'filosofia escolástica',
      'direito canônico',
      'exegese bíblica católica',
      'santos místicos e experiências espirituais',
      'heresias históricas e refutações',
      'relações Igreja-Estado na história',
      'desenvolvimento da doutrina social',
      'arquitetura e arte sacra',
      'música litúrgica tradicional'
    ];

    if (phase <= 20) return basicTopics;
    if (phase <= 40) return intermediateTopics;
    if (phase <= 80) return advancedTopics;
    return expertTopics;
  };

  const generateQuestions = async (phase: number) => {
    setLoading(true);
    try {
      const topics = getTopicsForPhase(phase);
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      const difficulty = getDifficulty(phase);
      
      const prompt = `Gere exatamente 10 perguntas de múltipla escolha sobre ${randomTopic} para a fase ${phase} de um jogo católico. 
      Dificuldade: ${difficulty}.
      ${phase > 50 ? 'Inclua detalhes históricos específicos, datas importantes e conhecimento aprofundado.' : ''}
      ${phase > 80 ? 'Faça perguntas que requerem conhecimento especializado e análise teológica profunda.' : ''}
      
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
          console.log(`${newQuestions.length} perguntas carregadas para a fase ${phase}`);
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
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Carregando perguntas da fase {currentPhase}...</p>
          <p className="text-blue-200 text-sm mt-2">Dificuldade: {getDifficulty(currentPhase)}</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return null;

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/a6371fe2-8d4e-4de4-835f-970a32b7024a.png" 
              alt="Logo" 
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-xl font-bold text-white">Quiz Católico</h1>
          </div>
          
          <div className="flex items-center gap-4 text-white">
            <span className="text-lg font-semibold">Fase {currentPhase}</span>
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              {currentQuestion + 1}/{questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Avatar and Score Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className={`transition-all duration-300 ${
                  avatarAnimation === 'correct' 
                    ? 'animate-bounce scale-110' 
                    : avatarAnimation === 'wrong' 
                      ? 'animate-pulse scale-90' 
                      : ''
                }`}>
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl border-4 ${
                      avatarAnimation === 'correct' 
                        ? 'border-green-400 bg-green-100' 
                        : avatarAnimation === 'wrong' 
                          ? 'border-red-400 bg-red-100' 
                          : 'border-gray-300 bg-white'
                    }`}
                    style={{ backgroundColor: avatarAnimation === 'idle' ? avatar.skinColor : undefined }}
                  >
                    {avatarAnimation === 'correct' ? '😊' : 
                     avatarAnimation === 'wrong' ? '😔' : 
                     avatar.gender === 'boy' ? '👦' : '👧'}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-800">{avatar.name}</div>
                  <div className="text-sm text-gray-600">Fase {currentPhase}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-gray-600">Pontos</div>
              </div>
            </div>

            {/* Question */}
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="grid gap-4 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-xl text-left transition-all border-2 ${
                    selectedAnswer === null
                      ? 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800 hover:border-blue-300'
                      : selectedAnswer === index
                        ? index === currentQ.correctAnswer
                          ? 'bg-green-50 border-green-400 text-green-800'
                          : 'bg-red-50 border-red-400 text-red-800'
                        : index === currentQ.correctAnswer
                          ? 'bg-green-50 border-green-400 text-green-800'
                          : 'bg-gray-50 border-gray-200 text-gray-500'
                  }`}
                >
                  <span className="font-semibold mr-3 text-gray-600">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Explicação:
                </h3>
                <p className="text-blue-700">{currentQ.explanation}</p>
              </div>
            )}

            {/* Next Button */}
            {showExplanation && (
              <div className="text-center">
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md"
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
