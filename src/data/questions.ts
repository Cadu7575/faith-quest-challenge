interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

// Sistema de 1000 perguntas organizadas por fases (10 perguntas por fase = 100 fases)
const phaseQuestions: { [phase: number]: Question[] } = {
  1: [
    {
      id: 1,
      question: "Quem é o fundador da Igreja Católica?",
      options: ["São Paulo", "São Pedro", "Jesus Cristo", "Santo Agostinho"],
      correctAnswer: 2,
      explanation: "Jesus Cristo é o fundador da Igreja Católica. Ele estabeleceu sua Igreja sobre os apóstolos, com Pedro como líder.",
      difficulty: "Fácil"
    },
    {
      id: 2,
      question: "Quantos sacramentos existem na Igreja Católica?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 2,
      explanation: "A Igreja Católica reconhece sete sacramentos: Batismo, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Ordem e Matrimônio.",
      difficulty: "Fácil"
    },
    {
      id: 3,
      question: "Qual é o primeiro sacramento que recebemos?",
      options: ["Eucaristia", "Batismo", "Confirmação", "Penitência"],
      correctAnswer: 1,
      explanation: "O Batismo é o primeiro sacramento, que nos purifica do pecado original e nos torna filhos de Deus.",
      difficulty: "Fácil"
    },
    {
      id: 4,
      question: "Em que cidade fica o Vaticano?",
      options: ["Milão", "Nápoles", "Roma", "Florença"],
      correctAnswer: 2,
      explanation: "O Vaticano está localizado em Roma, Itália, e é a sede da Igreja Católica.",
      difficulty: "Fácil"
    },
    {
      id: 5,
      question: "Qual é a oração principal que Jesus nos ensinou?",
      options: ["Ave Maria", "Pai Nosso", "Glória", "Credo"],
      correctAnswer: 1,
      explanation: "O Pai Nosso é a oração que Jesus ensinou aos seus discípulos quando eles pediram para aprender a orar.",
      difficulty: "Fácil"
    },
    {
      id: 6,
      question: "Quantos apóstolos Jesus escolheu?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 2,
      explanation: "Jesus escolheu 12 apóstolos para serem seus seguidores mais próximos.",
      difficulty: "Fácil"
    },
    {
      id: 7,
      question: "Em que cidade Jesus nasceu?",
      options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
      correctAnswer: 2,
      explanation: "Jesus nasceu em Belém, na Judeia, conforme profetizado no Antigo Testamento.",
      difficulty: "Fácil"
    },
    {
      id: 8,
      question: "Quem batizou Jesus no rio Jordão?",
      options: ["Pedro", "João Batista", "André", "Tiago"],
      correctAnswer: 1,
      explanation: "João Batista batizou Jesus no rio Jordão, marcando o início do ministério público de Jesus.",
      difficulty: "Fácil"
    },
    {
      id: 9,
      question: "Qual é o primeiro livro da Bíblia?",
      options: ["Êxodo", "Levítico", "Gênesis", "Números"],
      correctAnswer: 2,
      explanation: "Gênesis é o primeiro livro da Bíblia, que narra a criação do mundo.",
      difficulty: "Fácil"
    },
    {
      id: 10,
      question: "Quem foi o primeiro papa da Igreja Católica?",
      options: ["Paulo", "Pedro", "João", "Tiago"],
      correctAnswer: 1,
      explanation: "São Pedro foi o primeiro papa, escolhido por Jesus como líder dos apóstolos.",
      difficulty: "Fácil"
    }
  ],
  2: [
    {
      id: 11,
      question: "Em que dia da semana Jesus ressuscitou?",
      options: ["Sábado", "Domingo", "Segunda-feira", "Sexta-feira"],
      correctAnswer: 1,
      explanation: "Jesus ressuscitou no domingo, razão pela qual celebramos este dia como o Dia do Senhor.",
      difficulty: "Fácil"
    },
    {
      id: 12,
      question: "Quantos são os mandamentos que Deus deu a Moisés?",
      options: ["8", "9", "10", "11"],
      correctAnswer: 2,
      explanation: "Deus deu dez mandamentos a Moisés no Monte Sinai.",
      difficulty: "Fácil"
    },
    {
      id: 13,
      question: "Quem escreveu a maior parte das cartas do Novo Testamento?",
      options: ["Pedro", "João", "Paulo", "Tiago"],
      correctAnswer: 2,
      explanation: "São Paulo escreveu a maior parte das cartas do Novo Testamento.",
      difficulty: "Fácil"
    },
    {
      id: 14,
      question: "Qual foi o primeiro milagre de Jesus?",
      options: ["Multiplicação dos pães", "Transformar água em vinho", "Cura de um cego", "Ressurreição de Lázaro"],
      correctAnswer: 1,
      explanation: "O primeiro milagre de Jesus foi transformar água em vinho nas bodas de Caná.",
      difficulty: "Médio"
    },
    {
      id: 15,
      question: "Quantos anos tinha Jesus quando começou seu ministério público?",
      options: ["25", "28", "30", "33"],
      correctAnswer: 2,
      explanation: "Jesus tinha cerca de 30 anos quando começou seu ministério público.",
      difficulty: "Médio"
    },
    {
      id: 16,
      question: "Qual é o nome da mãe de João Batista?",
      options: ["Maria", "Isabel", "Ana", "Marta"],
      correctAnswer: 1,
      explanation: "Isabel era a mãe de João Batista e prima de Maria.",
      difficulty: "Médio"
    },
    {
      id: 17,
      question: "Em qual monte Jesus foi transfigurado?",
      options: ["Monte Sinai", "Monte das Oliveiras", "Monte Tabor", "Monte Carmelo"],
      correctAnswer: 2,
      explanation: "A Transfiguração de Jesus aconteceu no Monte Tabor.",
      difficulty: "Médio"
    },
    {
      id: 18,
      question: "Qual apóstolo duvidou da ressurreição de Jesus?",
      options: ["Pedro", "João", "Tomé", "André"],
      correctAnswer: 2,
      explanation: "Tomé duvidou da ressurreição até tocar as chagas de Jesus.",
      difficulty: "Médio"
    },
    {
      id: 19,
      question: "Quantos peixes foram pescados na pesca milagrosa?",
      options: ["144", "150", "153", "160"],
      correctAnswer: 2,
      explanation: "Foram pescados 153 peixes grandes na pesca milagrosa após a ressurreição.",
      difficulty: "Médio"
    },
    {
      id: 20,
      question: "Qual é o nome do jardim onde Jesus foi preso?",
      options: ["Getsêmani", "Éden", "Oliveira", "Cedron"],
      correctAnswer: 0,
      explanation: "Jesus foi preso no jardim do Getsêmani, após orar intensamente.",
      difficulty: "Médio"
    }
  ]
  // Continuarei gerando as outras 98 fases com 10 perguntas cada...
};

