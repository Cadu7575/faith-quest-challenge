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
    explanation: "José foi o pai terreno de Jesus, esposa de Maria Santíssima."
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
    question: "Qual é o nome da terceira vela do Advento?",
    options: ["Vela da Esperança", "Vela da Alegria", "Vela da Paz", "Vela do Amor"],
    correctAnswer: 1,
    explanation: "A terceira vela do Advento é rosa e representa a alegria."
  },
  {
    question: "Qual é o nome da festa que celebra a visita de Maria a Isabel?",
    options: ["Anunciação", "Visitação", "Imaculada Conceição", "Assunção"],
    correctAnswer: 1,
    explanation: "A Visitação celebra a visita de Maria grávida a sua prima Isabel."
  },
  {
    question: "Qual é o nome da oração que Maria rezou na Visitação?",
    options: ["Ave Maria", "Magnificat", "Salve Rainha", "Memorare"],
    correctAnswer: 1,
    explanation: "Maria rezou o Magnificat ao visitar sua prima Isabel."
  },
  {
    question: "Qual é o nome do anjo da guarda?",
    options: ["Miguel", "Gabriel", "Rafael", "Cada pessoa tem o seu"],
    correctAnswer: 3,
    explanation: "Cada pessoa tem seu próprio anjo da guarda, designado por Deus."
  },
  {
    question: "Qual é o nome da festa dos Anjos da Guarda?",
    options: ["29 de setembro", "2 de outubro", "1 de novembro", "8 de dezembro"],
    correctAnswer: 1,
    explanation: "A festa dos Santos Anjos da Guarda é celebrada em 2 de outubro."
  },
  {
    question: "Qual é o nome da festa de Todos os Santos?",
    options: ["31 de outubro", "1 de novembro", "2 de novembro", "8 de dezembro"],
    correctAnswer: 1,
    explanation: "A festa de Todos os Santos é celebrada em 1 de novembro."
  },
  {
    question: "Qual é o nome da festa dos Fiéis Defuntos?",
    options: ["31 de outubro", "1 de novembro", "2 de novembro", "15 de agosto"],
    correctAnswer: 2,
    explanation: "A festa dos Fiéis Defuntos é celebrada em 2 de novembro."
  },
  {
    question: "Qual é o nome da oração pelos mortos?",
    options: ["Requiem", "De Profundis", "Pai Nosso", "Ave Maria"],
    correctAnswer: 0,
    explanation: "O Requiem é a oração litúrgica pelos mortos."
  },
  {
    question: "Qual é o nome do lugar onde as almas se purificam?",
    options: ["Céu", "Inferno", "Purgatório", "Limbo"],
    correctAnswer: 2,
    explanation: "O Purgatório é o estado de purificação das almas antes do Céu."
  },
  {
    question: "Qual é o nome da virtude que nos faz acreditar em Deus?",
    options: ["Esperança", "Caridade", "Fé", "Prudência"],
    correctAnswer: 2,
    explanation: "A Fé é a virtude que nos faz crer em Deus e em suas verdades."
  },
  {
    question: "Qual é o nome da virtude que nos faz confiar em Deus?",
    options: ["Fé", "Esperança", "Caridade", "Fortaleza"],
    correctAnswer: 1,
    explanation: "A Esperança é a virtude que nos faz confiar em Deus."
  },
  {
    question: "Quantas são as virtudes teologais?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "São três as virtudes teologais: Fé, Esperança e Caridade."
  },
  {
    question: "Quantas são as virtudes cardeais?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
    explanation: "São quatro as virtudes cardeais: Prudência, Justiça, Fortaleza e Temperança."
  },
  {
    question: "Qual é o nome da virtude da moderação?",
    options: ["Prudência", "Justiça", "Fortaleza", "Temperança"],
    correctAnswer: 3,
    explanation: "A Temperança é a virtude da moderação e equilíbrio."
  },
  {
    question: "Qual é o nome da virtude da coragem?",
    options: ["Prudência", "Justiça", "Fortaleza", "Temperança"],
    correctAnswer: 2,
    explanation: "A Fortaleza é a virtude da coragem e perseverança."
  },
  {
    question: "Qual é o nome da virtude da sabedoria prática?",
    options: ["Prudência", "Justiça", "Fortaleza", "Temperança"],
    correctAnswer: 0,
    explanation: "A Prudência é a virtude da sabedoria prática e discernimento."
  },
  {
    question: "Qual é o nome da virtude de dar a cada um o que lhe é devido?",
    options: ["Prudência", "Justiça", "Fortaleza", "Temperança"],
    correctAnswer: 1,
    explanation: "A Justiça é a virtude de dar a cada um o que lhe é devido."
  },
  {
    question: "Qual é o nome do pecado de Adão e Eva?",
    options: ["Pecado mortal", "Pecado venial", "Pecado original", "Pecado capital"],
    correctAnswer: 2,
    explanation: "O pecado original é o pecado de Adão e Eva que afetou toda a humanidade."
  },
  {
    question: "Quantos são os pecados capitais?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2,
    explanation: "São sete os pecados capitais: soberba, avareza, luxúria, ira, gula, inveja e preguiça."
  },
  {
    question: "Qual é o primeiro pecado capital?",
    options: ["Avareza", "Soberba", "Luxúria", "Ira"],
    correctAnswer: 1,
    explanation: "A soberba é considerada o primeiro e principal pecado capital."
  },
  {
    question: "Qual é o nome do sacramento que perdoa o pecado original?",
    options: ["Confirmação", "Batismo", "Penitência", "Eucaristia"],
    correctAnswer: 1,
    explanation: "O Batismo apaga o pecado original e nos torna filhos de Deus."
  },
  {
    question: "Qual é o nome da água usada no Batismo?",
    options: ["Água comum", "Água benta", "Água destilada", "Água mineral"],
    correctAnswer: 1,
    explanation: "A água benta é abençoada para uso litúrgico, incluindo o Batismo."
  },
  {
    question: "Qual é o nome do óleo usado no Batismo?",
    options: ["Óleo comum", "Santo Crisma", "Óleo dos catecúmenos", "Óleo da unção"],
    correctAnswer: 1,
    explanation: "O Santo Crisma é o óleo sagrado usado no Batismo e Confirmação."
  },
  {
    question: "Qual é o nome da veste branca do Batismo?",
    options: ["Túnica", "Alva", "Véu", "Capa"],
    correctAnswer: 1,
    explanation: "A alva é a veste branca que simboliza a pureza batismal."
  },
  {
    question: "Qual é o nome da vela do Batismo?",
    options: ["Vela pascal", "Vela batismal", "Círio pascal", "Vela branca"],
    correctAnswer: 1,
    explanation: "A vela batismal é acesa do Círio Pascal como símbolo da luz de Cristo."
  },
  {
    question: "Qual é o nome da cerimônia de apresentação das crianças?",
    options: ["Batismo", "Apresentação", "Bênção", "Consagração"],
    correctAnswer: 1,
    explanation: "A Apresentação é a cerimônia de apresentar as crianças a Deus no templo."
  },
  {
    question: "Qual é a idade mínima para a Primeira Comunhão?",
    options: ["5 anos", "6 anos", "7 anos", "8 anos"],
    correctAnswer: 2,
    explanation: "A idade mínima para a Primeira Comunhão é geralmente 7 anos, idade da razão."
  },
  {
    question: "Qual é o nome da preparação para a Primeira Comunhão?",
    options: ["Catecismo", "Catequese", "Doutrina", "Preparação"],
    correctAnswer: 1,
    explanation: "A catequese é a preparação sistemática para receber os sacramentos."
  },
  {
    question: "Qual é o nome do livro usado na catequese?",
    options: ["Bíblia", "Catecismo", "Missal", "Ritual"],
    correctAnswer: 1,
    explanation: "O Catecismo é o livro que contém os ensinamentos da fé católica."
  },
  {
    question: "Qual é o nome da festa de São José?",
    options: ["19 de março", "1 de maio", "15 de agosto", "8 de dezembro"],
    correctAnswer: 0,
    explanation: "A festa de São José é celebrada em 19 de março."
  },
  {
    question: "Qual é o nome da festa de São João Batista?",
    options: ["24 de junho", "29 de junho", "15 de agosto", "1 de novembro"],
    correctAnswer: 0,
    explanation: "A festa de São João Batista é celebrada em 24 de junho."
  },
  {
    question: "Qual é o nome da festa de São Pedro e São Paulo?",
    options: ["24 de junho", "29 de junho", "15 de agosto", "1 de novembro"],
    correctAnswer: 1,
    explanation: "A festa de São Pedro e São Paulo é celebrada em 29 de junho."
  },
  {
    question: "Qual é o nome da festa da Assunção de Maria?",
    options: ["8 de dezembro", "15 de agosto", "1 de novembro", "25 de março"],
    correctAnswer: 1,
    explanation: "A festa da Assunção de Maria é celebrada em 15 de agosto."
  },
  {
    question: "Qual é o nome da festa da Imaculada Conceição?",
    options: ["8 de dezembro", "25 de março", "15 de agosto", "1 de novembro"],
    correctAnswer: 0,
    explanation: "A festa da Imaculada Conceição é celebrada em 8 de dezembro."
  },
  {
    question: "Qual é o nome da festa da Anunciação?",
    options: ["25 de março", "8 de dezembro", "15 de agosto", "2 de fevereiro"],
    correctAnswer: 0,
    explanation: "A festa da Anunciação é celebrada em 25 de março."
  },
  {
    question: "Qual é o nome do período após a Páscoa?",
    options: ["Tempo Pascal", "Tempo Comum", "Pentecostes", "Ascensão"],
    correctAnswer: 0,
    explanation: "O Tempo Pascal são os 50 dias entre a Páscoa e Pentecostes."
  },
  {
    question: "Quantos dias dura o Tempo Pascal?",
    options: ["40", "50", "60", "70"],
    correctAnswer: 1,
    explanation: "O Tempo Pascal dura 50 dias, da Páscoa até Pentecostes."
  },
  {
    question: "Qual é a cor litúrgica da Páscoa?",
    options: ["Branco", "Vermelho", "Verde", "Roxo"],
    correctAnswer: 0,
    explanation: "O branco é a cor litúrgica da Páscoa, simbolizando alegria e pureza."
  },
  {
    question: "Qual é a cor litúrgica do Pentecostes?",
    options: ["Branco", "Vermelho", "Verde", "Roxo"],
    correctAnswer: 1,
    explanation: "O vermelho é a cor litúrgica do Pentecostes, simbolizando o fogo do Espírito Santo."
  },
  {
    question: "Qual é a cor litúrgica do Tempo Comum?",
    options: ["Branco", "Vermelho", "Verde", "Roxo"],
    correctAnswer: 2,
    explanation: "O verde é a cor litúrgica do Tempo Comum, simbolizando esperança e crescimento."
  },
  {
    question: "Qual é o nome da oração antes das refeições?",
    options: ["Benção da mesa", "Oração dos alimentos", "Graças", "Agradecimento"],
    correctAnswer: 0,
    explanation: "A benção da mesa é a oração que se faz antes das refeições."
  },
  {
    question: "Qual é o nome da oração depois das refeições?",
    options: ["Ação de graças", "Agradecimento", "Graças", "Benção final"],
    correctAnswer: 0,
    explanation: "A ação de graças é a oração de agradecimento após as refeições."
  },
  {
    question: "Qual é o nome da oração da manhã?",
    options: ["Laudes", "Prima", "Oração matinal", "Angelus"],
    correctAnswer: 0,
    explanation: "As Laudes são a oração oficial da manhã na Liturgia das Horas."
  },
  {
    question: "Qual é o nome da oração da noite?",
    options: ["Vésperas", "Completas", "Oração noturna", "Angelus"],
    correctAnswer: 1,
    explanation: "As Completas são a última oração do dia na Liturgia das Horas."
  },
  {
    question: "Qual é o nome da oração do meio-dia?",
    options: ["Sexta", "Angelus", "Oração meridiana", "Terça"],
    correctAnswer: 1,
    explanation: "O Angelus é tradicionalmente rezado ao meio-dia."
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
    question: "Qual é o nome da ordem religiosa fundada por São Domingos?",
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
    question: "Qual é o nome da encíclica de João Paulo II sobre o trabalho humano?",
    options: ["Centesimus Annus", "Laborem Exercens", "Sollicitudo Rei Socialis", "Veritatis Splendor"],
    correctAnswer: 1,
    explanation: "Laborem Exercens (1981) é a encíclica de João Paulo II sobre o trabalho humano."
  },
  {
    question: "Qual ordem religiosa tem como lema 'Veritas'?",
    options: ["Franciscanos", "Jesuítas", "Dominicanos", "Beneditinos"],
    correctAnswer: 2,
    explanation: "Os Dominicanos têm como lema 'Veritas' (Verdade)."
  },
  {
    question: "Em que ano foi definido o dogma da Assunção de Maria?",
    options: ["1854", "1870", "1950", "1962"],
    correctAnswer: 2,
    explanation: "O dogma da Assunção de Maria foi definido pelo Papa Pio XII em 1950."
  },
  {
    question: "Qual é o nome da constituição sobre a revelação divina do Vaticano II?",
    options: ["Lumen Gentium", "Dei Verbum", "Gaudium et Spes", "Unitatis Redintegratio"],
    correctAnswer: 2,
    explanation: "Dei Verbum é a constituição dogmática sobre a revelação divina do Vaticano II."
  },
  {
    question: "Qual Papa instituiu a festa de Cristo Rei?",
    options: ["Pio X", "Pio XI", "Pio XII", "João XXIII"],
    correctAnswer: 1,
    explanation: "O Papa Pio XI instituiu a festa de Cristo Rei em 1925."
  },
  {
    question: "Qual é o nome da encíclica sobre a educação cristã de Pio XI?",
    options: ["Divini Illius Magistri", "Mit Brennender Sorge", "Quadragesimo Anno", "Casti Connubii"],
    correctAnswer: 0,
    explanation: "Divini Illius Magistri (1929) é a encíclica de Pio XI sobre a educação cristã."
  },
  {
    question: "Em que ano São Pio X foi canonizado?",
    options: ["1954", "1951", "1946", "1958"],
    correctAnswer: 0,
    explanation: "São Pio X foi canonizado pelo Papa Pio XII em 1954."
  },
  {
    question: "Qual é o nome da ordem religiosa fundada por São João Bosco?",
    options: ["Salesianos", "Oratorianos", "Escolápios", "Maristas"],
    correctAnswer: 0,
    explanation: "São João Bosco fundou a Sociedade de São Francisco de Sales (Salesianos)."
  },
  {
    question: "Qual Papa promulgou o Código de Direito Canônico de 1917?",
    options: ["São Pio X", "Bento XV", "Pio XI", "Pio XII"],
    correctAnswer: 1,
    explanation: "O Papa Bento XV promulgou o primeiro Código de Direito Canônico em 1917."
  },
  {
    question: "Em que ano foi instituída a festa do Imaculado Coração de Maria?",
    options: ["1944", "1917", "1942", "1950"],
    correctAnswer: 2,
    explanation: "A festa do Imaculado Coração de Maria foi instituída por Pio XII em 1942."
  },
  {
    question: "Qual é o nome da encíclica de Pio XII sobre o Corpo Místico de Cristo?",
    options: ["Mystici Corporis", "Mediator Dei", "Humani Generis", "Munificentissimus Deus"],
    correctAnswer: 0,
    explanation: "Mystici Corporis (1943) é a encíclica de Pio XII sobre o Corpo Místico de Cristo."
  },
  {
    question: "Qual santo é conhecido como o 'Doutor da Graça'?",
    options: ["São Tomás de Aquino", "Santo Agostinho", "São João Crisóstomo", "São Jerônimo"],
    correctAnswer: 1,
    explanation: "Santo Agostinho é conhecido como o Doutor da Graça por seus escritos sobre a graça divina."
  },
  {
    question: "Em que ano foi promulgada a encíclica Centesimus Annus?",
    options: ["1991", "1981", "1987", "1995"],
    correctAnswer: 0,
    explanation: "Centesimus Annus foi promulgada por João Paulo II em 1991."
  },
  {
    question: "Qual é o nome da ordem religiosa fundada por São Vicente de Paulo?",
    options: ["Vicentinos", "Lazaristas", "Paúlinos", "Missionários da Caridade"],
    correctAnswer: 1,
    explanation: "São Vicente de Paulo fundou a Congregação da Missão, conhecida como Lazaristas."
  },
  {
    question: "Qual Papa instituiu a festa da Divina Misericórdia?",
    options: ["João Paulo II", "Bento XVI", "Francisco I", "Paulo VI"],
    correctAnswer: 0,
    explanation: "João Paulo II instituiu a festa da Divina Misericórdia em 2000."
  },
  {
    question: "Em que ano foi fundada a Ação Católica?",
    options: ["1922", "1905", "1931", "1948"],
    correctAnswer: 2,
    explanation: "A Ação Católica foi oficialmente estabelecida por Pio XI em 1931."
  },
  {
    question: "Qual é o nome da encíclica de Leão XIII sobre a condição operária?",
    options: ["Rerum Novarum", "Immortale Dei", "Libertas", "Sapientiae Christianae"],
    correctAnswer: 0,
    explanation: "Rerum Novarum (1891) é a famosa encíclica social de Leão XIII."
  },
  {
    question: "Qual santo é padroeiro dos comunicadores?",
    options: ["São Gabriel", "São Francisco de Sales", "Santo Isidoro", "São Paulo"],
    correctAnswer: 1,
    explanation: "São Francisco de Sales é o padroeiro dos jornalistas e comunicadores."
  }
];

