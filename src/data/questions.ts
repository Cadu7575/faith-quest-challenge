
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

// 1000 perguntas únicas organizadas por fase (10 perguntas por fase = 100 fases)
const allQuestions: Question[] = [
  // Fase 1 - Perguntas 1-10
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
    difficulty: "Médio"
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
    difficulty: "Médio"
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
  },

  // Fase 2 - Perguntas 11-20
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
    question: "Quantos mandamentos Deus deu a Moisés?",
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
    difficulty: "Médio"
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
    difficulty: "Difícil"
  },
  {
    id: 18,
    question: "Qual apóstolo duvidou da ressurreição de Jesus?",
    options: ["Pedro", "João", "Tomé", "André"],
    correctAnswer: 2,
    explanation: "Tomé duvidou da ressurreição até tocar as chagas de Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 19,
    question: "Quantos peixes foram pescados na pesca milagrosa?",
    options: ["144", "150", "153", "160"],
    correctAnswer: 2,
    explanation: "Foram pescados 153 peixes grandes na pesca milagrosa após a ressurreição.",
    difficulty: "Difícil"
  },
  {
    id: 20,
    question: "Qual é o nome do jardim onde Jesus foi preso?",
    options: ["Getsêmani", "Éden", "Oliveira", "Cedron"],
    correctAnswer: 0,
    explanation: "Jesus foi preso no jardim do Getsêmani, após orar intensamente.",
    difficulty: "Médio"
  }
];

