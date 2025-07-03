
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
      
      // Converter string[] para UUID[] properly
      const excludeUuids = excludeIds.length > 0 ? excludeIds : null;
      
      const { data, error } = await supabase.rpc('get_random_questions', {
        difficulty_level: difficulty,
        exclude_ids: excludeUuids,
        question_count: count
      });

      if (error) {
        console.error('Erro ao buscar perguntas:', error);
        
        // Se o erro for relacionado a UUIDs, tentar sem exclusões
        if (error.message.includes('invalid input syntax for type uuid')) {
          console.log('🔄 Tentando buscar sem filtros de exclusão...');
          
          const { data: retryData, error: retryError } = await supabase.rpc('get_random_questions', {
            difficulty_level: difficulty,
            exclude_ids: null,
            question_count: count
          });

          if (retryError) {
            throw retryError;
          }

          if (!retryData || retryData.length === 0) {
            console.warn(`⚠️ Nenhuma pergunta encontrada para dificuldade: ${difficulty}`);
            return [];
          }

          console.log(`✅ ${retryData.length} pergunta(s) encontrada(s) (sem exclusões) para dificuldade: ${difficulty}`);
          return retryData;
        }
        
        throw error;
      }

      if (!data || data.length === 0) {
        console.warn(`⚠️ Nenhuma pergunta encontrada para dificuldade: ${difficulty}`);
        
        // Se não encontrou com exclusões, tentar sem exclusões
        if (excludeIds.length > 0) {
          console.log('🔄 Tentando buscar sem exclusões...');
          
          const { data: retryData, error: retryError } = await supabase.rpc('get_random_questions', {
            difficulty_level: difficulty,
            exclude_ids: null,
            question_count: count
          });

          if (!retryError && retryData && retryData.length > 0) {
            console.log(`✅ ${retryData.length} pergunta(s) encontrada(s) (sem exclusões)`);
            return retryData;
          }
        }
        
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
      return data ?? true;
    } catch (error) {
      console.error('Erro no reset:', error);
      return false;
    }
  }, []);

  const getQuestionsCount = useCallback(async (): Promise<{easy: number, medium: number, hard: number, total: number}> => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('difficulty', { count: 'exact' })
        .eq('difficulty', 'Fácil');
      
      const { data: mediumData } = await supabase
        .from('questions')
        .select('difficulty', { count: 'exact' })
        .eq('difficulty', 'Médio');
        
      const { data: hardData } = await supabase
        .from('questions')
        .select('difficulty', { count: 'exact' })
        .eq('difficulty', 'Difícil');

      const easyCount = data?.length || 0;
      const mediumCount = mediumData?.length || 0;
      const hardCount = hardData?.length || 0;
      
      console.log(`📊 Contagem de perguntas: Fácil: ${easyCount}, Médio: ${mediumCount}, Difícil: ${hardCount}`);
      
      return {
        easy: easyCount,
        medium: mediumCount,
        hard: hardCount,
        total: easyCount + mediumCount + hardCount
      };
    } catch (error) {
      console.error('Erro ao contar perguntas:', error);
      return { easy: 0, medium: 0, hard: 0, total: 0 };
    }
  }, []);

  return {
    getRandomQuestions,
    resetUsedQuestions,
    getQuestionsCount,
    loading
  };
};
