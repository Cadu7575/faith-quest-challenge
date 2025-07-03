
import { useState } from 'react';
import { supabase } from '../integrations/supabase/client';
import { toast } from 'sonner';

export const useLeaderboard = () => {
  const [saving, setSaving] = useState(false);

  const saveScore = async (playerName: string, score: number, phasesCompleted: number) => {
    setSaving(true);
    try {
      console.log('Salvando pontuação:', { playerName, score, phasesCompleted });

      // Verificar se o jogador já existe
      const { data: existingPlayer, error: fetchError } = await supabase
        .from('leaderboard')
        .select('*')
        .eq('player_name', playerName)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error('Erro ao buscar jogador existente:', fetchError);
        throw fetchError;
      }

      if (existingPlayer) {
        // Atualizar apenas se a nova pontuação for maior
        if (score > existingPlayer.score) {
          const { error: updateError } = await supabase
            .from('leaderboard')
            .update({ 
              score, 
              phases_completed: phasesCompleted,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingPlayer.id);

          if (updateError) {
            console.error('Erro ao atualizar pontuação:', updateError);
            throw updateError;
          }

          toast.success('Nova melhor pontuação salva no ranking!');
        } else {
          toast.info('Pontuação salva, mas não é sua melhor ainda!');
        }
      } else {
        // Criar nova entrada
        const { error: insertError } = await supabase
          .from('leaderboard')
          .insert({ 
            player_name: playerName, 
            score, 
            phases_completed: phasesCompleted 
          });

        if (insertError) {
          console.error('Erro ao inserir nova pontuação:', insertError);
          throw insertError;
        }

        toast.success('Pontuação salva no ranking!');
      }

      console.log('Pontuação salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar pontuação:', error);
      toast.error('Erro ao salvar pontuação no ranking.');
    } finally {
      setSaving(false);
    }
  };

  return { saveScore, saving };
};
