
export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const easyQuestions: Question[] = [
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
    question: "Qual é a primeira oração que Jesus ensinou?",
    options: ["Ave Maria", "Pai Nosso", "Glória ao Pai", "Credo"],
    correctAnswer: 1,
    explanation: "Jesus ensinou o Pai Nosso aos seus discípulos, conforme relatado nos Evangelhos de Mateus e Lucas."
  },
  {
    question: "Quantos Evangelhos existem na Bíblia?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 2,
    explanation: "São quatro os Evangelhos: Mateus, Marcos, Lucas e João."
  },
  {
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Gênesis", "Levítico", "Deuteronômio"],
    correctAnswer: 1,
    explanation: "Gênesis é o primeiro livro da Bíblia e narra a criação do mundo."
  },
  {
    question: "Em que cidade nasceu Jesus?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus nasceu em Belém, na Judeia, conforme profetizado no Antigo Testamento."
  },
  {
    question: "Qual é o nome da mãe de Jesus?",
    options: ["Maria", "Marta", "Madalena", "Isabel"],
    correctAnswer: 0,
    explanation: "Maria é a mãe de Jesus Cristo, venerada como Nossa Senhora na tradição católica."
  },
  {
    question: "Quantos apóstolos Jesus escolheu?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation: "Jesus escolheu doze apóstolos para serem seus seguidores mais próximos."
  },
  {
    question: "Qual é o dia da semana em que Jesus ressuscitou?",
    options: ["Sexta-feira", "Sábado", "Domingo", "Segunda-feira"],
    correctAnswer: 2,
    explanation: "Jesus ressuscitou no domingo, que se tornou o dia do Senhor para os cristãos."
  },
  {
    question: "Qual é o sacramento da iniciação cristã?",
    options: ["Confirmação", "Batismo", "Eucaristia", "Matrimônio"],
    correctAnswer: 1,
    explanation: "O Batismo é o primeiro sacramento da iniciação cristã, seguido pela Confirmação e Eucaristia."
  },
  {
    question: "Quem foi o primeiro papa da Igreja Católica?",
    options: ["São Paulo", "São Pedro", "São João", "São Tiago"],
    correctAnswer: 1,
    explanation: "São Pedro foi o primeiro papa, escolhido por Jesus Cristo para liderar a Igreja."
  },
  {
    question: "Qual é o livro sagrado dos cristãos?",
    options: ["Corão", "Torá", "Bíblia", "Vedas"],
    correctAnswer: 2,
    explanation: "A Bíblia é o livro sagrado dos cristãos, contendo o Antigo e o Novo Testamento."
  },
  {
    question: "Em que mês celebramos o Natal?",
    options: ["Novembro", "Dezembro", "Janeiro", "Fevereiro"],
    correctAnswer: 1,
    explanation: "O Natal é celebrado em dezembro, tradicionalmente no dia 25."
  },
  {
    question: "Qual é o nome do anjo que anunciou a Maria que ela seria mãe de Jesus?",
    options: ["Miguel", "Rafael", "Gabriel", "Uriel"],
    correctAnswer: 2,
    explanation: "O arcanjo Gabriel anunciou a Maria que ela conceberia Jesus pelo Espírito Santo."
  },
  {
    question: "Qual é a cor litúrgica do Advento?",
    options: ["Vermelho", "Verde", "Roxo", "Branco"],
    correctAnswer: 2,
    explanation: "O roxo é a cor litúrgica do Advento, simbolizando preparação e penitência."
  },
  {
    question: "Quantos dias durou o dilúvio segundo a Bíblia?",
    options: ["30", "40", "50", "60"],
    correctAnswer: 1,
    explanation: "Segundo a Bíblia, choveu durante 40 dias e 40 noites durante o dilúvio."
  },
  {
    question: "Qual é o nome do monte onde Jesus foi crucificado?",
    options: ["Monte Sinai", "Monte das Oliveiras", "Calvário", "Monte Tabor"],
    correctAnswer: 2,
    explanation: "Jesus foi crucificado no Calvário, também conhecido como Gólgota."
  },
  {
    question: "Qual é o primeiro mandamento?",
    options: ["Não matarás", "Amar a Deus sobre todas as coisas", "Honrar pai e mãe", "Não roubarás"],
    correctAnswer: 1,
    explanation: "O primeiro mandamento é amar a Deus sobre todas as coisas."
  },
  {
    question: "Qual é o sacramento que perdoa os pecados?",
    options: ["Batismo", "Confirmação", "Confissão", "Unção"],
    correctAnswer: 2,
    explanation: "A Confissão ou Penitência é o sacramento que perdoa os pecados cometidos após o Batismo."
  },
  {
    question: "Qual é o nome do jardim onde Jesus orou antes de ser preso?",
    options: ["Getsêmani", "Éden", "Oliveiras", "Betânia"],
    correctAnswer: 0,
    explanation: "Jesus orou no jardim do Getsêmani antes de ser preso pelos soldados."
  }
];

