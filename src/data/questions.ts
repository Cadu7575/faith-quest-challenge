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
    question: "Quem traiu Jesus por 30 moedas de prata?",
    options: ["Pedro", "Judas Iscariotes", "Tomé", "João"],
    correctAnswer: 1,
    explanation: "Judas Iscariotes traiu Jesus por 30 moedas de prata, entregando-o aos seus inimigos."
  },
  {
    question: "Qual é o símbolo do Espírito Santo?",
    options: ["Cordeiro", "Pomba", "Peixe", "Cruz"],
    correctAnswer: 1,
    explanation: "A pomba é o símbolo tradicional do Espírito Santo, aparecendo no batismo de Jesus."
  },
  {
    question: "Qual é o último livro da Bíblia?",
    options: ["Judas", "Apocalipse", "3 João", "Hebreus"],
    correctAnswer: 1,
    explanation: "O Apocalipse é o último livro da Bíblia, escrito por São João Evangelista."
  },
  {
    question: "Quantos dias Jesus jejuou no deserto?",
    options: ["30", "40", "50", "60"],
    correctAnswer: 1,
    explanation: "Jesus jejuou por 40 dias no deserto antes de iniciar sua vida pública."
  },
  {
    question: "Qual é o nome do rio onde Jesus foi batizado?",
    options: ["Nilo", "Eufrates", "Jordão", "Tigre"],
    correctAnswer: 2,
    explanation: "Jesus foi batizado no rio Jordão por João Batista."
  },
  {
    question: "Qual é o terceiro mandamento?",
    options: ["Não matarás", "Santificar o sábado", "Honrar pai e mãe", "Não roubarás"],
    correctAnswer: 1,
    explanation: "O terceiro mandamento é santificar o sábado (guardar os domingos e festas)."
  },
  {
    question: "Quem foi a primeira pessoa a ver Jesus ressuscitado?",
    options: ["Pedro", "João", "Maria Madalena", "Maria, mãe de Jesus"],
    correctAnswer: 2,
    explanation: "Maria Madalena foi a primeira pessoa a ver Jesus ressuscitado, conforme os Evangelhos."
  },
  {
    question: "Qual é o sacramento do matrimônio?",
    options: ["União civil", "Casamento religioso", "Noivado", "Aliança"],
    correctAnswer: 1,
    explanation: "O matrimônio é um dos sete sacramentos da Igreja Católica, celebrado no casamento religioso."
  },
  {
    question: "Qual é a oração mariana mais conhecida?",
    options: ["Magnificat", "Ave Maria", "Salve Rainha", "Memorare"],
    correctAnswer: 1,
    explanation: "A Ave Maria é a oração mariana mais conhecida e rezada pelos católicos."
  },
  {
    question: "Quantos filhos teve Maria Santíssima?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "Maria Santíssima teve apenas um filho, Jesus Cristo, permanecendo sempre virgem."
  },
  {
    question: "Qual é o nome do pai terreno de Jesus?",
    options: ["José", "João", "Pedro", "André"],
    correctAnswer: 0,
    explanation: "José foi o pai terreno de Jesus, esposo de Maria Santíssima."
  },
  {
    question: "Em que idade Jesus começou sua vida pública?",
    options: ["25 anos", "30 anos", "33 anos", "35 anos"],
    correctAnswer: 1,
    explanation: "Jesus começou sua vida pública aos 30 anos de idade."
  },
  {
    question: "Qual é o primeiro milagre de Jesus?",
    options: ["Multiplicação dos pães", "Cura do cego", "Bodas de Caná", "Ressurreição de Lázaro"],
    correctAnswer: 2,
    explanation: "O primeiro milagre de Jesus foi a transformação da água em vinho nas Bodas de Caná."
  },
  {
    question: "Qual é o nome da festa que celebra a ressurreição de Jesus?",
    options: ["Natal", "Páscoa", "Pentecostes", "Epifania"],
    correctAnswer: 1,
    explanation: "A Páscoa é a festa que celebra a ressurreição de Jesus Cristo."
  },
  {
    question: "Quantos apóstolos permaneceram fiéis até o fim?",
    options: ["10", "11", "12", "9"],
    correctAnswer: 1,
    explanation: "Onze apóstolos permaneceram fiéis até o fim, pois Judas Iscariotes traiu Jesus."
  },
  {
    question: "Qual é o nome da mãe de João Batista?",
    options: ["Isabel", "Ana", "Marta", "Maria"],
    correctAnswer: 0,
    explanation: "Isabel foi a mãe de João Batista e prima de Maria Santíssima."
  },
  {
    question: "Qual é o sinal da cruz que fazemos?",
    options: ["Em nome do Pai, do Filho e do Espírito Santo", "Em nome de Jesus", "Em nome de Maria", "Em nome dos Santos"],
    correctAnswer: 0,
    explanation: "O sinal da cruz é feito em nome da Santíssima Trindade: Pai, Filho e Espírito Santo."
  },
  {
    question: "Qual é a cor da vestimenta do papa?",
    options: ["Preta", "Azul", "Branca", "Vermelha"],
    correctAnswer: 2,
    explanation: "O papa tradicionalmente usa vestimentas brancas como símbolo de pureza."
  },
  {
    question: "Qual é o nome da sede do papa?",
    options: ["Roma", "Vaticano", "Castel Gandolfo", "Laterano"],
    correctAnswer: 1,
    explanation: "O Vaticano é a sede oficial do papa e centro da Igreja Católica."
  },
  {
    question: "Qual é o nome da oração do terço?",
    options: ["Rosário", "Novena", "Ladainha", "Oração"],
    correctAnswer: 0,
    explanation: "O Rosário é a oração do terço, meditando os mistérios da vida de Jesus e Maria."
  },
  {
    question: "Qual é o nome do lugar onde Jesus morreu?",
    options: ["Calvário", "Getsêmani", "Betânia", "Cafarnaum"],
    correctAnswer: 0,
    explanation: "Jesus morreu no Calvário, também conhecido como Gólgota."
  },
  {
    question: "Quantos anos Jesus viveu na Terra?",
    options: ["30", "33", "35", "40"],
    correctAnswer: 1,
    explanation: "Jesus viveu aproximadamente 33 anos na Terra."
  },
  {
    question: "Qual é o nome da festa que celebra o nascimento de Jesus?",
    options: ["Páscoa", "Natal", "Epifania", "Pentecostes"],
    correctAnswer: 1,
    explanation: "O Natal é a festa que celebra o nascimento de Jesus Cristo."
  },
  {
    question: "Qual é o nome da profissão de São José?",
    options: ["Pescador", "Carpinteiro", "Pastor", "Agricultor"],
    correctAnswer: 1,
    explanation: "São José era carpinteiro, trabalhando com madeira."
  },
  {
    question: "Qual é o nome do discípulo que duvidou da ressurreição?",
    options: ["Pedro", "João", "Tomé", "Filipe"],
    correctAnswer: 2,
    explanation: "Tomé duvidou da ressurreição de Jesus até tocar suas chagas."
  },
  {
    question: "Qual é o nome da oração que Jesus ensinou?",
    options: ["Ave Maria", "Pai Nosso", "Glória", "Credo"],
    correctAnswer: 1,
    explanation: "O Pai Nosso é a oração que Jesus ensinou aos seus discípulos."
  },
  {
    question: "Qual é o nome do primeiro livro do Novo Testamento?",
    options: ["Marcos", "Mateus", "Lucas", "João"],
    correctAnswer: 1,
    explanation: "O Evangelho de Mateus é tradicionalmente o primeiro livro do Novo Testamento."
  },
  {
    question: "Qual é o nome da cidade onde Jesus cresceu?",
    options: ["Belém", "Jerusalém", "Nazaré", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus cresceu em Nazaré, por isso era chamado de Nazareno."
  },
  {
    question: "Qual é o nome do imperador romano na época de Jesus?",
    options: ["Nero", "Augusto", "Tibério", "Cláudio"],
    correctAnswer: 2,
    explanation: "Tibério César era o imperador romano durante a vida pública de Jesus."
  },
  {
    question: "Qual é o nome da festa que celebra a vinda do Espírito Santo?",
    options: ["Páscoa", "Natal", "Pentecostes", "Ascensão"],
    correctAnswer: 2,
    explanation: "Pentecostes celebra a descida do Espírito Santo sobre os apóstolos."
  },
  {
    question: "Qual é o nome do apóstolo que negou Jesus três vezes?",
    options: ["João", "Pedro", "Tiago", "André"],
    correctAnswer: 1,
    explanation: "Pedro negou Jesus três vezes durante a Paixão, mas depois se arrependeu."
  },
  {
    question: "Qual é o nome da mulher que ungiu os pés de Jesus?",
    options: ["Maria Madalena", "Marta", "Maria de Betânia", "Verônica"],
    correctAnswer: 2,
    explanation: "Maria de Betânia ungiu os pés de Jesus com perfume caro."
  },
  {
    question: "Qual é o nome do ladrão que foi salvo na cruz?",
    options: ["Barrabás", "Dimas", "Gestas", "Simão"],
    correctAnswer: 1,
    explanation: "Dimas, o bom ladrão, foi salvo por Jesus na cruz."
  },
  {
    question: "Qual é o nome da mulher que encontrou o túmulo vazio?",
    options: ["Maria Madalena", "Maria de Betânia", "Marta", "Joana"],
    correctAnswer: 0,
    explanation: "Maria Madalena foi uma das primeiras a encontrar o túmulo vazio de Jesus."
  },
  {
    question: "Qual é o nome do centurião que reconheceu Jesus como Filho de Deus?",
    options: ["Cornélio", "Júlio", "Longo", "Marco"],
    correctAnswer: 2,
    explanation: "São Longo foi o centurião que reconheceu Jesus como Filho de Deus."
  },
  {
    question: "Qual é o nome da mulher que tocou o manto de Jesus e foi curada?",
    options: ["Hemorroíssa", "Samaritana", "Adúltera", "Verônica"],
    correctAnswer: 0,
    explanation: "A mulher hemorroíssa foi curada ao tocar o manto de Jesus."
  },
  {
    question: "Qual é o nome do publicano que subiu na árvore para ver Jesus?",
    options: ["Mateus", "Zaqueu", "Levi", "Bartimeu"],
    correctAnswer: 1,
    explanation: "Zaqueu subiu numa árvore para ver Jesus passar e foi convertido."
  },
  {
    question: "Qual é o nome da ilha onde São João escreveu o Apocalipse?",
    options: ["Chipre", "Malta", "Patmos", "Creta"],
    correctAnswer: 2,
    explanation: "São João escreveu o Apocalipse na ilha de Patmos, onde estava exilado."
  },
  {
    question: "Qual é o nome do primeiro mártir cristão?",
    options: ["Pedro", "Paulo", "Estêvão", "Tiago"],
    correctAnswer: 2,
    explanation: "Santo Estêvão foi o primeiro mártir cristão, apedrejado por sua fé."
  },
  {
    question: "Qual é o nome da cidade onde Paulo foi convertido?",
    options: ["Jerusalém", "Damasco", "Antioquia", "Roma"],
    correctAnswer: 1,
    explanation: "São Paulo foi convertido no caminho para Damasco."
  },
  {
    question: "Qual é o nome do apóstolo chamado de 'filho do trovão'?",
    options: ["Pedro", "João", "Tiago", "André"],
    correctAnswer: 1,
    explanation: "João e seu irmão Tiago eram chamados de 'filhos do trovão' por Jesus."
  },
  {
    question: "Qual é o nome da primeira comunidade cristã?",
    options: ["Roma", "Antioquia", "Jerusalém", "Corinto"],
    correctAnswer: 2,
    explanation: "Jerusalém foi o local da primeira comunidade cristã após Pentecostes."
  },
  {
    question: "Qual é o nome do apóstolo que evangelizou a Índia?",
    options: ["Tomé", "André", "Filipe", "Bartolomeu"],
    correctAnswer: 0,
    explanation: "São Tomé evangelizou a Índia, onde foi martirizado."
  },
  {
    question: "Qual é o nome da festa que celebra a apresentação de Jesus no templo?",
    options: ["Epifania", "Candelária", "Anunciação", "Visitação"],
    correctAnswer: 1,
    explanation: "A Candelária celebra a apresentação de Jesus no templo."
  },
  {
    question: "Qual é o nome do profeta que anunciou o nascimento de Jesus?",
    options: ["Isaías", "Jeremias", "Ezequiel", "Daniel"],
    correctAnswer: 0,
    explanation: "O profeta Isaías anunciou o nascimento do Messias."
  },
  {
    question: "Qual é o nome da estrela que guiou os Reis Magos?",
    options: ["Estrela de Belém", "Estrela de Davi", "Estrela Polar", "Estrela Dalva"],
    correctAnswer: 0,
    explanation: "A Estrela de Belém guiou os Reis Magos até Jesus."
  },
  {
    question: "Quantos Reis Magos visitaram Jesus?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Três Reis Magos visitaram Jesus: Gaspar, Melchior e Baltazar."
  },
  {
    question: "Qual é o nome da festa que celebra a morte de Jesus?",
    options: ["Quinta-feira Santa", "Sexta-feira Santa", "Sábado Santo", "Domingo de Ramos"],
    correctAnswer: 1,
    explanation: "A Sexta-feira Santa celebra a morte de Jesus na cruz."
  },
  {
    question: "Qual é o nome da oração que começa com 'Creio em Deus Pai'?",
    options: ["Ave Maria", "Pai Nosso", "Credo", "Glória"],
    correctAnswer: 2,
    explanation: "O Credo é a oração que professa nossa fé católica."
  },
  {
    question: "Qual é o nome do santo padroeiro dos animais?",
    options: ["São Francisco", "Santo Antônio", "São José", "São Pedro"],
    correctAnswer: 0,
    explanation: "São Francisco de Assis é o padroeiro dos animais."
  },
  {
    question: "Qual é o nome da virtude que significa amor a Deus e ao próximo?",
    options: ["Fé", "Esperança", "Caridade", "Prudência"],
    correctAnswer: 2,
    explanation: "A Caridade é a virtude do amor a Deus e ao próximo."
  },
  {
    question: "Qual é o nome do sacramento que nos torna filhos de Deus?",
    options: ["Confirmação", "Batismo", "Eucaristia", "Penitência"],
    correctAnswer: 1,
    explanation: "O Batismo nos torna filhos de Deus e membros da Igreja."
  },
  {
    question: "Qual é o nome da oração que termina com 'Amém'?",
    options: ["Todas as orações", "Só o Pai Nosso", "Só a Ave Maria", "Só o Credo"],
    correctAnswer: 0,
    explanation: "Todas as orações católicas terminam com 'Amém', que significa 'assim seja'."
  },
  {
    question: "Qual é o nome do lugar onde os católicos vão para confessar?",
    options: ["Altar", "Confessionário", "Sacristia", "Presbitério"],
    correctAnswer: 1,
    explanation: "O confessionário é o lugar onde os católicos se confessam."
  },
  {
    question: "Qual é o nome da parte da Missa onde se lê a Bíblia?",
    options: ["Liturgia Eucarística", "Liturgia da Palavra", "Ritos Iniciais", "Ritos Finais"],
    correctAnswer: 1,
    explanation: "A Liturgia da Palavra é a parte da Missa onde se leem as Escrituras."
  },
  {
    question: "Qual é o nome do pão usado na Missa?",
    options: ["Pão comum", "Hóstia", "Pão doce", "Pão integral"],
    correctAnswer: 1,
    explanation: "A hóstia é o pão especial usado na celebração da Eucaristia."
  },
  {
    question: "Qual é o nome do vinho usado na Missa?",
    options: ["Vinho comum", "Vinho doce", "Vinho litúrgico", "Suco de uva"],
    correctAnswer: 2,
    explanation: "O vinho litúrgico é especialmente preparado para a celebração da Missa."
  },
  {
    question: "Qual é o nome da festa que celebra Jesus como Rei?",
    options: ["Cristo Rei", "Epifania", "Transfiguração", "Ascensão"],
    correctAnswer: 0,
    explanation: "A festa de Cristo Rei celebra Jesus como Rei do Universo."
  },
  {
    question: "Qual é o nome da oração que se reza pelo papa?",
    options: ["Oração do Papa", "Oração Universal", "Oração pelos Governantes", "Oração da Igreja"],
    correctAnswer: 1,
    explanation: "A Oração Universal inclui intenções pelo papa e toda a Igreja."
  },
  {
    question: "Qual é o nome do período de preparação para o Natal?",
    options: ["Quaresma", "Advento", "Tempo Comum", "Tempo Pascal"],
    correctAnswer: 1,
    explanation: "O Advento é o período de quatro semanas de preparação para o Natal."
  },
  {
    question: "Qual é o nome da coroa usada no Advento?",
    options: ["Coroa de Cristo", "Coroa do Advento", "Coroa Natalina", "Coroa Litúrgica"],
    correctAnswer: 1,
    explanation: "A Coroa do Advento tem quatro velas que são acesas progressivamente."
  },
  {
    question: "Qual é a cor das velas do Advento?",
    options: ["Brancas", "Vermelhas", "Roxas", "Douradas"],
    correctAnswer: 2,
    explanation: "As velas do Advento são roxas, exceto a terceira que é rosa."
  },
  {
    question: "Quantos mandamentos da Lei de Deus existem?",
    options: ["8", "10", "12", "15"],
    correctAnswer: 1,
    explanation: "São 10 os mandamentos da Lei de Deus dados a Moisés."
  },
  {
    question: "Qual é o primeiro mandamento?",
    options: ["Amar a Deus sobre todas as coisas", "Não matar", "Honrar pai e mãe", "Não roubar"],
    correctAnswer: 0,
    explanation: "O primeiro mandamento é amar a Deus sobre todas as coisas."
  },
  {
    question: "Qual é o quarto mandamento?",
    options: ["Não matar", "Honrar pai e mãe", "Não roubar", "Não cobiçar"],
    correctAnswer: 1,
    explanation: "O quarto mandamento é honrar pai e mãe."
  },
  {
    question: "Qual é o quinto mandamento?",
    options: ["Não matar", "Não roubar", "Não mentir", "Não cobiçar"],
    correctAnswer: 0,
    explanation: "O quinto mandamento é não matar."
  },
  {
    question: "Qual é o sexto mandamento?",
    options: ["Não pecar contra a castidade", "Não roubar", "Não mentir", "Não cobiçar"],
    correctAnswer: 0,
    explanation: "O sexto mandamento é não pecar contra a castidade."
  },
  {
    question: "Qual é o sétimo mandamento?",
    options: ["Não matar", "Não roubar", "Não mentir", "Não cobiçar"],
    correctAnswer: 1,
    explanation: "O sétimo mandamento é não roubar."
  },
  {
    question: "Qual é o oitavo mandamento?",
    options: ["Não roubar", "Não levantar falso testemunho", "Não cobiçar", "Não matar"],
    correctAnswer: 1,
    explanation: "O oitavo mandamento é não levantar falso testemunho."
  },
  {
    question: "Qual é o nono mandamento?",
    options: ["Não cobiçar a mulher do próximo", "Não roubar", "Não mentir", "Não matar"],
    correctAnswer: 0,
    explanation: "O nono mandamento é não cobiçar a mulher do próximo."
  },
  {
    question: "Qual é o décimo mandamento?",
    options: ["Não matar", "Não roubar", "Não cobiçar as coisas alheias", "Não mentir"],
    correctAnswer: 2,
    explanation: "O décimo mandamento é não cobiçar as coisas alheias."
  },
  {
    question: "Quantas pessoas há na Santíssima Trindade?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Na Santíssima Trindade há três pessoas: Pai, Filho e Espírito Santo."
  },
  {
    question: "Quem é a primeira pessoa da Santíssima Trindade?",
    options: ["Jesus", "Pai", "Espírito Santo", "Maria"],
    correctAnswer: 1,
    explanation: "O Pai é a primeira pessoa da Santíssima Trindade."
  },
  {
    question: "Quem é a segunda pessoa da Santíssima Trindade?",
    options: ["Pai", "Jesus", "Espírito Santo", "Maria"],
    correctAnswer: 1,
    explanation: "Jesus (o Filho) é a segunda pessoa da Santíssima Trindade."
  },
  {
    question: "Quem é a terceira pessoa da Santíssima Trindade?",
    options: ["Pai", "Jesus", "Espírito Santo", "Maria"],
    correctAnswer: 2,
    explanation: "O Espírito Santo é a terceira pessoa da Santíssima Trindade."
  },
  {
    question: "Quantos Deus existem?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "Existe um só Deus em três pessoas divinas."
  },
  {
    question: "Onde está Deus?",
    options: ["No céu", "Na terra", "Em todo lugar", "Na igreja"],
    correctAnswer: 2,
    explanation: "Deus está em todo lugar (onipresente)."
  },
  {
    question: "Deus sabe de tudo?",
    options: ["Sim", "Não", "Só algumas coisas", "Só do futuro"],
    correctAnswer: 0,
    explanation: "Sim, Deus é onisciente, sabe de tudo."
  },
  {
    question: "Deus pode fazer tudo?",
    options: ["Sim", "Não", "Só algumas coisas", "Só milagres"],
    correctAnswer: 0,
    explanation: "Sim, Deus é onipotente, pode fazer tudo."
  },
  {
    question: "Quem criou o mundo?",
    options: ["Jesus", "Deus", "Maria", "Os anjos"],
    correctAnswer: 1,
    explanation: "Deus criou o mundo e tudo o que existe."
  },
  {
    question: "Por que Deus nos criou?",
    options: ["Para trabalhar", "Para sofrer", "Para conhecê-Lo, amá-Lo e servi-Lo", "Para brincar"],
    correctAnswer: 2,
    explanation: "Deus nos criou para conhecê-Lo, amá-Lo e servi-Lo nesta vida e ser felizes com Ele no céu."
  },
  {
    question: "Onde vamos depois da morte se formos bons?",
    options: ["Terra", "Inferno", "Céu", "Purgatório"],
    correctAnswer: 2,
    explanation: "Se formos bons, vamos para o céu depois da morte."
  },
  {
    question: "Para onde vão os que morrem em pecado mortal?",
    options: ["Céu", "Inferno", "Purgatório", "Terra"],
    correctAnswer: 1,
    explanation: "Quem morre em pecado mortal vai para o inferno."
  },
  {
    question: "O que é o purgatório?",
    options: ["Lugar de castigo", "Lugar de purificação", "Outro nome do céu", "Outro nome do inferno"],
    correctAnswer: 1,
    explanation: "O purgatório é o lugar de purificação das almas antes do céu."
  },
  {
    question: "Quem são os anjos?",
    options: ["Pessoas mortas", "Espíritos puros", "Santos", "Profetas"],
    correctAnswer: 1,
    explanation: "Os anjos são espíritos puros criados por Deus."
  },
  {
    question: "Todos têm anjo da guarda?",
    options: ["Sim", "Não", "Só as crianças", "Só os santos"],
    correctAnswer: 0,
    explanation: "Sim, todos têm um anjo da guarda."
  },
  {
    question: "Quem é o chefe dos anjos bons?",
    options: ["Gabriel", "Rafael", "Miguel", "Uriel"],
    correctAnswer: 2,
    explanation: "São Miguel Arcanjo é o chefe dos anjos bons."
  },
  {
    question: "Quem é o demônio?",
    options: ["Um homem mau", "Um anjo que se revoltou", "Um santo", "Um profeta"],
    correctAnswer: 1,
    explanation: "O demônio é um anjo que se revoltou contra Deus."
  },
  {
    question: "Quem foram os primeiros homens?",
    options: ["José e Maria", "Pedro e Paulo", "Adão e Eva", "Abraão e Sara"],
    correctAnswer: 2,
    explanation: "Adão e Eva foram os primeiros homens criados por Deus."
  },
  {
    question: "Onde viviam Adão e Eva?",
    options: ["Nazaré", "Jerusalém", "Paraíso terrestre", "Egito"],
    correctAnswer: 2,
    explanation: "Adão e Eva viviam no Paraíso terrestre."
  },
  {
    question: "Adão e Eva eram felizes?",
    options: ["Sim", "Não", "Às vezes", "Não sabemos"],
    correctAnswer: 0,
    explanation: "Sim, Adão e Eva eram muito felizes no Paraíso."
  },
  {
    question: "Por que Adão e Eva perderam a felicidade?",
    options: ["Ficaram doentes", "Pecaram", "Foram embora", "Envelheceram"],
    correctAnswer: 1,
    explanation: "Adão e Eva perderam a felicidade porque pecaram."
  },
  {
    question: "Como se chama o primeiro pecado?",
    options: ["Pecado mortal", "Pecado venial", "Pecado original", "Pecado grave"],
    correctAnswer: 2,
    explanation: "O primeiro pecado chama-se pecado original."
  },
  {
    question: "Nós nascemos com o pecado original?",
    options: ["Sim", "Não", "Só alguns", "Só as crianças"],
    correctAnswer: 0,
    explanation: "Sim, todos nascemos com o pecado original."
  },
  {
    question: "Como se tira o pecado original?",
    options: ["Rezando", "Com o Batismo", "Confessando", "Fazendo o bem"],
    correctAnswer: 1,
    explanation: "O pecado original se tira com o Batismo."
  },
  {
    question: "Deus abandonou os homens depois do pecado?",
    options: ["Sim", "Não", "Por um tempo", "Só alguns"],
    correctAnswer: 1,
    explanation: "Não, Deus não abandonou os homens, prometeu um Salvador."
  },
  {
    question: "Quem é o Salvador prometido?",
    options: ["Moisés", "Davi", "Jesus", "João Batista"],
    correctAnswer: 2,
    explanation: "Jesus é o Salvador prometido por Deus."
  },
  {
    question: "Jesus é Deus?",
    options: ["Sim", "Não", "Só homem", "Às vezes"],
    correctAnswer: 0,
    explanation: "Sim, Jesus é verdadeiro Deus e verdadeiro homem."
  },
  {
    question: "Jesus é homem?",
    options: ["Sim", "Não", "Só Deus", "Às vezes"],
    correctAnswer: 0,
    explanation: "Sim, Jesus é verdadeiro homem e verdadeiro Deus."
  },
  {
    question: "Quantas naturezas tem Jesus?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Jesus tem duas naturezas: divina e humana."
  },
  {
    question: "Quantas pessoas há em Jesus?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "Em Jesus há uma só pessoa, que é divina."
  },
  {
    question: "Como se chama a mãe de Jesus?",
    options: ["Ana", "Isabel", "Maria", "Marta"],
    correctAnswer: 2,
    explanation: "A mãe de Jesus chama-se Maria."
  },
  {
    question: "São José é pai de Jesus?",
    options: ["Sim, verdadeiro pai", "Não", "Pai adotivo", "Não sabemos"],
    correctAnswer: 2,
    explanation: "São José é pai adotivo de Jesus, o verdadeiro Pai é Deus."
  },
  {
    question: "Onde nasceu Jesus?",
    options: ["Nazaré", "Jerusalém", "Belém", "Cafarnaum"],
    correctAnswer: 2,
    explanation: "Jesus nasceu em Belém da Judéia."
  },
  {
    question: "Quando nasceu Jesus?",
    options: ["No verão", "No outono", "No inverno", "Na primavera"],
    correctAnswer: 2,
    explanation: "Jesus nasceu no inverno, celebramos no Natal."
  },
  {
    question: "Quem anunciou aos pastores o nascimento de Jesus?",
    options: ["Maria", "José", "Um anjo", "João Batista"],
    correctAnswer: 2,
    explanation: "Um anjo anunciou aos pastores o nascimento de Jesus."
  },
  {
    question: "Quantos anos tinha Jesus quando começou a pregar?",
    options: ["25", "30", "33", "35"],
    correctAnswer: 1,
    explanation: "Jesus tinha cerca de 30 anos quando começou a pregar."
  },
  {
    question: "Quanto tempo Jesus pregou?",
    options: ["1 ano", "2 anos", "3 anos", "4 anos"],
    correctAnswer: 2,
    explanation: "Jesus pregou por cerca de 3 anos."
  },
  {
    question: "O que Jesus fazia antes de pregar?",
    options: ["Era pescador", "Era carpinteiro", "Era pastor", "Era soldado"],
    correctAnswer: 1,
    explanation: "Jesus trabalhava como carpinteiro antes de pregar."
  },
  {
    question: "Quantos apóstolos Jesus escolheu?",
    options: ["10", "12", "15", "20"],
    correctAnswer: 1,
    explanation: "Jesus escolheu 12 apóstolos."
  },
  {
    question: "Como se chamava o apóstolo que era pescador?",
    options: ["Mateus", "Pedro", "Lucas", "Paulo"],
    correctAnswer: 1,
    explanation: "Pedro era pescador antes de ser apóstolo."
  },
  {
    question: "Qual apóstolo era cobrador de impostos?",
    options: ["Pedro", "João", "Mateus", "Tiago"],
    correctAnswer: 2,
    explanation: "Mateus era cobrador de impostos."
  },
  {
    question: "Jesus fez milagres?",
    options: ["Sim", "Não", "Poucos", "Não sabemos"],
    correctAnswer: 0,
    explanation: "Sim, Jesus fez muitos milagres."
  },
  {
    question: "Jesus curou doentes?",
    options: ["Sim", "Não", "Só alguns", "Raramente"],
    correctAnswer: 0,
    explanation: "Sim, Jesus curou muitos doentes."
  },
  {
    question: "Jesus ressuscitou mortos?",
    options: ["Sim", "Não", "Só um", "Dois"],
    correctAnswer: 0,
    explanation: "Sim, Jesus ressuscitou vários mortos."
  },
  {
    question: "Por que Jesus morreu?",
    options: ["Por doença", "Por velhice", "Para nos salvar", "Por acidente"],
    correctAnswer: 2,
    explanation: "Jesus morreu para nos salvar do pecado."
  },
  {
    question: "Em que dia Jesus morreu?",
    options: ["Segunda-feira", "Quarta-feira", "Sexta-feira", "Domingo"],
    correctAnswer: 2,
    explanation: "Jesus morreu numa sexta-feira."
  },
  {
    question: "Jesus ressuscitou?",
    options: ["Sim", "Não", "Talvez", "Não sabemos"],
    correctAnswer: 0,
    explanation: "Sim, Jesus ressuscitou ao terceiro dia."
  },
  {
    question: "Em que dia Jesus ressuscitou?",
    options: ["Sábado", "Domingo", "Segunda", "Sexta"],
    correctAnswer: 1,
    explanation: "Jesus ressuscitou no domingo."
  },
  {
    question: "Para onde foi Jesus depois da ressurreição?",
    options: ["Ficou na terra", "Foi para o céu", "Foi para outro país", "Não sabemos"],
    correctAnswer: 1,
    explanation: "Jesus subiu ao céu 40 dias depois da ressurreição."
  },
  {
    question: "Jesus vai voltar?",
    options: ["Sim", "Não", "Talvez", "Não sabemos"],
    correctAnswer: 0,
    explanation: "Sim, Jesus vai voltar no fim do mundo."
  },
  {
    question: "O que aconteceu no dia de Pentecostes?",
    options: ["Jesus nasceu", "Jesus morreu", "Veio o Espírito Santo", "Jesus subiu ao céu"],
    correctAnswer: 2,
    explanation: "No dia de Pentecostes o Espírito Santo desceu sobre os apóstolos."
  },
  {
    question: "Quem fundou a Igreja?",
    options: ["Pedro", "Paulo", "Jesus", "Maria"],
    correctAnswer: 2,
    explanation: "Jesus fundou a Igreja."
  },
  {
    question: "Quem Jesus deixou como chefe da Igreja?",
    options: ["João", "Tiago", "Pedro", "Paulo"],
    correctAnswer: 2,
    explanation: "Jesus deixou Pedro como chefe da Igreja."
  },
  {
    question: "Como se chama o chefe da Igreja hoje?",
    options: ["Bispo", "Cardeal", "Papa", "Padre"],
    correctAnswer: 2,
    explanation: "O chefe da Igreja hoje chama-se Papa."
  },
  {
    question: "O Papa é sucessor de quem?",
    options: ["Jesus", "Pedro", "Paulo", "João"],
    correctAnswer: 1,
    explanation: "O Papa é sucessor de São Pedro."
  },
  {
    question: "Onde mora o Papa?",
    options: ["Roma", "Jerusalém", "Paris", "Londres"],
    correctAnswer: 0,
    explanation: "O Papa mora em Roma, no Vaticano."
  },
  {
    question: "Para que serve a Igreja?",
    options: ["Para ensinar", "Para santificar", "Para governar", "Para todas essas coisas"],
    correctAnswer: 3,
    explanation: "A Igreja serve para ensinar, santificar e governar os fiéis."
  },
  {
    question: "Quem pode se salvar?",
    options: ["Só os católicos", "Só os cristãos", "Todos os homens", "Só os santos"],
    correctAnswer: 2,
    explanation: "Todos os homens podem se salvar se seguirem a vontade de Deus."
  },
  {
    question: "É preciso pertencer à Igreja para se salvar?",
    options: ["Sim", "Não", "Só às vezes", "Não sabemos"],
    correctAnswer: 0,
    explanation: "Sim, é preciso pertencer à Igreja para se salvar, ao menos pelo desejo."
  },
  {
    question: "Quantos sacramentos há?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "Há sete sacramentos."
  },
  {
    question: "Qual é o primeiro sacramento?",
    options: ["Confirmação", "Batismo", "Eucaristia", "Penitência"],
    correctAnswer: 1,
    explanation: "O Batismo é o primeiro sacramento."
  },
  {
    question: "Para que serve o Batismo?",
    options: ["Para crescer", "Para tirar o pecado original", "Para ficar bonito", "Para fazer festa"],
    correctAnswer: 1,
    explanation: "O Batismo serve para tirar o pecado original e nos tornar filhos de Deus."
  },
  {
    question: "Quem pode batizar?",
    options: ["Só o Papa", "Só o bispo", "Só o padre", "Qualquer pessoa em caso de necessidade"],
    correctAnswer: 3,
    explanation: "Qualquer pessoa pode batizar em caso de necessidade."
  },
  {
    question: "Com que se batiza?",
    options: ["Com óleo", "Com água", "Com vinho", "Com sal"],
    correctAnswer: 1,
    explanation: "Batiza-se com água."
  },
  {
    question: "Que palavras se dizem no Batismo?",
    options: ["Ave Maria", "Pai Nosso", "Eu te batizo em nome do Pai...", "Glória ao Pai"],
    correctAnswer: 2,
    explanation: "Diz-se: 'Eu te batizo em nome do Pai, do Filho e do Espírito Santo'."
  },
  {
    question: "O que é a Confirmação?",
    options: ["Repetir o Batismo", "Sacramento que nos fortalece", "Primeira Comunhão", "Casamento"],
    correctAnswer: 1,
    explanation: "A Confirmação é o sacramento que nos fortalece na fé."
  },
  {
    question: "Quem dá a Confirmação?",
    options: ["O padre", "O bispo", "O papa", "Os pais"],
    correctAnswer: 1,
    explanation: "Normalmente é o bispo quem dá a Confirmação."
  },
  {
    question: "O que é a Eucaristia?",
    options: ["Uma oração", "O Corpo e Sangue de Jesus", "Um símbolo", "Uma festa"],
    correctAnswer: 1,
    explanation: "A Eucaristia é o verdadeiro Corpo e Sangue de Jesus."
  },
  {
    question: "Onde está Jesus na Eucaristia?",
    options: ["Só no pão", "Só no vinho", "No pão e no vinho", "Em nenhum lugar"],
    correctAnswer: 2,
    explanation: "Jesus está inteiro no pão e no vinho consagrados."
  },
  {
    question: "Quando se pode fazer a Primeira Comunhão?",
    options: ["Aos 5 anos", "Aos 7 anos", "Aos 10 anos", "Aos 15 anos"],
    correctAnswer: 1,
    explanation: "Pode-se fazer a Primeira Comunhão por volta dos 7 anos, idade da razão."
  },
  {
    question: "Como se deve estar para comungar?",
    options: ["Em pecado", "Em graça de Deus", "Com fome", "Com sede"],
    correctAnswer: 1,
    explanation: "Deve-se estar em graça de Deus para comungar."
  },
  {
    question: "O que é a Penitência?",
    options: ["Um castigo", "Sacramento do perdão", "Uma oração", "Uma boa obra"],
    correctAnswer: 1,
    explanation: "A Penitência é o sacramento do perdão dos pecados."
  },
  {
    question: "Quem pode dar a absolvição?",
    options: ["Qualquer pessoa", "Os pais", "O padre", "O bispo"],
    correctAnswer: 2,
    explanation: "Só o padre pode dar a absolvição."
  },
  {
    question: "O que se deve fazer para se confessar bem?",
    options: ["Só dizer os pecados", "Examinar a consciência, confessar, ter propósito e cumprir a penitência", "Rezar muito", "Jejuar"],
    correctAnswer: 1,
    explanation: "Para confessar bem é preciso: examinar a consciência, confessar os pecados, ter propósito de emenda e cumprir a penitência."
  },
  {
    question: "O que é a Extrema-Unção?",
    options: ["Batismo", "Sacramento para os doentes graves", "Casamento", "Primeira Comunhão"],
    correctAnswer: 1,
    explanation: "A Extrema-Unção (Unção dos Enfermos) é o sacramento para os doentes graves."
  },
  {
    question: "O que é a Ordem?",
    options: ["Um mandamento", "Sacramento que faz padres e bispos", "Uma oração", "Uma festa"],
    correctAnswer: 1,
    explanation: "A Ordem é o sacramento que faz padres, diáconos e bispos."
  },
  {
    question: "O que é o Matrimônio?",
    options: ["Uma festa", "Sacramento do casamento", "Uma oração", "Um mandamento"],
    correctAnswer: 1,
    explanation: "O Matrimônio é o sacramento do casamento cristão."
  },
  {
    question: "Quantas pessoas se casam no Matrimônio?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Duas pessoas se casam no sacramento do Matrimônio."
  },
  {
    question: "O casamento cristão pode se desfazer?",
    options: ["Sim", "Não", "Às vezes", "Depende"],
    correctAnswer: 1,
    explanation: "Não, o casamento cristão não pode se desfazer."
  },
  {
    question: "O que é pecado?",
    options: ["Fazer o bem", "Desobedecer a Deus", "Rezar", "Trabalhar"],
    correctAnswer: 1,
    explanation: "Pecado é desobedecer a Deus."
  },
  {
    question: "Quantos tipos de pecado há?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "Há dois tipos de pecado: mortal e venial."
  },
  {
    question: "O que é pecado mortal?",
    options: ["Pecado pequeno", "Pecado grave", "Qualquer pecado", "Não existe"],
    correctAnswer: 1,
    explanation: "Pecado mortal é o pecado grave que mata a alma."
  },
  {
    question: "O que é pecado venial?",
    options: ["Pecado grave", "Pecado leve", "Qualquer pecado", "Não existe"],
    correctAnswer: 1,
    explanation: "Pecado venial é o pecado leve que não mata a alma."
  },
  {
    question: "Quantas coisas são precisas para haver pecado mortal?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "São precisas três coisas: matéria grave, pleno conhecimento e consentimento perfeito."
  },
  {
    question: "Como se perdoa o pecado mortal?",
    options: ["Sozinho", "Com a Confissão", "Rezando", "Fazendo o bem"],
    correctAnswer: 1,
    explanation: "O pecado mortal se perdoa com o sacramento da Confissão."
  },
  {
    question: "E o pecado venial?",
    options: ["Só com Confissão", "Com Confissão ou outros meios", "Nunca se perdoa", "Sozinho"],
    correctAnswer: 1,
    explanation: "O pecado venial se perdoa com a Confissão ou outros meios como água benta, oração, etc."
  },
  {
    question: "Que oração Jesus nos ensinou?",
    options: ["Ave Maria", "Pai Nosso", "Glória", "Credo"],
    correctAnswer: 1,
    explanation: "Jesus nos ensinou o Pai Nosso."
  },
  {
    question: "Como começa o Pai Nosso?",
    options: ["Ave Maria", "Pai nosso que estais no céu", "Creio em Deus Pai", "Glória ao Pai"],
    correctAnswer: 1,
    explanation: "O Pai Nosso começa: 'Pai nosso que estais no céu'."
  },
  {
    question: "A quem rezamos a Ave Maria?",
    options: ["A Jesus", "A Deus Pai", "A Maria", "Ao Espírito Santo"],
    correctAnswer: 2,
    explanation: "Rezamos a Ave Maria a Nossa Senhora."
  },
  {
    question: "Como começa a Ave Maria?",
    options: ["Pai nosso", "Ave Maria cheia de graça", "Creio em Deus", "Glória ao Pai"],
    correctAnswer: 1,
    explanation: "A Ave Maria começa: 'Ave Maria, cheia de graça'."
  },
  {
    question: "O que é o Rosário?",
    options: ["Uma flor", "Uma oração", "Uma festa", "Um santo"],
    correctAnswer: 1,
    explanation: "O Rosário é uma oração mariana."
  },
  {
    question: "Quantas Ave Marias tem um terço?",
    options: ["10", "50", "100", "150"],
    correctAnswer: 1,
    explanation: "Um terço tem 50 Ave Marias."
  },
  {
    question: "Quantos mistérios tem o Rosário completo?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 1,
    explanation: "O Rosário completo tem 20 mistérios."
  },
  {
    question: "O que devemos fazer no domingo?",
    options: ["Trabalhar", "Participar da Missa", "Dormir", "Brincar"],
    correctAnswer: 1,
    explanation: "No domingo devemos participar da Santa Missa."
  },
  {
    question: "É pecado faltar à Missa no domingo?",
    options: ["Sim", "Não", "Às vezes", "Depende"],
    correctAnswer: 0,
    explanation: "Sim, é pecado faltar à Missa no domingo sem motivo justo."
  },
  {
    question: "O que é a Missa?",
    options: ["Uma festa", "O sacrifício de Jesus", "Uma reunião", "Um concerto"],
    correctAnswer: 1,
    explanation: "A Missa é o sacrifício de Jesus na cruz."
  },
  {
    question: "Quantas partes principais tem a Missa?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 1,
    explanation: "A Missa tem duas partes principais: Liturgia da Palavra e Liturgia Eucarística."
  },
  {
    question: "Quando devemos chegar à Missa?",
    options: ["No meio", "No fim", "No começo", "Qualquer hora"],
    correctAnswer: 2,
    explanation: "Devemos chegar no começo da Missa."
  },
  {
    question: "Como devemos nos comportar na Missa?",
    options: ["Conversando", "Com respeito e atenção", "Brincando", "Dormindo"],
    correctAnswer: 1,
    explanation: "Devemos nos comportar com respeito e atenção na Missa."
  },
  {
    question: "Todos devem comungar na Missa?",
    options: ["Sim", "Não necessariamente", "Só as crianças", "Só os adultos"],
    correctAnswer: 1,
    explanation: "Não é obrigatório comungar, mas é recomendado se estivermos em graça."
  },
  {
    question: "O que significa 'Amém'?",
    options: ["Obrigado", "Por favor", "Assim seja", "Desculpe"],
    correctAnswer: 2,
    explanation: "Amém significa 'assim seja' ou 'é verdade'."
  },
  {
    question: "Quando dizemos 'Amém'?",
    options: ["Só no Pai Nosso", "Só na Ave Maria", "No fim das orações", "Nunca"],
    correctAnswer: 2,
    explanation: "Dizemos 'Amém' no fim das orações."
  },
  {
    question: "O que significa fazer o sinal da cruz?",
    options: ["É só um gesto", "Invocar a Santíssima Trindade", "Cumprimentar", "Despedir"],
    correctAnswer: 1,
    explanation: "Fazer o sinal da cruz é invocar a Santíssima Trindade."
  },
  {
    question: "Quando fazemos o sinal da cruz?",
    options: ["Só na Missa", "Só ao rezar", "Ao começar e terminar orações", "Nunca"],
    correctAnswer: 2,
    explanation: "Fazemos o sinal da cruz ao começar e terminar as orações."
  },
  {
    question: "Onde fazemos o sinal da cruz?",
    options: ["Só na testa", "Da testa ao peito e de ombro a ombro", "Só no peito", "Nas mãos"],
    correctAnswer: 1,
    explanation: "Fazemos o sinal da cruz da testa ao peito e de ombro a ombro."
  },
  {
    question: "Por que honramos os santos?",
    options: ["Porque são deuses", "Porque são exemplos e intercessores", "Por obrigação", "Por tradição"],
    correctAnswer: 1,
    explanation: "Honramos os santos porque são exemplos de vida cristã e nossos intercessores."
  },
  {
    question: "Os santos podem nos ajudar?",
    options: ["Sim", "Não", "Só alguns", "Não sabemos"],
    correctAnswer: 0,
    explanation: "Sim, os santos podem nos ajudar intercedendo por nós junto a Deus."
  },
  {
    question: "Podemos pedir ajuda aos santos?",
    options: ["Sim", "Não", "É pecado", "É proibido"],
    correctAnswer: 0,
    explanation: "Sim, podemos pedir ajuda aos santos para que intercedam por nós."
  },
  {
    question: "Por que veneramos Maria mais que os outros santos?",
    options: ["Porque é mais bonita", "Porque é Mãe de Deus", "Por costume", "Não sei"],
    correctAnswer: 1,
    explanation: "Veneramos mais Maria porque ela é Mãe de Deus e nossa Mãe espiritual."
  },
  {
    question: "Maria é nossa mãe?",
    options: ["Sim", "Não", "Só de alguns", "Só espiritualmente"],
    correctAnswer: 3,
    explanation: "Sim, Maria é nossa mãe espiritual."
  },
  {
    question: "O que acontece no fim do mundo?",
    options: ["Nada", "Jesus voltará", "Tudo acaba", "Não sabemos"],
    correctAnswer: 1,
    explanation: "No fim do mundo Jesus voltará para julgar os vivos e os mortos."
  },
  {
    question: "Haverá ressurreição dos mortos?",
    options: ["Sim", "Não", "Só de alguns", "Talvez"],
    correctAnswer: 0,
    explanation: "Sim, haverá ressurreição geral dos mortos."
  },
  {
    question: "Como será nosso corpo depois da ressurreição?",
    options: ["Igual a agora", "Glorioso", "Invisível", "Não existirá"],
    correctAnswer: 1,
    explanation: "Nosso corpo será glorioso, como o de Jesus ressuscitado."
  },
  {
    question: "Onde viveremos depois da ressurreição?",
    options: ["Na terra", "Nos céus novos e terra nova", "No espaço", "Não sabemos"],
    correctAnswer: 1,
    explanation: "Viveremos nos céus novos e terra nova."
  },
  {
    question: "A felicidade do céu terá fim?",
    options: ["Sim", "Não", "Talvez", "Não sabemos"],
    correctAnswer: 1,
    explanation: "Não, a felicidade do céu será eterna."
  },
  {
    question: "E o sofrimento do inferno?",
    options: ["Terá fim", "Será eterno", "Não existe", "Durará mil anos"],
    correctAnswer: 1,
    explanation: "O sofrimento do inferno será eterno."
  },
  {
    question: "Devemos ter medo da morte?",
    options: ["Sim, sempre", "Não, se estivermos preparados", "É normal ter medo", "Devemos pensar nisso sempre"],
    correctAnswer: 1,
    explanation: "Não devemos ter medo da morte se estivermos preparados, vivendo em graça de Deus."
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
    question: "Qual santo fundou a Companhia de Jesus?",
    options: ["São Francisco Xavier", "Santo Inácio de Loyola", "São Pedro Canísio", "São Francisco de Borja"],
    correctAnswer: 1,
    explanation: "Santo Inácio de Loyola fundou a Companhia de Jesus (Jesuítas) em 1540."
  },
  {
    question: "Em que ano foi promulgada a encíclica Rerum Novarum?",
    options: ["1891", "1901", "1931", "1961"],
    correctAnswer: 0,
    explanation: "A encíclica Rerum Novarum foi promulgada pelo Papa Leão XIII em 1891."
  },
  {
    question: "Qual é o nome da doutrina sobre a transubstanciação definida no Concílio de Trento?",
    options: ["Presença real", "Substância eucarística", "Mudança substancial", "Transubstanciação"],
    correctAnswer: 3,
    explanation: "O Concílio de Trento definiu oficialmente a doutrina da transubstanciação."
  },
  {
    question: "Qual Papa convocou o Primeiro Concílio Vaticano?",
    options: ["Pio IX", "Leão XIII", "Gregório XVI", "Pio VIII"],
    correctAnswer: 0,
    explanation: "O Papa Pio IX convocou o Primeiro Concílio Vaticano em 1869."
  },
  {
    question: "Em que ano foi definido o dogma da Imaculada Conceição?",
    options: ["1854", "1870", "1950", "1962"],
    correctAnswer: 0,
    explanation: "O dogma da Imaculada Conceição foi definido pelo Papa Pio IX em 1854."
  },
  {
    question: "Qual é a ordem religiosa fundada por São Domingos?",
    options: ["Franciscanos", "Dominicanos", "Agostinianos", "Carmelitas"],
    correctAnswer: 1,
    explanation: "São Domingos de Gusmão fundou a Ordem dos Pregadores, conhecidos como Dominicanos."
  },
  {
    question: "Qual é o nome da encíclica de Paulo VI sobre o celibato sacerdotal?",
    options: ["Sacerdotalis Caelibatus", "Presbyterorum Ordinis", "Optatam Totius", "Ad Gentes"],
    correctAnswer: 0,
    explanation: "Sacerdotalis Caelibatus (1967) é a encíclica de Paulo VI sobre o celibato sacerdotal."
  },
  {
    question: "Em que ano foi criada o Estado do Vaticano?",
    options: ["1929", "1870", "1309", "1417"],
    correctAnswer: 0,
    explanation: "O Estado do Vaticano foi criado em 1929 com os Acordos de Latrão."
  },
  {
    question: "Qual é o nome do período em que os papas residiam em Avignon?",
    options: ["Cativeiro Babilônico", "Cisma do Ocidente", "Reforma Gregoriana", "Querela das Investiduras"],
    correctAnswer: 0,
    explanation: "O Cativeiro Babilônico (1309-1377) foi o período em que os papas residiam em Avignon."
  },
  {
    question: "Qual Papa restaurou a Companhia de Jesus?",
    options: ["Pio VI", "Pio VII", "Clemente XIV", "Bento XIV"],
    correctAnswer: 1,
    explanation: "O Papa Pio VII restaurou a Companhia de Jesus em 1814."
  },
  {
    question: "Qual é o nome da constituição conciliar sobre a liturgia do Vaticano II?",
    options: ["Lumen Gentium", "Sacrosanctum Concilium", "Dei Verbum", "Gaudium et Spes"],
    correctAnswer: 1,
    explanation: "Sacrosanctum Concilium é a constituição sobre a sagrada liturgia do Vaticano II."
  },
  {
    question: "Em que ano foi promulgado o Catecismo da Igreja Católica atual?",
    options: ["1992", "1985", "1965", "2005"],
    correctAnswer: 0,
    explanation: "O Catecismo da Igreja Católica foi promulgado por João Paulo II em 1992."
  },
  {
    question: "Qual é o nome da constituição dogmática sobre a Igreja do Vaticano II?",
    options: ["Sacrosanctum Concilium", "Lumen Gentium", "Dei Verbum", "Gaudium et Spes"],
    correctAnswer: 1,
    explanation: "Lumen Gentium é a constituição dogmática sobre a Igreja do Concílio Vaticano II."
  },
  {
    question: "Qual santo é conhecido como o 'Apóstolo da Alemanha'?",
    options: ["São Bonifácio", "São Columbano", "São Patrício", "São Cirilo"],
    correctAnswer: 0,
    explanation: "São Bonifácio é conhecido como o Apóstolo da Alemanha por sua evangelização."
  },
  {
    question: "Em que ano foi instituída a festa do Sagrado Coração de Jesus?",
    options: ["1856", "1899", "1765", "1929"],
    correctAnswer: 1,
    explanation: "A festa do Sagrado Coração foi instituída pelo Papa Leão XIII em 1899."
  },
  {
    question: "Quantos concílios ecumênicos foram realizados?",
    options: ["20", "21", "23", "25"],
    correctAnswer: 1,
    explanation: "Foram realizados 21 concílios ecumênicos ao longo da história da Igreja."
  },
  {
    question: "Qual foi o primeiro concílio ecumênico?",
    options: ["Constantinopla I", "Nicéia I", "Éfeso", "Calcedônia"],
    correctAnswer: 1,
    explanation: "O Concílio de Nicéia I (325) foi o primeiro concílio ecumênico."
  },
  {
    question: "Qual heresia foi condenada no Concílio de Nicéia I?",
    options: ["Nestorianismo", "Arianismo", "Pelagianismo", "Donatismo"],
    correctAnswer: 1,
    explanation: "O Concílio de Nicéia I condenou o Arianismo, que negava a divindade de Cristo."
  },
  {
    question: "Em que concílio foi definida a Maternidade Divina de Maria?",
    options: ["Nicéia I", "Constantinopla I", "Éfeso", "Calcedônia"],
    correctAnswer: 2,
    explanation: "O Concílio de Éfeso (431) definiu Maria como Theotokos (Mãe de Deus)."
  },
  {
    question: "Qual concílio definiu as duas naturezas de Cristo?",
    options: ["Nicéia I", "Constantinopla I", "Éfeso", "Calcedônia"],
    correctAnswer: 3,
    explanation: "O Concílio de Calcedônia (451) definiu as duas naturezas de Cristo."
  },
  {
    question: "Quantas sessões teve o Concílio de Trento?",
    options: ["18", "25", "30", "35"],
    correctAnswer: 1,
    explanation: "O Concílio de Trento teve 25 sessões distribuídas em três períodos."
  },
  {
    question: "Qual Papa convocou o Concílio de Trento?",
    options: ["Paulo III", "Júlio III", "Pio IV", "Gregório XIII"],
    correctAnswer: 0,
    explanation: "O Papa Paulo III convocou o Concílio de Trento em 1545."
  },
  {
    question: "Em que ano terminou o Concílio de Trento?",
    options: ["1560", "1563", "1565", "1570"],
    correctAnswer: 1,
    explanation: "O Concílio de Trento terminou em 1563."
  },
  {
    question: "Qual foi o principal objetivo do Concílio de Trento?",
    options: ["Reformar a liturgia", "Responder à Reforma Protestante", "Definir dogmas marianos", "Organizar missões"],
    correctAnswer: 1,
    explanation: "O principal objetivo foi responder à Reforma Protestante e reformar a Igreja."
  },
  {
    question: "Qual Papa abriu o Concílio Vaticano II?",
    options: ["Pio XII", "João XXIII", "Paulo VI", "João Paulo I"],
    correctAnswer: 1,
    explanation: "O Papa João XXIII abriu o Concílio Vaticano II em 1962."
  },
  {
    question: "Qual Papa fechou o Concílio Vaticano II?",
    options: ["João XXIII", "Paulo VI", "João Paulo I", "João Paulo II"],
    correctAnswer: 1,
    explanation: "O Papa Paulo VI fechou o Concílio Vaticano II em 1965."
  },
  {
    question: "Quantos documentos foram produzidos pelo Vaticano II?",
    options: ["14", "16", "18", "20"],
    correctAnswer: 1,
    explanation: "O Concílio Vaticano II produziu 16 documentos."
  },
  {
    question: "Qual é a constituição pastoral do Vaticano II?",
    options: ["Lumen Gentium", "Dei Verbum", "Gaudium et Spes", "Sacrosanctum Concilium"],
    correctAnswer: 2,
    explanation: "Gaudium et Spes é a única constituição pastoral do Vaticano II."
  },
  {
    question: "Qual documento do Vaticano II trata do ecumenismo?",
    options: ["Unitatis Redintegratio", "Nostra Aetate", "Dignitatis Humanae", "Ad Gentes"],
    correctAnswer: 0,
    explanation: "Unitatis Redintegratio é o decreto sobre ecumenismo."
  },
  {
    question: "Qual documento trata das religiões não-cristãs?",
    options: ["Unitatis Redintegratio", "Nostra Aetate", "Dignitatis Humanae", "Ad Gentes"],
    correctAnswer: 1,
    explanation: "Nostra Aetate trata das relações com as religiões não-cristãs."
  },
  {
    question: "Qual documento trata da liberdade religiosa?",
    options: ["Unitatis Redintegratio", "Nostra Aetate", "Dignitatis Humanae", "Ad Gentes"],
    correctAnswer: 2,
    explanation: "Dignitatis Humanae é a declaração sobre liberdade religiosa."
  },
  {
    question: "Qual documento trata da atividade missionária?",
    options: ["Unitatis Redintegratio", "Nostra Aetate", "Dignitatis Humanae", "Ad Gentes"],
    correctAnswer: 3,
    explanation: "Ad Gentes é o decreto sobre atividade missionária da Igreja."
  },
  {
    question: "Quem foi o primeiro Doutor da Igreja?",
    options: ["Santo Agostinho", "São Jerônimo", "Santo Ambrósio", "São Gregório Magno"],
    correctAnswer: 0,
    explanation: "Santo Agostinho foi reconhecido como o primeiro Doutor da Igreja."
  },
  {
    question: "Quantos Doutores da Igreja existem atualmente?",
    options: ["33", "35", "37", "39"],
    correctAnswer: 2,
    explanation: "Atualmente existem 37 Doutores da Igreja reconhecidos."
  },
  {
    question: "Quem foi a primeira mulher Doutora da Igreja?",
    options: ["Santa Catarina de Siena", "Santa Teresa de Ávila", "Santa Teresa de Lisieux", "Santa Hildegarda"],
    correctAnswer: 1,
    explanation: "Santa Teresa de Ávila foi a primeira mulher declarada Doutora da Igreja."
  },
  {
    question: "Em que ano Santa Teresa de Ávila foi declarada Doutora?",
    options: ["1970", "1973", "1976", "1979"],
    correctAnswer: 0,
    explanation: "Santa Teresa de Ávila foi declarada Doutora da Igreja em 1970."
  },
  {
    question: "Quem foi a segunda mulher Doutora da Igreja?",
    options: ["Santa Catarina de Siena", "Santa Teresa de Lisieux", "Santa Hildegarda", "Santa Joana d'Arc"],
    correctAnswer: 0,
    explanation: "Santa Catarina de Siena foi a segunda mulher Doutora da Igreja."
  },
  {
    question: "Qual é o título de São Tomás de Aquino?",
    options: ["Doutor Angélico", "Doutor da Graça", "Doutor Melífluo", "Doutor Seráfico"],
    correctAnswer: 0,
    explanation: "São Tomás de Aquino é conhecido como Doutor Angélico."
  },
  {
    question: "Qual é o título de Santo Agostinho?",
    options: ["Doutor Angélico", "Doutor da Graça", "Doutor Melífluo", "Doutor Seráfico"],
    correctAnswer: 1,
    explanation: "Santo Agostinho é conhecido como Doutor da Graça."
  },
  {
    question: "Qual é o título de São Bernardo?",
    options: ["Doutor Angélico", "Doutor da Graça", "Doutor Melífluo", "Doutor Seráfico"],
    correctAnswer: 2,
    explanation: "São Bernardo é conhecido como Doutor Melífluo."
  },
  {
    question: "Qual é o título de São Boaventura?",
    options: ["Doutor Angélico", "Doutor da Graça", "Doutor Melífluo", "Doutor Seráfico"],
    correctAnswer: 3,
    explanation: "São Boaventura é conhecido como Doutor Seráfico."
  },
  {
    question: "Qual ordem religiosa São Tomás de Aquino pertencia?",
    options: ["Franciscanos", "Dominicanos", "Jesuítas", "Beneditinos"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino era dominicano."
  },
  {
    question: "Qual obra principal escreveu São Tomás de Aquino?",
    options: ["Suma Contra Gentios", "Suma Teológica", "Ambas", "Comentários a Aristóteles"],
    correctAnswer: 2,
    explanation: "São Tomás escreveu tanto a Suma Teológica quanto a Suma Contra Gentios."
  },
  {
    question: "Quantas partes tem a Suma Teológica?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "A Suma Teológica tem três partes principais."
  },
  {
    question: "O que são as 'Cinco Vias' de São Tomás?",
    options: ["Cinco virtudes", "Cinco provas da existência de Deus", "Cinco sacramentos", "Cinco mandamentos"],
    correctAnswer: 1,
    explanation: "As Cinco Vias são cinco provas da existência de Deus."
  },
  {
    question: "Qual filósofo influenciou mais São Tomás?",
    options: ["Platão", "Aristóteles", "Agostinho", "Anselmo"],
    correctAnswer: 1,
    explanation: "Aristóteles foi o filósofo que mais influenciou São Tomás de Aquino."
  },
  {
    question: "Em que século viveu São Francisco de Assis?",
    options: ["XI-XII", "XII-XIII", "XIII-XIV", "XIV-XV"],
    correctAnswer: 1,
    explanation: "São Francisco viveu entre os séculos XII e XIII (1181-1226)."
  },
  {
    question: "Qual foi o nome de batismo de São Francisco?",
    options: ["Francisco", "Giovanni", "Pietro", "Antonio"],
    correctAnswer: 1,
    explanation: "São Francisco foi batizado com o nome de Giovanni (João)."
  },
  {
    question: "Por que ficou conhecido como Francisco?",
    options: ["Pelo pai", "Por gostar da França", "Por falar francês", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Ficou conhecido como Francisco por todas essas razões relacionadas à França."
  },
  {
    question: "Onde São Francisco recebeu os estigmas?",
    options: ["Assis", "Monte Alverne", "Roma", "Porciúncula"],
    correctAnswer: 1,
    explanation: "São Francisco recebeu os estigmas no Monte Alverne."
  },
  {
    question: "Qual foi a primeira igreja restaurada por São Francisco?",
    options: ["São Damião", "Porciúncula", "São Pedro", "Santa Maria"],
    correctAnswer: 0,
    explanation: "A igreja de São Damião foi a primeira restaurada por São Francisco."
  },
  {
    question: "Quantas ordens franciscanas existem?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "Existem três ordens franciscanas: 1ª, 2ª (Clarissas) e 3ª Ordem."
  },
  {
    question: "Quem fundou a Segunda Ordem Franciscana?",
    options: ["São Francisco", "Santa Clara", "Santo Antônio", "São Boaventura"],
    correctAnswer: 1,
    explanation: "Santa Clara fundou a Segunda Ordem Franciscana (Clarissas)."
  },
  {
    question: "Como se chama o hábito franciscano?",
    options: ["Hábito marrom", "Hábito cinza", "Hábito preto", "Hábito branco"],
    correctAnswer: 0,
    explanation: "O hábito franciscano é marrom (cor de terra)."
  },
  {
    question: "Qual é o símbolo franciscano?",
    options: ["Cruz simples", "Tau", "Cordão", "Rosa"],
    correctAnswer: 1,
    explanation: "O Tau (letra grega T) é o símbolo franciscano."
  },
  {
    question: "São Francisco é padroeiro de quê?",
    options: ["Itália", "Animais", "Ecologia", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "São Francisco é padroeiro da Itália, dos animais e da ecologia."
  },
  {
    question: "Em que ano São Domingos fundou sua ordem?",
    options: ["1206", "1216", "1226", "1236"],
    correctAnswer: 1,
    explanation: "São Domingos fundou a Ordem dos Pregadores em 1216."
  },
  {
    question: "Qual era o objetivo principal da Ordem Dominicana?",
    options: ["Contemplação", "Pregação", "Caridade", "Ensino"],
    correctAnswer: 1,
    explanation: "O objetivo principal era a pregação contra as heresias."
  },
  {
    question: "Qual heresia os dominicanos combatiam principalmente?",
    options: ["Arianismo", "Catarismo", "Nestorianismo", "Pelagianismo"],
    correctAnswer: 1,
    explanation: "Os dominicanos combatiam principalmente o Catarismo no sul da França."
  },
  {
    question: "Qual é o lema dominicano?",
    options: ["Veritas", "Caritas", "Spes", "Fides"],
    correctAnswer: 0,
    explanation: "O lema dominicano é 'Veritas' (Verdade)."
  },
  {
    question: "Qual é a cor do hábito dominicano?",
    options: ["Marrom", "Preto e branco", "Azul", "Cinza"],
    correctAnswer: 1,
    explanation: "O hábito dominicano é preto e branco."
  },
  {
    question: "Quem foi o primeiro santo dominicano canonizado?",
    options: ["São Domingos", "São Pedro Mártir", "Santo Tomás de Aquino", "Santa Catarina"],
    correctAnswer: 1,
    explanation: "São Pedro Mártir foi o primeiro santo dominicano canonizado."
  },
  {
    question: "Qual universidade famosa foi fundada pelos dominicanos?",
    options: ["Sorbonne", "Oxford", "Bolonha", "Salamanca"],
    correctAnswer: 0,
    explanation: "A Universidade de Paris (Sorbonne) teve forte influência dominicana."
  },
  {
    question: "Quem criou o Rosário?",
    options: ["São Domingos", "Nossa Senhora", "São Francisco", "Santo Antônio"],
    correctAnswer: 0,
    explanation: "Segundo a tradição, Nossa Senhora ensinou o Rosário a São Domingos."
  },
  {
    question: "Quantas contas tem um terço?",
    options: ["50", "53", "59", "60"],
    correctAnswer: 2,
    explanation: "Um terço tem 59 contas no total."
  },
  {
    question: "Quantos mistérios tem o Rosário tradicional?",
    options: ["15", "20", "25", "30"],
    correctAnswer: 0,
    explanation: "O Rosário tradicional tinha 15 mistérios antes dos Mistérios Luminosos."
  },
  {
    question: "Quem acrescentou os Mistérios Luminosos?",
    options: ["Paulo VI", "João Paulo II", "Bento XVI", "Francisco"],
    correctAnswer: 1,
    explanation: "João Paulo II acrescentou os Mistérios Luminosos em 2002."
  },
  {
    question: "Em que dia se reza os Mistérios Gozosos?",
    options: ["Segunda e sábado", "Terça e sexta", "Quarta e domingo", "Quinta"],
    correctAnswer: 0,
    explanation: "Os Mistérios Gozosos se rezam às segundas e sábados."
  },
  {
    question: "Em que dia se reza os Mistérios Dolorosos?",
    options: ["Segunda", "Terça e sexta", "Quarta", "Quinta"],
    correctAnswer: 1,
    explanation: "Os Mistérios Dolorosos se rezam às terças e sextas."
  },
  {
    question: "Em que dia se reza os Mistérios Gloriosos?",
    options: ["Segunda", "Terça", "Quarta e domingo", "Quinta"],
    correctAnswer: 2,
    explanation: "Os Mistérios Gloriosos se rezam às quartas e domingos."
  },
  {
    question: "Em que dia se reza os Mistérios Luminosos?",
    options: ["Segunda", "Terça", "Quarta", "Quinta"],
    correctAnswer: 3,
    explanation: "Os Mistérios Luminosos se rezam às quintas-feiras."
  },
  {
    question: "Qual é o primeiro Mistério Gozoso?",
    options: ["Anunciação", "Visitação", "Nascimento", "Apresentação"],
    correctAnswer: 0,
    explanation: "O primeiro Mistério Gozoso é a Anunciação."
  },
  {
    question: "Qual é o primeiro Mistério Doloroso?",
    options: ["Agonia", "Flagelação", "Coroação", "Crucificação"],
    correctAnswer: 0,
    explanation: "O primeiro Mistério Doloroso é a Agonia no Horto."
  },
  {
    question: "Qual é o primeiro Mistério Glorioso?",
    options: ["Ressurreição", "Ascensão", "Pentecostes", "Assunção"],
    correctAnswer: 0,
    explanation: "O primeiro Mistério Glorioso é a Ressurreição."
  },
  {
    question: "Qual é o primeiro Mistério Luminoso?",
    options: ["Batismo", "Caná", "Pregação", "Transfiguração"],
    correctAnswer: 0,
    explanation: "O primeiro Mistério Luminoso é o Batismo de Jesus."
  },
  {
    question: "Em que ano foi fundada a Companhia de Jesus?",
    options: ["1534", "1540", "1545", "1550"],
    correctAnswer: 1,
    explanation: "A Companhia de Jesus foi oficialmente aprovada em 1540."
  },
  {
    question: "Onde Santo Inácio teve sua conversão?",
    options: ["Montserrat", "Manresa", "Pamplona", "Paris"],
    correctAnswer: 2,
    explanation: "Santo Inácio foi ferido em Pamplona e lá começou sua conversão."
  },
  {
    question: "Qual obra principal escreveu Santo Inácio?",
    options: ["Suma Espiritual", "Exercícios Espirituais", "Imitação de Cristo", "Constituições"],
    correctAnswer: 1,
    explanation: "Santo Inácio escreveu os Exercícios Espirituais."
  },
  {
    question: "Quantos dias duram os Exercícios Espirituais?",
    options: ["15", "20", "30", "40"],
    correctAnswer: 2,
    explanation: "Os Exercícios Espirituais duram 30 dias."
  },
  {
    question: "Qual é o lema jesuítico?",
    options: ["Ad majorem Dei gloriam", "In hoc signo vinces", "Deus vult", "Ave Maria"],
    correctAnswer: 0,
    explanation: "O lema jesuítico é 'Ad majorem Dei gloriam' (Para maior glória de Deus)."
  },
  {
    question: "Quem foi o primeiro superior geral jesuíta?",
    options: ["Francisco Xavier", "Pedro Fabro", "Santo Inácio", "Diego Laínez"],
    correctAnswer: 2,
    explanation: "Santo Inácio de Loyola foi o primeiro superior geral."
  },
  {
    question: "Qual jesuíta evangelizou a Ásia?",
    options: ["Santo Inácio", "São Francisco Xavier", "Pedro Fabro", "Simão Rodrigues"],
    correctAnswer: 1,
    explanation: "São Francisco Xavier evangelizou a Ásia."
  },
  {
    question: "Em que ano a Companhia foi suprimida?",
    options: ["1759", "1767", "1773", "1814"],
    correctAnswer: 2,
    explanation: "A Companhia de Jesus foi suprimida em 1773."
  },
  {
    question: "Qual Papa suprimiu os jesuítas?",
    options: ["Clemente XIII", "Clemente XIV", "Pio VI", "Pio VII"],
    correctAnswer: 1,
    explanation: "O Papa Clemente XIV suprimiu os jesuítas."
  },
  {
    question: "Em que ano foram restaurados?",
    options: ["1801", "1814", "1820", "1825"],
    correctAnswer: 1,
    explanation: "Os jesuítas foram restaurados em 1814."
  },
  {
    question: "Qual Papa restaurou os jesuítas?",
    options: ["Pio VI", "Pio VII", "Pio VIII", "Pio IX"],
    correctAnswer: 1,
    explanation: "O Papa Pio VII restaurou a Companhia de Jesus."
  },
  {
    question: "Quantos papas jesuítas existiram?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 1,
    explanation: "Houve apenas um papa jesuíta: Francisco."
  },
  {
    question: "Qual é o nome religioso do Papa Francisco?",
    options: ["Jorge Mario", "Francisco", "Bergoglio", "Mario Jorge"],
    correctAnswer: 1,
    explanation: "Francisco é seu nome papal, escolhido em honra a São Francisco."
  },
  {
    question: "De que país é o Papa Francisco?",
    options: ["Brasil", "Argentina", "Chile", "Uruguai"],
    correctAnswer: 1,
    explanation: "O Papa Francisco é argentino."
  },
  {
    question: "Em que ano foi eleito Papa Francisco?",
    options: ["2012", "2013", "2014", "2015"],
    correctAnswer: 1,
    explanation: "O Papa Francisco foi eleito em 2013."
  },
  {
    question: "Qual Papa renunciou antes de Francisco?",
    options: ["João Paulo II", "Bento XVI", "Paulo VI", "João XXIII"],
    correctAnswer: 1,
    explanation: "Bento XVI renunciou em 2013, sendo sucedido por Francisco."
  },
  {
    question: "Quantos anos durou o pontificado de João Paulo II?",
    options: ["25", "26", "27", "28"],
    correctAnswer: 2,
    explanation: "João Paulo II foi papa por quase 27 anos (1978-2005)."
  },
  {
    question: "Em que ano João Paulo II foi canonizado?",
    options: ["2011", "2013", "2014", "2016"],
    correctAnswer: 2,
    explanation: "João Paulo II foi canonizado em 2014."
  },
  {
    question: "Junto com João Paulo II, quem mais foi canonizado?",
    options: ["Pio XII", "João XXIII", "Paulo VI", "Pio X"],
    correctAnswer: 1,
    explanation: "João XXIII foi canonizado junto com João Paulo II."
  },
  {
    question: "Qual encíclica João Paulo II escreveu sobre o trabalho?",
    options: ["Centesimus Annus", "Laborem Exercens", "Sollicitudo Rei Socialis", "Veritatis Splendor"],
    correctAnswer: 1,
    explanation: "Laborem Exercens (1981) trata sobre o trabalho humano."
  },
  {
    question: "Qual encíclica trata dos 100 anos da Rerum Novarum?",
    options: ["Centesimus Annus", "Laborem Exercens", "Sollicitudo Rei Socialis", "Veritatis Splendor"],
    correctAnswer: 0,
    explanation: "Centesimus Annus (1991) comemora os 100 anos da Rerum Novarum."
  },
  {
    question: "Quantas encíclicas escreveu João Paulo II?",
    options: ["12", "14", "16", "18"],
    correctAnswer: 1,
    explanation: "João Paulo II escreveu 14 encíclicas."
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
    question: "Qual foi a primeira heresia cristã formalmente condenada?",
    options: ["Arianismo", "Gnosticismo", "Donatismo", "Marcionismo"],
    correctAnswer: 1,
    explanation: "O Gnosticismo foi uma das primeiras heresias formalmente combatidas pelos Padres Apostólicos."
  },
  {
    question: "Em que concílio foi estabelecido o cânon bíblico definitivo?",
    options: ["Niceia I", "Constantinopla I", "Hipona", "Cartago"],
    correctAnswer: 3,
    explanation: "O Concílio de Cartago (397) estabeleceu definitivamente o cânon das Escrituras."
  },
  {
    question: "Qual teólogo medieval desenvolveu a prova cosmológica da existência de Deus?",
    options: ["Santo Anselmo", "São Tomás de Aquino", "Duns Escoto", "São Boaventura"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino desenvolveu as cinco vias, incluindo a prova cosmológica."
  },
  {
    question: "Qual é o nome técnico da doutrina sobre a união das duas naturezas em Cristo?",
    options: ["Kenosis", "Pericórese", "União hipostática", "Communicatio idiomatum"],
    correctAnswer: 2,
    explanation: "A união hipostática explica como as duas naturezas de Cristo se unem em uma só pessoa."
  },
  {
    question: "Em que ano foi promulgada a bula Unam Sanctam?",
    options: ["1302", "1309", "1378", "1417"],
    correctAnswer: 0,
    explanation: "A bula Unam Sanctam foi promulgada por Bonifácio VIII em 1302."
  },
  {
    question: "Qual Papa convocou o Concílio de Constança?",
    options: ["Martinho V", "João XXIII", "Gregório XII", "Bento XIII"],
    correctAnswer: 0,
    explanation: "O Papa Martinho V convocou o Concílio de Constança para resolver o Cisma do Ocidente."
  },
  {
    question: "Qual é o nome da controvérsia teológica sobre a natureza da graça no século XVII?",
    options: ["Jansenismo", "Molinismo", "Banezianismo", "Controvérsia de Auxiliis"],
    correctAnswer: 3,
    explanation: "A Controvérsia de Auxiliis debateu a relação entre graça divina e livre arbítrio."
  },
  {
    question: "Qual teólogo desenvolveu a teoria da dupla predestinação?",
    options: ["João Calvino", "Martinho Lutero", "Ulrico Zuínglio", "John Knox"],
    correctAnswer: 0,
    explanation: "João Calvino desenvolveu a controvertida teoria da dupla predestinação."
  },
  {
    question: "Em que concílio foi definida a processão do Espírito Santo?",
    options: ["Nicéia I", "Constantinopla I", "Éfeso", "Calcedônia"],
    correctAnswer: 3,
    explanation: "O Concílio de Florença (1439) tentou reunificar Oriente e Ocidente sobre o Filioque."
  },
  {
    question: "Qual é o nome da escola teológica de Salamanca do século XVI?",
    options: ["Escola Tomista", "Escola Scotista", "Escola de Salamanca", "Escola de São Vítor"],
    correctAnswer: 2,
    explanation: "A Escola de Salamanca desenvolveu importantes teorias sobre direito natural e economia."
  },
  {
    question: "Qual Papa promulgou a bula In Eminenti contra a Maçonaria?",
    options: ["Clemente XII", "Bento XIV", "Pio VII", "Leão XII"],
    correctAnswer: 0,
    explanation: "Clemente XII promulgou In Eminenti (1738), primeira condenação papal da Maçonaria."
  },
  {
    question: "Em que ano foi suprimida a Companhia de Jesus?",
    options: ["1759", "1767", "1773", "1814"],
    correctAnswer: 2,
    explanation: "A Companhia de Jesus foi suprimida por Clemente XIV em 1773."
  },
  {
    question: "Qual é o nome da doutrina sobre a indefectibilidade da Igreja?",
    options: ["Infalibilidade", "Inerrância", "Indissolubilidade", "Indefectibilidade"],
    correctAnswer: 3,
    explanation: "A indefectibilidade garante que a Igreja não pode falir em sua missão essencial."
  },
  {
    question: "Qual teólogo jesuíta desenvolveu a teoria do probabilismo?",
    options: ["Francisco Suárez", "Bartolomé de Medina", "Juan de Mariana", "Luis de Molina"],
    correctAnswer: 1,
    explanation: "Bartolomé de Medina desenvolveu a teoria moral do probabilismo."
  },
  {
    question: "Em que ano foi promulgada a constituição Pastor Aeternus?",
    options: ["1869", "1870", "1871", "1872"],
    correctAnswer: 1,
    explanation: "Pastor Aeternus (1870) definiu a infalibilidade e primado papal."
  },
  {
    question: "O que é a teoria da enhipostasia?",
    options: ["União das naturezas", "Subsistência da natureza humana no Verbo", "Comunicação de idiomas", "Kenosis divina"],
    correctAnswer: 1,
    explanation: "A enhipostasia explica como a natureza humana de Cristo subsiste no Verbo."
  },
  {
    question: "Quem desenvolveu a doutrina da ciência média?",
    options: ["Francisco Suárez", "Luis de Molina", "Domingo Báñez", "Roberto Belarmino"],
    correctAnswer: 1,
    explanation: "Luis de Molina desenvolveu a doutrina da ciência média."
  },
  {
    question: "O que é a scientia media de Molina?",
    options: ["Conhecimento médio de Deus", "Conhecimento dos futuros condicionais", "Teoria da predestinação", "Doutrina da graça"],
    correctAnswer: 1,
    explanation: "A scientia media é o conhecimento divino dos futuros condicionais livres."
  },
  {
    question: "Qual foi a principal controvérsia entre molinistas e banezistas?",
    options: ["Natureza de Cristo", "Graça e livre arbítrio", "Infalibilidade papal", "Canon bíblico"],
    correctAnswer: 1,
    explanation: "A controvérsia centrava-se na relação entre graça divina e livre arbítrio."
  },
  {
    question: "Quem foi Domingo Báñez?",
    options: ["Jesuíta molinista", "Dominicano tomista", "Franciscano escotista", "Agostiniano jansenista"],
    correctAnswer: 1,
    explanation: "Domingo Báñez foi um dominicano que defendeu a interpretação tomista da graça."
  },
  {
    question: "O que defendia o banezianismo?",
    options: ["Premoção física", "Ciência média", "Congruismo", "Sincategoremática"],
    correctAnswer: 0,
    explanation: "O banezianismo defendia a premoção física como explicação da ação da graça."
  },
  {
    question: "Qual Papa tentou resolver a Controvérsia de Auxiliis?",
    options: ["Clemente VIII", "Paulo V", "Urbano VIII", "Inocêncio X"],
    correctAnswer: 1,
    explanation: "Paulo V tentou resolver a controvérsia mas acabou proibindo as partes de se acusarem mutuamente."
  },
  {
    question: "O que é o congruismo?",
    options: ["Teoria jesuíta", "Teoria dominicana", "Teoria franciscana", "Teoria agostiniana"],
    correctAnswer: 0,
    explanation: "O congruismo foi uma tentativa jesuíta de conciliar graça eficaz e liberdade."
  },
  {
    question: "Quem desenvolveu a teoria congruista?",
    options: ["Molina", "Suárez", "Roberto Belarmino", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Vários teólogos jesuítas contribuíram para o desenvolvimento do congruismo."
  },
  {
    question: "O que é a teoria da premoção física?",
    options: ["Deus move a vontade eficazmente", "Deus prevê as ações livres", "Deus oferece graça suficiente", "Deus predestina absolutamente"],
    correctAnswer: 0,
    explanation: "A premoção física defende que Deus move a vontade de forma eficaz e infalível."
  },
  {
    question: "Qual heresia foi condenada na bula Unigenitus?",
    options: ["Molinismo", "Banezianismo", "Jansenismo", "Quietismo"],
    correctAnswer: 2,
    explanation: "A bula Unigenitus (1713) condenou proposições jansenistas."
  },
  {
    question: "Quem foi Cornélio Jansênio?",
    options: ["Bispo de Ypres", "Teólogo de Louvain", "Autor do Augustinus", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Jansênio foi bispo de Ypres, teólogo e autor da obra Augustinus."
  },
  {
    question: "O que defendia o jansenismo?",
    options: ["Graça irresistível", "Predestinação rigorosa", "Moral rigorista", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "O jansenismo defendia uma interpretação rigorosa da doutrina agostiniana."
  },
  {
    question: "Qual foi o principal centro jansenista na França?",
    options: ["Sorbonne", "Port-Royal", "Saint-Sulpice", "Saint-Germain"],
    correctAnswer: 1,
    explanation: "Port-Royal foi o principal centro jansenista na França."
  },
  {
    question: "Quem foi Antoine Arnauld?",
    options: ["Teólogo jansenista", "Matemático", "Filósofo", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Antoine Arnauld foi um dos principais teólogos jansenistas e também matemático."
  },
  {
    question: "Quem foi Blaise Pascal?",
    options: ["Matemático jansenista", "Autor das Provinciais", "Filósofo cristão", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Pascal foi matemático, filósofo e simpatizante do jansenismo."
  },
  {
    question: "O que são as 'Cartas Provinciais'?",
    options: ["Defesa do jansenismo", "Crítica aos jesuítas", "Obra de Pascal", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "As Provinciais de Pascal defendiam Port-Royal e criticavam a moral jesuíta."
  },
  {
    question: "Qual Papa condenou definitivamente o jansenismo?",
    options: ["Inocêncio X", "Alexandre VII", "Clemente XI", "Todos"],
    correctAnswer: 3,
    explanation: "Vários papas condenaram aspectos do jansenismo ao longo do tempo."
  },
  {
    question: "O que foi o 'Formulário' de Alexandre VII?",
    options: ["Condenação do jansenismo", "Documento para assinatura", "Exigência de submissão", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "O Formulário exigia a condenação de proposições jansenistas."
  },
  {
    question: "Quem foi Miguel de Molinos?",
    options: ["Místico espanhol", "Fundador do quietismo", "Condenado pela Inquisição", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Molinos foi o principal representante do quietismo, depois condenado."
  },
  {
    question: "O que defendia o quietismo?",
    options: ["Passividade total na oração", "Aniquilação da vontade", "União mística sem atos", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "O quietismo defendia a passividade completa na vida espiritual."
  },
  {
    question: "Qual bula condenou o quietismo?",
    options: ["Unigenitus", "Coelestis Pastor", "Cum alias", "In Eminenti"],
    correctAnswer: 1,
    explanation: "A bula Coelestis Pastor (1687) condenou as doutrinas quietistas."
  },
  {
    question: "Quem foi Madame Guyon?",
    options: ["Mística francesa", "Seguidora do quietismo", "Amiga de Fénelon", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Madame Guyon foi uma mística francesa ligada ao quietismo."
  },
  {
    question: "Qual prelado francês defendeu Madame Guyon?",
    options: ["Bossuet", "Fénelon", "Massillon", "Bourdaloue"],
    correctAnswer: 1,
    explanation: "Fénelon defendeu Madame Guyon, causando controvérsia."
  },
  {
    question: "Quem se opôs a Fénelon na questão quietista?",
    options: ["Bossuet", "Luis XIV", "Inocêncio XII", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Bossuet, o rei e o papa se opuseram às ideias de Fénelon."
  },
  {
    question: "O que é a 'via unitiva' na mística?",
    options: ["Primeira etapa", "Segunda etapa", "Terceira etapa", "Não existe"],
    correctAnswer: 2,
    explanation: "A via unitiva é a terceira e última etapa da vida mística."
  },
  {
    question: "Quais são as três vias místicas?",
    options: ["Purgativa, iluminativa, unitiva", "Vocal, mental, contemplativa", "Ativa, passiva, mista", "Ascética, mística, heroica"],
    correctAnswer: 0,
    explanation: "As três vias místicas são: purgativa, iluminativa e unitiva."
  },
  {
    question: "Quem escreveu 'Subida do Monte Carmelo'?",
    options: ["Santa Teresa", "São João da Cruz", "São Pedro de Alcântara", "Santa Teresa de Lisieux"],
    correctAnswer: 1,
    explanation: "São João da Cruz escreveu 'Subida do Monte Carmelo'."
  },
  {
    question: "O que é a 'noite escura da alma'?",
    options: ["Tentação", "Purificação passiva", "Depressão espiritual", "Castigo divino"],
    correctAnswer: 1,
    explanation: "A noite escura é a purificação passiva da alma na vida mística."
  },
  {
    question: "Quantas noites escuras existem segundo São João da Cruz?",
    options: ["Uma", "Duas", "Três", "Quatro"],
    correctAnswer: 1,
    explanation: "São João da Cruz distingue duas noites: dos sentidos e do espírito."
  },
  {
    question: "O que são as 'Moradas' de Santa Teresa?",
    options: ["Casas do convento", "Graus de oração", "Virtudes", "Penitências"],
    correctAnswer: 1,
    explanation: "As Moradas representam os diferentes graus da vida interior."
  },
  {
    question: "Quantas moradas distingue Santa Teresa?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "Santa Teresa distingue 7 moradas no Castelo Interior."
  },
  {
    question: "O que acontece na sétima morada?",
    options: ["Matrimônio espiritual", "Êxtase", "Visões", "Arrebatamento"],
    correctAnswer: 0,
    explanation: "Na sétima morada acontece o matrimônio espiritual."
  },
  {
    question: "Qual é a diferença entre êxtase e arrebatamento?",
    options: ["Não há diferença", "Intensidade", "Duração", "Origem"],
    correctAnswer: 1,
    explanation: "O arrebatamento é mais intenso e súbito que o êxtase."
  },
  {
    question: "O que é a 'oração de quietude'?",
    options: ["Primeira forma de contemplação", "Oração vocal", "Meditação", "Leitura espiritual"],
    correctAnswer: 0,
    explanation: "A oração de quietude é a primeira forma de contemplação infusa."
  },
  {
    question: "Qual teólogo escreveu sobre os 'graus do amor'?",
    options: ["São Bernardo", "São Tomás", "Santo Agostinho", "São Boaventura"],
    correctAnswer: 0,
    explanation: "São Bernardo escreveu sobre os quatro graus do amor."
  },
  {
    question: "Quantos graus de amor distingue São Bernardo?",
    options: ["3", "4", "5", "7"],
    correctAnswer: 1,
    explanation: "São Bernardo distingue quatro graus de amor a Deus."
  },
  {
    question: "Qual é o primeiro grau de amor segundo São Bernardo?",
    options: ["Amor de si por Deus", "Amor a Deus por Deus", "Amor a Deus por si", "Amor puro"],
    correctAnswer: 2,
    explanation: "O primeiro grau é amar a Deus por causa de si mesmo."
  },
  {
    question: "Qual é o quarto grau de amor?",
    options: ["Amor de si por Deus", "Amor a Deus por Deus", "Amor a si por Deus", "Amor puro"],
    correctAnswer: 0,
    explanation: "O quarto grau é amar a si mesmo unicamente por causa de Deus."
  },
  {
    question: "Quem foi Mestre Eckhart?",
    options: ["Místico dominicano", "Pregador alemão", "Teólogo medieval", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Mestre Eckhart foi um místico dominicano alemão do século XIV."
  },
  {
    question: "Por que Mestre Eckhart foi investigado?",
    options: ["Heresia", "Panteísmo", "Linguagem ousada", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Eckhart foi investigado por suas expressões místicas ousadas."
  },
  {
    question: "O que é o 'desapego' (Gelassenheit) em Eckhart?",
    options: ["Indiferença", "Abandono total a Deus", "Desprezo do mundo", "Ascetismo"],
    correctAnswer: 1,
    explanation: "Gelassenheit é o abandono total da vontade própria a Deus."
  },
  {
    question: "Quem foi Johannes Tauler?",
    options: ["Discípulo de Eckhart", "Místico renano", "Dominicano", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Tauler foi discípulo de Eckhart e grande místico renano."
  },
  {
    question: "O que caracteriza a 'mística renana'?",
    options: ["Especulação filosófica", "Experiência unitiva", "Linguagem ousada", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "A mística renana combina especulação e experiência mística."
  },
  {
    question: "Quem escreveu 'A Imitação de Cristo'?",
    options: ["Tomás de Kempis", "Gerhard Groote", "João Ruysbroeck", "Incerto"],
    correctAnswer: 0,
    explanation: "Tradicionalmente atribuída a Tomás de Kempis, mas a autoria é debatida."
  },
  {
    question: "O que é a 'Devotio Moderna'?",
    options: ["Movimento místico", "Reforma católica", "Espiritualidade prática", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "A Devotio Moderna foi um movimento de renovação espiritual."
  },
  {
    question: "Onde surgiu a Devotio Moderna?",
    options: ["Alemanha", "França", "Países Baixos", "Itália"],
    correctAnswer: 2,
    explanation: "A Devotio Moderna surgiu nos Países Baixos no século XIV."
  },
  {
    question: "Quem fundou os 'Irmãos da Vida Comum'?",
    options: ["Tomás de Kempis", "Gerhard Groote", "João Ruysbroeck", "Florêncio Radewijns"],
    correctAnswer: 1,
    explanation: "Gerhard Groote fundou os Irmãos da Vida Comum."
  },
  {
    question: "O que caracterizava os Irmãos da Vida Comum?",
    options: ["Vida comunitária", "Educação", "Cópia de manuscritos", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Os Irmãos se dedicavam à vida comunitária, educação e cópia de livros."
  },
  {
    question: "Qual foi a contribuição educacional da Devotio Moderna?",
    options: ["Ensino gratuito", "Método pedagógico", "Formação do clero", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "A Devotio Moderna revolucionou a educação medieval."
  },
  {
    question: "Quem foi influenciado pela Devotio Moderna?",
    options: ["Erasmo", "Lutero", "Santo Inácio", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Muitos reformadores foram influenciados por esse movimento."
  },
  {
    question: "O que é a 'teologia negativa' ou 'apofática'?",
    options: ["Nega a existência de Deus", "Conhece Deus pelo que Ele não é", "Rejeita a razão", "Crítica à Igreja"],
    correctAnswer: 1,
    explanation: "A teologia apofática conhece Deus negando atributos limitados."
  },
  {
    question: "Quem foi Pseudo-Dionísio Areopagita?",
    options: ["Discípulo de Paulo", "Autor místico anônimo", "Bispo de Atenas", "Filósofo grego"],
    correctAnswer: 1,
    explanation: "Pseudo-Dionísio foi um autor cristão anônimo do século V-VI."
  },
  {
    question: "Qual obra principal escreveu Pseudo-Dionísio?",
    options: ["Nomes Divinos", "Hierarquia Celeste", "Teologia Mística", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "Pseudo-Dionísio escreveu várias obras sobre mística e hierarquia."
  },
  {
    question: "O que são as 'hierarquias celestes'?",
    options: ["Ordens angélicas", "Graus de perfeição", "Estrutura do cosmos", "Todas as anteriores"],
    correctAnswer: 3,
    explanation: "As hierarquias representam a ordem cósmica e angélica."
  },
  {
    question: "Quantas ordens angélicas distingue Pseudo-Dionísio?",
    options: ["7", "8", "9", "12"],
    correctAnswer: 2,
    explanation: "Pseudo-Dionísio distingue 9 ordens angélicas em 3 hierarquias."
  },
  {
    question: "Quais são as três hierarquias superiores?",
    options: ["Serafins, Querubins, Tronos", "Dominações, Virtudes, Potestades", "Principados, Arcanjos, Anjos", "Não se distinguem"],
    correctAnswer: 0,
    explanation: "A primeira hierarquia compreende Serafins, Querubins e Tronos."
  },
  {
    question: "O que significa 'henosis' na mística grega?",
    options: ["Separação", "União com Deus", "Conhecimento", "Purificação"],
    correctAnswer: 1,
    explanation: "Henosis significa união ou unificação com o divino."
  },
  {
    question: "Qual é a diferença entre 'theosis' e 'henosis'?",
    options: ["São sinônimos", "Theosis é divinização, henosis é união", "Theosis é oriental, henosis é ocidental", "Não há diferença real"],
    correctAnswer: 1,
    explanation: "Theosis refere-se à divinização, henosis à união mística."
  },
  {
    question: "O que é a 'pericórese' trinitária?",
    options: ["Separação das pessoas", "Circuminsessão das pessoas divinas", "Subordinação do Filho", "Processão do Espírito"],
    correctAnswer: 1,
    explanation: "Pericórese é a mútua inhabitação das pessoas da Trindade."
  },
  {
    question: "Quem desenvolveu mais a doutrina da pericórese?",
    options: ["Padres Latinos", "Padres Gregos", "Escolásticos", "Místicos"],
    correctAnswer: 1,
    explanation: "Os Padres Gregos, especialmente João Damasceno, desenvolveram esta doutrina."
  },
  {
    question: "O que é o 'Filioque'?",
    options: ["Processão do Espírito também do Filho", "Geração do Filho", "Missão do Espírito", "União das naturezas"],
    correctAnswer: 0,
    explanation: "Filioque afirma que o Espírito Santo procede do Pai e do Filho."
  },
  {
    question: "Qual é a principal diferença entre Oriente e Ocidente sobre o Filioque?",
    options: ["Oriente aceita, Ocidente rejeita", "Oriente rejeita, Ocidente aceita", "Ambos aceitam", "Ambos rejeitam"],
    correctAnswer: 1,
    explanation: "O Oriente rejeita o Filioque, o Ocidente o aceita."
  },
  {
    question: "Em que concílio foi tentada a reunificação sobre o Filioque?",
    options: ["Latrão IV", "Lião II", "Florença", "Trento"],
    correctAnswer: 2,
    explanation: "O Concílio de Florença (1439) tentou resolver a questão do Filioque."
  },
  {
    question: "O que é a 'economia' trinitária?",
    options: ["Administração eclesiástica", "Missões das pessoas divinas", "Teologia moral", "Liturgia"],
    correctAnswer: 1,
    explanation: "A economia trinitária refere-se às missões ad extra das pessoas divinas."
  },
  {
    question: "Qual é a diferença entre 'teologia' e 'economia' em teologia trinitária?",
    options: ["São sinônimos", "Teologia é imanente, economia é ad extra", "Teologia é prática, economia é teórica", "Não há diferença"],
    correctAnswer: 1,
    explanation: "Teologia refere-se à vida imanente de Deus, economia às suas obras externas."
  },
  {
    question: "O que são as 'apropriações' trinitárias?",
    options: ["Propriedades exclusivas", "Atribuições preferenciais", "Missões temporais", "Processões eternas"],
    correctAnswer: 1,
    explanation: "Apropriações são atribuições preferenciais de obras comuns às pessoas divinas."
  },
  {
    question: "Qual pessoa se apropria a criação?",
    options: ["Pai", "Filho", "Espírito Santo", "Todas igualmente"],
    correctAnswer: 0,
    explanation: "A criação se apropria preferencialmente ao Pai pelo poder."
  },
  {
    question: "Qual pessoa se apropria a redenção?",
    options: ["Pai", "Filho", "Espírito Santo", "Todas igualmente"],
    correctAnswer: 1,
    explanation: "A redenção se apropria ao Filho pela sabedoria."
  },
  {
    question: "Qual pessoa se apropria a santificação?",
    options: ["Pai", "Filho", "Espírito Santo", "Todas igualmente"],
    correctAnswer: 2,
    explanation: "A santificação se apropria ao Espírito Santo pelo amor."
  },
  {
    question: "O que são as 'relações' trinitárias?",
    options: ["Vínculos externos", "Oposições relativas internas", "Semelhanças", "Diferenças acidentais"],
    correctAnswer: 1,
    explanation: "As relações trinitárias são oposições relativas que constituem as pessoas."
  },
  {
    question: "Quantas relações reais existem na Trindade?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "Existem quatro relações reais: paternidade, filiação, espiração ativa e passiva."
  },
  {
    question: "O que constitui a pessoa do Pai?",
    options: ["Paternidade", "Ingenerabilidade", "Espiração ativa", "Fonte da divindade"],
    correctAnswer: 0,
    explanation: "A paternidade constitui formalmente a pessoa do Pai."
  },
  {
    question: "O que constitui a pessoa do Filho?",
    options: ["Filiação", "Geração", "Processão", "Incarnação"],
    correctAnswer: 0,
    explanation: "A filiação constitui formalmente a pessoa do Filho."
  },
  {
    question: "O que constitui a pessoa do Espírito Santo?",
    options: ["Espiração ativa", "Espiração passiva", "Processão", "Amor"],
    correctAnswer: 1,
    explanation: "A espiração passiva (ser espirado) constitui a pessoa do Espírito Santo."
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