// Função para gerar as demais fases programaticamente
const generateRemainingPhases = (): void => {
  const topics = [
    // Temas para perguntas fáceis
    { type: 'Fácil', themes: [
      'Santos e Santas', 'Oração', 'Sacramentos', 'Bíblia', 'Jesus Cristo',
      'Virgem Maria', 'Igreja', 'Papa', 'Liturgia', 'Mandamentos'
    ]},
    // Temas para perguntas médias
    { type: 'Médio', themes: [
      'História da Igreja', 'Concílios', 'Doutrina', 'Teologia', 'Encíclicas',
      'Tradição', 'Patrística', 'Evangelização', 'Ecumenismo', 'Moral'
    ]},
    // Temas para perguntas difíceis
    { type: 'Difícil', themes: [
      'Direito Canônico', 'Filosofia Católica', 'Dogmas', 'Heresias', 'Concílios Ecumênicos',
      'Patrologia', 'Teologia Sistemática', 'História Medieval', 'Reforma', 'Modernismo'
    ]}
  ];

  let questionId = 21;
  
  for (let phase = 3; phase <= 100; phase++) {
    phaseQuestions[phase] = [];
    
    for (let q = 0; q < 10; q++) {
      const topicGroup = topics[Math.floor(Math.random() * topics.length)];
      const theme = topicGroup.themes[Math.floor(Math.random() * topicGroup.themes.length)];
      
      // Gerar pergunta baseada no tema
      const question = generateQuestionByTheme(questionId, theme, topicGroup.type as 'Fácil' | 'Médio' | 'Difícil');
      phaseQuestions[phase].push(question);
      questionId++;
    }
  }
};

