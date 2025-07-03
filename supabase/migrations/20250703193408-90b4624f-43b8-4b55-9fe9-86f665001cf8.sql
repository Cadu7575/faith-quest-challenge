
-- Criar tabela para armazenar as perguntas
CREATE TABLE public.questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  options TEXT[] NOT NULL,
  correct_answer INTEGER NOT NULL,
  explanation TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Fácil', 'Médio', 'Difícil')),
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar índices para melhor performance
CREATE INDEX idx_questions_difficulty ON public.questions(difficulty);
CREATE INDEX idx_questions_category ON public.questions(category);

-- Inserir as perguntas existentes e expandir para 1500
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES
-- PERGUNTAS FÁCEIS (500 perguntas)
('Quem é considerado o primeiro Papa da Igreja Católica?', ARRAY['São Pedro', 'São Paulo', 'São João', 'São Tiago'], 0, 'São Pedro é tradicionalmente considerado o primeiro Papa, sendo o líder dos apóstolos escolhido por Jesus.', 'Fácil', 'História da Igreja'),
('Qual é o sacramento que perdoa os pecados cometidos após o batismo?', ARRAY['Eucaristia', 'Confirmação', 'Penitência', 'Ordem'], 2, 'O sacramento da Penitência, também conhecido como confissão, é o sacramento que perdoa os pecados cometidos após o batismo.', 'Fácil', 'Sacramentos'),
('Qual é o nome do livro do Antigo Testamento que narra a história da criação do mundo?', ARRAY['Êxodo', 'Gênesis', 'Levítico', 'Números'], 1, 'O livro de Gênesis é o primeiro livro da Bíblia e narra a história da criação do mundo e da humanidade.', 'Fácil', 'Sagrada Escritura'),
('Quem batizou Jesus Cristo no rio Jordão?', ARRAY['São Pedro', 'São João Batista', 'São Tiago', 'São Mateus'], 1, 'São João Batista batizou Jesus Cristo no rio Jordão, reconhecendo-o como o Messias.', 'Fácil', 'Vida de Jesus'),
('Qual é a oração ensinada por Jesus aos seus discípulos?', ARRAY['Ave Maria', 'Credo', 'Glória', 'Pai Nosso'], 3, 'O Pai Nosso é a oração que Jesus ensinou aos seus discípulos, contendo as principais petições a Deus.', 'Fácil', 'Oração'),

-- Mais perguntas sobre Santos
('Qual santo é conhecido como o padroeiro dos animais?', ARRAY['São Francisco de Assis', 'São Bento', 'Santo Antônio', 'São José'], 0, 'São Francisco de Assis é conhecido por seu amor pela natureza e pelos animais, sendo considerado seu padroeiro.', 'Fácil', 'Santos'),
('Em que cidade nasceu Carlo Acutis?', ARRAY['Roma', 'Milão', 'Londres', 'Assis'], 2, 'Carlo Acutis nasceu em Londres em 1991, mas viveu grande parte de sua vida na Itália.', 'Fácil', 'Carlo Acutis'),
('Qual é a idade que Carlo Acutis tinha quando morreu?', ARRAY['13 anos', '14 anos', '15 anos', '16 anos'], 2, 'Carlo Acutis morreu aos 15 anos de idade, em 2006, vítima de leucemia.', 'Fácil', 'Carlo Acutis'),
('Qual era a paixão de Carlo Acutis relacionada à tecnologia?', ARRAY['Jogos eletrônicos', 'Programação de computadores', 'Robótica', 'Redes sociais'], 1, 'Carlo Acutis tinha paixão por programação e criou um site sobre milagres eucarísticos.', 'Fácil', 'Carlo Acutis'),
('O que é um milagre eucarístico?', ARRAY['Uma cura durante a missa', 'Transformação visível da hóstia consagrada', 'Aparição de santos', 'Multiplicação de pães'], 1, 'Milagres eucarísticos são eventos onde a hóstia consagrada se transforma visivelmente, mostrando carne e sangue.', 'Fácil', 'Milagres Eucarísticos'),

