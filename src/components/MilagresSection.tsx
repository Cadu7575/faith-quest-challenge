
import { Church } from 'lucide-react';

const MilagresSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Church className="w-8 h-8 text-yellow-400" />
        <h2 className="text-3xl font-bold text-white">Milagres Eucarísticos</h2>
      </div>
      
      <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">Milagre de Lanciano (Século VIII)</h3>
        <p className="text-slate-200 leading-relaxed mb-3">
          Em Lanciano, Itália, durante uma Missa celebrada por um monge que duvidava da presença real de Cristo na Eucaristia, 
          a hóstia transformou-se em carne viva e o vinho em sangue real. Este milagre foi estudado cientificamente 
          e confirmado pela Igreja.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">Carne</span>
          <span className="px-3 py-1 bg-red-800 text-white text-sm rounded-full">Sangue</span>
          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Científico</span>
        </div>
        <p className="text-sm text-blue-400 font-medium">Local: Lanciano, Itália</p>
      </div>

      <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">Milagre de Bolsena (1263)</h3>
        <p className="text-slate-200 leading-relaxed mb-3">
          Um padre alemão que duvidava da transubstanciação viu sangue escorrer da hóstia durante a consagração. 
          Este milagre levou o Papa Urbano IV a instituir a festa de Corpus Christi.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Transubstanciação</span>
          <span className="px-3 py-1 bg-gold-600 text-white text-sm rounded-full">Corpus Christi</span>
        </div>
        <p className="text-sm text-blue-400 font-medium">Local: Bolsena, Itália</p>
      </div>

      <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">Milagre de Buenos Aires (1996)</h3>
        <p className="text-slate-200 leading-relaxed mb-3">
          Uma hóstia profanada foi colocada em água para se dissolver, mas em vez disso, transformou-se em tecido cardíaco humano. 
          Análises científicas confirmaram que se tratava de músculo do coração em sofrimento.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">Coração</span>
          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Análise Científica</span>
        </div>
        <p className="text-sm text-blue-400 font-medium">Local: Buenos Aires, Argentina</p>
      </div>
    </div>
  );
};

export default MilagresSection;
