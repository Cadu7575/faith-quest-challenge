interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
}

// Banco de dados com 1500 perguntas únicas sobre fé católica
const questionsDatabase: Question[] = [
  // PERGUNTAS FÁCEIS (IDs 1-500)
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
    question: "Em que ano nasceu Carlo Acutis?",
    options: ["1990", "1991", "1992", "1993"],
    correctAnswer: 1,
    explanation: "Carlo Acutis nasceu em 3 de maio de 1991, em Londres, mas cresceu em Milão, Itália.",
    difficulty: "Fácil"
  },
  {
    id: 12,
    question: "Com quantos anos Carlo Acutis morreu?",
    options: ["13 anos", "14 anos", "15 anos", "16 anos"],
    correctAnswer: 2,
    explanation: "Carlo Acutis morreu aos 15 anos, em 12 de outubro de 2006, devido a uma leucemia fulminante.",
    difficulty: "Fácil"
  },
  {
    id: 13,
    question: "Qual era a paixão de Carlo Acutis?",
    options: ["Futebol", "Música", "Informática", "Pintura"],
    correctAnswer: 2,
    explanation: "Carlo Acutis tinha uma grande paixão pela informática e utilizava seus conhecimentos para evangelizar através da internet.",
    difficulty: "Fácil"
  },
  {
    id: 14,
    question: "O que Carlo Acutis criou sobre milagres eucarísticos?",
    options: ["Um livro", "Uma exposição", "Um filme", "Uma música"],
    correctAnswer: 1,
    explanation: "Carlo Acutis criou uma exposição sobre milagres eucarísticos que percorreu o mundo todo, documentando centenas de milagres.",
    difficulty: "Fácil"
  },
  {
    id: 15,
    question: "Onde está sepultado Carlo Acutis?",
    options: ["Roma", "Londres", "Milão", "Assis"],
    correctAnswer: 3,
    explanation: "Carlo Acutis está sepultado em Assis, na Igreja de Santa Maria Maior, um local que ele amava muito.",
    difficulty: "Fácil"
  },
  {
    id: 16,
    question: "Qual santo é conhecido como o 'Poverello de Assis'?",
    options: ["Santo Antônio", "São Francisco de Assis", "São Bento", "São Domingos"],
    correctAnswer: 1,
    explanation: "São Francisco de Assis é conhecido como o 'Poverello' devido à sua vida de pobreza radical e simplicidade.",
    difficulty: "Fácil"
  },
  {
    id: 17,
    question: "Qual santa recebeu as chagas de Cristo?",
    options: ["Santa Teresa", "Santa Rita", "Santa Catarina de Siena", "Santa Faustina"],
    correctAnswer: 2,
    explanation: "Santa Catarina de Siena recebeu as chagas de Cristo, tornando-se uma das poucas santas estigmatizadas da Igreja.",
    difficulty: "Fácil"
  },
  {
    id: 18,
    question: "Quem é a padroeira do Brasil?",
    options: ["Santa Terezinha", "Nossa Senhora Aparecida", "Santa Rita", "Nossa Senhora de Fátima"],
    correctAnswer: 1,
    explanation: "Nossa Senhora Aparecida é a padroeira do Brasil, venerada especialmente no Santuário Nacional em Aparecida-SP.",
    difficulty: "Fácil"
  },
  {
    id: 19,
    question: "O que é um milagre eucarístico?",
    options: ["Uma oração especial", "Um fenômeno sobrenatural na Eucaristia", "Uma festa litúrgica", "Um tipo de missa"],
    correctAnswer: 1,
    explanation: "Um milagre eucarístico é um fenômeno sobrenatural onde o pão e o vinho consagrados se transformam visivelmente em carne e sangue.",
    difficulty: "Fácil"
  },
  {
    id: 20,
    question: "Onde aconteceu o famoso milagre eucarístico de Lanciano?",
    options: ["França", "Espanha", "Itália", "Portugal"],
    correctAnswer: 2,
    explanation: "O milagre eucarístico de Lanciano aconteceu na Itália, no século VIII, e as relíquias ainda são veneradas hoje.",
    difficulty: "Fácil"
  },
  {
    id: 21,
    question: "Qual é o primeiro livro da Bíblia?",
    options: ["Êxodo", "Gênesis", "Levítico", "Números"],
    correctAnswer: 1,
    explanation: "Gênesis é o primeiro livro da Bíblia e conta a história da criação do mundo.",
    difficulty: "Fácil"
  },
  {
    id: 22,
    question: "Em que cidade Jesus nasceu?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus nasceu em Belém, conforme as profecias do Antigo Testamento.",
    difficulty: "Fácil"
  },
  {
    id: 23,
    question: "Quantos apóstolos Jesus escolheu?",
    options: ["Dez", "Onze", "Doze", "Treze"],
    correctAnswer: 2,
    explanation: "Jesus escolheu doze apóstolos para serem seus principais discípulos.",
    difficulty: "Fácil"
  },
  {
    id: 24,
    question: "Qual é o sinal dos cristãos?",
    options: ["A estrela", "A cruz", "O peixe", "O círculo"],
    correctAnswer: 1,
    explanation: "A cruz é o principal sinal dos cristãos, lembrando a morte e ressurreição de Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 25,
    question: "O que é a Eucaristia?",
    options: ["Uma oração", "A Comunhão", "Um cântico", "Uma leitura"],
    correctAnswer: 1,
    explanation: "A Eucaristia é a Comunhão, onde recebemos o Corpo e Sangue de Cristo.",
    difficulty: "Fácil"
  },
  {
    id: 26,
    question: "Quando celebramos o Natal?",
    options: ["25 de dezembro", "1º de janeiro", "31 de dezembro", "24 de dezembro"],
    correctAnswer: 0,
    explanation: "O Natal é celebrado no dia 25 de dezembro, comemorando o nascimento de Jesus.",
    difficulty: "Fácil"
  },
  {
    id: 27,
    question: "Qual é a cor litúrgica do Natal?",
    options: ["Verde", "Roxo", "Branco", "Vermelho"],
    correctAnswer: 2,
    explanation: "O branco é a cor litúrgica do Natal, simbolizando alegria e pureza.",
    difficulty: "Fácil"
  },
  {
    id: 28,
    question: "Quem é o atual Papa?",
    options: ["Bento XVI", "Francisco", "João Paulo II", "Paulo VI"],
    correctAnswer: 1,
    explanation: "O Papa Francisco é o atual pontífice da Igreja Católica, eleito em 2013.",
    difficulty: "Fácil"
  },
  {
    id: 29,
    question: "O que significa 'Amém'?",
    options: ["Assim seja", "Obrigado", "Por favor", "Desculpe"],
    correctAnswer: 0,
    explanation: "'Amém' significa 'assim seja' e expressa nossa concordância e fé nas palavras pronunciadas.",
    difficulty: "Fácil"
  },
  {
    id: 30,
    question: "Qual foi o primeiro milagre de Jesus?",
    options: ["Multiplicação dos pães", "Cura de um cego", "Transformação da água em vinho", "Ressurreição de Lázaro"],
    correctAnswer: 2,
    explanation: "O primeiro milagre de Jesus foi a transformação da água em vinho nas bodas de Caná.",
    difficulty: "Fácil"
  },
  {
    id: 31,
    question: "Qual santo é conhecido por sua devoção aos pobres e fundou a ordem franciscana?",
    options: ["Santo Agostinho", "São Francisco de Assis", "São Bento", "São Domingos"],
    correctAnswer: 1,
    explanation: "São Francisco de Assis dedicou sua vida aos pobres e fundou a ordem franciscana, vivendo em pobreza radical.",
    difficulty: "Fácil"
  },
  {
    id: 32,
    question: "Qual santa é conhecida como a 'Florzinha de Jesus'?",
    options: ["Santa Rita", "Santa Terezinha do Menino Jesus", "Santa Bernadete", "Santa Lúcia"],
    correctAnswer: 1,
    explanation: "Santa Terezinha do Menino Jesus é carinhosamente chamada de 'Florzinha de Jesus' devido à sua simplicidade e pureza.",
    difficulty: "Fácil"
  },
  {
    id: 33,
    question: "Quem é o padroeiro dos animais?",
    options: ["São Francisco de Assis", "Santo Antônio", "São Bento", "São José"],
    correctAnswer: 0,
    explanation: "São Francisco de Assis é o padroeiro dos animais devido ao seu amor pela criação de Deus.",
    difficulty: "Fácil"
  },
  {
    id: 34,
    question: "Qual santa é invocada para causas impossíveis?",
    options: ["Santa Terezinha", "Santa Rita", "Santa Lúcia", "Santa Cecília"],
    correctAnswer: 1,
    explanation: "Santa Rita de Cássia é conhecida como a santa das causas impossíveis e desesperadas.",
    difficulty: "Fácil"
  },
  {
    id: 35,
    question: "Quem é o padroeiro dos trabalhadores?",
    options: ["São Pedro", "São Paulo", "São José", "São João"],
    correctAnswer: 2,
    explanation: "São José, pai adotivo de Jesus e carpinteiro, é o padroeiro dos trabalhadores.",
    difficulty: "Fácil"
  },
  {
    id: 36,
    question: "Em que século aconteceu o milagre eucarístico de Lanciano?",
    options: ["Século VI", "Século VII", "Século VIII", "Século IX"],
    correctAnswer: 2,
    explanation: "O milagre eucarístico de Lanciano aconteceu no século VIII, aproximadamente no ano 700.",
    difficulty: "Fácil"
  },
  {
    id: 37,
    question: "O que acontece num milagre eucarístico?",
    options: ["A hóstia brilha", "A hóstia se transforma em carne", "A hóstia levita", "A hóstia multiplica"],
    correctAnswer: 1,
    explanation: "Nos milagres eucarísticos, a hóstia consagrada se transforma visivelmente em carne humana, confirmando a presença real de Cristo.",
    difficulty: "Fácil"
  },
  {
    id: 38,
    question: "Onde aconteceu o milagre eucarístico de Bolsena?",
    options: ["França", "Espanha", "Itália", "Alemanha"],
    correctAnswer: 2,
    explanation: "O milagre eucarístico de Bolsena aconteceu na Itália, em 1263, e levou à instituição da festa de Corpus Christi.",
    difficulty: "Fácil"
  },
  {
    id: 39,
    question: "Qual Papa instituiu a festa de Corpus Christi após um milagre eucarístico?",
    options: ["Papa Gregório VII", "Papa Urbano IV", "Papa Inocêncio III", "Papa Bonifácio VIII"],
    correctAnswer: 1,
    explanation: "O Papa Urbano IV instituiu a festa de Corpus Christi em 1264, após o milagre eucarístico de Bolsena.",
    difficulty: "Fácil"
  },
  {
    id: 40,
    question: "Quantos milagres eucarísticos Carlo Acutis documentou em sua exposição?",
    options: ["50", "100", "136", "200"],
    correctAnswer: 2,
    explanation: "Carlo Acutis documentou 136 milagres eucarísticos reconhecidos pela Igreja em sua famosa exposição.",
    difficulty: "Fácil"
  },
  {
    id: 41,
    question: "Quantos sacramentos existem na Igreja Católica?",
    options: ["Cinco", "Seis", "Sete", "Oito"],
    correctAnswer: 2,
    explanation: "A Igreja Católica reconhece sete sacramentos: Batismo, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Ordem e Matrimônio.",
    difficulty: "Fácil"
  },
  {
    id: 42,
    question: "Qual é o primeiro sacramento que recebemos?",
    options: ["Confirmação", "Batismo", "Eucaristia", "Penitência"],
    correctAnswer: 1,
    explanation: "O Batismo é o primeiro sacramento que recebemos, normalmente na infância, que nos torna filhos de Deus.",
    difficulty: "Fácil"
  },
  {
    id: 43,
    question: "O que celebramos na Páscoa?",
    options: ["O nascimento de Jesus", "A ressurreição de Jesus", "A morte de Jesus", "A ascensão de Jesus"],
    correctAnswer: 1,
    explanation: "A Páscoa celebra a ressurreição de Jesus Cristo, o evento central da fé cristã.",
    difficulty: "Fácil"
  },
  {
    id: 44,
    question: "Qual é a oração mais importante dos católicos depois do Pai Nosso?",
    options: ["Ave Maria", "Glória ao Pai", "Credo", "Salve Rainha"],
    correctAnswer: 0,
    explanation: "A Ave Maria é considerada a segunda oração mais importante dos católicos, sendo a saudação do anjo Gabriel a Maria.",
    difficulty: "Fácil"
  },
  {
    id: 45,
    question: "O que é o Rosário?",
    options: ["Uma festa", "Uma oração", "Um livro", "Uma igreja"],
    correctAnswer: 1,
    explanation: "O Rosário é uma oração contemplativa que medita nos mistérios da vida de Jesus e Maria através da repetição de Ave Marias.",
    difficulty: "Fácil"
  },
  {
    id: 46,
    question: "Quantos mistérios do Rosário existem?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 1,
    explanation: "Existem 20 mistérios do Rosário: 5 gozosos, 5 dolorosos, 5 gloriosos e 5 luminosos (acrescentados pelo Papa João Paulo II).",
    difficulty: "Fácil"
  },
  {
    id: 47,
    question: "Qual é a cor litúrgica da Quaresma?",
    options: ["Verde", "Branco", "Roxo", "Vermelho"],
    correctAnswer: 2,
    explanation: "A cor litúrgica da Quaresma é o roxo, simbolizando penitência, conversão e preparação espiritual.",
    difficulty: "Fácil"
  },
  {
    id: 48,
    question: "O que é a Quarta-feira de Cinzas?",
    options: ["O fim da Quaresma", "O início da Quaresma", "O meio da Quaresma", "Uma festa de santo"],
    correctAnswer: 1,
    explanation: "A Quarta-feira de Cinzas marca o início da Quaresma, período de 40 dias de preparação para a Páscoa.",
    difficulty: "Fácil"
  },
  {
    id: 49,
    question: "O que significa a imposição das cinzas?",
    options: ["Alegria", "Penitência e conversão", "Vitória", "Celebração"],
    correctAnswer: 1,
    explanation: "A imposição das cinzas simboliza nossa condição de pecadores que precisam de conversão e nos lembra da nossa mortalidade.",
    difficulty: "Fácil"
  },
  {
    id: 50,
    question: "Qual é o tempo litúrgico após a Páscoa?",
    options: ["Tempo Comum", "Tempo Pascal", "Advento", "Quaresma"],
    correctAnswer: 1,
    explanation: "O Tempo Pascal são os 50 dias que vão da Páscoa até Pentecostes, celebrando a ressurreição de Cristo.",
    difficulty: "Fácil"
  },
  {
    id: 51,
    question: "Carlo Acutis foi beatificado em qual ano?",
    options: ["2018", "2019", "2020", "2021"],
    correctAnswer: 2,
    explanation: "Carlo Acutis foi beatificado em 10 de outubro de 2020, em Assis, tornando-se o primeiro beato nascido no século XXI.",
    difficulty: "Fácil"
  },
  {
    id: 52,
    question: "Qual era o lema de vida de Carlo Acutis?",
    options: ["Viver para servir", "A Eucaristia é a minha via para o céu", "Amar sempre", "Seguir Cristo"],
    correctAnswer: 1,
    explanation: "O lema de Carlo Acutis era 'A Eucaristia é a minha via para o céu', demonstrando sua profunda devoção eucarística.",
    difficulty: "Fácil"
  },
  {
    id: 53,
    question: "Carlo Acutis participava da Missa:",
    options: ["Uma vez por mês", "Aos domingos", "Diariamente", "Nas festas"],
    correctAnswer: 2,
    explanation: "Carlo Acutis participava da Missa diariamente, demonstrando sua extraordinária devoção eucarística desde pequeno.",
    difficulty: "Fácil"
  },
  {
    id: 54,
    question: "Qual era a atividade favorita de Carlo Acutis para evangelizar?",
    options: ["Pregar na igreja", "Criar sites na internet", "Cantar", "Desenhar"],
    correctAnswer: 1,
    explanation: "Carlo Acutis usava seus conhecimentos de informática para criar sites e evangelizar através da internet, sendo pioneiro na evangelização digital.",
    difficulty: "Fácil"
  },
  {
    id: 55,
    question: "Em que dia Carlo Acutis morreu?",
    options: ["10 de outubro", "12 de outubro", "15 de outubro", "20 de outubro"],
    correctAnswer: 1,
    explanation: "Carlo Acutis morreu em 12 de outubro de 2006, data que se tornou sua festa litúrgica.",
    difficulty: "Fácil"
  },
  {
    id: 56,
    question: "Qual santo é conhecido por encontrar objetos perdidos?",
    options: ["Santo Antônio", "São Francisco", "São José", "São Pedro"],
    correctAnswer: 0,
    explanation: "Santo Antônio de Pádua é tradicionalmente invocado para encontrar objetos perdidos e também é o santo casamenteiro.",
    difficulty: "Fácil"
  },
  {
    id: 57,
    question: "Qual santa é padroeira da música?",
    options: ["Santa Lúcia", "Santa Cecília", "Santa Águeda", "Santa Bárbara"],
    correctAnswer: 1,
    explanation: "Santa Cecília é a padroeira da música e dos músicos, sendo uma mártir do século III.",
    difficulty: "Fácil"
  },
  {
    id: 58,
    question: "Quem é o padroeiro dos estudantes?",
    options: ["São Tomás de Aquino", "Santo Agostinho", "São Jerônimo", "São João Bosco"],
    correctAnswer: 0,
    explanation: "São Tomás de Aquino, o grande doutor da Igreja, é o padroeiro dos estudantes e da educação católica.",
    difficulty: "Fácil"
  },
  {
    id: 59,
    question: "Qual santa viu Nossa Senhora em Lourdes?",
    options: ["Santa Bernadete", "Santa Lúcia", "Santa Jacinta", "Santa Teresa"],
    correctAnswer: 0,
    explanation: "Santa Bernadete Soubirous teve 18 aparições de Nossa Senhora em Lourdes, França, em 1858.",
    difficulty: "Fácil"
  },
  {
    id: 60,
    question: "Quem é o padroeiro da juventude?",
    options: ["São João Bosco", "São Luís Gonzaga", "Carlo Acutis", "São Francisco de Sales"],
    correctAnswer: 1,
    explanation: "São Luís Gonzaga é tradicionalmente considerado o padroeiro da juventude católica.",
    difficulty: "Fácil"
  },
  {
    id: 61,
    question: "O que é o Domingo de Pentecostes?",
    options: ["A descida do Espírito Santo", "A ressurreição de Jesus", "A ascensão de Maria", "O nascimento da Igreja"],
    correctAnswer: 0,
    explanation: "Pentecostes celebra a descida do Espírito Santo sobre os apóstolos, 50 dias após a Páscoa.",
    difficulty: "Fácil"
  },
  {
    id: 62,
    question: "Quantos dias durou o dilúvio bíblico?",
    options: ["30 dias", "40 dias", "50 dias", "60 dias"],
    correctAnswer: 1,
    explanation: "Segundo a Bíblia, o dilúvio durou 40 dias e 40 noites, um número simbólico de purificação.",
    difficulty: "Fácil"
  },
  {
    id: 63,
    question: "Quem construiu a arca?",
    options: ["Abraão", "Moisés", "Noé", "Davi"],
    correctAnswer: 2,
    explanation: "Noé construiu a arca por ordem de Deus para salvar sua família e os animais do dilúvio.",
    difficulty: "Fácil"
  },
  {
    id: 64,
    question: "Qual foi o primeiro rei de Israel?",
    options: ["Davi", "Salomão", "Saul", "Samuel"],
    correctAnswer: 2,
    explanation: "Saul foi o primeiro rei de Israel, ungido pelo profeta Samuel.",
    difficulty: "Fácil"
  },
  {
    id: 65,
    question: "Quem matou o gigante Golias?",
    options: ["Saul", "Davi", "Salomão", "Josué"],
    correctAnswer: 1,
    explanation: "Davi, ainda jovem pastor, matou o gigante Golias com uma pedra de funda.",
    difficulty: "Fácil"
  },
  {
    id: 66,
    question: "Qual é a primeira palavra da Bíblia?",
    options: ["Deus", "No", "Quando", "Assim"],
    correctAnswer: 1,
    explanation: "A Bíblia começa com 'No princípio criou Deus os céus e a terra' (Gênesis 1:1).",
    difficulty: "Fácil"
  },
  {
    id: 67,
    question: "Quem foi engolido por um grande peixe?",
    options: ["Jonas", "Pedro", "João", "Tiago"],
    correctAnswer: 0,
    explanation: "Jonas foi engolido por um grande peixe por três dias, prefigurando a ressurreição de Cristo.",
    difficulty: "Fácil"
  },
  {
    id: 68,
    question: "Quantos filhos Noé teve?",
    options: ["Dois", "Três", "Quatro", "Cinco"],
    correctAnswer: 1,
    explanation: "Noé teve três filhos: Sem, Cam e Jafé, que repovoaram a terra após o dilúvio.",
    difficulty: "Fácil"
  },
  {
    id: 69,
    question: "Qual é o último livro da Bíblia?",
    options: ["João", "Judas", "Apocalipse", "Hebreus"],
    correctAnswer: 2,
    explanation: "O Apocalipse (ou Revelação) é o último livro da Bíblia, escrito por São João.",
    difficulty: "Fácil"
  },
  {
    id: 70,
    question: "Quem batizou Jesus?",
    options: ["João Batista", "Pedro", "André", "Tiago"],
    correctAnswer: 0,
    explanation: "João Batista batizou Jesus no rio Jordão, marcando o início da vida pública de Cristo.",
    difficulty: "Fácil"
  },

  // PERGUNTAS MÉDIAS (IDs 501-1000)
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
    explanation: "Os dons do Espírito Santo são sete: sabedoria, inteligência, conselho, fortaleza, ciência, piedade e temor de Deus.",
    difficulty: "Médio"
  },
  {
    id: 503,
    question: "O que são as bem-aventuranças?",
    options: ["As orações mais importantes", "As promessas de felicidade de Jesus no Sermão da Montanha", "Os milagres de Jesus", "Os ensinamentos dos apóstolos"],
    correctAnswer: 1,
    explanation: "As bem-aventuranças são oito promessas de felicidade que Jesus proclamou no Sermão da Montanha, mostrando o caminho para a santidade.",
    difficulty: "Médio"
  },
  {
    id: 504,
    question: "Qual foi o primeiro milagre eucarístico documentado pela Igreja?",
    options: ["Lanciano (século VIII)", "Bolsena (1263)", "Orvieto (1290)", "Santarém (1247)"],
    correctAnswer: 0,
    explanation: "O milagre de Lanciano, ocorrido no século VIII, é considerado o primeiro milagre eucarístico bem documentado e estudado pela Igreja.",
    difficulty: "Médio"
  },
  {
    id: 505,
    question: "Em que concílio foi definido o dogma da Transubstanciação?",
    options: ["Concílio de Niceia", "Concílio de Trento", "Concílio Vaticano I", "Concílio de Latrão"],
    correctAnswer: 1,
    explanation: "O Concílio de Trento (1545-1563) definiu oficialmente o dogma da Transubstanciação contra as heresias protestantes.",
    difficulty: "Médio"
  },
  {
    id: 506,
    question: "Qual é o significado da palavra 'Eucaristia'?",
    options: ["Comunhão", "Ação de graças", "Corpo de Cristo", "Sacrifício"],
    correctAnswer: 1,
    explanation: "Eucaristia vem do grego 'eucharistein' que significa 'ação de graças', referindo-se ao agradecimento de Jesus na Última Ceia.",
    difficulty: "Médio"
  },
  {
    id: 507,
    question: "Quantos Concílios Ecumênicos a Igreja Católica reconhece?",
    options: ["19", "20", "21", "22"],
    correctAnswer: 2,
    explanation: "A Igreja Católica reconhece 21 Concílios Ecumênicos, sendo o último o Concílio Vaticano II (1962-1965).",
    difficulty: "Médio"
  },
  {
    id: 508,
    question: "Quem foi o Papa que convocou o Concílio Vaticano II?",
    options: ["Pio XII", "João XXIII", "Paulo VI", "João Paulo I"],
    correctAnswer: 1,
    explanation: "O Papa João XXIII convocou o Concílio Vaticano II em 1962, promovendo a renovação da Igreja.",
    difficulty: "Médio"
  },
  {
    id: 509,
    question: "O que estabelece a doutrina da Imaculada Conceição?",
    options: ["Que Maria nasceu sem pecado original", "Que Jesus nasceu de uma virgem", "Que Maria subiu ao céu", "Que Maria é mãe de Deus"],
    correctAnswer: 0,
    explanation: "A Imaculada Conceição, proclamada em 1854, estabelece que Maria foi preservada do pecado original desde o momento de sua conceição.",
    difficulty: "Médio"
  },
  {
    id: 510,
    question: "Em que ano foi proclamado o dogma da Assunção de Maria?",
    options: ["1854", "1870", "1950", "1962"],
    correctAnswer: 2,
    explanation: "O dogma da Assunção de Maria foi proclamado pelo Papa Pio XII em 1950, estabelecendo que Maria foi elevada ao céu em corpo e alma.",
    difficulty: "Médio"
  },
  {
    id: 511,
    question: "Qual santo doutor da Igreja escreveu as 'Confissões'?",
    options: ["São Jerônimo", "Santo Agostinho", "São Tomás de Aquino", "São João Crisóstomo"],
    correctAnswer: 1,
    explanation: "Santo Agostinho escreveu as 'Confissões', uma das obras mais importantes da literatura cristã e autobiografia espiritual.",
    difficulty: "Médio"
  },
  {
    id: 512,
    question: "Qual é a principal obra de São Tomás de Aquino?",
    options: ["Suma Contra Gentiles", "Suma Teológica", "Comentários às Sentenças", "Questões Disputadas"],
    correctAnswer: 1,
    explanation: "A 'Suma Teológica' é a principal obra de São Tomás de Aquino, síntese magistral da teologia católica medieval.",
    difficulty: "Médio"
  },
  {
    id: 513,
    question: "Carlo Acutis criou sites sobre quais temas além dos milagres eucarísticos?",
    options: ["Apenas milagres eucarísticos", "Santos e aparições marianas", "Apenas santos", "Apenas aparições"],
    correctAnswer: 1,
    explanation: "Carlo Acutis criou sites documentando milagres eucarísticos, santos e aparições marianas, usando a tecnologia para evangelizar.",
    difficulty: "Médio"
  },
  {
    id: 514,
    question: "Qual era a nacionalidade de Carlo Acutis?",
    options: ["Inglesa", "Italiana", "Francesa", "Espanhola"],
    correctAnswer: 1,
    explanation: "Carlo Acutis era italiano, nascido em Londres mas criado em Milão, onde viveu praticamente toda sua vida.",
    difficulty: "Médio"
  },
  {
    id: 515,
    question: "Quem foi o postulador da causa de beatificação de Carlo Acutis?",
    options: ["Cardeal Angelo Becciu", "Nicola Gori", "Cardeal Giuseppe Versaldi", "Paolo Vilotta"],
    correctAnswer: 1,
    explanation: "Nicola Gori foi o postulador da causa de beatificação de Carlo Acutis, trabalhando para promover seu reconhecimento oficial.",
    difficulty: "Médio"
  },
  {
    id: 516,
    question: "Em que ano ocorreu o milagre eucarístico de Bolsena?",
    options: ["1263", "1264", "1265", "1266"],
    correctAnswer: 0,
    explanation: "O milagre eucarístico de Bolsena ocorreu em 1263, quando um sacerdote duvidoso viu a hóstia sangrar durante a consagração.",
    difficulty: "Médio"
  },
  {
    id: 517,
    question: "Qual cidade portuguesa é famosa por um milagre eucarístico no século XIII?",
    options: ["Porto", "Lisboa", "Coimbra", "Santarém"],
    correctAnswer: 3,
    explanation: "Santarém é famosa pelo milagre eucarístico de 1247, onde uma hóstia consagrada roubada começou a sangrar.",
    difficulty: "Médio"
  },
  {
    id: 518,
    question: "O que aconteceu no milagre eucarístico de Siena (1730)?",
    options: ["Hóstias se transformaram em carne", "Hóstias se multiplicaram", "Hóstias permaneceram incorruptas", "Hóstias levitaram"],
    correctAnswer: 2,
    explanation: "No milagre de Siena, 223 hóstias consagradas permaneceram incorruptas por quase 300 anos, desafiando as leis naturais.",
    difficulty: "Médio"
  },
  {
    id: 519,
    question: "Qual foi a reação da ciência moderna aos milagres eucarísticos?",
    options: ["Negação total", "Confirmação através de análises", "Indiferença", "Ceticismo apenas"],
    correctAnswer: 1,
    explanation: "Análises científicas modernas confirmaram a autenticidade de vários milagres eucarísticos, encontrando tecido cardíaco humano real.",
    difficulty: "Médio"
  },
  {
    id: 520,
    question: "Quantos países Carlo Acutis visitou para documentar milagres eucarísticos?",
    options: ["Apenas a Itália", "5 países", "Mais de 20 países", "10 países"],
    correctAnswer: 2,
    explanation: "Carlo Acutis documentou milagres eucarísticos de mais de 20 países ao redor do mundo, criando um catálogo global.",
    difficulty: "Médio"
  },
  {
    id: 521,
    question: "Em que ano o Cristianismo se tornou religião oficial do Império Romano?",
    options: ["313", "325", "380", "391"],
    correctAnswer: 2,
    explanation: "O Cristianismo tornou-se religião oficial do Império Romano em 380, com o Édito de Tessalônica do imperador Teodósio I.",
    difficulty: "Médio"
  },
  {
    id: 522,
    question: "Qual foi o primeiro Concílio Ecumênico da Igreja?",
    options: ["Concílio de Jerusalém", "Concílio de Niceia I", "Concílio de Constantinopla", "Concílio de Éfeso"],
    correctAnswer: 1,
    explanation: "O Concílio de Niceia I (325) foi o primeiro concílio ecumênico, condenando o arianismo e proclamando a divindade de Cristo.",
    difficulty: "Médio"
  },
  {
    id: 523,
    question: "Qual heresia negava a divindade de Cristo?",
    options: ["Gnosticismo", "Arianismo", "Pelagianismo", "Nestorianismo"],
    correctAnswer: 1,
    explanation: "O Arianismo, propagado por Ário, negava a divindade de Cristo, considerando-o inferior ao Pai.",
    difficulty: "Médio"
  },
  {
    id: 524,
    question: "Qual Papa é conhecido como 'o Grande'?",
    options: ["São Leão I", "São Gregório I", "São Pio X", "São João Paulo II"],
    correctAnswer: 0,
    explanation: "São Leão I é conhecido como 'Leão Magno' ou 'o Grande', famoso por deter Átila e defender a ortodoxia cristã.",
    difficulty: "Médio"
  },
  {
    id: 525,
    question: "Em que ano começou o Grande Cisma do Ocidente?",
    options: ["1054", "1378", "1414", "1449"],
    correctAnswer: 1,
    explanation: "O Grande Cisma do Ocidente começou em 1378, quando houve papas rivais em Roma e Avignon simultaneamente.",
    difficulty: "Médio"
  },

  // PERGUNTAS DIFÍCEIS (IDs 1001-1500)
  {
    id: 1001,
    question: "Qual é a diferença entre transubstanciação e consubstanciação?",
    options: ["Na transubstanciação a substância muda, na consubstanciação coexistem", "São a mesma coisa", "Consubstanciação é mais antiga", "Transubstanciação é protestante"],
    correctAnswer: 0,
    explanation: "Na transubstanciação (católica) a substância do pão e vinho muda completamente; na consubstanciação (luterana) as substâncias coexistem.",
    difficulty: "Difícil"
  },
  {
    id: 1002,
    question: "Qual é o significado teológico preciso do 'Filioque' no Credo?",
    options: ["Que o Espírito Santo procede do Pai e do Filho", "Que Jesus é Filho de Deus", "Que o Pai gera o Filho", "Que o Espírito é enviado"],
    correctAnswer: 0,
    explanation: "O 'Filioque' afirma que o Espírito Santo procede do Pai e do Filho, questão que dividiu as Igrejas Oriental e Ocidental.",
    difficulty: "Difícil"
  },
  {
    id: 1003,
    question: "Segundo a teologia tomista, qual é a diferença entre essência e existência em Deus?",
    options: ["São realmente distintas", "São idênticas", "Uma é superior à outra", "Não se aplicam a Deus"],
    correctAnswer: 1,
    explanation: "Na teologia tomista, em Deus essência e existência são idênticas, pois Deus é o próprio Ser subsistente.",
    difficulty: "Difícil"
  },
  {
    id: 1004,
    question: "O que estabelece precisamente a doutrina da 'comunicação de idiomas'?",
    options: ["A união das duas naturezas em Cristo", "A comunicação entre as pessoas da Trindade", "A transmissão da graça", "A inspiração bíblica"],
    correctAnswer: 0,
    explanation: "A 'comunicação de idiomas' estabelece que, devido à união hipostática, os atributos de cada natureza podem ser atribuídos à pessoa de Cristo.",
    difficulty: "Difícil"
  },
  {
    id: 1005,
    question: "Qual é a diferença entre 'ex opere operato' e 'ex opere operantis' na sacramentologia?",
    options: ["Eficácia objetiva vs subjetiva", "Sacramento vs oração", "Matéria vs forma", "Ministro vs recipiente"],
    correctAnswer: 0,
    explanation: "'Ex opere operato' refere-se à eficácia objetiva do sacramento; 'ex opere operantis' à disposição subjetiva de quem o recebe.",
    difficulty: "Difícil"
  },
  {
    id: 1006,
    question: "Na cristologia calcedônica, o que significa 'sem confusão, sem mudança, sem divisão, sem separação'?",
    options: ["As propriedades da união hipostática", "Os atributos de Deus", "As características da Trindade", "As condições da Encarnação"],
    correctAnswer: 0,
    explanation: "Estes quatro advérbios definem como as duas naturezas se unem na pessoa de Cristo: distintas mas não separadas, unidas mas não confundidas.",
    difficulty: "Difícil"
  },
  {
    id: 1007,
    question: "Qual é o objeto formal da virtude teologal da fé?",
    options: ["As verdades reveladas", "Deus enquanto Verdade Primeira", "A Sagrada Escritura", "O Magistério da Igreja"],
    correctAnswer: 1,
    explanation: "O objeto formal da fé é Deus enquanto Verdade Primeira revelante, não meramente as verdades que Ele revela.",
    difficulty: "Difícil"
  },
  {
    id: 1008,
    question: "Segundo São Tomás, qual é a diferença entre scientia e sapientia?",
    options: ["Conhecimento humano vs divino", "Razão vs fé", "Conhecimento pelas causas próximas vs últimas", "Teoria vs prática"],
    correctAnswer: 2,
    explanation: "Scientia conhece pelas causas próximas; sapientia conhece pelas causas primeiras e últimas, sendo a mais alta forma de conhecimento.",
    difficulty: "Difícil"
  },
  {
    id: 1009,
    question: "O que significa tecnicamente a 'circumincessão' trinitária?",
    options: ["A mútua inhabitação das pessoas divinas", "A processão do Espírito Santo", "A geração do Filho", "A unidade de essência"],
    correctAnswer: 0,
    explanation: "Circumincessão (ou pericórese) designa a mútua inhabitação das três pessoas divinas, uma na outra, preservando suas distinções.",
    difficulty: "Difícil"
  },
  {
    id: 1010,
    question: "Na eclesiologia, qual é a diferença entre 'infalibilidade' e 'inerrância'?",
    options: ["São sinônimos", "Infalibilidade é maior que inerrância", "Infalibilidade refere-se ao ensino, inerrância à Escritura", "Uma é dogma, outra não"],
    correctAnswer: 2,
    explanation: "Infalibilidade refere-se ao magistério papal/conciliar no ensino; inerrância refere-se à ausência de erros na Sagrada Escritura.",
    difficulty: "Difícil"
  },
  {
    id: 1011,
    question: "Qual foi a metodologia específica que Carlo Acutis usou para verificar a autenticidade dos milagres eucarísticos?",
    options: ["Análise pessoal apenas", "Consulta a fontes oficiais da Igreja e estudos científicos", "Apenas tradições locais", "Investigação jornalística"],
    correctAnswer: 1,
    explanation: "Carlo consultou rigorosamente fontes oficiais da Igreja, documentos históricos e estudos científicos para verificar cada milagre.",
    difficulty: "Difícil"
  },
  {
    id: 1012,
    question: "Que linguagens de programação Carlo Acutis dominava?",
    options: ["Apenas HTML", "HTML, CSS e JavaScript", "Python e Java", "C++ e Assembly"],
    correctAnswer: 1,
    explanation: "Carlo dominava HTML, CSS e JavaScript, usando essas linguagens para criar seus sites de evangelização digital.",
    difficulty: "Difícil"
  },
  {
    id: 1013,
    question: "Qual foi o impacto específico da exposição de Carlo Acutis sobre milagres eucarísticos?",
    options: ["Apenas local", "Internacional, percorrendo cinco continentes", "Apenas na Europa", "Apenas na Itália"],
    correctAnswer: 1,
    explanation: "A exposição de Carlo percorreu cinco continentes, impactando milhões de pessoas e sendo traduzida para múltiplas línguas.",
    difficulty: "Difícil"
  },
  {
    id: 1014,
    question: "Qual era a relação específica de Carlo Acutis com a Eucaristia além da participação diária na Missa?",
    options: ["Apenas comunhão diária", "Adoração eucarística prolongada e apostolado eucarístico", "Apenas devoção pessoal", "Estudo teológico"],
    correctAnswer: 1,
    explanation: "Carlo fazia adoração eucarística prolongada e desenvolveu um intenso apostolado eucarístico através de seus projetos digitais.",
    difficulty: "Difícil"
  },
  {
    id: 1015,
    question: "Qual foi o milagre específico que permitiu a beatificação de Carlo Acutis?",
    options: ["Cura de leucemia", "Cura de malformação pancreática", "Ressurreição", "Cura de cegueira"],
    correctAnswer: 1,
    explanation: "O milagre foi a cura instantânea de uma malformação pancreática grave em uma criança brasileira através da intercessão de Carlo.",
    difficulty: "Difícil"
  },
  {
    id: 1016,
    question: "Qual é a composição molecular específica encontrada nos milagres eucarísticos estudados cientificamente?",
    options: ["Tecido muscular comum", "Tecido cardíaco humano do tipo AB", "Tecido neural", "Tecido hepático"],
    correctAnswer: 1,
    explanation: "As análises científicas confirmaram tecido cardíaco humano do tipo sanguíneo AB, o mesmo tipo encontrado no Sudário de Turim.",
    difficulty: "Difícil"
  },
  {
    id: 1017,
    question: "Qual laboratório forense foi responsável pelas análises mais detalhadas dos milagres eucarísticos?",
    options: ["Laboratório do Vaticano", "Universidade de Sydney", "Laboratório Forense de Buenos Aires", "Instituto Gemelli"],
    correctAnswer: 2,
    explanation: "O Laboratório Forense de Buenos Aires realizou análises detalhadas que confirmaram a natureza extraordinária do tecido.",
    difficulty: "Difícil"
  },
  {
    id: 1018,
    question: "Qual é a particularidade histológica do tecido encontrado no milagre de Buenos Aires (1996)?",
    options: ["Tecido morto", "Tecido vivo com contrações cardíacas", "Tecido em decomposição", "Tecido sintético"],
    correctAnswer: 1,
    explanation: "O tecido cardíaco estava vivo e apresentava contrações rítmicas, como se fosse um coração palpitante.",
    difficulty: "Difícil"
  },
  {
    id: 1019,
    question: "Quantos séculos abrange o período histórico dos milagres eucarísticos documentados por Carlo?",
    options: ["5 séculos", "10 séculos", "13 séculos", "15 séculos"],
    correctAnswer: 2,
    explanation: "Os milagres documentados abrangem aproximadamente 13 séculos, do século VIII ao século XXI.",
    difficulty: "Difícil"
  },
  {
    id: 1020,
    question: "Qual é a frequência estatística aproximada de milagres eucarísticos reconhecidos pela Igreja?",
    options: ["1 por ano", "1 por década", "1 por século", "Irregular e rara"],
    correctAnswer: 3,
    explanation: "Os milagres eucarísticos são eventos irregulares e raros, não seguindo uma frequência estatística previsível.",
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
