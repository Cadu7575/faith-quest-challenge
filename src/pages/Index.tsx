
import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import AvatarSelection from '../components/AvatarSelection';
import QuizGame from '../components/QuizGame';

type GameState = 'loading' | 'avatar-selection' | 'playing';

interface Avatar {
  gender: 'boy' | 'girl';
  skinColor: string;
  name: string;
}

const Index = () => {
  const [gameState, setGameState] = useState<GameState>('loading');
  const [avatar, setAvatar] = useState<Avatar | null>(null);

  const handleLoadingComplete = () => {
    setGameState('avatar-selection');
  };

  const handleAvatarComplete = (selectedAvatar: Avatar) => {
    setAvatar(selectedAvatar);
    setGameState('playing');
  };

  if (gameState === 'loading') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (gameState === 'avatar-selection') {
    return <AvatarSelection onComplete={handleAvatarComplete} />;
  }

  if (gameState === 'playing' && avatar) {
    return <QuizGame avatar={avatar} />;
  }

  return null;
};

export default Index;
