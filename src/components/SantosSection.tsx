
import { Heart } from 'lucide-react';

const santos = [
  {
    nome: "São Francisco de Assis",
    descricao: "Fundador da Ordem Franciscana, São Francisco é conhecido por sua vida de pobreza e dedicação aos mais necessitados. Ele recebeu os estigmas de Cristo e é considerado o padroeiro da ecologia.",
    tags: ["Pobreza", "Ecologia", "Estigmas"],
    festa: "4 de outubro"
  },
  {
    nome: "Santa Teresinha do Menino Jesus",
    descricao: "Conhecida pelo 'Pequeno Caminho', Santa Teresinha ensinou que a santidade está ao alcance de todos através de pequenos atos de amor. É Doutora da Igreja e padroeira das missões.",
    tags: ["Pequeno Caminho", "Missões", "Doutora da Igreja"],
    festa: "1º de outubro"
  },
  {
    nome: "São Padre Pio",
    descricao: "Místico italiano que recebeu os estigmas por 50 anos. Era conhecido por seus dons sobrenaturais, incluindo bilocação e curas milagrosas. Sua devoção ao sofrimento de Cristo o tornou um santo muito venerado.",
    tags: ["Estigmas", "Bilocação", "Curas Milagrosas"],
    festa: "23 de setembro"
  },
  {
    nome: "Santa Teresa d'Ávila",
    descricao: "Mística espanhola, reformadora da Ordem Carmelita e Doutora da Igreja. Conhecida por suas visões místicas e seus escritos sobre oração mental.",
    tags: ["Mística", "Carmelita", "Oração"],
    festa: "15 de outubro"
  },
  {
    nome: "São João da Cruz",
    descricao: "Místico espanhol, poeta e Doutor da Igreja. Companheiro de Santa Teresa na reforma carmelita. Autor de 'Noite Escura da Alma'.",
    tags: ["Místico", "Poeta", "Noite Escura"],
    festa: "14 de dezembro"
  },
  {
    nome: "Santo Agostinho",
    descricao: "Bispo de Hipona, filósofo e teólogo. Uma das figuras mais importantes da Igreja primitiva. Autor de 'Confissões' e 'A Cidade de Deus'.",
    tags: ["Filosofia", "Teologia", "Confissões"],
    festa: "28 de agosto"
  },
  {
    nome: "São Tomás de Aquino",
    descricao: "Doutor Angélico, filósofo e teólogo dominicano. Autor da 'Suma Teológica', uma das obras mais influentes da filosofia cristã.",
    tags: ["Filosofia", "Suma Teológica", "Dominicano"],
    festa: "28 de janeiro"
  },
  {
    nome: "Santa Catarina de Siena",
    descricao: "Mística italiana, terciária dominicana e Doutora da Igreja. Influenciou o Papa a retornar de Avignon para Roma.",
    tags: ["Mística", "Política Papal", "Dominicana"],
    festa: "29 de abril"
  },
  {
    nome: "São Bento de Núrsia",
    descricao: "Patriarca do monaquismo ocidental. Fundador da Ordem Beneditina e autor da Regra de São Bento. Padroeiro da Europa.",
    tags: ["Monaquismo", "Beneditino", "Europa"],
    festa: "11 de julho"
  },
  {
    nome: "São Jerônimo",
    descricao: "Tradutor da Bíblia para o latim (Vulgata). Eremita, estudioso e Doutor da Igreja. Conhecido por sua erudição e temperamento ardente.",
    tags: ["Bíblia", "Vulgata", "Erudição"],
    festa: "30 de setembro"
  },
  {
    nome: "Santa Mônica",
    descricao: "Mãe de Santo Agostinho. Modelo de perseverança na oração pelos filhos. Suas lágrimas e orações levaram à conversão de seu filho.",
    tags: ["Maternidade", "Oração", "Perseverança"],
    festa: "27 de agosto"
  },
  {
    nome: "São José",
    descricao: "Esposo de Maria e pai adotivo de Jesus. Padroeiro da Igreja Universal, dos trabalhadores e da boa morte.",
    tags: ["Família Sagrada", "Trabalho", "Proteção"],
    festa: "19 de março"
  },
  {
    nome: "Santa Rita de Cássia",
    descricao: "Santa dos casos impossíveis. Esposa, mãe, viúva e freira agostiniana. Conhecida por sua paciência e devoção aos espinhos de Cristo.",
    tags: ["Casos Impossíveis", "Espinhos", "Agostiniana"],
    festa: "22 de maio"
  },
  {
    nome: "São João Bosco",
    descricao: "Educador italiano, fundador dos Salesianos. Dedicou sua vida à educação de jovens pobres. Conhecido por seus sonhos proféticos.",
    tags: ["Educação", "Jovens", "Salesianos"],
    festa: "31 de janeiro"
  },
  {
    nome: "Santa Bernadette Soubirous",
    descricao: "Vidente de Lourdes. Aos 14 anos, teve 18 aparições de Nossa Senhora. Tornou-se freira e foi canonizada em 1933.",
    tags: ["Lourdes", "Aparições", "Juventude"],
    festa: "16 de abril"
  },
  {
    nome: "São Vicente de Paulo",
    descricao: "Padre francês dedicado aos pobres. Fundador das Filhas da Caridade. Organizou a caridade de forma sistemática.",
    tags: ["Caridade", "Pobres", "Organização"],
    festa: "27 de setembro"
  },
  {
    nome: "Santa Faustina Kowalska",
    descricao: "Freira polaca que recebeu visões de Jesus misericordioso. Promoveu a devoção à Divina Misericórdia.",
    tags: ["Misericórdia", "Visões", "Polonia"],
    festa: "5 de outubro"
  },
  {
    nome: "São Maximiliano Kolbe",
    descricao: "Frade franciscano polaco que ofereceu sua vida por um pai de família em Auschwitz. Mártir da caridade.",
    tags: ["Martírio", "Auschwitz", "Caridade"],
    festa: "14 de agosto"
  },
  {
    nome: "Santa Teresa de Calcutá",
    descricao: "Missionária da Caridade que dedicou sua vida aos mais pobres entre os pobres em Calcutá, Índia.",
    tags: ["Pobres", "Calcutá", "Missionária"],
    festa: "5 de setembro"
  },
  {
    nome: "São Francisco Xavier",
    descricao: "Jesuíta espanhol, grande missionário do Oriente. Evangelizou na Índia, Japão e outras regiões da Ásia.",
    tags: ["Missões", "Ásia", "Jesuíta"],
    festa: "3 de dezembro"
  },
  {
    nome: "Santo Inácio de Loyola",
    descricao: "Fundador da Companhia de Jesus (Jesuítas). Desenvolveu os Exercícios Espirituais e promoveu a educação.",
    tags: ["Jesuítas", "Exercícios Espirituais", "Educação"],
    festa: "31 de julho"
  },
  {
    nome: "São Luís Gonzaga",
    descricao: "Jovem jesuíta italiano, padroeiro da juventude. Morreu aos 23 anos cuidando de vítimas da peste.",
    tags: ["Juventude", "Pureza", "Peste"],
    festa: "21 de junho"
  },
  {
    nome: "Santa Cecília",
    descricao: "Mártir romana do século III, padroeira dos músicos. Cantava para Deus mesmo durante seu martírio.",
    tags: ["Música", "Martírio", "Roma"],
    festa: "22 de novembro"
  },
  {
    nome: "São Sebastião",
    descricao: "Soldado romano martirizado por Diocleciano. Invocado contra a peste e padroeiro dos atletas.",
    tags: ["Soldado", "Peste", "Atletas"],
    festa: "20 de janeiro"
  },
  {
    nome: "Santa Lucia",
    descricao: "Mártir siciliana do século IV. Padroeira da visão e invocada contra doenças dos olhos.",
    tags: ["Visão", "Olhos", "Sicília"],
    festa: "13 de dezembro"
  },
  {
    nome: "São Pedro",
    descricao: "Primeiro Papa, pescador chamado por Jesus. Recebeu as chaves do Reino dos Céus.",
    tags: ["Papa", "Pescador", "Chaves"],
    festa: "29 de junho"
  },
  {
    nome: "São Paulo",
    descricao: "Apóstolo dos gentios, grande missionário e escritor de várias cartas do Novo Testamento.",
    tags: ["Apóstolo", "Missões", "Cartas"],
    festa: "29 de junho"
  },
  {
    nome: "São João Evangelista",
    descricao: "O discípulo amado, autor do quarto Evangelho e do livro do Apocalipse.",
    tags: ["Evangelho", "Apocalipse", "Discípulo"],
    festa: "27 de dezembro"
  },
  {
    nome: "Santa Maria Madalena",
    descricao: "Seguidora de Jesus, primeira testemunha da Ressurreição. Chamada de 'Apóstola dos Apóstolos'.",
    tags: ["Ressurreição", "Testemunha", "Apóstola"],
    festa: "22 de julho"
  },
  {
    nome: "São João Batista",
    descricao: "Precursor de Jesus, batizou-o no Rio Jordão. Último profeta do Antigo Testamento.",
    tags: ["Batismo", "Precursor", "Profeta"],
    festa: "24 de junho"
  }
];

const SantosSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-8 h-8 text-red-400" />
        <h2 className="text-3xl font-bold text-white">Santos da Igreja</h2>
      </div>
      
      <div className="grid gap-6">
        {santos.map((santo, index) => (
          <div key={index} className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">{santo.nome}</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              {santo.descricao}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {santo.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className={`px-3 py-1 text-white text-sm rounded-full ${
                    tagIndex % 6 === 0 ? 'bg-blue-600' : 
                    tagIndex % 6 === 1 ? 'bg-green-600' : 
                    tagIndex % 6 === 2 ? 'bg-purple-600' : 
                    tagIndex % 6 === 3 ? 'bg-red-600' : 
                    tagIndex % 6 === 4 ? 'bg-yellow-600' : 'bg-pink-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-blue-400 font-medium">Festa: {santo.festa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SantosSection;