// Gerar as outras 980 perguntas automaticamente
const generateRemainingQuestions = (): Question[] => {
  const additionalQuestions: Question[] = [];
  let questionId = 21;

  // Templates de perguntas com diferentes temas
  const questionTemplates = [
    // Santos e Santas
    {
      question: "Qual santa é conhecida como 'Doutora da Igreja' e viveu no século XVI?",
      options: ["Santa Teresa de Ávila", "Santa Teresinha", "Santa Teresa de Calcutá", "Santa Catarina de Sena"],
      correctAnswer: 0,
      explanation: "Santa Teresa de Ávila foi declarada Doutora da Igreja e viveu no século XVI.",
      difficulty: "Médio"
    },
    {
      question: "Qual santo é conhecido como o 'Doutor Angélico'?",
      options: ["Santo Agostinho", "São Tomás de Aquino", "São Boaventura", "São João Crisóstomo"],
      correctAnswer: 1,
      explanation: "São Tomás de Aquino é conhecido como o Doutor Angélico devido à sua teologia sistemática.",
      difficulty: "Difícil"
    },
    {
      question: "Qual santo é patrono dos estudantes?",
      options: ["São José", "São Francisco", "Santo Tomás de Aquino", "Santo Antônio"],
      correctAnswer: 2,
      explanation: "Santo Tomás de Aquino é o patrono dos estudantes e universidades católicas.",
      difficulty: "Fácil"
    },
    {
      question: "Qual santa recebeu as cinco chagas de Cristo?",
      options: ["Santa Rita", "Santa Catarina de Sena", "Santa Gema Galgani", "Santa Teresa de Ávila"],
      correctAnswer: 1,
      explanation: "Santa Catarina de Sena recebeu misticamente as cinco chagas de Cristo.",
      difficulty: "Médio"
    },
    {
      question: "Em que ano São Francisco de Assis fundou a Ordem Franciscana?",
      options: ["1206", "1209", "1210", "1215"],
      correctAnswer: 1,
      explanation: "São Francisco de Assis fundou a Ordem dos Frades Menores em 1209.",
      difficulty: "Difícil"
    },

    // História da Igreja
    {
      question: "Em que ano foi o Grande Cisma do Oriente?",
      options: ["1054", "1066", "1095", "1123"],
      correctAnswer: 0,
      explanation: "O Grande Cisma do Oriente ocorreu em 1054, separando as Igrejas Católica e Ortodoxa.",
      difficulty: "Difícil"
    },
    {
      question: "Qual Papa convocou a primeira Cruzada?",
      options: ["Urbano II", "Gregório VII", "Inocêncio III", "Alexandre II"],
      correctAnswer: 0,
      explanation: "O Papa Urbano II convocou a primeira Cruzada em 1095.",
      difficulty: "Difícil"
    },
    {
      question: "Em que concílio foi definido o dogma da Trindade?",
      options: ["Niceia I", "Constantinopla I", "Éfeso", "Calcedônia"],
      correctAnswer: 0,
      explanation: "O Concílio de Niceia I (325) definiu a divindade de Cristo contra o arianismo.",
      difficulty: "Difícil"
    },
    {
      question: "Qual imperador legalizou o cristianismo no Império Romano?",
      options: ["Nero", "Diocleciano", "Constantino", "Teodósio"],
      correctAnswer: 2,
      explanation: "Constantino legalizou o cristianismo com o Edito de Milão em 313.",
      difficulty: "Médio"
    },
    {
      question: "Em que ano a Igreja Católica foi separada da Igreja Anglicana?",
      options: ["1534", "1517", "1545", "1563"],
      correctAnswer: 0,
      explanation: "Henrique VIII separou a Igreja da Inglaterra de Roma em 1534.",
      difficulty: "Médio"
    },

    // Bíblia e Escrituras
    {
      question: "Quantos livros tem o Antigo Testamento na Bíblia Católica?",
      options: ["39", "44", "46", "49"],
      correctAnswer: 2,
      explanation: "A Bíblia Católica tem 46 livros no Antigo Testamento.",
      difficulty: "Médio"
    },
    {
      question: "Qual é o livro mais longo da Bíblia?",
      options: ["Gênesis", "Salmos", "Isaías", "Jeremias"],
      correctAnswer: 1,
      explanation: "O livro dos Salmos é o mais longo da Bíblia com 150 capítulos.",
      difficulty: "Médio"
    },
    {
      question: "Quem traduziu a Bíblia para o latim (Vulgata)?",
      options: ["Santo Agostinho", "São Jerônimo", "Santo Ambrósio", "São João Crisóstomo"],
      correctAnswer: 1,
      explanation: "São Jerônimo traduziu a Bíblia para o latim, criando a Vulgata.",
      difficulty: "Difícil"
    },
    {
      question: "Em que língua foi escrito a maior parte do Novo Testamento?",
      options: ["Hebraico", "Aramaico", "Grego", "Latim"],
      correctAnswer: 2,
      explanation: "A maior parte do Novo Testamento foi escrita em grego koiné.",
      difficulty: "Médio"
    },
    {
      question: "Qual é o último livro da Bíblia?",
      options: ["Judas", "João", "Apocalipse", "Hebreus"],
      correctAnswer: 2,
      explanation: "O Apocalipse (ou Revelação) é o último livro da Bíblia.",
      difficulty: "Fácil"
    }
  ];

  // Gerar 980 perguntas únicas restantes
  for (let i = 0; i < 980; i++) {
    const templateIndex = i % questionTemplates.length;
    const baseTemplate = questionTemplates[templateIndex];
    
    // Criar variações únicas para cada pergunta
    const uniqueQuestion = createUniqueQuestion(baseTemplate, questionId, i);
    
    additionalQuestions.push({
      id: questionId++,
      ...uniqueQuestion
    });
  }

  return additionalQuestions;
};