export const mediumQuestions: Question[] = [
  {
    question: "Em que ano foi realizado o Concílio Vaticano II?",
    options: ["1960-1963", "1962-1965", "1965-1968", "1958-1961"],
    correctAnswer: 1,
    explanation: "O Concílio Vaticano II foi realizado entre 1962 e 1965, sendo um dos mais importantes concílios da Igreja Católica."
  },
  {
    question: "Qual papa canonizou São Josemaria Escrivá?",
    options: ["João Paulo II", "Bento XVI", "Paulo VI", "João XXIII"],
    correctAnswer: 0,
    explanation: "São João Paulo II canonizou São Josemaria Escrivá em 6 de outubro de 2002."
  },
  {
    question: "Qual é a ordem religiosa fundada por São Francisco de Assis?",
    options: ["Jesuítas", "Dominicanos", "Franciscanos", "Carmelitas"],
    correctAnswer: 2,
    explanation: "São Francisco de Assis fundou a Ordem dos Frades Menores, conhecidos como Franciscanos."
  },
  {
    question: "Em que século viveu São Tomás de Aquino?",
    options: ["Século XII", "Século XIII", "Século XIV", "Século XV"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino viveu no século XIII (1225-1274) e é considerado um dos maiores teólogos da Igreja."
  },
  {
    question: "Qual é o nome da encíclica sobre a dignidade humana escrita por João XXIII?",
    options: ["Rerum Novarum", "Pacem in Terris", "Populorum Progressio", "Humanae Vitae"],
    correctAnswer: 1,
    explanation: "Pacem in Terris (1963) foi a encíclica de João XXIII sobre paz e dignidade humana."
  },
  {
    question: "Qual santo é conhecido como o 'Doutor Angélico'?",
    options: ["Santo Agostinho", "São Tomás de Aquino", "São Boaventura", "São Jerônimo"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino é conhecido como Doutor Angélico devido à sua profunda teologia."
  },
  {
    question: "Em que cidade está localizada a Basílica de São Pedro?",
    options: ["Roma", "Jerusalém", "Constantinopla", "Antioquia"],
    correctAnswer: 0,
    explanation: "A Basílica de São Pedro está localizada no Vaticano, em Roma."
  },
  {
    question: "Qual é o nome do primeiro mártir cristão?",
    options: ["São Pedro", "São Paulo", "Santo Estêvão", "São Tiago"],
    correctAnswer: 2,
    explanation: "Santo Estêvão foi o primeiro mártir cristão, apedrejado por sua fé."
  },
  {
    question: "Quantos anos durou o pontificado de São João Paulo II?",
    options: ["25 anos", "26 anos", "27 anos", "28 anos"],
    correctAnswer: 2,
    explanation: "São João Paulo II foi papa por 26 anos e 5 meses (1978-2005)."
  },
  {
    question: "Qual é o nome da doutrina que afirma a presença real de Cristo na Eucaristia?",
    options: ["Transubstanciação", "Consubstanciação", "Simbolismo", "Nominalismo"],
    correctAnswer: 0,
    explanation: "A Transubstanciação é a doutrina católica que explica a presença real de Cristo na Eucaristia."
  },
  {
    question: "Em que ano foi promulgado o Código de Direito Canônico atual?",
    options: ["1917", "1983", "1992", "2000"],
    correctAnswer: 1,
    explanation: "O atual Código de Direito Canônico foi promulgado por João Paulo II em 1983."
  },
  {
    question: "Qual é o nome da oração mariana tradicionalmente rezada ao meio-dia?",
    options: ["Ave Maria", "Angelus", "Magnificat", "Salve Rainha"],
    correctAnswer: 1,
    explanation: "O Angelus é tradicionalmente rezado três vezes ao dia: 6h, 12h e 18h."
  },
  {
    question: "Qual papa instituiu a Festa do Corpus Christi?",
    options: ["Urbano IV", "Gregório VII", "Inocêncio III", "Bonifácio VIII"],
    correctAnswer: 0,
    explanation: "O Papa Urbano IV instituiu a Festa do Corpus Christi em 1264."
  },
  {
    question: "Qual é o nome da virtude teologal que significa esperança?",
    options: ["Fé", "Esperança", "Caridade", "Prudência"],
    correctAnswer: 1,
    explanation: "A Esperança é uma das três virtudes teologais, junto com a Fé e a Caridade."
  },
  {
    question: "Em que ano foi dogmaticamente definida a Imaculada Conceição?",
    options: ["1854", "1870", "1950", "1962"],
    correctAnswer: 0,
    explanation: "O dogma da Imaculada Conceição foi definido pelo Papa Pio IX em 1854."
  },
  {
    question: "Qual é o nome do período de 40 dias antes da Páscoa?",
    options: ["Advento", "Quaresma", "Pentecostes", "Epifania"],
    correctAnswer: 1,
    explanation: "A Quaresma é o período de 40 dias de preparação para a Páscoa."
  },
  {
    question: "Qual santo é padroeiro dos estudantes?",
    options: ["São José", "São Tomás de Aquino", "Santo Antônio", "São Francisco"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino é o padroeiro dos estudantes e universidades católicas."
  },
  {
    question: "Em que século foi construída a atual Basílica de São Pedro?",
    options: ["Século XV", "Século XVI", "Século XVII", "Século XVIII"],
    correctAnswer: 1,
    explanation: "A atual Basílica de São Pedro foi construída principalmente no século XVI."
  },
  {
    question: "Qual é o nome da primeira encíclica social da Igreja?",
    options: ["Rerum Novarum", "Quadragesimo Anno", "Mater et Magistra", "Pacem in Terris"],
    correctAnswer: 0,
    explanation: "Rerum Novarum (1891) de Leão XIII foi a primeira grande encíclica social da Igreja."
  },
  {
    question: "Qual é o número de anos de um Jubileu ordinário?",
    options: ["20", "25", "30", "50"],
    correctAnswer: 1,
    explanation: "Um Jubileu ordinário ocorre a cada 25 anos na Igreja Católica."
  }
];

export const difficultQuestions: Question[] = [
  {
    question: "Qual foi o tema central do Concílio de Trento (1545-1563)?",
    options: ["Reforma protestante", "Questões marianas", "Liturgia", "Missões"],
    correctAnswer: 0,
    explanation: "O Concílio de Trento foi convocado principalmente para responder à Reforma Protestante e definir doutrinas católicas."
  },
  {
    question: "Qual Padre da Igreja escreveu 'Confissões'?",
    options: ["São Jerônimo", "Santo Agostinho", "São João Crisóstomo", "São Gregório Magno"],
    correctAnswer: 1,
    explanation: "Santo Agostinho escreveu 'Confissões', uma das obras mais importantes da literatura cristã."
  },
  {
    question: "Em que ano foi definido o dogma da Assunção de Maria?",
    options: ["1854", "1870", "1950", "1962"],
    correctAnswer: 2,
    explanation: "O dogma da Assunção de Maria foi definido pelo Papa Pio XII em 1950."
  },
  {
    question: "Qual heresia foi condenada no Concílio de Niceia (325)?",
    options: ["Nestorianismo", "Arianismo", "Pelagianismo", "Donatismo"],
    correctAnswer: 1,
    explanation: "O Concílio de Niceia condenou o Arianismo, que negava a divindade de Cristo."
  },
  {
    question: "Qual é o nome da escola teológica fundada por São Tomás de Aquino?",
    options: ["Franciscana", "Agostiniana", "Tomista", "Escotista"],
    correctAnswer: 2,
    explanation: "A escola Tomista segue o pensamento filosófico-teológico de São Tomás de Aquino."
  },
  {
    question: "Qual papa definiu a infalibilidade papal em 1870?",
    options: ["Pio IX", "Leão XIII", "Pio X", "Bento XV"],
    correctAnswer: 0,
    explanation: "O Papa Pio IX definiu o dogma da infalibilidade papal no Concílio Vaticano I em 1870."
  },
  {
    question: "Qual é o nome técnico para o estudo dos últimos tempos?",
    options: ["Soteriologia", "Eclesiologia", "Escatologia", "Pneumatologia"],
    correctAnswer: 2,
    explanation: "Escatologia é o ramo da teologia que estuda os últimos tempos e o fim do mundo."
  },
  {
    question: "Qual heresia ensinou que Cristo tinha apenas natureza divina?",
    options: ["Arianismo", "Nestorianismo", "Monofisismo", "Pelagianismo"],
    correctAnswer: 2,
    explanation: "O Monofisismo ensinava que Cristo tinha apenas uma natureza (divina), negando sua humanidade."
  },
  {
    question: "Em que ano foi publicada a encíclica 'Humanae Vitae'?",
    options: ["1965", "1968", "1970", "1975"],
    correctAnswer: 1,
    explanation: "A encíclica 'Humanae Vitae' de Paulo VI foi publicada em 1968."
  },
  {
    question: "Qual é o nome da controvérsia sobre a graça entre jesuítas e dominicanos?",
    options: ["Querela das Investiduras", "Controvérsia De Auxiliis", "Cisma do Ocidente", "Reforma Gregoriana"],
    correctAnswer: 1,
    explanation: "A Controvérsia De Auxiliis foi um debate teológico sobre a graça divina e o livre arbítrio."
  },
  {
    question: "Qual teólogo medieval é conhecido pela prova ontológica da existência de Deus?",
    options: ["São Tomás de Aquino", "Santo Anselmo", "Duns Escoto", "Guilherme de Ockham"],
    correctAnswer: 1,
    explanation: "Santo Anselmo de Cantuária formulou o famoso argumento ontológico da existência de Deus."
  },
  {
    question: "Em que concílio foi definida a doutrina das duas naturezas de Cristo?",
    options: ["Niceia", "Constantinopla", "Éfeso", "Calcedônia"],
    correctAnswer: 3,
    explanation: "O Concílio de Calcedônia (451) definiu que Cristo tem duas naturezas, divina e humana."
  },
  {
    question: "Qual movimento espiritual foi fundado por São Bento de Núrsia?",
    options: ["Franciscanismo", "Monasticismo ocidental", "Jesuitismo", "Carmelitismo"],
    correctAnswer: 1,
    explanation: "São Bento fundou o monasticismo ocidental com sua Regra de São Bento."
  },
  {
    question: "Qual é o nome da teoria que explica como Cristo está presente na Eucaristia?",
    options: ["Transubstanciação", "Consubstanciação", "Impanação", "Metabolismo"],
    correctAnswer: 0,
    explanation: "A Transubstanciação explica teologicamente a presença real de Cristo na Eucaristia."
  },
  {
    question: "Qual papa instituiu o Index Librorum Prohibitorum?",
    options: ["Paulo III", "Paulo IV", "Pio IV", "Pio V"],
    correctAnswer: 1,
    explanation: "O Papa Paulo IV instituiu o Index Librorum Prohibitorum em 1559."
  },
  {
    question: "Qual é o nome da escola teológica que enfatiza a vontade divina?",
    options: ["Tomismo", "Escotismo", "Nominalismo", "Agostinismo"],
    correctAnswer: 1,
    explanation: "O Escotismo, seguindo Duns Escoto, enfatiza a primazia da vontade divina sobre o intelecto."
  },
  {
    question: "Em que ano foi assinada a Concordata de Worms?",
    options: ["1122", "1215", "1302", "1417"],
    correctAnswer: 0,
    explanation: "A Concordata de Worms foi assinada em 1122, encerrando a Querela das Investiduras."
  },
  {
    question: "Qual teólogo desenvolveu a teoria da satisfação sobre a Redenção?",
    options: ["Santo Anselmo", "São Tomás de Aquino", "Pedro Abelardo", "Hugo de São Vítor"],
    correctAnswer: 0,
    explanation: "Santo Anselmo desenvolveu a teoria da satisfação para explicar a obra redentora de Cristo."
  },
  {
    question: "Qual é o nome do tratado teológico mais famoso de São Tomás de Aquino?",
    options: ["Suma contra Gentios", "Suma Teológica", "Questões Disputadas", "Comentários às Sentenças"],
    correctAnswer: 1,
    explanation: "A Suma Teológica é a obra mais famosa e completa de São Tomás de Aquino."
  },
  {
    question: "Em que concílio foi condenado o Jansenismo?",
    options: ["Trento", "Vaticano I", "Constança", "Sens"],
    correctAnswer: 3,
    explanation: "O Jansenismo foi condenado principalmente no Sínodo de Sens (1727) e por várias bulas papais."
  }
];

// Função para obter perguntas aleatórias baseada na dificuldade
export const getRandomQuestions = (difficulty: 'Fácil' | 'Médio' | 'Difícil', count: number = 1): Question[] => {
  let questionPool: Question[];
  
  switch (difficulty) {
    case 'Fácil':
      questionPool = [...easyQuestions];
      break;
    case 'Médio':
      questionPool = [...mediumQuestions];
      break;
    case 'Difícil':
      questionPool = [...difficultQuestions];
      break;
    default:
      questionPool = [...easyQuestions];
  }
  
  // Embaralhar e retornar o número solicitado de perguntas
  const shuffled = questionPool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Função para obter perguntas seguindo um padrão de dificuldade
export const getQuestionsForPattern = (pattern: ('Fácil' | 'Médio' | 'Difícil')[]): Question[] => {
  const questions: Question[] = [];
  
  pattern.forEach(difficulty => {
    const randomQuestions = getRandomQuestions(difficulty, 1);
    if (randomQuestions.length > 0) {
      questions.push(randomQuestions[0]);
    }
  });
  
  return questions;
};
