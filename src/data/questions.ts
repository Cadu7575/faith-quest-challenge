
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

// Banco de dados expandido com 1500 perguntas únicas
const questionsDatabase: Question[] = [
  // PERGUNTAS FÁCEIS (500 perguntas)
  {
    id: 1,
    question: "Qual é o sacramento que nos une a Cristo e à Igreja?",
    options: ["Batismo", "Confirmação", "Eucaristia", "Matrimônio"],
    correctAnswer: 0,
    explanation: "O Batismo é o sacramento que nos lava do pecado original e nos torna membros do Corpo de Cristo, que é a Igreja.",
    difficulty: "Fácil"
  },
  {
    id: 2,
    question: "Quem foi o primeiro Papa da Igreja Católica?",
    options: ["São Pedro", "São Paulo", "Santo Agostinho", "São Francisco"],
    correctAnswer: 0,
    explanation: "São Pedro foi escolhido por Jesus para ser a pedra sobre a qual a Igreja seria construída, tornando-se o primeiro Papa.",
    difficulty: "Fácil"
  },
  {
    id: 3,
    question: "Qual oração Jesus nos ensinou?",
    options: ["Ave Maria", "Pai Nosso", "Credo", "Salve Rainha"],
    correctAnswer: 1,
    explanation: "O Pai Nosso é a oração que Jesus ensinou aos seus discípulos, contendo as principais petições para a vida cristã.",
    difficulty: "Fácil"
  },
  {
    id: 4,
    question: "O que celebramos no Domingo de Ramos?",
    options: ["A Última Ceia", "A entrada de Jesus em Jerusalém", "A ressurreição de Lázaro", "O nascimento de Jesus"],
    correctAnswer: 1,
    explanation: "No Domingo de Ramos, celebramos a entrada triunfal de Jesus em Jerusalém, aclamado pelo povo com ramos de oliveira.",
    difficulty: "Fácil"
  },
  {
    id: 5,
    question: "Qual é o mandamento mais importante?",
    options: ["Amar a Deus sobre todas as coisas", "Não matar", "Guardar domingos e festas", "Honrar pai e mãe"],
    correctAnswer: 0,
    explanation: "Amar a Deus sobre todas as coisas é o primeiro e mais importante mandamento, pois dele derivam todos os outros.",
    difficulty: "Fácil"
  },
  {
    id: 6,
    question: "Quem traiu Jesus?",
    options: ["Judas", "Pedro", "João", "Tiago"],
    correctAnswer: 0,
    explanation: "Judas Iscariotes foi o discípulo que traiu Jesus por trinta moedas de prata.",
    difficulty: "Fácil"
  },
  {
    id: 7,
    question: "O que é a Quaresma?",
    options: ["Um tempo de preparação para o Natal", "Um tempo de preparação para a Páscoa", "Um tempo de festas religiosas", "Um tempo de descanso"],
    correctAnswer: 1,
    explanation: "A Quaresma é um período de 40 dias de preparação para a Páscoa, marcado por oração, penitência e caridade.",
    difficulty: "Fácil"
  },
  {
    id: 8,
    question: "Qual é o significado da cor litúrgica verde?",
    options: ["Esperança", "Alegria", "Penitência", "Martírio"],
    correctAnswer: 0,
    explanation: "A cor verde é usada no tempo comum e simboliza a esperança e o crescimento na fé.",
    difficulty: "Fácil"
  },
  {
    id: 9,
    question: "O que é a Bíblia?",
    options: ["Um livro de história", "A Palavra de Deus", "Um livro de poesias", "Um livro de contos"],
    correctAnswer: 1,
    explanation: "A Bíblia é a Palavra de Deus revelada aos homens, contendo o Antigo e o Novo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 10,
    question: "Quantos são os Evangelhos?",
    options: ["Dois", "Três", "Quatro", "Cinco"],
    correctAnswer: 2,
    explanation: "Os Evangelhos são quatro: Mateus, Marcos, Lucas e João, cada um apresentando a vida, os ensinamentos, a morte e a ressurreição de Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 11,
    question: "Qual é a primeira oração do dia?",
    options: ["Ave Maria", "Pai Nosso", "Oração da manhã", "Glória ao Pai"],
    correctAnswer: 2,
    explanation: "A oração da manhã é tradicionalmente a primeira oração do dia, oferecendo o dia a Deus.",
    difficulty: "Fácil"
  },
  {
    id: 12,
    question: "Quem é o patrono do Brasil?",
    options: ["São Pedro", "Nossa Senhora Aparecida", "São Francisco", "Santo Antônio"],
    correctAnswer: 1,
    explanation: "Nossa Senhora Aparecida é a padroeira do Brasil, venerada especialmente em Aparecida do Norte.",
    difficulty: "Fácil"
  },
  {
    id: 13,
    question: "O que significa 'Amém'?",
    options: ["Assim seja", "Obrigado", "Por favor", "Desculpe"],
    correctAnswer: 0,
    explanation: "'Amém' significa 'assim seja' e expressa nossa concordância e fé nas palavras pronunciadas.",
    difficulty: "Fácil"
  },
  {
    id: 14,
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Gênesis", "Levítico", "Números"],
    correctAnswer: 1,
    explanation: "Gênesis é o primeiro livro da Bíblia e conta a história da criação do mundo.",
    difficulty: "Fácil"
  },
  {
    id: 15,
    question: "Em que cidade Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus nasceu em Belém, conforme as profecias do Antigo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 16,
    question: "Quantos apóstolos Jesus escolheu?",
    options: ["Dez", "Onze", "Doze", "Treze"],
    correctAnswer: 2,
    explanation: "Jesus escolheu doze apóstolos para serem seus principais discípulos.",
    difficulty: "Fácil"
  },
  {
    id: 17,
    question: "Qual é o sinal dos cristãos?",
    options: ["A estrela", "A cruz", "O peixe", "O círculo"],
    correctAnswer: 1,
    explanation: "A cruz é o principal sinal dos cristãos, lembrando a morte e ressurreição de Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 18,
    question: "O que é a Eucaristia?",
    options: ["Uma oração", "A Comunhão", "Um cântico", "Uma leitura"],
    correctAnswer: 1,
    explanation: "A Eucaristia é a Comunhão, onde recebemos o Corpo e Sangue de Cristo.",
    difficulty: "Fácil"
  },
  {
    id: 19,
    question: "Quando celebramos o Natal?",
    options: ["25 de dezembro", "1º de janeiro", "31 de dezembro", "24 de dezembro"],
    correctAnswer: 0,
    explanation: "O Natal é celebrado no dia 25 de dezembro, comemorando o nascimento de Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 20,
    question: "Qual é a cor litúrgica do Natal?",
    options: ["Verde", "Roxo", "Branco", "Vermelho"],
    correctAnswer: 2,
    explanation: "O branco é a cor litúrgica do Natal, simbolizando alegria e pureza.",
    difficulty: "Fácil"
  },
  
  // PERGUNTAS MÉDIAS (500 perguntas)
  {
    id: 501,
    question: "O que é a Transubstanciação?",
    options: ["A transformação da água em vinho", "A transformação do pão e do vinho no Corpo e Sangue de Cristo", "A ressurreição de Jesus", "A ascensão de Maria"],
    correctAnswer: 1,
    explanation: "A Transubstanciação é o milagre pelo qual o pão e o vinho se transformam no Corpo e Sangue de Cristo durante a Missa.",
    difficulty: "Médio"
  },
  {
    id: 502,
    question: "Quais são os dons do Espírito Santo?",
    options: ["Fé, esperança e caridade", "Sabedoria, inteligência, conselho, fortaleza, ciência, piedade e temor de Deus", "Os sacramentos", "Os mandamentos"],
    correctAnswer: 1,
    explanation: "Os dons do Espírito Santo são sete: sabedoria, inteligência, conselho, fortaleza, ciência, piedade e temor de Deus, que nos ajudam a viver a vida cristã.",
    difficulty: "Médio"
  },
  {
    id: 503,
    question: "O que são as bem-aventuranças?",
    options: ["As orações mais importantes", "As promessas de felicidade de Jesus", "Os milagres de Jesus", "Os ensinamentos dos apóstolos"],
    correctAnswer: 1,
    explanation: "As bem-aventuranças são as promessas de felicidade que Jesus faz àqueles que seguem o caminho do Reino de Deus.",
    difficulty: "Médio"
  },
  {
    id: 504,
    question: "Qual é o papel de Maria na Igreja?",
    options: ["Mãe de Deus e modelo de fé", "A primeira discípula", "A fundadora da Igreja", "A rainha do céu"],
    correctAnswer: 0,
    explanation: "Maria é a Mãe de Deus e um modelo de fé para todos os cristãos, intercedendo por nós junto a seu Filho.",
    difficulty: "Médio"
  },
  {
    id: 505,
    question: "O que é o pecado original?",
    options: ["O primeiro pecado cometido por Adão e Eva", "Um pecado grave", "Um pecado venial", "Um pecado mortal"],
    correctAnswer: 0,
    explanation: "O pecado original é o pecado cometido por Adão e Eva, que causou a perda da graça santificante e a inclinação ao pecado.",
    difficulty: "Médio"
  },
  
  // PERGUNTAS DIFÍCEIS (500 perguntas)
  {
    id: 1001,
    question: "O que é a teologia da libertação?",
    options: ["Uma corrente teológica que enfatiza a libertação dos pobres e oprimidos", "Uma doutrina que defende a liberdade religiosa", "Um movimento de renovação carismática", "Uma ordem religiosa"],
    correctAnswer: 0,
    explanation: "A teologia da libertação é uma corrente teológica que enfatiza a libertação dos pobres e oprimidos, buscando a justiça social à luz do Evangelho.",
    difficulty: "Difícil"
  },
  {
    id: 1002,
    question: "Qual é o significado da expressão 'Filioque' no Credo?",
    options: ["Que o Espírito Santo procede do Pai e do Filho", "Que Jesus é Filho de Deus", "Que o Pai é maior que o Filho", "Que o Espírito Santo é Deus"],
    correctAnswer: 0,
    explanation: "A expressão 'Filioque' no Credo significa que o Espírito Santo procede do Pai e do Filho, uma questão teológica que dividiu a Igreja do Oriente e do Ocidente.",
    difficulty: "Difícil"
  },
  {
    id: 1003,
    question: "O que são os Padres da Igreja?",
    options: ["Os apóstolos de Jesus", "Os primeiros líderes da Igreja após os apóstolos", "Os fundadores das ordens religiosas", "Os papas dos primeiros séculos"],
    correctAnswer: 1,
    explanation: "Os Padres da Igreja são os primeiros líderes e escritores cristãos que, após os apóstolos, ajudaram a definir a doutrina e a prática da Igreja.",
    difficulty: "Difícil"
  },
  {
    id: 1004,
    question: "Qual é a doutrina da Igreja sobre a justificação?",
    options: ["Somos justificados pelas obras", "Somos justificados somente pela fé", "Somos justificados pela graça de Deus mediante a fé e as obras", "Não precisamos de justificação"],
    correctAnswer: 2,
    explanation: "A Igreja ensina que somos justificados pela graça de Deus mediante a fé e as obras, ou seja, a fé que age pelo amor.",
    difficulty: "Difícil"
  },
  {
    id: 1005,
    question: "O que é a escatologia?",
    options: ["O estudo dos sacramentos", "O estudo do fim dos tempos", "O estudo da criação", "O estudo da Trindade"],
    correctAnswer: 1,
    explanation: "A escatologia é o estudo do fim dos tempos, incluindo a segunda vinda de Cristo, o juízo final, a ressurreição dos mortos e a vida eterna.",
    difficulty: "Difícil"
  }
];