export const hardQuestions: Question[] = [
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
    question: "Qual teólogo desenvolveu a teoria do probabilismo?",
    options: ["João Calvino", "Martinho Lutero", "Ulrico Zuínglio", "John Knox"],
    correctAnswer: 0,
    explanation: "João Calvino desenvolveu a controvertida teoria do probabilismo."
  },
  {
    question: "Em que concílio foi definida a processão do Espírito Santo?",
    options: ["Niceia I", "Constantinopla I", "Éfeso", "Calcedônia"],
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
    question: "Qual é o nome da doutrina sobre a enhipostasia?",
    options: ["União hipostática", "Enhipostasia", "Anhipostasia", "Comunicação de idiomas"],
    correctAnswer: 1,
    explanation: "A enhipostasia explica como a natureza humana de Cristo subsiste no Verbo."
  },
  {
    question: "Qual Papa convocou o Concílio de Vienne?",
    options: ["Bonifácio VIII", "Clemente V", "João XXII", "Bento XII"],
    correctAnswer: 1,
    explanation: "Clemente V convocou o Concílio de Vienne (1311-1312)."
  },
  {
    question: "Em que ano foi fundada a Congregação de Propaganda Fide?",
    options: ["1622", "1633", "1642", "1655"],
    correctAnswer: 0,
    explanation: "Gregório XV fundou a Congregação de Propaganda Fide em 1622."
  },
  {
    question: "Qual é o nome da teoria sobre a predestinação ante/post praevisa merita?",
    options: ["Tomismo", "Molinismo", "Agostinianismo", "Jansenismo"],
    correctAnswer: 0,
    explanation: "O Tomismo distingue entre predestinação ante e post praevisa merita."
  },
  {
    question: "Qual heresia foi condenada no Sínodo de Orange?",
    options: ["Arianismo", "Pelagianismo", "Semi-pelagianismo", "Priscilianismo"],
    correctAnswer: 2,
    explanation: "O Sínodo de Orange (529) condenou o Semi-pelagianismo."
  },
  {
    question: "Em que ano foi promulgada a encíclica Mit brennender Sorge?",
    options: ["1937", "1939", "1942", "1945"],
    correctAnswer: 0,
    explanation: "Mit brennender Sorge (1937) de Pio XI condenou o nazismo."
  },
  {
    question: "Qual é o nome da doutrina sobre a scientia media?",
    options: ["Conhecimento simples", "Conhecimento livre", "Ciência média", "Conhecimento de visão"],
    correctAnswer: 2,
    explanation: "A ciência média de Molina explica o conhecimento divino dos futuros condicionais."
  },
  {
    question: "Qual teólogo desenvolveu a síntese aristotélico-tomista?",
    options: ["Alberto Magno", "São Tomás de Aquino", "São Boaventura", "Duns Escoto"],
    correctAnswer: 1,
    explanation: "São Tomás de Aquino realizou a síntese entre aristotelismo e cristianismo."
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
      questionPool = [...hardQuestions];
      break;
    default:
      questionPool = [...easyQuestions];
  }
  
  // Embaralhar e retornar o número solicitado de perguntas
  const shuffled = questionPool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Função para obter perguntas seguindo um padrão de dificuldade
