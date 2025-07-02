
import { useState } from 'react';

interface Avatar {
  gender: 'boy' | 'girl';
  skinColor: string;
  name: string;
}

interface AvatarSelectionProps {
  onComplete: (avatar: Avatar) => void;
}

const AvatarSelection = ({ onComplete }: AvatarSelectionProps) => {
  const [selectedGender, setSelectedGender] = useState<'boy' | 'girl'>('boy');
  const [selectedSkinColor, setSelectedSkinColor] = useState('#F4A460');
  const [name, setName] = useState('');

  const skinColors = [
    '#F4A460', '#DEB887', '#D2B48C', '#BC9A6A', '#8B4513', '#654321'
  ];

  const handleSubmit = () => {
    if (name.trim()) {
      onComplete({
        gender: selectedGender,
        skinColor: selectedSkinColor,
        name: name.trim()
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/a6371fe2-8d4e-4de4-835f-970a32b7024a.png" 
            alt="Logo" 
            className="w-20 h-20 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-2xl font-bold text-white mb-2">Crie seu Avatar</h2>
          <p className="text-blue-200">Personalize sua experiência no quiz</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-3">Escolha seu avatar:</label>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setSelectedGender('boy')}
                className={`p-4 rounded-xl transition-all ${
                  selectedGender === 'boy' 
                    ? 'bg-blue-600 ring-2 ring-blue-400' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: selectedSkinColor }}
                >
                  👦
                </div>
                <p className="text-white mt-2 text-sm">Menino</p>
              </button>
              
              <button
                onClick={() => setSelectedGender('girl')}
                className={`p-4 rounded-xl transition-all ${
                  selectedGender === 'girl' 
                    ? 'bg-purple-600 ring-2 ring-purple-400' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: selectedSkinColor }}
                >
                  👧
                </div>
                <p className="text-white mt-2 text-sm">Menina</p>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-3">Cor da pele:</label>
            <div className="flex gap-2 justify-center flex-wrap">
              {skinColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedSkinColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedSkinColor === color 
                      ? 'border-white scale-110' 
                      : 'border-gray-400 hover:border-white'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-3">Seu nome:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full px-4 py-3 rounded-xl bg-slate-700 text-white placeholder-gray-400 border border-slate-600 focus:border-blue-500 focus:outline-none"
              maxLength={20}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Começar Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarSelection;