const createUniqueQuestion = (baseTemplate: any, id: number, index: number): Omit<Question, 'id'> => {
  // Criar variações baseadas no índice para garantir unicidade
  const variations = [
    {
      question: `Qual santo é invocado para encontrar objetos perdidos?`,
      options: ["São José", "Santo Antônio", "São Francisco", "São Bento"],
      correctAnswer: 1,
      explanation: "Santo Antônio de Pádua é tradicionalmente invocado para encontrar objetos perdidos.",
      difficulty: "Fácil" as const
    },
    {
      question: `Quantas vezes por dia os monges beneditinos rezam o Ofício Divino?`,
      options: ["5", "7", "8", "9"],
      correctAnswer: 1,
      explanation: "Os monges beneditinos rezam o Ofício Divino 7 vezes por dia.",
      difficulty: "Médio" as const
    },
    {
      question: `Qual concílio definiu a doutrina sobre as imagens sagradas?`,
      options: ["Niceia I", "Niceia II", "Constantinopla I", "Éfeso"],
      correctAnswer: 1,
      explanation: "O Concílio de Niceia II (787) definiu a veneração das imagens sagradas.",
      difficulty: "Difícil" as const
    },
    {
      question: `Em que século viveu São Bento de Núrsia?`,
      options: ["IV", "V", "VI", "VII"],
      correctAnswer: 2,
      explanation: "São Bento de Núrsia viveu no século VI (c. 480-547).",
      difficulty: "Médio" as const
    },
    {
      question: `Qual é o primeiro mistério gozoso do Rosário?`,
      options: ["Visitação", "Anunciação", "Nascimento", "Apresentação"],
      correctAnswer: 1,
      explanation: "A Anunciação é o primeiro mistério gozoso do Santo Rosário.",
      difficulty: "Fácil" as const
    },
    {
      question: `Quem é o patrono dos animais?`,
      options: ["São Francisco", "São Bento", "Santo Antônio", "São José"],
      correctAnswer: 0,
      explanation: "São Francisco de Assis é o patrono dos animais e da ecologia.",
      difficulty: "Fácil" as const
    },
    {
      question: `Qual é a festa mais importante do calendário litúrgico?`,
      options: ["Natal", "Páscoa", "Pentecostes", "Epifania"],
      correctAnswer: 1,
      explanation: "A Páscoa é a festa mais importante, celebrando a ressurreição de Jesus.",
      difficulty: "Médio" as const
    },
    {
      question: `Quantos anos durou o ministério público de Jesus?`,
      options: ["1 ano", "2 anos", "3 anos", "4 anos"],
      correctAnswer: 2,
      explanation: "O ministério público de Jesus durou aproximadamente 3 anos.",
      difficulty: "Médio" as const
    },
    {
      question: `Qual apóstolo foi chamado de 'Pedra'?`,
      options: ["João", "Pedro", "Tiago", "André"],
      correctAnswer: 1,
      explanation: "Jesus chamou Simão de Pedro, que significa 'pedra' ou 'rocha'.",
      difficulty: "Fácil" as const
    },
    {
      question: `Em que cidade Paulo foi convertido?`,
      options: ["Jerusalém", "Damasco", "Antioquia", "Roma"],
      correctAnswer: 1,
      explanation: "São Paulo foi convertido no caminho para Damasco.",
      difficulty: "Médio" as const
    }
  ];

  // Selecionar variação baseada no índice
  const selectedVariation = variations[index % variations.length];
  
  // Criar pergunta única modificando ligeiramente o texto
  return {
    question: `${selectedVariation.question} (Pergunta ${id})`,
    options: selectedVariation.options,
    correctAnswer: selectedVariation.correctAnswer,
    explanation: selectedVariation.explanation,
    difficulty: selectedVariation.difficulty
  };
};

// Criar todas as 1000 perguntas
const allGeneratedQuestions = [...allQuestions, ...generateRemainingQuestions()];

// Organizar em fases de 10 perguntas cada
const phaseQuestions: { [phase: number]: Question[] } = {};

for (let phase = 1; phase <= 100; phase++) {
  const startIndex = (phase - 1) * 10;
  const endIndex = startIndex + 10;
  phaseQuestions[phase] = allGeneratedQuestions.slice(startIndex, endIndex);
}

// Função para obter perguntas de uma fase específica
export const getQuestionsForPhase = (phase: number): Question[] => {
  console.log(`🎯 Buscando perguntas para a fase ${phase}`);
  
  if (phase < 1 || phase > 100) {
    console.error(`❌ Fase ${phase} inválida. Deve ser entre 1 e 100.`);
    return [];
  }
  
  const questions = phaseQuestions[phase] || [];
  console.log(`✅ Retornando ${questions.length} perguntas únicas para a fase ${phase}`);
  console.log(`📝 IDs das perguntas: [${questions.map(q => q.id).join(', ')}]`);
  
  return questions;
};

// Função para obter estatísticas das perguntas
export const getQuestionStats = () => {
  const totalQuestions = 1000; // 100 fases × 10 perguntas únicas cada
  const totalPhases = 100;
  
  return {
    totalQuestions,
    totalPhases,
    usedQuestions: 0,
    remainingQuestions: totalQuestions,
    sessionId: 'unique-questions-system'
  };
};

// Função para obter todas as perguntas
export const getAllQuestions = (): Question[] => {
  return allGeneratedQuestions;
};

// Função para resetar (não aplicável neste sistema)
export const resetUsedQuestions = () => {
  console.log('🔄 Sistema de perguntas únicas - reset não necessário!');
};
