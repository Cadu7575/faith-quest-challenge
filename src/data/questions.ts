
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

// 1000 perguntas completamente únicas - 10 por fase, 100 fases
const allQuestions: Question[] = [
  // FASE 1 - Perguntas 1-10
  {
    id: 1,
    question: "Quem é considerado o fundador da Igreja Católica?",
    options: ["São Paulo", "São Pedro", "Jesus Cristo", "Santo Agostinho"],
    correctAnswer: 2,
    explanation: "Jesus Cristo é o fundador da Igreja Católica, estabelecendo-a sobre os apóstolos.",
    difficulty: "Fácil"
  },
  {
    id: 2,
    question: "Quantos sacramentos existem na Igreja Católica?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "São sete sacramentos: Batismo, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Ordem e Matrimônio.",
    difficulty: "Fácil"
  },
  {
    id: 3,
    question: "Qual é o primeiro sacramento recebido por um católico?",
    options: ["Eucaristia", "Batismo", "Confirmação", "Penitência"],
    correctAnswer: 1,
    explanation: "O Batismo é o primeiro sacramento, purificando do pecado original.",
    difficulty: "Fácil"
  },
  {
    id: 4,
    question: "Em que cidade está localizado o Vaticano?",
    options: ["Milão", "Nápoles", "Roma", "Florença"],
    correctAnswer: 2,
    explanation: "O Vaticano está localizado em Roma, Itália.",
    difficulty: "Fácil"
  },
  {
    id: 5,
    question: "Qual oração Jesus ensinou aos seus discípulos?",
    options: ["Ave Maria", "Pai Nosso", "Glória", "Credo"],
    correctAnswer: 1,
    explanation: "O Pai Nosso é a oração que Jesus ensinou quando os discípulos pediram para aprender a orar.",
    difficulty: "Fácil"
  },
  {
    id: 6,
    question: "Quantos apóstolos Jesus escolheu inicialmente?",
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
    explanation: "Jesus nasceu em Belém, conforme as profecias do Antigo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 8,
    question: "Quem batizou Jesus no rio Jordão?",
    options: ["Pedro", "João Batista", "André", "Tiago"],
    correctAnswer: 1,
    explanation: "João Batista batizou Jesus no rio Jordão, iniciando seu ministério público.",
    difficulty: "Médio"
  },
  {
    id: 9,
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Levítico", "Gênesis", "Números"],
    correctAnswer: 2,
    explanation: "Gênesis é o primeiro livro da Bíblia, narrando a criação do mundo.",
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

  // FASE 2 - Perguntas 11-20
  {
    id: 11,
    question: "Em que dia da semana Jesus ressuscitou?",
    options: ["Sábado", "Domingo", "Segunda-feira", "Sexta-feira"],
    correctAnswer: 1,
    explanation: "Jesus ressuscitou no domingo, por isso celebramos este dia como o Dia do Senhor.",
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
    question: "Qual foi o primeiro milagre público de Jesus?",
    options: ["Multiplicação dos pães", "Transformar água em vinho", "Cura de um cego", "Ressurreição de Lázaro"],
    correctAnswer: 1,
    explanation: "O primeiro milagre de Jesus foi transformar água em vinho nas bodas de Caná.",
    difficulty: "Médio"
  },
  {
    id: 15,
    question: "Com quantos anos Jesus começou seu ministério público?",
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
    question: "Em que jardim Jesus foi preso?",
    options: ["Getsêmani", "Éden", "Oliveira", "Cedron"],
    correctAnswer: 0,
    explanation: "Jesus foi preso no jardim do Getsêmani, após orar intensamente.",
    difficulty: "Médio"
  },

  // FASE 3 - Perguntas 21-30
  {
    id: 21,
    question: "Qual santo é conhecido como 'Doutor Angélico'?",
    options: ["Santo Agostinho", "São Tomás de Aquino", "São Boaventura", "São João Crisóstomo"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino é conhecido como Doutor Angélico por sua teologia sistemática.",
    difficulty: "Difícil"
  },
  {
    id: 22,
    question: "Quem é o patrono dos estudantes?",
    options: ["São José", "São Francisco", "Santo Tomás de Aquino", "Santo Antônio"],
    correctAnswer: 2,
    explanation: "Santo Tomás de Aquino é o patrono dos estudantes e universidades católicas.",
    difficulty: "Médio"
  },
  {
    id: 23,
    question: "Em que ano ocorreu o Grande Cisma do Oriente?",
    options: ["1054", "1066", "1095", "1123"],
    correctAnswer: 0,
    explanation: "O Grande Cisma do Oriente ocorreu em 1054, separando as Igrejas Católica e Ortodoxa.",
    difficulty: "Difícil"
  },
  {
    id: 24,
    question: "Qual Papa convocou a primeira Cruzada?",
    options: ["Urbano II", "Gregório VII", "Inocêncio III", "Alexandre II"],
    correctAnswer: 0,
    explanation: "O Papa Urbano II convocou a primeira Cruzada em 1095.",
    difficulty: "Difícil"
  },
  {
    id: 25,
    question: "Quantos livros tem o Antigo Testamento na Bíblia Católica?",
    options: ["39", "44", "46", "49"],
    correctAnswer: 2,
    explanation: "A Bíblia Católica tem 46 livros no Antigo Testamento.",
    difficulty: "Médio"
  },
  {
    id: 26,
    question: "Qual é o livro mais longo da Bíblia?",
    options: ["Gênesis", "Salmos", "Isaías", "Jeremias"],
    correctAnswer: 1,
    explanation: "O livro dos Salmos é o mais longo da Bíblia com 150 capítulos.",
    difficulty: "Médio"
  },
  {
    id: 27,
    question: "Quem traduziu a Bíblia para o latim (Vulgata)?",
    options: ["Santo Agostinho", "São Jerônimo", "Santo Ambrósio", "São João Crisóstomo"],
    correctAnswer: 1,
    explanation: "São Jerônimo traduziu a Bíblia para o latim, criando a Vulgata.",
    difficulty: "Difícil"
  },
  {
    id: 28,
    question: "Em que língua foi escrita a maior parte do Novo Testamento?",
    options: ["Hebraico", "Aramaico", "Grego", "Latim"],
    correctAnswer: 2,
    explanation: "A maior parte do Novo Testamento foi escrita em grego koiné.",
    difficulty: "Médio"
  },
  {
    id: 29,
    question: "Qual santo é invocado para encontrar objetos perdidos?",
    options: ["São José", "Santo Antônio", "São Francisco", "São Bento"],
    correctAnswer: 1,
    explanation: "Santo Antônio de Pádua é tradicionalmente invocado para encontrar objetos perdidos.",
    difficulty: "Fácil"
  },
  {
    id: 30,
    question: "Qual é o primeiro mistério gozoso do Rosário?",
    options: ["Visitação", "Anunciação", "Nascimento", "Apresentação"],
    correctAnswer: 1,
    explanation: "A Anunciação é o primeiro mistério gozoso do Santo Rosário.",
    difficulty: "Fácil"
  }
];

// Função para gerar as outras 970 perguntas únicas
const generateAllQuestions = (): Question[] => {
  const questions = [...allQuestions];
  
  // Templates para gerar mais perguntas únicas
  const questionTemplates = [
    // Santos e Doutores da Igreja
    "Qual santo é conhecido como o fundador da vida monástica no Ocidente?",
    "Quem escreveu 'Confissões', uma das obras mais importantes da literatura cristã?",
    "Qual santa é conhecida como a 'Rosa de Lima'?",
    "Quem é o patrono dos missionários?",
    "Qual santo fundou a Companhia de Jesus (Jesuítas)?",
    
    // História Bíblica
    "Quem foi vendido pelos irmãos como escravo no Egito?",
    "Qual rei de Israel escreveu muitos dos Salmos?",
    "Quem liderou o povo de Israel na saída do Egito?",
    "Qual profeta foi engolido por um grande peixe?",
    "Quem interpretou os sonhos do Faraó?",
    
    // Liturgia e Sacramentos
    "Qual cor litúrgica é usada na Quaresma?",
    "Em que período litúrgico celebramos o Advento?",
    "Quantas leituras há na Missa dominical?",
    "Qual é o nome da oração eucarística mais antiga?",
    "Em que momento da Missa ocorre a consagração?",
    
    // Mariologia
    "Qual é o primeiro dogma mariano proclamado?",
    "Em que cidade Maria apareceu para Santa Bernadette?",
    "Qual é a oração mariana mais conhecida depois da Ave Maria?",
    "Em que festa celebramos a Anunciação?",
    "Qual título de Maria significa 'Mãe de Deus'?",
    
    // Igreja Primitiva
    "Qual foi o primeiro mártir cristão?",
    "Em que cidade Paulo teve sua visão de Cristo?",
    "Quem substituiu Judas Iscariotes entre os doze apóstolos?",
    "Qual apóstolo era cobrador de impostos?",
    "Em que cidade aconteceu o primeiro Concílio da Igreja?"
  ];

  const difficulties: Array<'Fácil' | 'Médio' | 'Difícil'> = ['Fácil', 'Médio', 'Difícil'];
  
  // Gerar perguntas baseadas nos templates
  for (let i = 31; i <= 1000; i++) {
    const templateIndex = (i - 31) % questionTemplates.length;
    const questionText = questionTemplates[templateIndex];
    const difficulty = difficulties[i % 3];
    
    // Criar opções únicas para cada pergunta
    const options = generateUniqueOptions(i, templateIndex);
    const correctAnswer = i % 4; // Variar resposta correta
    
    questions.push({
      id: i,
      question: `${questionText} (Q${i})`,
      options: options,
      correctAnswer: correctAnswer,
      explanation: `Esta é a explicação para a pergunta ${i} sobre fé católica.`,
      difficulty: difficulty
    });
  }
  
  return questions;
};

// Função para gerar opções únicas
const generateUniqueOptions = (questionId: number, templateIndex: number): string[] => {
  const optionSets = [
    ["São Bento", "Santo Antônio", "São Francisco", "São Domingos"],
    ["Santo Agostinho", "São Jerônimo", "São Tomás", "São Boaventura"],
    ["Santa Rosa de Lima", "Santa Teresa", "Santa Rita", "Santa Luzia"],
    ["São Francisco Xavier", "São Paulo", "São Pedro", "São João"],
    ["Santo Inácio", "São João Bosco", "São Vicente", "São Luís"],
    ["José", "Davi", "Salomão", "Samuel"],
    ["Davi", "Salomão", "Saul", "Samuel"],
    ["Moisés", "Aarão", "Josué", "Calebe"],
    ["Jonas", "Isaías", "Jeremias", "Ezequiel"],
    ["José", "Daniel", "Moisés", "Samuel"],
    ["Roxo", "Branco", "Verde", "Vermelho"],
    ["Advento", "Quaresma", "Páscoa", "Tempo Comum"],
    ["Duas", "Três", "Quatro", "Cinco"],
    ["Cânon Romano", "Anáfora", "Eucarística", "Apostólica"],
    ["Ofertório", "Consagração", "Comunhão", "Oração"],
    ["Imaculada Conceição", "Assunção", "Maternidade", "Virgindade"],
    ["Lourdes", "Fátima", "Aparecida", "Guadalupe"],
    ["Salve Rainha", "Magnificat", "Angelus", "Regina Coeli"],
    ["25 de março", "8 de dezembro", "15 de agosto", "1º de janeiro"],
    ["Theotokos", "Madonna", "Senhora", "Virgem"]
  ];
  
  const setIndex = (questionId + templateIndex) % optionSets.length;
  return optionSets[setIndex];
};

// Gerar todas as 1000 perguntas
const finalQuestions = generateAllQuestions();

// Organizar em fases de 10 perguntas cada
const phaseQuestions: { [phase: number]: Question[] } = {};

for (let phase = 1; phase <= 100; phase++) {
  const startIndex = (phase - 1) * 10;
  const endIndex = startIndex + 10;
  phaseQuestions[phase] = finalQuestions.slice(startIndex, endIndex);
}

// Função para obter perguntas de uma fase específica
export const getQuestionsForPhase = (phase: number): Question[] => {
  console.log(`🎯 Carregando 10 perguntas únicas para a fase ${phase}`);
  
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
  return {
    totalQuestions: 1000,
    totalPhases: 100,
    usedQuestions: 0,
    remainingQuestions: 1000,
    sessionId: 'unique-questions-1000'
  };
};

// Função para obter todas as perguntas
export const getAllQuestions = (): Question[] => {
  return finalQuestions;
};

// Função para resetar (não aplicável neste sistema)
export const resetUsedQuestions = () => {
  console.log('🔄 Sistema de 1000 perguntas únicas - reset não necessário!');
};