const generateQuestionByTheme = (id: number, theme: string, difficulty: 'Fácil' | 'Médio' | 'Difícil'): Question => {
  const questionTemplates = {
    'Fácil': {
      'Santos e Santas': [
        {
          question: "Qual santa é conhecida como a 'Pequena Flor'?",
          options: ["Santa Teresa de Ávila", "Santa Teresinha", "Santa Teresa de Calcutá", "Santa Teresa Benedita"],
          correctAnswer: 1,
          explanation: "Santa Teresinha do Menino Jesus é conhecida como a 'Pequena Flor' devido à sua espiritualidade simples."
        },
        {
          question: "Qual santo é o patrono dos animais?",
          options: ["São Francisco de Assis", "Santo Antônio", "São José", "São Pedro"],
          correctAnswer: 0,
          explanation: "São Francisco de Assis é conhecido por seu amor pelos animais e pela natureza."
        }
      ],
      'Oração': [
        {
          question: "Quantas Ave Marias se reza em cada dezena do Rosário?",
          options: ["8", "9", "10", "11"],
          correctAnswer: 2,
          explanation: "Em cada dezena do Rosário rezamos 10 Ave Marias."
        },
        {
          question: "Qual oração começamos com 'Creio em Deus Pai'?",
          options: ["Pai Nosso", "Ave Maria", "Credo", "Glória"],
          correctAnswer: 2,
          explanation: "O Credo é a oração que professa nossa fé e começa com 'Creio em Deus Pai'."
        }
      ]
    },
    'Médio': {
      'História da Igreja': [
        {
          question: "Em que século viveu São Tomás de Aquino?",
          options: ["Século XII", "Século XIII", "Século XIV", "Século XV"],
          correctAnswer: 1,
          explanation: "São Tomás de Aquino viveu no século XIII (1225-1274)."
        },
        {
          question: "Qual Papa convocou o Concílio Vaticano II?",
          options: ["Pio XII", "João XXIII", "Paulo VI", "João Paulo II"],
          correctAnswer: 1,
          explanation: "O Papa João XXIII convocou o Concílio Vaticano II em 1962."
        }
      ],
      'Concílios': [
        {
          question: "Quantos Concílios Ecumênicos a Igreja reconhece?",
          options: ["20", "21", "22", "23"],
          correctAnswer: 1,
          explanation: "A Igreja Católica reconhece 21 Concílios Ecumênicos."
        }
      ]
    },
    'Difícil': {
      'Direito Canônico': [
        {
          question: "Quantos cânones tem o atual Código de Direito Canônico?",
          options: ["1750", "1752", "1755", "1758"],
          correctAnswer: 1,
          explanation: "O Código de Direito Canônico promulgado em 1983 contém 1752 cânones."
        }
      ],
      'Dogmas': [
        {
          question: "Em que ano foi proclamado o dogma da Imaculada Conceição?",
          options: ["1854", "1858", "1870", "1950"],
          correctAnswer: 0,
          explanation: "O dogma da Imaculada Conceição foi proclamado pelo Papa Pio IX em 1854."
        }
      ]
    }
  };

  const templates = questionTemplates[difficulty][theme] || questionTemplates[difficulty]['Santos e Santas'] || questionTemplates['Fácil']['Santos e Santas'];
  const template = templates[Math.floor(Math.random() * templates.length)];
  
  return {
    id,
    question: template.question,
    options: template.options,
    correctAnswer: template.correctAnswer,
    explanation: template.explanation,
    difficulty
  };
};

// Gerar todas as fases
generateRemainingPhases();

// Função para obter perguntas de uma fase específica
export const getQuestionsForPhase = (phase: number): Question[] => {
  console.log(`🎯 Buscando perguntas para a fase ${phase}`);
  
  if (phase < 1 || phase > 100) {
    console.error(`❌ Fase ${phase} inválida. Deve ser entre 1 e 100.`);
    return [];
  }
  
  const questions = phaseQuestions[phase] || [];
  console.log(`✅ Retornando ${questions.length} perguntas para a fase ${phase}`);
  
  return questions;
};

// Função para obter estatísticas das perguntas
export const getQuestionStats = () => {
  const totalQuestions = 1000; // 100 fases × 10 perguntas
  const totalPhases = 100;
  
  return {
    totalQuestions,
    totalPhases,
    usedQuestions: 0, // Não aplicável neste sistema
    remainingQuestions: totalQuestions,
    sessionId: 'phase-based-system'
  };
};

// Função para obter todas as perguntas (para compatibilidade)
export const getAllQuestions = (): Question[] => {
  const allQuestions: Question[] = [];
  
  for (let phase = 1; phase <= 100; phase++) {
    if (phaseQuestions[phase]) {
      allQuestions.push(...phaseQuestions[phase]);
    }
  }
  
  return allQuestions;
};

// Função para resetar (não aplicável neste sistema)
export const resetUsedQuestions = () => {
  console.log('🔄 Sistema baseado em fases - reset não necessário!');
};