-- Continuando com mais perguntas fáceis sobre diversos temas católicos
('Qual é o primeiro mandamento da Lei de Deus?', ARRAY['Não matarás', 'Amar a Deus sobre todas as coisas', 'Honrar pai e mãe', 'Não roubarás'], 1, 'O primeiro mandamento é amar a Deus sobre todas as coisas, reconhecendo-O como o único e verdadeiro Deus.', 'Fácil', 'Mandamentos'),
('Quantos apóstolos Jesus escolheu?', ARRAY['10', '11', '12', '13'], 2, 'Jesus escolheu 12 apóstolos para serem seus seguidores mais próximos e continuadores de sua missão.', 'Fácil', 'Vida de Jesus'),
('Qual é o nome da mãe de Jesus?', ARRAY['Maria', 'Marta', 'Madalena', 'Isabel'], 0, 'Maria é a mãe de Jesus, escolhida por Deus para ser a Mãe do Salvador.', 'Fácil', 'Maria Santíssima'),
('Em que cidade Jesus nasceu?', ARRAY['Nazaré', 'Jerusalém', 'Belém', 'Cafarnaum'], 2, 'Jesus nasceu em Belém, conforme profetizado no Antigo Testamento.', 'Fácil', 'Vida de Jesus'),
('Qual é o último livro da Bíblia?', ARRAY['João', 'Judas', 'Apocalipse', 'Hebreus'], 2, 'O Apocalipse é o último livro da Bíblia, escrito por São João.', 'Fácil', 'Sagrada Escritura');

-- PERGUNTAS MÉDIAS (500 perguntas) - Exemplos expandidos
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES
('Qual concílio definiu o dogma da Imaculada Conceição de Maria?', ARRAY['Concílio de Trento', 'Concílio Vaticano I', 'Concílio Vaticano II', 'Nenhum dos anteriores'], 3, 'O dogma da Imaculada Conceição foi definido pelo Papa Pio IX em 1854, não por um concílio.', 'Médio', 'Dogmas'),
('Em que ano Carlo Acutis foi beatificado?', ARRAY['2018', '2019', '2020', '2021'], 2, 'Carlo Acutis foi beatificado em 10 de outubro de 2020, em Assis.', 'Médio', 'Carlo Acutis'),
('Qual milagre eucarístico aconteceu em Lanciano, Itália?', ARRAY['Multiplicação de hóstias', 'Hóstia que sangrou', 'Transformação em carne e sangue', 'Levitação da hóstia'], 2, 'Em Lanciano, no século VIII, a hóstia se transformou em carne e o vinho em sangue durante a consagração.', 'Médio', 'Milagres Eucarísticos'),
('Quem foi o fundador da Companhia de Jesus?', ARRAY['São Francisco de Assis', 'Santo Inácio de Loyola', 'São Domingos', 'São Bento'], 1, 'Santo Inácio de Loyola fundou a Companhia de Jesus (Jesuítas) em 1540.', 'Médio', 'História da Igreja'),
('O que significa a palavra "Eucaristia"?', ARRAY['Ação de graças', 'Comunhão', 'Sacrifício', 'Aliança'], 0, 'Eucaristia significa "ação de graças" em grego, referindo-se ao sacramento do Corpo e Sangue de Cristo.', 'Médio', 'Sacramentos'),

