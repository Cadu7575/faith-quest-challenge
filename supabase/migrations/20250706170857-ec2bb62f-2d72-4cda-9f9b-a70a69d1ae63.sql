
-- Criar tabela de perguntas no Supabase
CREATE TABLE public.questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question_number INTEGER NOT NULL UNIQUE CHECK (question_number >= 1 AND question_number <= 1000),
  phase INTEGER NOT NULL CHECK (phase >= 1 AND phase <= 100),
  question_in_phase INTEGER NOT NULL CHECK (question_in_phase >= 1 AND question_in_phase <= 10),
  question TEXT NOT NULL,
  options TEXT[] NOT NULL,
  correct_answer INTEGER NOT NULL CHECK (correct_answer >= 0 AND correct_answer <= 3),
  explanation TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Fácil', 'Médio', 'Difícil')),
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar índices para melhor performance
CREATE INDEX idx_questions_phase ON public.questions(phase);
CREATE INDEX idx_questions_difficulty ON public.questions(difficulty);
CREATE INDEX idx_questions_category ON public.questions(category);

-- Habilitar RLS (Row Level Security) para controle de acesso
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir leitura pública das perguntas
CREATE POLICY "Allow public read access to questions" 
  ON public.questions 
  FOR SELECT 
  USING (true);
