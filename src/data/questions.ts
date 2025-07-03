
interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const easyQuestions: Question[] = [
  {
    question: "Qual é o sacramento que nos une a Cristo e à Igreja?",
    options: ["Batismo", "Confirmação", "Eucaristia", "Matrimônio"],
    correctAnswer: 0,
    explanation: "O Batismo é o sacramento que nos lava do pecado original e nos torna membros do Corpo de Cristo, que é a Igreja."
  },
  {
    question: "Quem foi o primeiro Papa da Igreja Católica?",
    options: ["São Pedro", "São Paulo", "Santo Agostinho", "São Francisco"],
    correctAnswer: 0,
    explanation: "São Pedro foi escolhido por Jesus para ser a pedra sobre a qual a Igreja seria construída, tornando-se o primeiro Papa."
  },
  {
    question: "Qual oração Jesus nos ensinou?",
    options: ["Ave Maria", "Pai Nosso", "Credo", "Salve Rainha"],
    correctAnswer: 1,
    explanation: "O Pai Nosso é a oração que Jesus ensinou aos seus discípulos, contendo as principais petições para a vida cristã."
  },
  {
    question: "O que celebramos no Domingo de Ramos?",
    options: ["A Última Ceia", "A entrada de Jesus em Jerusalém", "A ressurreição de Lázaro", "O nascimento de Jesus"],
    correctAnswer: 1,
    explanation: "No Domingo de Ramos, celebramos a entrada triunfal de Jesus em Jerusalém, aclamado pelo povo com ramos de oliveira."
  },
  {
    question: "Qual é o mandamento mais importante?",
    options: ["Amar a Deus sobre todas as coisas", "Não matar", "Guardar domingos e festas", "Honrar pai e mãe"],
    correctAnswer: 0,
    explanation: "Amar a Deus sobre todas as coisas é o primeiro e mais importante mandamento, pois dele derivam todos os outros."
  },
  {
    question: "Quem traiu Jesus?",
    options: ["Judas", "Pedro", "João", "Tiago"],
    correctAnswer: 0,
    explanation: "Judas Iscariotes foi o discípulo que traiu Jesus por trinta moedas de prata."
  },
  {
    question: "O que é a Quaresma?",
    options: ["Um tempo de preparação para o Natal", "Um tempo de preparação para a Páscoa", "Um tempo de festas religiosas", "Um tempo de descanso"],
    correctAnswer: 1,
    explanation: "A Quaresma é um período de 40 dias de preparação para a Páscoa, marcado por oração, penitência e caridade."
  },
  {
    question: "Qual é o significado da cor litúrgica verde?",
    options: ["Esperança", "Alegria", "Penitência", "Martírio"],
    correctAnswer: 0,
    explanation: "A cor verde é usada no tempo comum e simboliza a esperança e o crescimento na fé."
  },
  {
    question: "O que é a Bíblia?",
    options: ["Um livro de história", "A Palavra de Deus", "Um livro de poesias", "Um livro de contos"],
    correctAnswer: 1,
    explanation: "A Bíblia é a Palavra de Deus revelada aos homens, contendo o Antigo e o Novo Testamento."
  },
  {
    question: "Quantos são os Evangelhos?",
    options: ["Dois", "Três", "Quatro", "Cinco"],
    correctAnswer: 2,
    explanation: "Os Evangelhos são quatro: Mateus, Marcos, Lucas e João, cada um apresentando a vida, os ensinamentos, a morte e a ressurreição de Jesus."
  }
];