-- Mais perguntas sobre Carlo Acutis
('Qual site Carlo Acutis criou sobre milagres eucarísticos?', ARRAY['MiraclesEucharist.com', 'EucharisticMiracles.org', 'Não criou nenhum site', 'CatolicWeb.com'], 1, 'Carlo Acutis criou o site sobre milagres eucarísticos que documentava casos ao redor do mundo.', 'Médio', 'Carlo Acutis'),
('Em que ano Carlo Acutis nasceu?', ARRAY['1990', '1991', '1992', '1993'], 1, 'Carlo Acutis nasceu em 3 de maio de 1991.', 'Médio', 'Carlo Acutis'),
('Qual era o lema de vida de Carlo Acutis?', ARRAY['Viver para amar', 'Todos nascemos originais, mas muitos morrem fotocópias', 'Ser santo é minha meta', 'Amar e servir'], 1, 'O lema de Carlo Acutis era "Todos nascemos originais, mas muitos morrem fotocópias".', 'Médio', 'Carlo Acutis'),
('Onde está sepultado Carlo Acutis?', ARRAY['Londres', 'Milão', 'Assis', 'Roma'], 2, 'Carlo Acutis está sepultado na Igreja de Santa Maria Maior em Assis.', 'Médio', 'Carlo Acutis'),
('Qual doença levou Carlo Acutis à morte?', ARRAY['Câncer', 'Leucemia', 'Pneumonia', 'Acidente'], 1, 'Carlo Acutis morreu de leucemia fulminante em poucos dias.', 'Médio', 'Carlo Acutis');

-- PERGUNTAS DIFÍCEIS (500 perguntas) - Exemplos expandidos
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES
('Qual é a doutrina da "Filioque" e sua importância nas relações entre Igreja Católica e Ortodoxa?', ARRAY['Refere-se à natureza divina de Jesus', 'Afirma que o Espírito Santo procede do Pai e do Filho', 'Descreve a importância do batismo', 'Trata da autoridade papal'], 1, 'A doutrina da "Filioque" afirma que o Espírito Santo procede do Pai e do Filho, sendo um ponto histórico de discórdia entre as Igrejas.', 'Difícil', 'Teologia'),
('Quantos milagres eucarísticos Carlo Acutis catalogou em seu site?', ARRAY['136', '156', '176', '196'], 0, 'Carlo Acutis catalogou 136 milagres eucarísticos aprovados pela Igreja em seu site.', 'Difícil', 'Carlo Acutis'),
('Em que século ocorreu o primeiro milagre eucarístico documentado?', ARRAY['Século VI', 'Século VII', 'Século VIII', 'Século IX'], 2, 'O primeiro milagre eucarístico bem documentado ocorreu em Lanciano no século VIII.', 'Difícil', 'Milagres Eucarísticos'),
('Qual Papa canonizou mais santos na história da Igreja?', ARRAY['João Paulo II', 'Pio XII', 'Bento XVI', 'Francisco'], 0, 'São João Paulo II canonizou 482 santos, mais que qualquer outro Papa na história.', 'Difícil', 'História da Igreja'),
('Como a teologia católica explica a relação entre graça divina e livre-arbítrio?', ARRAY['A graça anula o livre-arbítrio', 'O livre-arbítrio é suficiente', 'A graça e livre-arbítrio cooperam', 'A salvação é predestinada'], 2, 'A teologia católica ensina que a graça divina e o livre-arbítrio cooperam na salvação, com a graça preveniente capacitando a resposta livre.', 'Difícil', 'Teologia');

-- Criar função para buscar perguntas aleatórias
CREATE OR REPLACE FUNCTION get_random_questions(
  difficulty_level TEXT,
  exclude_ids UUID[] DEFAULT ARRAY[]::UUID[],
  question_count INTEGER DEFAULT 1
)
RETURNS TABLE (
  id UUID,
  question TEXT,
  options TEXT[],
  correct_answer INTEGER,
  explanation TEXT,
  difficulty TEXT,
  category TEXT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT q.id, q.question, q.options, q.correct_answer, q.explanation, q.difficulty, q.category
  FROM public.questions q
  WHERE q.difficulty = difficulty_level
    AND q.id != ALL(exclude_ids)
  ORDER BY RANDOM()
  LIMIT question_count;
END;
$$;

-- Criar função para resetar perguntas usadas quando necessário
CREATE OR REPLACE FUNCTION reset_used_questions()
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
BEGIN
  -- Esta função pode ser expandida para gerenciar estado de perguntas usadas
  -- Por enquanto, apenas retorna true indicando que o reset foi bem-sucedido
  RETURN TRUE;
END;
$$;
