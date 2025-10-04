
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface LeaderboardEntry {
  id: string;
  player_name: string;
  score: number;
  phases_completed: number;
  created_at: string;
}

const LEADERBOARD_KEY = 'catholic-quiz-leaderboard';

// Sistema de leaderboard local usando localStorage
export const useLeaderboard = () => {
  const [saving, setSaving] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLeaderboard = () => {
    setLoading(true);
    try {
      const stored = localStorage.getItem(LEADERBOARD_KEY);
      if (stored) {
        const data = JSON.parse(stored) as LeaderboardEntry[];
        // Ordenar por pontuação (maior para menor)
        const sorted = data.sort((a, b) => b.score - a.score);
        setLeaderboard(sorted.slice(0, 50)); // Top 50
      } else {
        setLeaderboard([]);
      }
    } catch (error) {
      console.error('Erro ao buscar leaderboard:', error);
      setLeaderboard([]);
    } finally {
      setLoading(false);
    }
  };

  const saveScore = (playerName: string, score: number, phasesCompleted: number) => {
    setSaving(true);
    try {
      console.log('Salvando pontuação:', { playerName, score, phasesCompleted });

      // Buscar leaderboard atual
      const stored = localStorage.getItem(LEADERBOARD_KEY);
      let currentLeaderboard: LeaderboardEntry[] = stored ? JSON.parse(stored) : [];

      // Verificar se o jogador já existe
      const existingPlayerIndex = currentLeaderboard.findIndex(
        entry => entry.player_name === playerName
      );

      if (existingPlayerIndex !== -1) {
        const existingPlayer = currentLeaderboard[existingPlayerIndex];
        
        // Sempre atualizar a pontuação
        currentLeaderboard[existingPlayerIndex] = {
          ...existingPlayer,
          score,
          phases_completed: phasesCompleted,
          created_at: new Date().toISOString()
        };

        // Mostrar toast apenas se melhorou a pontuação
        if (score > existingPlayer.score) {
          toast.success('Nova melhor pontuação!');
        }
      } else {
        // Criar nova entrada
        const newEntry: LeaderboardEntry = {
          id: crypto.randomUUID(),
          player_name: playerName,
          score,
          phases_completed: phasesCompleted,
          created_at: new Date().toISOString()
        };
        currentLeaderboard.push(newEntry);
        toast.success('Entrada no ranking criada!');
      }

      // Salvar no localStorage
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(currentLeaderboard));

      // Atualizar o estado
      fetchLeaderboard();
      console.log('Pontuação salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar pontuação:', error);
      toast.error('Erro ao salvar pontuação no ranking.');
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return { saveScore, saving, leaderboard, loading, fetchLeaderboard };
};
