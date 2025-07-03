
import { useSupabaseQuestions } from '../hooks/useSupabaseQuestions';

interface Question {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
  explanation: string;
  difficulty: string;
  category: string;
  originalIndex: number;
}

interface UsedQuestions {
  easy: string[];
  medium: string[];
  hard: string[];
}

export class QuestionService {
  private supabaseHook: ReturnType<typeof useSupabaseQuestions>;

  constructor(supabaseHook: ReturnType<typeof useSupabaseQuestions>) {
    this.supabaseHook = supabaseHook;
  }

  async getQuestionsForPattern(
    pattern: ('Fácil' | 'Médio' | 'Difícil')[],
    usedQuestions: UsedQuestions
  ): Promise<Question[]> {
    const questions: Question[] = [];
    let currentUsedQuestions = { ...usedQuestions };

    console.log('🎯 Iniciando busca de perguntas para padrão:', pattern);
    console.log('📊 Perguntas já utilizadas:', currentUsedQuestions);

    for (let i = 0; i < pattern.length; i++) {
      const difficulty = pattern[i];
      let excludeIds: string[] = [];

      // Definir IDs a excluir baseado na dificuldade
      if (difficulty === 'Fácil') {
        excludeIds = [...currentUsedQuestions.easy];
      } else if (difficulty === 'Médio') {
        excludeIds = [...currentUsedQuestions.medium];
      } else if (difficulty === 'Difícil') {
        excludeIds = [...currentUsedQuestions.hard];
      }

      console.log(`🔍 Buscando pergunta ${i + 1}/${pattern.length} - Dificuldade: ${difficulty}`);
      console.log(`📝 Excluindo ${excludeIds.length} perguntas já utilizadas`);
      
      let questionData = await this.supabaseHook.getRandomQuestions(difficulty, excludeIds, 1);

      // Se não encontrou perguntas, tentar reset automático
      if (questionData.length === 0) {
        console.log(`⚠️ Pool de perguntas ${difficulty} pode estar esgotado. Tentando reset...`);
        
        const resetSuccess = await this.supabaseHook.resetUsedQuestions();
        
        if (resetSuccess) {
          // Limpar o pool da dificuldade específica
          if (difficulty === 'Fácil') {
            currentUsedQuestions.easy = [];
          } else if (difficulty === 'Médio') {
            currentUsedQuestions.medium = [];
          } else if (difficulty === 'Difícil') {
            currentUsedQuestions.hard = [];
          }

          console.log(`🔄 Reset executado. Tentando buscar pergunta novamente sem exclusões...`);
          
          // Tentar buscar novamente após o reset, sem exclusões
          questionData = await this.supabaseHook.getRandomQuestions(difficulty, [], 1);
        }
      }

      if (questionData.length > 0) {
        const question = {
          ...questionData[0],
          originalIndex: i
        };
        
        questions.push(question);

        // Adicionar à lista de perguntas usadas
        if (difficulty === 'Fácil') {
          currentUsedQuestions.easy.push(question.id);
        } else if (difficulty === 'Médio') {
          currentUsedQuestions.medium.push(question.id);
        } else if (difficulty === 'Difícil') {
          currentUsedQuestions.hard.push(question.id);
        }

        console.log(`✅ Pergunta adicionada: ${question.question.substring(0, 50)}...`);
      } else {
        console.error(`❌ Não foi possível obter pergunta para dificuldade: ${difficulty}`);
        
        // Em vez de lançar erro, vamos tentar continuar com outras perguntas
        console.log(`🚨 Tentando continuar sem esta pergunta...`);
        
        // Adicionar uma pergunta placeholder ou pular esta posição
        // Por enquanto, vamos pular e continuar
        continue;
      }
    }

    if (questions.length === 0) {
      throw new Error(`Não foi possível carregar nenhuma pergunta do banco de dados`);
    }

    console.log(`🎉 Total de ${questions.length} perguntas carregadas com sucesso!`);
    console.log('📈 Novo estado das perguntas utilizadas:', currentUsedQuestions);

    return questions;
  }
}

// Função auxiliar para usar fora do contexto React
export const getQuestionsForPattern = async (
  pattern: ('Fácil' | 'Médio' | 'Difícil')[],
  usedQuestions: UsedQuestions
): Promise<Question[]> => {
  // Esta função será substituída pela implementação no componente
  console.warn('getQuestionsForPattern chamada fora do contexto React');
  return [];
};