const mediumQuestions: Question[] = [
  {
    question: "O que é a Transubstanciação?",
    options: ["A transformação da água em vinho", "A transformação do pão e do vinho no Corpo e Sangue de Cristo", "A ressurreição de Jesus", "A ascensão de Maria"],
    correctAnswer: 1,
    explanation: "A Transubstanciação é o milagre pelo qual o pão e o vinho se transformam no Corpo e Sangue de Cristo durante a Missa."
  },
  {
    question: "Quais são os dons do Espírito Santo?",
    options: ["Fé, esperança e caridade", "Sabedoria, inteligência, conselho, fortaleza, ciência, piedade e temor de Deus", "Os sacramentos", "Os mandamentos"],
    correctAnswer: 1,
    explanation: "Os dons do Espírito Santo são sete: sabedoria, inteligência, conselho, fortaleza, ciência, piedade e temor de Deus, que nos ajudam a viver a vida cristã."
  },
  {
    question: "O que são as bem-aventuranças?",
    options: ["As orações mais importantes", "As promessas de felicidade de Jesus", "Os milagres de Jesus", "Os ensinamentos dos apóstolos"],
    correctAnswer: 1,
    explanation: "As bem-aventuranças são as promessas de felicidade que Jesus faz àqueles que seguem o caminho do Reino de Deus."
  },
  {
    question: "Qual é o papel de Maria na Igreja?",
    options: ["Mãe de Deus e modelo de fé", "A primeira discípula", "A fundadora da Igreja", "A rainha do céu"],
    correctAnswer: 0,
    explanation: "Maria é a Mãe de Deus e um modelo de fé para todos os cristãos, intercedendo por nós junto a seu Filho."
  },
  {
    question: "O que é o pecado original?",
    options: ["O primeiro pecado cometido por Adão e Eva", "Um pecado grave", "Um pecado venial", "Um pecado mortal"],
    correctAnswer: 0,
    explanation: "O pecado original é o pecado cometido por Adão e Eva, que causou a perda da graça santificante e a inclinação ao pecado."
  },
  {
    question: "O que significa a palavra 'Eucaristia'?",
    options: ["Ação de graças", "Comunhão", "Sacrifício", "Aliança"],
    correctAnswer: 0,
    explanation: "A palavra 'Eucaristia' significa 'ação de graças' em grego, recordando o agradecimento de Jesus ao Pai na Última Ceia."
  },
  {
    question: "Quem foi Santo Agostinho?",
    options: ["Um apóstolo", "Um doutor da Igreja", "Um mártir", "Um papa"],
    correctAnswer: 1,
    explanation: "Santo Agostinho foi um dos maiores doutores da Igreja, conhecido por suas obras filosóficas e teológicas."
  },
  {
    question: "O que são os sacramentais?",
    options: ["Os sete sacramentos", "Objetos e orações que nos aproximam de Deus", "Os mandamentos da Igreja", "Os dons do Espírito Santo"],
    correctAnswer: 1,
    explanation: "Os sacramentais são objetos e orações que nos ajudam a nos aproximar de Deus e a receber suas graças."
  },
  {
    question: "Qual é a importância do Concílio Vaticano II?",
    options: ["Definir o dogma da Imaculada Conceição", "Promover a renovação da Igreja no mundo moderno", "Condenar o modernismo", "Estabelecer o celibato clerical"],
    correctAnswer: 1,
    explanation: "O Concílio Vaticano II foi um marco na história da Igreja, promovendo a renovação e a adaptação ao mundo moderno."
  },
  {
    question: "O que é a Imaculada Conceição?",
    options: ["A concepção de Jesus por Maria", "A concepção de Maria sem o pecado original", "A ascensão de Maria ao céu", "A coroação de Maria como Rainha do Céu"],
    correctAnswer: 1,
    explanation: "A Imaculada Conceição é o dogma que afirma que Maria foi concebida sem o pecado original."
  }
];

