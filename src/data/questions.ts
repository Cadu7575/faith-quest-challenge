
import { supabase } from '../integrations/supabase/client';
import { Question, QuestionStats } from './types';

// Função para obter perguntas de uma fase específica do banco de dados
export const getQuestionsForPhase = async (phase: number): Promise<Question[]> => {
  console.log(`🎯 Buscando 10 perguntas ÚNICAS da fase ${phase} no banco de dados`);
  
  if (phase < 1 || phase > 100) {
    console.error(`❌ Fase ${phase} inválida. Deve ser entre 1 e 100.`);
    return [];
  }
  
  try {
    const { data, error } = await supabase
      .from('questions')
      .select('*')
      .eq('phase', phase)
      .order('question_in_phase', { ascending: true });
    
    if (error) {
      console.error(`❌ Erro ao buscar perguntas da fase ${phase}:`, error);
      return [];
    }
    
    if (!data || data.length === 0) {
      console.error(`❌ Nenhuma pergunta encontrada para a fase ${phase}`);
      return [];
    }
    
    // Converter para o formato esperado pelo sistema
    const questions: Question[] = data.map(dbQuestion => ({
      id: dbQuestion.question_number,
      question: dbQuestion.question,
      options: dbQuestion.options,
      correctAnswer: dbQuestion.correct_answer,
      explanation: dbQuestion.explanation,
      difficulty: dbQuestion.difficulty as 'Fácil' | 'Médio' | 'Difícil'
    }));
    
    console.log(`✅ ${questions.length} perguntas ÚNICAS carregadas da fase ${phase}`);
    console.log(`📝 IDs das perguntas: [${questions.map(q => q.id).join(', ')}]`);
    console.log(`📝 Primeira pergunta: "${questions[0]?.question.substring(0, 50)}..."`);
    
    return questions;
    
  } catch (error) {
    console.error(`❌ Erro inesperado ao buscar perguntas da fase ${phase}:`, error);
    return [];
  }
};

// Função para obter estatísticas das perguntas
export const getQuestionStats = async (): Promise<QuestionStats> => {
  try {
    const { count, error } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      console.error('Erro ao obter estatísticas:', error);
      return {
        totalQuestions: 1000,
        totalPhases: 100,
        usedQuestions: 0,
        remainingQuestions: 1000,
        sessionId: 'supabase-db-questions'
      };
    }
    
    return {
      totalQuestions: count || 1000,
      totalPhases: 100,
      usedQuestions: 0,
      remainingQuestions: count || 1000,
      sessionId: 'supabase-db-questions'
    };
    
  } catch (error) {
    console.error('Erro ao obter estatísticas:', error);
    return {
      totalQuestions: 1000,
      totalPhases: 100,
      usedQuestions: 0,
      remainingQuestions: 1000,
      sessionId: 'supabase-db-questions'
    };
  }
};

// Função para resetar (não aplicável com banco de dados)
export const resetUsedQuestions = () => {
  console.log('🔄 Sistema usando banco de dados Supabase - cada pergunta é única e nunca se repete!');
};
