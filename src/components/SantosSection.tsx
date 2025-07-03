
import { Heart } from 'lucide-react';

const SantosSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Heart className="w-8 h-8 text-red-400" />
        <h2 className="text-3xl font-bold text-white">Santos da Igreja</h2>
      </div>
      
      <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">São Francisco de Assis</h3>
        <p className="text-slate-200 leading-relaxed mb-3">
          Fundador da Ordem Franciscana, São Francisco é conhecido por sua vida de pobreza e dedicação aos mais necessitados. 
          Ele recebeu os estigmas de Cristo e é considerado o padroeiro da ecologia.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Pobreza</span>
          <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Ecologia</span>
          <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">Estigmas</span>
        </div>
        <p className="text-sm text-blue-400 font-medium">Festa: 4 de outubro</p>
      </div>

      <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">Santa Teresinha do Menino Jesus</h3>
        <p className="text-slate-200 leading-relaxed mb-3">
          Conhecida pelo "Pequeno Caminho", Santa Teresinha ensinou que a santidade está ao alcance de todos 
          através de pequenos atos de amor. É Doutora da Igreja e padroeira das missões.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-pink-600 text-white text-sm rounded-full">Pequeno Caminho</span>
          <span className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full">Missões</span>
          <span className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-full">Doutora da Igreja</span>
        </div>
        <p className="text-sm text-blue-400 font-medium">Festa: 1º de outubro</p>
      </div>

      <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">São Padre Pio</h3>
        <p className="text-slate-200 leading-relaxed mb-3">
          Místico italiano que recebeu os estigmas por 50 anos. Era conhecido por seus dons sobrenaturais, 
          incluindo bilocação e curas milagrosas. Sua devoção ao sofrimento de Cristo o tornou um santo muito venerado.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">Estigmas</span>
          <span className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full">Bilocação</span>
          <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">Curas Milagrosas</span>
        </div>
        <p className="text-sm text-blue-400 font-medium">Festa: 23 de setembro</p>
      </div>
    </div>
  );
};

export default SantosSection;
