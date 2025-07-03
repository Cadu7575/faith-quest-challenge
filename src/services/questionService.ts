
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
    const newUsedQuestions = { ...usedQuestions };

    console.log('🎯 Iniciando busca de perguntas para padrão:', pattern);
    console.log('📊 Perguntas já utilizadas:', usedQuestions);

    for (let i = 0; i < pattern.length; i++) {
      const difficulty = pattern[i];
      let excludeIds: string[] = [];

      // Definir IDs a excluir baseado na dificuldade
      if (difficulty === 'Fácil') {
        excludeIds = newUsedQuestions.easy;
      } else if (difficulty === 'Médio') {
        excludeIds = newUsedQuestions.medium;
      } else if (difficulty === 'Difícil') {
        excludeIds = newUsedQuestions.hard;
      }

      console.log(`🔍 Buscando pergunta ${i + 1}/${pattern.length} - Dificuldade: ${difficulty}`);
      
      let questionData = await this.supabaseHook.getRandomQuestions(difficulty, excludeIds, 1);

      // Se não encontrou perguntas, tentar reset automático
      if (questionData.length === 0) {
        console.log(`⚠️ Pool de perguntas ${difficulty} esgotado. Executando reset automático...`);
        
        const resetSuccess = await this.supabaseHook.resetUsedQuestions();
        
        if (resetSuccess) {
          // Limpar o pool da dificuldade específica
          if (difficulty === 'Fácil') {
            newUsedQuestions.easy = [];
          } else if (difficulty === 'Médio') {
            newUsedQuestions.medium = [];
          } else if (difficulty === 'Difícil') {
            newUsedQuestions.hard = [];
          }

          console.log(`🔄 Reset executado. Tentando buscar pergunta novamente...`);
          
          // Tentar buscar novamente após o reset
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
          newUsedQuestions.easy.push(question.id);
        } else if (difficulty === 'Médio') {
          newUsedQuestions.medium.push(question.id);
        } else if (difficulty === 'Difícil') {
          newUsedQuestions.hard.push(question.id);
        }

        console.log(`✅ Pergunta adicionada: ${question.question.substring(0, 50)}...`);
      } else {
        console.error(`❌ Não foi possível obter pergunta para dificuldade: ${difficulty}`);
        throw new Error(`Não foi possível carregar pergunta de dificuldade: ${difficulty}`);
      }
    }

    console.log(`🎉 Total de ${questions.length} perguntas carregadas com sucesso!`);
    console.log('📈 Novo estado das perguntas utilizadas:', newUsedQuestions);

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
