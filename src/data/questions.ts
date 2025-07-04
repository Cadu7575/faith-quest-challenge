interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

// Perguntas Fáceis
const easyQuestions: Question[] = [
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
  }
];

// Perguntas Médias
const mediumQuestions: Question[] = [
  {
    id: 101,
    question: "Qual Papa convocou o Concílio Vaticano II?",
    options: ["Pio XII", "João XXIII", "Paulo VI", "João Paulo II"],
    correctAnswer: 1,
    explanation: "O Papa João XXIII convocou o Concílio Vaticano II em 1962, que trouxe importantes renovações para a Igreja.",
    difficulty: "Médio"
  },
  {
    id: 102,
    question: "Em que ano foi proclamado o dogma da Imaculada Conceição?",
    options: ["1854", "1858", "1870", "1950"],
    correctAnswer: 0,
    explanation: "O dogma da Imaculada Conceição foi proclamado pelo Papa Pio IX em 8 de dezembro de 1854.",
    difficulty: "Médio"
  },
  {
    id: 103,
    question: "Qual é o nome da encíclica social de Leão XIII?",
    options: ["Quadragesimo Anno", "Rerum Novarum", "Pacem in Terris", "Populorum Progressio"],
    correctAnswer: 1,
    explanation: "Rerum Novarum (1891) foi a primeira grande encíclica social da Igreja, tratando da questão operária.",
    difficulty: "Médio"
  },
  {
    id: 104,
    question: "Quantos livros tem a Bíblia Católica?",
    options: ["66", "72", "73", "76"],
    correctAnswer: 2,
    explanation: "A Bíblia Católica tem 73 livros: 46 do Antigo Testamento e 27 do Novo Testamento.",
    difficulty: "Médio"
  },
  {
    id: 105,
    question: "Qual santo é conhecido como 'Doutor da Igreja' e escreveu 'Confissões'?",
    options: ["São Tomás de Aquino", "Santo Agostinho", "São Jerônimo", "São João Crisóstomo"],
    correctAnswer: 1,
    explanation: "Santo Agostinho é um dos grandes Doutores da Igreja e autor das famosas 'Confissões'.",
    difficulty: "Médio"
  }
];

// Perguntas Difíceis
const hardQuestions: Question[] = [
  {
    id: 201,
    question: "Em que Concílio foi definido o dogma da infalibilidade papal?",
    options: ["Concílio de Trento", "Vaticano I", "Vaticano II", "Concílio de Niceia"],
    correctAnswer: 1,
    explanation: "O dogma da infalibilidade papal foi definido no Concílio Vaticano I, em 1870, durante o pontificado de Pio IX.",
    difficulty: "Difícil"
  },
  {
    id: 202,
    question: "Qual é o nome da constituição dogmática sobre a Igreja do Vaticano II?",
    options: ["Gaudium et Spes", "Lumen Gentium", "Dei Verbum", "Sacrosanctum Concilium"],
    correctAnswer: 1,
    explanation: "Lumen Gentium é a constituição dogmática sobre a Igreja promulgada no Concílio Vaticano II.",
    difficulty: "Difícil"
  },
  {
    id: 203,
    question: "Quantos cânones tem o atual Código de Direito Canônico?",
    options: ["1750", "1752", "1755", "1758"],
    correctAnswer: 1,
    explanation: "O Código de Direito Canônico promulgado em 1983 por João Paulo II contém 1752 cânones.",
    difficulty: "Difícil"
  },
  {
    id: 204,
    question: "Qual Papa instituiu a festa do Sagrado Coração de Jesus?",
    options: ["Clemente XIV", "Pio IX", "Leão XIII", "Pio XI"],
    correctAnswer: 0,
    explanation: "O Papa Clemente XIV instituiu oficialmente a festa do Sagrado Coração de Jesus em 1765.",
    difficulty: "Difícil"
  },
  {
    id: 205,
    question: "Em que ano foi promulgado o Catecismo da Igreja Católica atual?",
    options: ["1985", "1990", "1992", "1995"],
    correctAnswer: 2,
    explanation: "O Catecismo da Igreja Católica foi promulgado pelo Papa João Paulo II em 1992.",
    difficulty: "Difícil"
  }
];