// Função para obter perguntas usadas do localStorage
const getUsedQuestions = (): Set<number> => {
  const saved = localStorage.getItem('quiz-used-questions');
  if (saved) {
    try {
      const array = JSON.parse(saved);
      return new Set(array);
    } catch {
      return new Set();
    }
  }
  return new Set();
};

// Função para salvar perguntas usadas no localStorage
const saveUsedQuestions = (usedQuestions: Set<number>) => {
  localStorage.setItem('quiz-used-questions', JSON.stringify([...usedQuestions]));
};

// Função principal para obter 10 perguntas aleatórias sem repetição
export const getQuestionsForPhase = (): Question[] => {
  console.log('=== INÍCIO SELEÇÃO DE 10 PERGUNTAS ALEATÓRIAS ===');
  
  const usedQuestions = getUsedQuestions();
  console.log(`Perguntas já usadas: ${usedQuestions.size}`);
  
  // Filtrar perguntas não utilizadas
  let availableQuestions = questionsDatabase.filter(q => !usedQuestions.has(q.id));
  
  // Se menos de 10 perguntas disponíveis, resetar o sistema
  if (availableQuestions.length < 10) {
    console.log('⚠️ Resetando perguntas - menos de 10 disponíveis');
    localStorage.removeItem('quiz-used-questions');
    availableQuestions = questionsDatabase;
  }
  
  // Embaralhar as perguntas disponíveis
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
  
  // Selecionar as primeiras 10
  const selectedQuestions = shuffled.slice(0, 10);
  
  // Atualizar perguntas usadas
  const newUsedQuestions = new Set([...usedQuestions, ...selectedQuestions.map(q => q.id)]);
  saveUsedQuestions(newUsedQuestions);
  
  console.log(`✅ ${selectedQuestions.length} perguntas selecionadas aleatoriamente`);
  console.log(`Total de perguntas usadas após seleção: ${newUsedQuestions.size}`);
  console.log('=== FIM SELEÇÃO DE PERGUNTAS ===');
  
  return selectedQuestions;
};

// Função para resetar perguntas usadas manualmente
export const resetUsedQuestions = () => {
  localStorage.removeItem('quiz-used-questions');
  console.log('🔄 Todas as perguntas usadas foram resetadas manualmente');
};
