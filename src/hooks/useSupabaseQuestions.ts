
import { useState, useCallback } from 'react';
import { supabase } from '../integrations/supabase/client';
import { toast } from 'sonner';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  difficulty: string;
  category: string;
}

interface UsedQuestions {
  easy: string[];
  medium: string[];
  hard: string[];
}

export const useSupabaseQuestions = () => {
  const [loading, setLoading] = useState(false);

  const getRandomQuestions = useCallback(async (
    difficulty: 'Fácil' | 'Médio' | 'Difícil',
    excludeIds: string[] = [],
    count: number = 1
  ): Promise<Question[]> => {
    setLoading(true);
    
    try {
      console.log(`🔍 Buscando ${count} pergunta(s) de dificuldade: ${difficulty}`);
      console.log('IDs excluídos:', excludeIds);
      
      const { data, error } = await supabase.rpc('get_random_questions', {
        difficulty_level: difficulty,
        exclude_ids: excludeIds,
        question_count: count
      });

      if (error) {
        console.error('Erro ao buscar perguntas:', error);
        throw error;
      }

      if (!data || data.length === 0) {
        console.warn(`⚠️ Nenhuma pergunta encontrada para dificuldade: ${difficulty}`);
        return [];
      }

      console.log(`✅ ${data.length} pergunta(s) encontrada(s) para dificuldade: ${difficulty}`);
      return data;
      
    } catch (error) {
      console.error('Erro na busca de perguntas:', error);
      toast.error('Erro ao carregar perguntas do banco de dados');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const resetUsedQuestions = useCallback(async (): Promise<boolean> => {
    try {
      const { data, error } = await supabase.rpc('reset_used_questions');
      
      if (error) {
        console.error('Erro ao resetar perguntas:', error);
        return false;
      }
      
      console.log('✅ Reset de perguntas executado com sucesso');
      return data;
    } catch (error) {
      console.error('Erro no reset:', error);
      return false;
    }
  }, []);

  return {
    getRandomQuestions,
    resetUsedQuestions,
    loading
  };
};
