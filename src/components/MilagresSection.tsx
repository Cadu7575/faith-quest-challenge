
import { Church } from 'lucide-react';

const milagres = [
  {
    titulo: "Milagre de Lanciano (Século VIII)",
    descricao: "Em Lanciano, Itália, durante uma Missa celebrada por um monge que duvidava da presença real de Cristo na Eucaristia, a hóstia transformou-se em carne viva e o vinho em sangue real. Este milagre foi estudado cientificamente e confirmado pela Igreja.",
    tags: ["Carne", "Sangue", "Científico"],
    local: "Lanciano, Itália"
  },
  {
    titulo: "Milagre de Bolsena (1263)",
    descricao: "Um padre alemão que duvidava da transubstanciação viu sangue escorrer da hóstia durante a consagração. Este milagre levou o Papa Urbano IV a instituir a festa de Corpus Christi.",
    tags: ["Transubstanciação", "Corpus Christi"],
    local: "Bolsena, Itália"
  },
  {
    titulo: "Milagre de Buenos Aires (1996)",
    descricao: "Uma hóstia profanada foi colocada em água para se dissolver, mas em vez disso, transformou-se em tecido cardíaco humano. Análises científicas confirmaram que se tratava de músculo do coração em sofrimento.",
    tags: ["Coração", "Análise Científica"],
    local: "Buenos Aires, Argentina"
  },
  {
    titulo: "Milagre de Santarém (1247)",
    descricao: "Uma mulher roubou uma hóstia consagrada para fazer bruxaria, mas a hóstia começou a sangrar em sua casa. Arrependida, ela a devolveu ao padre.",
    tags: ["Sangramento", "Arrependimento"],
    local: "Santarém, Portugal"
  },
  {
    titulo: "Milagre de Orvieto (1263)",
    descricao: "Relacionado ao milagre de Bolsena, as relíquias ensanguentadas foram levadas para Orvieto, onde se construiu uma magnífica catedral para abrigá-las.",
    tags: ["Relíquias", "Catedral"],
    local: "Orvieto, Itália"
  },
  {
    titulo: "Milagre de Ferrara (1171)",
    descricao: "Durante uma procissão de Páscoa, uma hóstia caiu na lama. Quando recuperada, estava perfeitamente limpa e brilhante, emitindo uma luz sobrenatural.",
    tags: ["Procissão", "Luz Sobrenatural"],
    local: "Ferrara, Itália"
  },
  {
    titulo: "Milagre de Alatri (1228)",
    descricao: "Um padre duvidoso viu a hóstia transformar-se em carne viva durante a consagração. O milagre ainda é preservado na Igreja de São Francisco.",
    tags: ["Dúvida", "Transformação"],
    local: "Alatri, Itália"
  },
  {
    titulo: "Milagre de Offida (1273)",
    descricao: "Uma mulher tentou usar uma hóstia consagrada para magia, mas ela começou a sangrar abundantemente. O tecido usado para limpar o sangue ainda existe hoje.",
    tags: ["Magia", "Sangramento", "Tecido"],
    local: "Offida, Itália"
  },
  {
    titulo: "Milagre de Cascia (1330)",
    descricao: "Um padre que levava a comunhão para um enfermo foi surpreendido por uma tempestade. A hóstia se transformou em carne para não se molhar.",
    tags: ["Tempestade", "Comunhão", "Proteção"],
    local: "Cascia, Itália"
  },
  {
    titulo: "Milagre de Gruaro (1297)",
    descricao: "Uma hóstia roubada por um soldado começou a sangrar quando ele tentou comê-la. O soldado se converteu imediatamente.",
    tags: ["Soldado", "Conversão", "Roubo"],
    local: "Gruaro, Itália"
  },
  {
    titulo: "Milagre de Walldürn (1330)",
    descricao: "Um padre derrubou o cálice durante a Missa e o vinho se transformou em sangue real no corporal, formando imagens da Paixão de Cristo.",
    tags: ["Cálice", "Paixão", "Imagens"],
    local: "Walldürn, Alemanha"
  },
  {
    titulo: "Milagre de Daroca (1239)",
    descricao: "Durante uma batalha, seis hóstias consagradas começaram a sangrar quando colocadas sobre um corporal. O milagre fortaleceu a fé dos soldados cristãos.",
    tags: ["Batalha", "Seis Hóstias", "Guerra"],
    local: "Daroca, Espanha"
  },
  {
    titulo: "Milagre de Bordeaux (1822)",
    descricao: "Uma hóstia profanada foi encontrada intacta entre escombros após um incêndio que destruiu completamente a igreja.",
    tags: ["Incêndio", "Profanação", "Preservação"],
    local: "Bordeaux, França"
  },
  {
    titulo: "Milagre de Faverney (1608)",
    descricao: "Após um incêndio que destruiu a igreja, duas hóstias foram encontradas suspensas no ar, intactas, por 33 horas.",
    tags: ["Suspensão", "33 Horas", "Incêndio"],
    local: "Faverney, França"
  },
  {
    titulo: "Milagre de Tumaco (1906)",
    descricao: "Durante um terremoto e tsunami, as hóstias consagradas permaneceram intactas enquanto tudo ao redor foi destruído.",
    tags: ["Terremoto", "Tsunami", "Preservação"],
    local: "Tumaco, Colômbia"
  },
  {
    titulo: "Milagre de Siena (1730)",
    descricao: "223 hóstias consagradas foram roubadas e depois recuperadas. Elas permaneceram frescas e intactas por mais de 250 anos.",
    tags: ["223 Hóstias", "250 Anos", "Preservação"],
    local: "Siena, Itália"
  },
  {
    titulo: "Milagre de Alcalá (1597)",
    descricao: "Uma hóstia roubada foi encontrada anos depois, perfeitamente conservada, enterrada em um campo.",
    tags: ["Enterrada", "Conservação", "Campo"],
    local: "Alcalá, Espanha"
  },
  {
    titulo: "Milagre de Ávila (1405)",
    descricao: "Santa Teresa de Ávila testemunhou uma hóstia que se multiplicou durante a comunhão para alimentar toda a comunidade.",
    tags: ["Multiplicação", "Santa Teresa", "Comunidade"],
    local: "Ávila, Espanha"
  },
  {
    titulo: "Milagre de Macerata (1356)",
    descricao: "Uma mula se ajoelhou diante da Eucaristia exposta, reconhecendo a presença real de Cristo.",
    tags: ["Mula", "Ajoelhar", "Reconhecimento"],
    local: "Macerata, Itália"
  },
  {
    titulo: "Milagre de Patierno (1772)",
    descricao: "Durante uma erupção do Vesúvio, a exposição do Santíssimo Sacramento fez a lava parar antes de atingir a cidade.",
    tags: ["Vesúvio", "Lava", "Proteção"],
    local: "Patierno, Itália"
  },
  {
    titulo: "Milagre de Rimini (1223)",
    descricao: "São Francisco de Assis fez uma mula faminta se ajoelhar diante da Eucaristia, ignorando a comida oferecida.",
    tags: ["São Francisco", "Mula", "Fome"],
    local: "Rimini, Itália"
  },
  {
    titulo: "Milagre de Mogoro (1604)",
    descricao: "Uma hóstia consagrada foi encontrada intacta após um incêndio que durou três dias, brilhando intensamente.",
    tags: ["Três Dias", "Brilho", "Incêndio"],
    local: "Mogoro, Itália"
  },
  {
    titulo: "Milagre de Fiecht (1310)",
    descricao: "Hóstias consagradas foram encontradas intactas após uma avalanche que destruiu completamente o mosteiro.",
    tags: ["Avalanche", "Mosteiro", "Destruição"],
    local: "Fiecht, Áustria"
  },
  {
    titulo: "Milagre de Éttiswil (1447)",
    descricao: "Uma hóstia roubada começou a sangrar e emitir uma luz brilhante, levando à conversão do ladrão.",
    tags: ["Luz Brilhante", "Ladrão", "Conversão"],
    local: "Éttiswil, Suíça"
  },
  {
    titulo: "Milagre de Blanot (1331)",
    descricao: "Uma hóstia consagrada permaneceu suspensa no ar por vários dias após cair do cálice durante a Missa.",
    tags: ["Suspensão", "Vários Dias", "Cálice"],
    local: "Blanot, França"
  },
  {
    titulo: "Milagre de Cebollinos (1949)",
    descricao: "Uma hóstia profanada foi encontrada anos depois, intacta e brilhante, em um campo arado.",
    tags: ["Campo Arado", "Brilho", "Profanação"],
    local: "Cebollinos, Espanha"
  },
  {
    titulo: "Milagre de Poznań (2008)",
    descricao: "Uma hóstia caída no chão começou a sangrar e desenvolveu tecido cardíaco humano, confirmado por análises científicas.",
    tags: ["Moderno", "Tecido Cardíaco", "Científico"],
    local: "Poznań, Polônia"
  },
  {
    titulo: "Milagre de Tixtla (2006)",
    descricao: "Uma hóstia começou a 'suar' e desenvolveu fibras musculares cardíacas, confirmado por estudos forenses.",
    tags: ["Suar", "Forense", "Fibras"],
    local: "Tixtla, México"
  },
  {
    titulo: "Milagre de Sokolka (2008)",
    descricao: "Uma hóstia parcialmente dissolvida desenvolveu tecido cardíaco vermelho, estudado por patologistas.",
    tags: ["Dissolvida", "Patologistas", "Vermelho"],
    local: "Sokolka, Polônia"
  },
  {
    titulo: "Milagre de Legnica (2013)",
    descricao: "Uma hóstia profanada transformou-se em tecido do músculo cardíaco humano, confirmado por análises médicas.",
    tags: ["Músculo Cardíaco", "Médicas", "Profanada"],
    local: "Legnica, Polônia"
  }
];

const MilagresSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Church className="w-8 h-8 text-yellow-400" />
        <h2 className="text-3xl font-bold text-white">Milagres Eucarísticos</h2>
      </div>
      
      <div className="grid gap-6">
        {milagres.map((milagre, index) => (
          <div key={index} className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">{milagre.titulo}</h3>
            <p className="text-slate-200 leading-relaxed mb-3">
              {milagre.descricao}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {milagre.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className={`px-3 py-1 text-white text-sm rounded-full ${
                    tagIndex % 8 === 0 ? 'bg-red-600' : 
                    tagIndex % 8 === 1 ? 'bg-red-800' : 
                    tagIndex % 8 === 2 ? 'bg-blue-600' : 
                    tagIndex % 8 === 3 ? 'bg-purple-600' : 
                    tagIndex % 8 === 4 ? 'bg-yellow-600' : 
                    tagIndex % 8 === 5 ? 'bg-green-600' :
                    tagIndex % 8 === 6 ? 'bg-pink-600' : 'bg-orange-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-blue-400 font-medium">Local: {milagre.local}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilagresSection;