const hardQuestions: Question[] = [
  {
    question: "O que é a teologia da libertação?",
    options: ["Uma corrente teológica que enfatiza a libertação dos pobres e oprimidos", "Uma doutrina que defende a liberdade religiosa", "Um movimento de renovação carismática", "Uma ordem religiosa"],
    correctAnswer: 0,
    explanation: "A teologia da libertação é uma corrente teológica que enfatiza a libertação dos pobres e oprimidos, buscando a justiça social à luz do Evangelho."
  },
  {
    question: "Qual é o significado da expressão 'Filioque' no Credo?",
    options: ["Que o Espírito Santo procede do Pai e do Filho", "Que Jesus é Filho de Deus", "Que o Pai é maior que o Filho", "Que o Espírito Santo é Deus"],
    correctAnswer: 0,
    explanation: "A expressão 'Filioque' no Credo significa que o Espírito Santo procede do Pai e do Filho, uma questão teológica que dividiu a Igreja do Oriente e do Ocidente."
  },
  {
    question: "O que são os Padres da Igreja?",
    options: ["Os apóstolos de Jesus", "Os primeiros líderes da Igreja após os apóstolos", "Os fundadores das ordens religiosas", "Os papas dos primeiros séculos"],
    correctAnswer: 1,
    explanation: "Os Padres da Igreja são os primeiros líderes e escritores cristãos que, após os apóstolos, ajudaram a definir a doutrina e a prática da Igreja."
  },
  {
    question: "Qual é a doutrina da Igreja sobre a justificação?",
    options: ["Somos justificados pelas obras", "Somos justificados somente pela fé", "Somos justificados pela graça de Deus mediante a fé e as obras", "Não precisamos de justificação"],
    correctAnswer: 2,
    explanation: "A Igreja ensina que somos justificados pela graça de Deus mediante a fé e as obras, ou seja, a fé que age pelo amor."
  },
  {
    question: "O que é a escatologia?",
    options: ["O estudo dos sacramentos", "O estudo do fim dos tempos", "O estudo da criação", "O estudo da Trindade"],
    correctAnswer: 1,
    explanation: "A escatologia é o estudo do fim dos tempos, incluindo a segunda vinda de Cristo, o juízo final, a ressurreição dos mortos e a vida eterna."
  },
  {
    question: "O que são os graus do Sacramento da Ordem?",
    options: ["Bispo, padre e diácono", "Papa, cardeal e arcebispo", "Mestre, doutor e presbítero", "Noviciado, juniorato e profissão"],
    correctAnswer: 0,
    explanation: "Os graus do Sacramento da Ordem são três: o episcopado (bispo), o presbiterado (padre) e o diaconato (diácono)."
  },
  {
    question: "O que é a 'analogia entis' na teologia?",
    options: ["A semelhança entre Deus e o ser humano", "A diferença entre Deus e o mundo", "A relação entre fé e razão", "A doutrina da Trindade"],
    correctAnswer: 0,
    explanation: "A 'analogia entis' é um conceito teológico que afirma que existe uma semelhança entre Deus e o ser humano, permitindo-nos conhecer algo de Deus através das criaturas."
  },
  {
    question: "O que é a 'kénosis' de Cristo?",
    options: ["A morte de Jesus na cruz", "A encarnação de Jesus", "O esvaziamento de si mesmo por Cristo ao assumir a natureza humana", "A ressurreição de Jesus"],
    correctAnswer: 2,
    explanation: "A 'kénosis' de Cristo refere-se ao esvaziamento de si mesmo por Jesus ao assumir a natureza humana, renunciando à sua glória divina."
  },
  {
    question: "O que é a 'Koinonia' na Igreja Primitiva?",
    options: ["A celebração da Eucaristia", "A comunhão de bens e partilha fraterna", "A oração em comum", "O batismo dos novos convertidos"],
    correctAnswer: 1,
    explanation: "A 'Koinonia' na Igreja Primitiva era a comunhão de bens e a partilha fraterna entre os membros da comunidade cristã."
  },
  {
    question: "O que são as indulgências?",
    options: ["O perdão dos pecados", "A remissão da pena temporal devida aos pecados já perdoados", "A absolvição sacramental", "A isenção de cumprir os mandamentos"],
    correctAnswer: 1,
    explanation: "As indulgências são a remissão da pena temporal devida aos pecados já perdoados, concedida pela Igreja sob certas condições."
  }
];

export const getQuestionsForPattern = (pattern: ('Fácil' | 'Médio' | 'Difícil')[], usedQuestions: Set<string> = new Set()): Question[] => {
  const selectedQuestions: Question[] = [];
  
  // Create a copy of used questions to track within this selection
  const localUsedQuestions = new Set(usedQuestions);
  
  for (const difficulty of pattern) {
    let availableQuestions: Question[] = [];
    
    switch (difficulty) {
      case 'Fácil':
        availableQuestions = easyQuestions.filter(q => !localUsedQuestions.has(q.question));
        break;
      case 'Médio':
        availableQuestions = mediumQuestions.filter(q => !localUsedQuestions.has(q.question));
        break;
      case 'Difícil':
        availableQuestions = hardQuestions.filter(q => !localUsedQuestions.has(q.question));
        break;
    }
    
    // If no unused questions available for this difficulty, reset for this difficulty only
    if (availableQuestions.length === 0) {
      console.log(`Resetando perguntas ${difficulty} - todas já foram usadas`);
      switch (difficulty) {
        case 'Fácil':
          availableQuestions = easyQuestions;
          break;
        case 'Médio':
          availableQuestions = mediumQuestions;
          break;
        case 'Difícil':
          availableQuestions = hardQuestions;
          break;
      }
    }
    
    if (availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const selectedQuestion = availableQuestions[randomIndex];
      selectedQuestions.push(selectedQuestion);
      
      // Add to local tracking to prevent duplicates within the same pattern
      localUsedQuestions.add(selectedQuestion.question);
    }
  }
  
  return selectedQuestions;
};

// Function to reset used questions when we run out
export const shouldResetUsedQuestions = (usedQuestions: Set<string>): boolean => {
  const totalQuestions = easyQuestions.length + mediumQuestions.length + hardQuestions.length;
  return usedQuestions.size >= totalQuestions * 0.8; // Reset when 80% have been used
};
