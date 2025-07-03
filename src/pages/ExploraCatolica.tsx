
import { useState, useMemo } from 'react';
import { Book, Heart, Sparkles, Church, Filter } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import SantosSection from '../components/SantosSection';
import CarloAcutisSection from '../components/CarloAcutisSection';
import MilagresSection from '../components/MilagresSection';

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  component: React.ReactNode;
  keywords: string[];
}

const ExploraCatolica = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('todos');

  const sections: Section[] = [
    {
      id: 'santos',
      title: 'Santos',
      icon: Heart,
      component: <SantosSection />,
      keywords: ['santos', 'francisco', 'teresinha', 'padre pio', 'estigmas', 'pobreza', 'missões']
    },
    {
      id: 'carlo-acutis',
      title: 'Beato Carlo Acutis',
      icon: Sparkles,
      component: <CarloAcutisSection />,
      keywords: ['carlo acutis', 'jovem', 'tecnologia', 'internet', 'eucaristia', 'programação', 'beato']
    },
    {
      id: 'milagres',
      title: 'Milagres Eucarísticos',
      icon: Church,
      component: <MilagresSection />,
      keywords: ['milagres', 'eucaristia', 'lanciano', 'bolsena', 'buenos aires', 'sangue', 'carne', 'transubstanciação']
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos os Tópicos' },
    { id: 'santos', label: 'Santos' },
    { id: 'milagres', label: 'Milagres' },
    { id: 'historia', label: 'História da Igreja' }
  ];

  const filteredSections = useMemo(() => {
    let filtered = sections;

    // Filtrar por categoria
    if (activeFilter !== 'todos') {
      filtered = filtered.filter(section => 
        section.id === activeFilter || 
        (activeFilter === 'historia' && (section.id === 'milagres' || section.id === 'carlo-acutis'))
      );
    }

    // Filtrar por busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(section =>
        section.title.toLowerCase().includes(query) ||
        section.keywords.some(keyword => keyword.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, activeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="bg-slate-800/60 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">
              Exploração da Fé Católica
            </h1>
            <p className="text-slate-300">
              Descubra santos, milagres e a rica história da Igreja Católica
            </p>
          </div>
          
          {/* Search Bar */}
          <SearchBar onSearch={setSearchQuery} />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <div className="flex items-center gap-2 mr-4">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-slate-400 text-sm">Filtros:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Results */}
        {filteredSections.length === 0 ? (
          <div className="text-center py-12">
            <Book className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Nenhum resultado encontrado</h3>
            <p className="text-slate-400">
              Tente usar termos diferentes ou remover alguns filtros.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <div key={section.id} className="bg-slate-800/40 backdrop-blur-lg rounded-lg p-6">
                {section.component}
              </div>
            ))}
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 text-center">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-white mb-2">10,000+</h3>
            <p className="text-slate-400">Santos Canonizados</p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 text-center">
            <Church className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-white mb-2">130+</h3>
            <p className="text-slate-400">Milagres Eucarísticos</p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-lg p-6 text-center">
            <Book className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-xl font-semibold text-white mb-2">2000+</h3>
            <p className="text-slate-400">Anos de História</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploraCatolica;