// Adicionar mais 100 perguntas únicas
const additionalQuestions: Question[] = [
  {
    id: 2001,
    question: "Qual é o nome da oração que Jesus ensinou aos discípulos?",
    options: ["Ave Maria", "Pai Nosso", "Glória ao Pai", "Credo"],
    correctAnswer: 1,
    explanation: "Jesus ensinou o Pai Nosso aos seus discípulos quando eles pediram para aprender a orar.",
    difficulty: "Fácil"
  },
  {
    id: 2002,
    question: "Quantos apóstolos Jesus escolheu?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    explanation: "Jesus escolheu 12 apóstolos para serem seus seguidores mais próximos.",
    difficulty: "Fácil"
  },
  {
    id: 2003,
    question: "Em que cidade Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus nasceu em Belém, na Judeia, conforme profetizado no Antigo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 2004,
    question: "Quem batizou Jesus no rio Jordão?",
    options: ["Pedro", "João Batista", "André", "Tiago"],
    correctAnswer: 1,
    explanation: "João Batista batizou Jesus no rio Jordão, marcando o início do ministério público de Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 2005,
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Levítico", "Gênesis", "Números"],
    correctAnswer: 2,
    explanation: "Gênesis é o primeiro livro da Bíblia, que narra a criação do mundo.",
    difficulty: "Fácil"
  },
  {
    id: 2006,
    question: "Quem foi o primeiro papa da Igreja Católica?",
    options: ["Paulo", "Pedro", "João", "Tiago"],
    correctAnswer: 1,
    explanation: "São Pedro foi o primeiro papa, escolhido por Jesus como líder dos apóstolos.",
    difficulty: "Fácil"
  },
  {
    id: 2007,
    question: "Em que dia da semana Jesus ressuscitou?",
    options: ["Sábado", "Domingo", "Segunda-feira", "Sexta-feira"],
    correctAnswer: 1,
    explanation: "Jesus ressuscitou no domingo, razão pela qual celebramos este dia como o Dia do Senhor.",
    difficulty: "Fácil"
  },
  {
    id: 2008,
    question: "Quantos são os mandamentos que Deus deu a Moisés?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
    explanation: "Deus deu dez mandamentos a Moisés no Monte Sinai.",
    difficulty: "Fácil"
  },
  {
    id: 2009,
    question: "Qual é o sacramento que nos torna filhos de Deus?",
    options: ["Crisma", "Batismo", "Eucaristia", "Confissão"],
    correctAnswer: 1,
    explanation: "O Batismo é o sacramento que nos purifica do pecado original e nos torna filhos de Deus.",
    difficulty: "Fácil"
  },
  {
    id: 2010,
    question: "Quem escreveu a maior parte das cartas do Novo Testamento?",
    options: ["Pedro", "João", "Paulo", "Tiago"],
    correctAnswer: 2,
    explanation: "São Paulo escreveu a maior parte das cartas do Novo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 2011,
    question: "Qual foi o primeiro milagre de Jesus?",
    options: ["Multiplicação dos pães", "Transformar água em vinho", "Cura de um cego", "Ressurreição de Lázaro"],
    correctAnswer: 1,
    explanation: "O primeiro milagre de Jesus foi transformar água em vinho nas bodas de Caná.",
    difficulty: "Médio"
  },
  {
    id: 2012,
    question: "Quantos anos tinha Jesus quando começou seu ministério público?",
    options: ["25", "28", "30", "33"],
    correctAnswer: 2,
    explanation: "Jesus tinha cerca de 30 anos quando começou seu ministério público.",
    difficulty: "Médio"
  },
  {
    id: 2013,
    question: "Qual é o nome da mãe de João Batista?",
    options: ["Maria", "Isabel", "Ana", "Marta"],
    correctAnswer: 1,
    explanation: "Isabel era a mãe de João Batista e prima de Maria.",
    difficulty: "Médio"
  },
  {
    id: 2014,
    question: "Em qual monte Jesus foi transfigurado?",
    options: ["Monte Sinai", "Monte das Oliveiras", "Monte Tabor", "Monte Carmelo"],
    correctAnswer: 2,
    explanation: "A Transfiguração de Jesus aconteceu no Monte Tabor.",
    difficulty: "Médio"
  },
  {
    id: 2015,
    question: "Qual apóstolo duvidou da ressurreição de Jesus?",
    options: ["Pedro", "João", "Tomé", "André"],
    correctAnswer: 2,
    explanation: "Tomé duvidou da ressurreição até tocar as chagas de Jesus.",
    difficulty: "Médio"
  },
  {
    id: 2016,
    question: "Quantos peixes foram pescados na pesca milagrosa?",
    options: ["144", "150", "153", "160"],
    correctAnswer: 2,
    explanation: "Foram pescados 153 peixes grandes na pesca milagrosa após a ressurreição.",
    difficulty: "Médio"
  },
  {
    id: 2017,
    question: "Qual é o nome do jardim onde Jesus foi preso?",
    options: ["Getsêmani", "Éden", "Oliveira", "Cedron"],
    correctAnswer: 0,
    explanation: "Jesus foi preso no jardim do Getsêmani, após orar intensamente.",
    difficulty: "Médio"
  },
  {
    id: 2018,
    question: "Quem carregou a cruz de Jesus?",
    options: ["Pedro", "João", "Simão de Cirene", "José de Arimateia"],
    correctAnswer: 2,
    explanation: "Simão de Cirene foi obrigado a carregar a cruz de Jesus.",
    difficulty: "Médio"
  },
  {
    id: 2019,
    question: "Qual é o significado da palavra 'Eucaristia'?",
    options: ["Comunhão", "Ação de graças", "Partilha", "Sacrifício"],
    correctAnswer: 1,
    explanation: "Eucaristia significa 'ação de graças' em grego.",
    difficulty: "Médio"
  },
  {
    id: 2020,
    question: "Em que ano foi proclamado o dogma da Imaculada Conceição?",
    options: ["1850", "1854", "1858", "1862"],
    correctAnswer: 1,
    explanation: "O dogma da Imaculada Conceição foi proclamado pelo Papa Pio IX em 1854.",
    difficulty: "Médio"
  },
  {
    id: 2021,
    question: "Qual é o nome do documento que estabeleceu a liberdade religiosa no Concílio Vaticano II?",
    options: ["Gaudium et Spes", "Lumen Gentium", "Dignitatis Humanae", "Dei Verbum"],
    correctAnswer: 2,
    explanation: "Dignitatis Humanae é a declaração sobre a liberdade religiosa do Concílio Vaticano II.",
    difficulty: "Difícil"
  },
  {
    id: 2022,
    question: "Quem foi o Papa que convocou o Concílio Vaticano II?",
    options: ["Pio XII", "João XXIII", "Paulo VI", "João Paulo I"],
    correctAnswer: 1,
    explanation: "O Papa João XXIII convocou o Concílio Vaticano II em 1962.",
    difficulty: "Difícil"
  },
  {
    id: 2023,
    question: "Em que ano terminou o Concílio de Trento?",
    options: ["1560", "1563", "1565", "1570"],
    correctAnswer: 1,
    explanation: "O Concílio de Trento terminou em 1563, após 18 anos de duração.",
    difficulty: "Difícil"
  },
  {
    id: 2024,
    question: "Qual é o nome da encíclica de Leão XIII sobre a questão social?",
    options: ["Quadragesimo Anno", "Rerum Novarum", "Pacem in Terris", "Populorum Progressio"],
    correctAnswer: 1,
    explanation: "Rerum Novarum (1891) foi a primeira encíclica social da Igreja Católica.",
    difficulty: "Difícil"
  },
  {
    id: 2025,
    question: "Quantos cânones tem o Código de Direito Canônico atual?",
    options: ["1750", "1752", "1754", "1758"],
    correctAnswer: 1,
    explanation: "O Código de Direito Canônico de 1983 tem 1752 cânones.",
    difficulty: "Difícil"
  },
  {
    id: 2026,
    question: "Qual foi o primeiro Concílio Ecumênico da Igreja?",
    options: ["Constantinopla I", "Niceia I", "Éfeso", "Calcedônia"],
    correctAnswer: 1,
    explanation: "O Concílio de Niceia I (325 d.C.) foi o primeiro Concílio Ecumênico.",
    difficulty: "Difícil"
  },
  {
    id: 2027,
    question: "Em que ano foi estabelecido o celibato sacerdotal obrigatório no Ocidente?",
    options: ["1074", "1075", "1076", "1077"],
    correctAnswer: 1,
    explanation: "O celibato sacerdotal foi estabelecido obrigatoriamente em 1075 pelo Papa Gregório VII.",
    difficulty: "Difícil"
  },
  {
    id: 2028,
    question: "Qual santo é conhecido como o 'Doutor Angélico'?",
    options: ["Santo Agostinho", "São Tomás de Aquino", "São Boaventura", "Santo Alberto Magno"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino é conhecido como o 'Doutor Angélico' por sua teologia sistemática.",
    difficulty: "Difícil"
  },
  {
    id: 2029,
    question: "Quantos livros deuterocanônicos a Igreja Católica reconhece no Antigo Testamento?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 1,
    explanation: "A Igreja Católica reconhece 7 livros deuterocanônicos no Antigo Testamento.",
    difficulty: "Difícil"
  },
  {
    id: 2030,
    question: "Em que concílio foi definido o cânon bíblico católico?",
    options: ["Trento", "Vaticano I", "Florença", "Latrão IV"],
    correctAnswer: 0,
    explanation: "O Concílio de Trento definiu oficialmente o cânon bíblico católico em 1546.",
    difficulty: "Difícil"
  },
  {
    id: 2031,
    question: "Qual é o nome da estrela que guiou os Magos?",
    options: ["Estrela de Davi", "Estrela de Belém", "Estrela do Oriente", "Estrela Polar"],
    correctAnswer: 1,
    explanation: "A Estrela de Belém guiou os Reis Magos até Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 2032,
    question: "Quantos anos durou o êxodo do povo de Israel no deserto?",
    options: ["30", "35", "40", "45"],
    correctAnswer: 2,
    explanation: "O povo de Israel passou 40 anos no deserto antes de chegar à Terra Prometida.",
    difficulty: "Fácil"
  },
  {
    id: 2033,
    question: "Qual é o nome do anjo que anunciou a Maria que ela seria mãe de Jesus?",
    options: ["Miguel", "Gabriel", "Rafael", "Uriel"],
    correctAnswer: 1,
    explanation: "O anjo Gabriel anunciou a Maria na Anunciação que ela seria mãe do Salvador.",
    difficulty: "Fácil"
  },
  {
    id: 2034,
    question: "Em que mar Jesus acalmou a tempestade?",
    options: ["Mar Vermelho", "Mar Mediterrâneo", "Mar da Galileia", "Mar Morto"],
    correctAnswer: 2,
    explanation: "Jesus acalmou a tempestade no Mar da Galileia.",
    difficulty: "Fácil"
  },
  {
    id: 2035,
    question: "Quem negou Jesus três vezes?",
    options: ["Judas", "Pedro", "Tomé", "Tiago"],
    correctAnswer: 1,
    explanation: "Pedro negou Jesus três vezes antes do galo cantar, como Jesus havia predito.",
    difficulty: "Fácil"
  },
  {
    id: 2036,
    question: "Qual é o nome do monte onde Jesus foi crucificado?",
    options: ["Calvário", "Sinai", "Tabor", "Sião"],
    correctAnswer: 0,
    explanation: "Jesus foi crucificado no monte Calvário, também chamado Gólgota.",
    difficulty: "Fácil"
  },
  {
    id: 2037,
    question: "Quantos pães e peixes Jesus usou na multiplicação?",
    options: ["3 pães e 2 peixes", "5 pães e 2 peixes", "7 pães e 3 peixes", "4 pães e 2 peixes"],
    correctAnswer: 1,
    explanation: "Jesus multiplicou 5 pães e 2 peixes para alimentar cinco mil pessoas.",
    difficulty: "Fácil"
  },
  {
    id: 2038,
    question: "Qual é o nome do imposto que Jesus mandou Pedro buscar na boca do peixe?",
    options: ["Dízimo", "Tributo", "Oferta", "Dracma"],
    correctAnswer: 1,
    explanation: "Jesus mandou Pedro buscar o tributo (imposto do templo) na boca do peixe.",
    difficulty: "Médio"
  },
  {
    id: 2039,
    question: "Quem foi o sumo sacerdote que interrogou Jesus?",
    options: ["Anás", "Caifás", "Malco", "Gamaliel"],
    correctAnswer: 1,
    explanation: "Caifás foi o sumo sacerdote que interrogou Jesus durante o julgamento.",
    difficulty: "Médio"
  },
  {
    id: 2040,
    question: "Em que cidade ficava a casa de Marta e Maria?",
    options: ["Betânia", "Betfagé", "Betsaida", "Betel"],
    correctAnswer: 0,
    explanation: "Marta e Maria moravam em Betânia, onde Jesus era frequentemente hospedado.",
    difficulty: "Médio"
  },
  {
    id: 2041,
    question: "Qual era a profissão de José, pai adotivo de Jesus?",
    options: ["Pescador", "Carpinteiro", "Pastor", "Comerciante"],
    correctAnswer: 1,
    explanation: "José era carpinteiro, e Jesus aprendeu o ofício com ele.",
    difficulty: "Fácil"
  },
  {
    id: 2042,
    question: "Quantos anos Jesus permaneceu no Egito?",
    options: ["Não se sabe ao certo", "2 anos", "3 anos", "5 anos"],
    correctAnswer: 0,
    explanation: "A Bíblia não especifica exatamente quanto tempo Jesus permaneceu no Egito.",
    difficulty: "Médio"
  },
  {
    id: 2043,
    question: "Qual é o nome da oração que termina com 'Amém'?",
    options: ["Todas as orações cristãs", "Só o Pai Nosso", "Só a Ave Maria", "Só o Credo"],
    correctAnswer: 0,
    explanation: "Tradicionalmente, todas as orações cristãs terminam com 'Amém', que significa 'assim seja'.",
    difficulty: "Fácil"
  },
  {
    id: 2044,
    question: "Em que dia da semana Jesus foi crucificado?",
    options: ["Quinta-feira", "Sexta-feira", "Sábado", "Domingo"],
    correctAnswer: 1,
    explanation: "Jesus foi crucificado na Sexta-feira Santa.",
    difficulty: "Fácil"
  },
  {
    id: 2045,
    question: "Qual é o nome do jardim onde Adão e Eva viviam?",
    options: ["Getsêmani", "Éden", "Paraíso", "Jordão"],
    correctAnswer: 1,
    explanation: "Adão e Eva viviam no jardim do Éden antes da queda.",
    difficulty: "Fácil"
  },
  {
    id: 2046,
    question: "Quem construiu a arca para salvar-se do dilúvio?",
    options: ["Abraão", "Noé", "Moisés", "Davi"],
    correctAnswer: 1,
    explanation: "Noé construiu a arca por ordem de Deus para salvar sua família e os animais do dilúvio.",
    difficulty: "Fácil"
  },
  {
    id: 2047,
    question: "Qual é o nome do rio onde Jesus foi batizado?",
    options: ["Rio Nilo", "Rio Jordão", "Rio Eufrates", "Rio Tigre"],
    correctAnswer: 1,
    explanation: "Jesus foi batizado no rio Jordão por João Batista.",
    difficulty: "Fácil"
  },
  {
    id: 2048,
    question: "Quantos frutos do Espírito Santo são mencionados por São Paulo?",
    options: ["7", "9", "12", "10"],
    correctAnswer: 1,
    explanation: "São Paulo menciona 9 frutos do Espírito Santo em Gálatas 5:22-23.",
    difficulty: "Médio"
  },
  {
    id: 2049,
    question: "Qual é o nome da cidade onde Jesus realizou seu primeiro milagre?",
    options: ["Cafarnaum", "Caná", "Nazaré", "Jerusalém"],
    correctAnswer: 1,
    explanation: "Jesus realizou seu primeiro milagre em Caná da Galileia, transformando água em vinho.",
    difficulty: "Médio"
  },
  {
    id: 2050,
    question: "Quem foi o discípulo que Jesus amava?",
    options: ["Pedro", "João", "Tiago", "André"],
    correctAnswer: 1,
    explanation: "João é tradicionalmente identificado como 'o discípulo que Jesus amava'.",
    difficulty: "Médio"
  },
  {
    id: 2051,
    question: "Qual foi a primeira palavra de Jesus na cruz?",
    options: ["Pai, perdoa-lhes", "Tenho sede", "Está consumado", "Deus meu, por que me abandonaste"],
    correctAnswer: 0,
    explanation: "A primeira palavra de Jesus na cruz foi 'Pai, perdoa-lhes, porque não sabem o que fazem'.",
    difficulty: "Médio"
  },
  {
    id: 2052,
    question: "Em que ano foi proclamado o dogma da Assunção de Maria?",
    options: ["1950", "1951", "1952", "1953"],
    correctAnswer: 0,
    explanation: "O dogma da Assunção de Maria foi proclamado pelo Papa Pio XII em 1950.",
    difficulty: "Difícil"
  },
  {
    id: 2053,
    question: "Qual Papa instituiu a Festa do Corpus Christi?",
    options: ["Urbano IV", "Gregório IX", "Inocêncio IV", "Alexandre IV"],
    correctAnswer: 0,
    explanation: "O Papa Urbano IV instituiu a Festa do Corpus Christi em 1264.",
    difficulty: "Difícil"
  },
  {
    id: 2054,
    question: "Em que século viveu São Tomás de Aquino?",
    options: ["Século XII", "Século XIII", "Século XIV", "Século XV"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino viveu no século XIII (1225-1274).",
    difficulty: "Difícil"
  },
  {
    id: 2055,
    question: "Qual é o nome da primeira encíclica de João Paulo II?",
    options: ["Redemptor Hominis", "Dives in Misericordia", "Laborem Exercens", "Sollicitudo Rei Socialis"],
    correctAnswer: 0,
    explanation: "Redemptor Hominis (1979) foi a primeira encíclica do Papa João Paulo II.",
    difficulty: "Difícil"
  },
  {
    id: 2056,
    question: "Quantos artigos tem o Catecismo da Igreja Católica?",
    options: ["2865", "2870", "2875", "2880"],
    correctAnswer: 0,
    explanation: "O Catecismo da Igreja Católica tem 2865 artigos.",
    difficulty: "Difícil"
  },
  {
    id: 2057,
    question: "Em que ano foi promulgado o Código de Direito Canônico atual?",
    options: ["1983", "1984", "1985", "1986"],
    correctAnswer: 0,
    explanation: "O atual Código de Direito Canônico foi promulgado por João Paulo II em 1983.",
    difficulty: "Difícil"
  },
  {
    id: 2058,
    question: "Qual foi o último Papa a ser canonizado?",
    options: ["Pio X", "João XXIII", "João Paulo II", "Paulo VI"],
    correctAnswer: 2,
    explanation: "João Paulo II foi canonizado em 2014 e é o último Papa a ser declarado santo.",
    difficulty: "Difícil"
  },
  {
    id: 2059,
    question: "Em que ano terminou o Concílio Vaticano II?",
    options: ["1963", "1964", "1965", "1966"],
    correctAnswer: 2,
    explanation: "O Concílio Vaticano II terminou em 8 de dezembro de 1965.",
    difficulty: "Difícil"
  },
  {
    id: 2060,
    question: "Qual é o nome do documento sobre a liturgia do Concílio Vaticano II?",
    options: ["Sacrosanctum Concilium", "Gaudium et Spes", "Lumen Gentium", "Dei Verbum"],
    correctAnswer: 0,
    explanation: "Sacrosanctum Concilium é a constituição sobre a liturgia do Concílio Vaticano II.",
    difficulty: "Difícil"
  },
  {
    id: 2061,
    question: "Quantos salmos existem na Bíblia?",
    options: ["147", "148", "149", "150"],
    correctAnswer: 3,
    explanation: "Existem 150 salmos no livro dos Salmos na Bíblia.",
    difficulty: "Médio"
  },
  {
    id: 2062,
    question: "Qual é o menor livro da Bíblia?",
    options: ["Filemom", "2 João", "3 João", "Judas"],
    correctAnswer: 2,
    explanation: "3 João é o menor livro da Bíblia, com apenas 14 versículos.",
    difficulty: "Médio"
  },
  {
    id: 2063,
    question: "Quem escreveu o livro do Apocalipse?",
    options: ["João apóstolo", "João Batista", "João Evangelista", "João de Patmos"],
    correctAnswer: 0,
    explanation: "O livro do Apocalipse foi escrito pelo apóstolo João na ilha de Patmos.",
    difficulty: "Médio"
  },
  {
    id: 2064,
    question: "Em que ilha João escreveu o Apocalipse?",
    options: ["Chipre", "Creta", "Patmos", "Malta"],
    correctAnswer: 2,
    explanation: "João escreveu o Apocalipse enquanto estava exilado na ilha de Patmos.",
    difficulty: "Médio"
  },
  {
    id: 2065,
    question: "Qual é o nome da oração mariana rezada às 6h, 12h e 18h?",
    options: ["Ave Maria", "Angelus", "Regina Coeli", "Salve Rainha"],
    correctAnswer: 1,
    explanation: "O Angelus é a oração mariana tradicional rezada três vezes ao dia.",
    difficulty: "Médio"
  },
  {
    id: 2066,
    question: "Quantas Ave Marias se reza em cada dezena do Rosário?",
    options: ["8", "9", "10", "11"],
    correctAnswer: 2,
    explanation: "Em cada dezena do Rosário rezamos 10 Ave Marias.",
    difficulty: "Fácil"
  },
  {
    id: 2067,
    question: "Qual é o nome do primeiro livro do Novo Testamento?",
    options: ["Marcos", "Mateus", "Lucas", "João"],
    correctAnswer: 1,
    explanation: "O Evangelho de Mateus é o primeiro livro do Novo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 2068,
    question: "Quem foi o primeiro mártir cristão?",
    options: ["Pedro", "Paulo", "Estêvão", "Tiago"],
    correctAnswer: 2,
    explanation: "Santo Estêvão foi o primeiro mártir cristão, apedrejado por sua fé.",
    difficulty: "Médio"
  },
  {
    id: 2069,
    question: "Em que cidade Paulo foi convertido?",
    options: ["Jerusalém", "Damasco", "Antioquia", "Tarso"],
    correctAnswer: 1,
    explanation: "Paulo foi convertido no caminho para Damasco, onde teve a visão de Jesus.",
    difficulty: "Médio"
  },
  {
    id: 2070,
    question: "Qual é o nome da festa que celebra a descida do Espírito Santo?",
    options: ["Ascensão", "Pentecostes", "Epifania", "Anunciação"],
    correctAnswer: 1,
    explanation: "Pentecostes celebra a descida do Espírito Santo sobre os apóstolos.",
    difficulty: "Fácil"
  },
  {
    id: 2071,
    question: "Quantos dias após a Páscoa se celebra a Ascensão?",
    options: ["30", "35", "39", "40"],
    correctAnswer: 3,
    explanation: "A Ascensão é celebrada 40 dias após a Páscoa.",
    difficulty: "Médio"
  },
  {
    id: 2072,
    question: "Qual é o nome do período de preparação para o Natal?",
    options: ["Quaresma", "Advento", "Epifania", "Tempo Comum"],
    correctAnswer: 1,
    explanation: "O Advento é o período de 4 semanas de preparação para o Natal.",
    difficulty: "Fácil"
  },
  {
    id: 2073,
    question: "Quantas semanas dura o tempo do Advento?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "O tempo do Advento dura 4 semanas antes do Natal.",
    difficulty: "Fácil"
  },
  {
    id: 2074,
    question: "Qual é a cor litúrgica do Advento?",
    options: ["Branco", "Verde", "Roxo", "Vermelho"],
    correctAnswer: 2,
    explanation: "A cor litúrgica do Advento é o roxo, simbolizando penitência e preparação.",
    difficulty: "Médio"
  },
  {
    id: 2075,
    question: "Em que dia se celebra a Epifania?",
    options: ["5 de janeiro", "6 de janeiro", "7 de janeiro", "8 de janeiro"],
    correctAnswer: 1,
    explanation: "A Epifania é celebrada em 6 de janeiro, festa dos Reis Magos.",
    difficulty: "Médio"
  },
  {
    id: 2076,
    question: "Qual é o nome dos três Reis Magos?",
    options: ["Gaspar, Melchior e Baltasar", "Pedro, Paulo e João", "Abraão, Isaac e Jacó", "Adão, Abel e Noé"],
    correctAnswer: 0,
    explanation: "Os três Reis Magos são tradicionalmente chamados Gaspar, Melchior e Baltasar.",
    difficulty: "Fácil"
  },
  {
    id: 2077,
    question: "Que presentes os Reis Magos ofereceram a Jesus?",
    options: ["Prata, bronze e ferro", "Ouro, incenso e mirra", "Trigo, vinho e azeite", "Pão, peixe e vinho"],
    correctAnswer: 1,
    explanation: "Os Reis Magos ofereceram ouro, incenso e mirra ao menino Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 2078,
    question: "Qual é o significado do ouro oferecido pelos Magos?",
    options: ["Realeza", "Divindade", "Sacrifício", "Pureza"],
    correctAnswer: 0,
    explanation: "O ouro simboliza a realeza de Jesus como Rei dos reis.",
    difficulty: "Médio"
  },
  {
    id: 2079,
    question: "Qual é o significado do incenso oferecido pelos Magos?",
    options: ["Realeza", "Divindade", "Sacrifício", "Pureza"],
    correctAnswer: 1,
    explanation: "O incenso simboliza a divindade de Jesus, usado no culto a Deus.",
    difficulty: "Médio"
  },
  {
    id: 2080,
    question: "Qual é o significado da mirra oferecida pelos Magos?",
    options: ["Realeza", "Divindade", "Sacrifício", "Pureza"],
    correctAnswer: 2,
    explanation: "A mirra simboliza o sacrifício de Jesus, usada para embalsamar os mortos.",
    difficulty: "Médio"
  },
  {
    id: 2081,
    question: "Quantos dias Jesus jejuou no deserto?",
    options: ["30", "35", "40", "50"],
    correctAnswer: 2,
    explanation: "Jesus jejuou 40 dias no deserto antes de começar seu ministério público.",
    difficulty: "Fácil"
  },
  {
    id: 2082,
    question: "Quem tentou Jesus no deserto?",
    options: ["Demônio", "Satanás", "Diabo", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Jesus foi tentado por Satanás (também chamado demônio ou diabo) no deserto.",
    difficulty: "Fácil"
  },
  {
    id: 2083,
    question: "Qual foi a primeira tentação de Jesus no deserto?",
    options: ["Transformar pedras em pão", "Pular do templo", "Adorar Satanás", "Multiplicar pães"],
    correctAnswer: 0,
    explanation: "A primeira tentação foi transformar pedras em pão para matar a fome.",
    difficulty: "Médio"
  },
  {
    id: 2084,
    question: "Qual foi a resposta de Jesus à primeira tentação?",
    options: ["Não só de pão vive o homem", "Não tentarás o Senhor", "Vai-te, Satanás", "Está escrito"],
    correctAnswer: 0,
    explanation: "Jesus respondeu: 'Não só de pão vive o homem, mas de toda palavra que sai da boca de Deus'.",
    difficulty: "Médio"
  },
  {
    id: 2085,
    question: "Em que monte Satanás mostrou todos os reinos a Jesus?",
    options: ["Monte Sinai", "Monte das Oliveiras", "Monte muito alto", "Monte Tabor"],
    correctAnswer: 2,
    explanation: "A Bíblia menciona que Satanás levou Jesus a um monte muito alto.",
    difficulty: "Médio"
  },
  {
    id: 2086,
    question: "Quantas vezes Pedro negou Jesus?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Pedro negou Jesus três vezes, como o próprio Jesus havia profetizado.",
    difficulty: "Fácil"
  },
  {
    id: 2087,
    question: "Qual animal cantou quando Pedro negou Jesus?",
    options: ["Galo", "Passarinho", "Pomba", "Águia"],
    correctAnswer: 0,
    explanation: "O galo cantou após Pedro negar Jesus pela terceira vez.",
    difficulty: "Fácil"
  },
  {
    id: 2088,
    question: "Quantas moedas de prata Judas recebeu para trair Jesus?",
    options: ["20", "25", "30", "35"],
    correctAnswer: 2,
    explanation: "Judas recebeu 30 moedas de prata para entregar Jesus aos sacerdotes.",
    difficulty: "Fácil"
  },
  {
    id: 2089,
    question: "Como Judas identificou Jesus para os soldados?",
    options: ["Apontou com o dedo", "Deu um beijo", "Chamou pelo nome", "Acendeu uma tocha"],
    correctAnswer: 1,
    explanation: "Judas identificou Jesus dando-lhe um beijo no jardim do Getsêmani.",
    difficulty: "Fácil"
  },
  {
    id: 2090,
    question: "Qual foi o fim de Judas Iscariotes?",
    options: ["Foi perdoado", "Fugiu para outro país", "Enforcou-se", "Foi preso"],
    correctAnswer: 2,
    explanation: "Judas Iscariotes se enforcou após trair Jesus e se arrepender do que fez.",
    difficulty: "Médio"
  },
  {
    id: 2091,
    question: "Quem foi escolhido para substituir Judas entre os doze apóstolos?",
    options: ["Paulo", "Barnabé", "Matias", "Marcos"],
    correctAnswer: 2,
    explanation: "Matias foi escolhido por sorteio para substituir Judas entre os doze apóstolos.",
    difficulty: "Médio"
  },
  {
    id: 2092,
    question: "Quantos evangelhos existem no Novo Testamento?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "Existem quatro evangelhos no Novo Testamento: Mateus, Marcos, Lucas e João.",
    difficulty: "Fácil"
  },
  {
    id: 2093,
    question: "Qual evangelista é representado pelo símbolo do leão?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correctAnswer: 1,
    explanation: "São Marcos é representado pelo símbolo do leão.",
    difficulty: "Médio"
  },
  {
    id: 2094,
    question: "Qual evangelista é representado pelo símbolo da águia?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correctAnswer: 3,
    explanation: "São João é representado pelo símbolo da águia.",
    difficulty: "Médio"
  },
  {
    id: 2095,
    question: "Qual evangelista é representado pelo símbolo do touro?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correctAnswer: 2,
    explanation: "São Lucas é representado pelo símbolo do touro.",
    difficulty: "Médio"
  },
  {
    id: 2096,
    question: "Qual evangelista é representado pelo símbolo do homem?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correctAnswer: 0,
    explanation: "São Mateus é representado pelo símbolo do homem (ou anjo).",
    difficulty: "Médio"
  },
  {
    id: 2097,
    question: "Qual é o evangelho mais longo?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correctAnswer: 2,
    explanation: "O Evangelho de Lucas é o mais longo dos quatro evangelhos.",
    difficulty: "Médio"
  },
  {
    id: 2098,
    question: "Qual é o evangelho mais curto?",
    options: ["Mateus", "Marcos", "Lucas", "João"],
    correctAnswer: 1,
    explanation: "O Evangelho de Marcos é o mais curto dos quatro evangelhos.",
    difficulty: "Médio"
  },
  {
    id: 2099,
    question: "Quantos capítulos tem o Evangelho de João?",
    options: ["19", "20", "21", "22"],
    correctAnswer: 2,
    explanation: "O Evangelho de João tem 21 capítulos.",
    difficulty: "Médio"
  },
  {
    id: 2100,
    question: "Em que língua foi escrito originalmente o Novo Testamento?",
    options: ["Hebraico", "Aramaico", "Grego", "Latim"],
    correctAnswer: 2,
    explanation: "O Novo Testamento foi escrito originalmente em grego koiné.",
    difficulty: "Médio"
  }
];

// Sistema de controle de perguntas usadas
let usedQuestionIds: Set<number> = new Set();
let sessionId: string = Math.random().toString(36).substring(2, 15);

// Função para obter todas as perguntas
export const getAllQuestions = (): Question[] => {
  return [...easyQuestions, ...mediumQuestions, ...hardQuestions, ...additionalQuestions];
};

// Função para obter perguntas para uma fase (10 perguntas aleatórias sem repetição)
export const getQuestionsForPhase = (): Question[] => {
  const allQuestions = getAllQuestions();
  const availableQuestions = allQuestions.filter(q => !usedQuestionIds.has(q.id));
  
  // Se não há perguntas suficientes disponíveis, resetar o sistema
  if (availableQuestions.length < 10) {
    console.log('🔄 RESETANDO sistema de perguntas - todas foram usadas!');
    usedQuestionIds.clear();
    sessionId = Math.random().toString(36).substring(2, 15);
    return getQuestionsForPhase(); // Recursão para tentar novamente
  }
  
  // Embaralhar e pegar 10 perguntas
  const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
  const selectedQuestions = shuffled.slice(0, 10);
  
  // Marcar as perguntas como usadas
  selectedQuestions.forEach(q => usedQuestionIds.add(q.id));
  
  return selectedQuestions;
};

// Função para obter estatísticas das perguntas
export const getQuestionStats = () => {
  const totalQuestions = getAllQuestions().length;
  const usedQuestions = usedQuestionIds.size;
  const remainingQuestions = totalQuestions - usedQuestions;
  
  return {
    totalQuestions,
    usedQuestions,
    remainingQuestions,
    sessionId
  };
};

// Função para resetar o sistema de perguntas usadas
export const resetUsedQuestions = () => {
  usedQuestionIds.clear();
  sessionId = Math.random().toString(36).substring(2, 15);
  console.log('🔄 Sistema de perguntas resetado!');
};