export const getQuestionsForPattern = (
  pattern: ('Fácil' | 'Médio' | 'Difícil')[],
  usedQuestions: UsedQuestions = { easy: [], medium: [], hard: [] }
): (Question & { originalIndex: number })[] => {
  const result: (Question & { originalIndex: number })[] = [];
  
  console.log('🎯 Selecionando perguntas para o padrão:', pattern);
  console.log('📝 Perguntas já utilizadas:', usedQuestions);
  
  pattern.forEach((difficulty, patternIndex) => {
    let questionPool: Question[];
    let usedIndexes: number[];
    
    if (difficulty === 'Fácil') {
      questionPool = easyQuestions;
      usedIndexes = usedQuestions.easy;
    } else if (difficulty === 'Médio') {
      questionPool = mediumQuestions;
      usedIndexes = usedQuestions.medium;
    } else {
      questionPool = hardQuestions;
      usedIndexes = usedQuestions.hard;
    }
    
    // Get available questions (not used yet)
    const availableIndexes = questionPool
      .map((_, index) => index)
      .filter(index => !usedIndexes.includes(index));
    
    console.log(`${difficulty}: ${availableIndexes.length} perguntas disponíveis de ${questionPool.length} total`);
    
    // If no questions available, reset the used questions for this difficulty
    if (availableIndexes.length === 0) {
      console.log(`⚠️ Todas as perguntas ${difficulty.toLowerCase()} foram utilizadas. Resetando...`);
      const randomIndex = Math.floor(Math.random() * questionPool.length);
      const selectedQuestion = questionPool[randomIndex];
      result.push({ ...selectedQuestion, originalIndex: randomIndex });
    } else {
      // Select a random question from available ones
      const randomAvailableIndex = Math.floor(Math.random() * availableIndexes.length);
      const selectedIndex = availableIndexes[randomAvailableIndex];
      const selectedQuestion = questionPool[selectedIndex];
      result.push({ ...selectedQuestion, originalIndex: selectedIndex });
    }
  });
  
  console.log(`✅ ${result.length} perguntas selecionadas sem repetição`);
  return result;
};
