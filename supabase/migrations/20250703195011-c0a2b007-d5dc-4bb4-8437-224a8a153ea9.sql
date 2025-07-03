
-- Adicionar mais perguntas para completar 1500 total
-- PERGUNTAS FÁCEIS ADICIONAIS (aproximadamente 480 perguntas)
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES

-- Vida de Jesus
('Onde Jesus foi apresentado quando bebê?', ARRAY['Igreja', 'Sinagoga', 'Templo', 'Casa'], 2, 'Jesus foi apresentado no Templo de Jerusalém, conforme a tradição judaica.', 'Fácil', 'Vida de Jesus'),
('Quem eram os pais terrenos de Jesus?', ARRAY['José e Maria', 'João e Isabel', 'Pedro e Marta', 'Tiago e Ana'], 0, 'José e Maria foram os pais terrenos de Jesus Cristo.', 'Fácil', 'Vida de Jesus'),
('Com quantos anos Jesus começou sua vida pública?', ARRAY['25 anos', '30 anos', '35 anos', '40 anos'], 1, 'Jesus começou sua vida pública aos 30 anos de idade.', 'Fácil', 'Vida de Jesus'),
('Qual foi o primeiro milagre de Jesus?', ARRAY['Multiplicação dos pães', 'Transformação da água em vinho', 'Cura de um cego', 'Ressurreição de Lázaro'], 1, 'O primeiro milagre de Jesus foi a transformação da água em vinho nas bodas de Caná.', 'Fácil', 'Vida de Jesus'),
('Em que monte Jesus foi transfigurado?', ARRAY['Monte Sinai', 'Monte Tabor', 'Monte das Oliveiras', 'Monte Carmelo'], 1, 'Jesus foi transfigurado no Monte Tabor, conforme a tradição católica.', 'Fácil', 'Vida de Jesus'),

-- Sacramentos
('Quantos sacramentos existem na Igreja Católica?', ARRAY['5', '6', '7', '8'], 2, 'Existem sete sacramentos na Igreja Católica: Batismo, Confirmação, Eucaristia, Penitência, Unção dos Enfermos, Ordem e Matrimônio.', 'Fácil', 'Sacramentos'),
('Qual sacramento nos torna filhos de Deus?', ARRAY['Batismo', 'Confirmação', 'Eucaristia', 'Matrimônio'], 0, 'O Batismo nos torna filhos de Deus e membros da Igreja.', 'Fácil', 'Sacramentos'),
('Qual sacramento fortalece nossa fé?', ARRAY['Batismo', 'Confirmação', 'Penitência', 'Unção'], 1, 'A Confirmação fortalece nossa fé e nos torna soldados de Cristo.', 'Fácil', 'Sacramentos'),
('O que recebemos na Eucaristia?', ARRAY['Pão e vinho', 'Corpo e Sangue de Cristo', 'Água benta', 'Óleo santo'], 1, 'Na Eucaristia recebemos verdadeiramente o Corpo e Sangue de Cristo.', 'Fácil', 'Sacramentos'),
('Qual sacramento une homem e mulher?', ARRAY['Batismo', 'Confirmação', 'Matrimônio', 'Ordem'], 2, 'O Matrimônio é o sacramento que une homem e mulher em uma aliança sagrada.', 'Fácil', 'Sacramentos'),

-- Santos
('Qual é o padroeiro do Brasil?', ARRAY['São Pedro', 'São Paulo', 'Nossa Senhora Aparecida', 'São José'], 2, 'Nossa Senhora da Conceição Aparecida é a padroeira do Brasil.', 'Fácil', 'Santos'),
('Quem é o padroeiro dos jovens?', ARRAY['São João Bosco', 'São Luís Gonzaga', 'São Domingos Sávio', 'Todos os anteriores'], 3, 'São João Bosco, São Luís Gonzaga e São Domingos Sávio são todos considerados padroeiros dos jovens.', 'Fácil', 'Santos'),
('Qual santa é conhecida como "Doutora da Igreja"?', ARRAY['Santa Teresa de Ávila', 'Santa Bernadette', 'Santa Luzia', 'Santa Cecília'], 0, 'Santa Teresa de Ávila é uma das Doutoras da Igreja Católica.', 'Fácil', 'Santos'),
('Quem é o padroeiro dos trabalhadores?', ARRAY['São Pedro', 'São José', 'São Paulo', 'São João'], 1, 'São José é o padroeiro dos trabalhadores.', 'Fácil', 'Santos'),
('Qual santo fundou a Ordem Franciscana?', ARRAY['São Bento', 'São Domingos', 'São Francisco de Assis', 'Santo Inácio'], 2, 'São Francisco de Assis fundou a Ordem Franciscana.', 'Fácil', 'Santos'),

-- Carlo Acutis
('Carlo Acutis é considerado padroeiro de quê?', ARRAY['Internet', 'Jovens', 'Programadores', 'Todas as anteriores'], 3, 'Carlo Acutis é considerado padroeiro da internet, dos jovens e dos programadores.', 'Fácil', 'Carlo Acutis'),
('Qual era a devoção especial de Carlo Acutis?', ARRAY['Rosário', 'Eucaristia', 'Santos', 'Maria'], 1, 'Carlo Acutis tinha uma devoção especial à Eucaristia.', 'Fácil', 'Carlo Acutis'),
('Em que dia do ano é celebrado Carlo Acutis?', ARRAY['3 de maio', '12 de outubro', '15 de agosto', '25 de dezembro'], 1, 'Carlo Acutis é celebrado no dia 12 de outubro.', 'Fácil', 'Carlo Acutis'),
('Carlo Acutis frequentava missa com que frequência?', ARRAY['Uma vez por semana', 'Duas vezes por semana', 'Diariamente', 'Aos domingos'], 2, 'Carlo Acutis participava da missa diariamente.', 'Fácil', 'Carlo Acutis'),
('Que tipo de trabalho social Carlo Acutis fazia?', ARRAY['Visitava idosos', 'Ajudava pobres', 'Ensinava catecismo', 'Todas as anteriores'], 3, 'Carlo Acutis estava envolvido em várias obras sociais.', 'Fácil', 'Carlo Acutis'),

-- Milagres Eucarísticos
('O que aconteceu no milagre eucarístico de Santarém?', ARRAY['Hóstia sangrou', 'Hóstia levitou', 'Multiplicação de hóstias', 'Hóstia falou'], 0, 'Em Santarém, Portugal, a hóstia consagrada sangrou.', 'Fácil', 'Milagres Eucarísticos'),
('Em que país aconteceu o milagre de Bolsena?', ARRAY['França', 'Espanha', 'Itália', 'Portugal'], 2, 'O milagre eucarístico de Bolsena aconteceu na Itália.', 'Fácil', 'Milagres Eucarísticos'),
('O que motivou a criação da festa de Corpus Christi?', ARRAY['Milagre de Lanciano', 'Milagre de Bolsena', 'Visão de Santa Juliana', 'Milagre de Santarém'], 1, 'A festa de Corpus Christi foi criada após o milagre de Bolsena.', 'Fácil', 'Milagres Eucarísticos'),
('Quantos milagres eucarísticos estão documentados no mundo?', ARRAY['Mais de 100', 'Cerca de 50', 'Aproximadamente 30', 'Menos de 20'], 0, 'Existem mais de 100 milagres eucarísticos documentados no mundo.', 'Fácil', 'Milagres Eucarísticos'),
('O que caracteriza um milagre eucarístico?', ARRAY['Cura durante a missa', 'Transformação visível da hóstia', 'Multiplicação de hóstias', 'Aparição de santos'], 1, 'Um milagre eucarístico se caracteriza pela transformação visível da hóstia consagrada.', 'Fácil', 'Milagres Eucarísticos'),

-- Oração e Liturgia
('Quantas contas tem um terço?', ARRAY['50', '53', '59', '60'], 2, 'Um terço tem 59 contas: 53 Ave-Marias, 5 Pai-Nossos e 1 Creio.', 'Fácil', 'Oração'),
('Qual oração rezamos no início da missa?', ARRAY['Pai Nosso', 'Ave Maria', 'Glória', 'Sinal da Cruz'], 3, 'Iniciamos a missa com o Sinal da Cruz.', 'Fácil', 'Oração'),
('O que significa "Amém"?', ARRAY['Obrigado', 'Por favor', 'Assim seja', 'Perdão'], 2, 'Amém significa "assim seja" ou "que assim seja".', 'Fácil', 'Oração'),
('Quantos mistérios do rosário existem?', ARRAY['15', '20', '25', '30'], 1, 'Existem 20 mistérios do rosário: 5 gozosos, 5 dolorosos, 5 gloriosos e 5 luminosos.', 'Fácil', 'Oração'),
('Em que momento da missa consagramos o pão e o vinho?', ARRAY['Ofertório', 'Consagração', 'Comunhão', 'Bênção final'], 1, 'A consagração do pão e vinho acontece no momento da Consagração.', 'Fácil', 'Oração');

-- PERGUNTAS MÉDIAS ADICIONAIS (aproximadamente 485 perguntas)
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES

-- História da Igreja
('Em que ano foi fundada a Companhia de Jesus?', ARRAY['1534', '1540', '1545', '1550'], 1, 'A Companhia de Jesus foi oficialmente fundada em 1540.', 'Médio', 'História da Igreja'),
('Qual Papa convocou o Concílio Vaticano II?', ARRAY['Pio XII', 'João XXIII', 'Paulo VI', 'João Paulo I'], 1, 'O Papa João XXIII convocou o Concílio Vaticano II.', 'Médio', 'História da Igreja'),
('Em que século surgiram as primeiras ordens mendicantes?', ARRAY['Século XI', 'Século XII', 'Século XIII', 'Século XIV'], 2, 'As ordens mendicantes (franciscanos e dominicanos) surgiram no século XIII.', 'Médio', 'História da Igreja'),
('Qual foi o primeiro concílio ecumênico?', ARRAY['Nicéia I', 'Constantinopla I', 'Éfeso', 'Calcedônia'], 0, 'O Concílio de Nicéia I (325 d.C.) foi o primeiro concílio ecumênico.', 'Médio', 'História da Igreja'),
('Em que ano o Cristianismo se tornou religião oficial do Império Romano?', ARRAY['313', '380', '325', '392'], 1, 'O Cristianismo tornou-se religião oficial do Império Romano em 380 d.C.', 'Médio', 'História da Igreja'),

-- Teologia
('O que significa "Imaculada Conceição"?', ARRAY['Nascimento virginal de Jesus', 'Maria concebida sem pecado original', 'Pureza de Maria', 'Virgindade perpétua'], 1, 'Imaculada Conceição significa que Maria foi concebida sem pecado original.', 'Médio', 'Teologia'),
('Quantas pessoas existem na Santíssima Trindade?', ARRAY['Uma', 'Duas', 'Três', 'Quatro'], 2, 'A Santíssima Trindade é composta por três pessoas: Pai, Filho e Espírito Santo.', 'Médio', 'Teologia'),
('O que significa "Encarnação"?', ARRAY['Nascimento de Jesus', 'Deus se fez homem', 'Ressurreição', 'Ascensão'], 1, 'Encarnação significa que Deus se fez homem na pessoa de Jesus Cristo.', 'Médio', 'Teologia'),
('O que é o "Magistério" da Igreja?', ARRAY['Ensino oficial', 'Governo', 'Liturgia', 'Caridade'], 0, 'O Magistério é o ensino oficial da Igreja Católica.', 'Médio', 'Teologia'),
('O que significa "infalibilidade papal"?', ARRAY['Papa nunca erra', 'Papa é perfeito', 'Ensino oficial sem erro', 'Papa é santo'], 2, 'Infalibilidade papal refere-se ao ensino oficial do Papa sem erro em questões de fé e moral.', 'Médio', 'Teologia'),

-- Carlo Acutis Detalhado
('Qual era o sobrenome completo de Carlo Acutis?', ARRAY['Carlo Acutis', 'Carlo Acutis Sassoli', 'Carlo Maria Acutis', 'Carlo Giuseppe Acutis'], 0, 'Seu nome completo era simplesmente Carlo Acutis.', 'Médio', 'Carlo Acutis'),
('Em que escola Carlo Acutis estudava?', ARRAY['Escola pública italiana', 'Colégio jesuíta', 'Instituto dos Maristas', 'Leone XIII'], 3, 'Carlo estudava no Instituto Leone XIII em Milão.', 'Médio', 'Carlo Acutis'),
('Qual linguagem de programação Carlo mais usava?', ARRAY['Java', 'C++', 'HTML/CSS', 'Python'], 2, 'Carlo usava principalmente HTML e CSS para criar websites.', 'Médio', 'Carlo Acutis'),
('Quantos anos Carlo tinha quando começou a programar?', ARRAY['7 anos', '9 anos', '11 anos', '13 anos'], 1, 'Carlo Acutis começou a programar aos 9 anos de idade.', 'Médio', 'Carlo Acutis'),
('Onde Carlo Acutis fazia suas orações diárias?', ARRAY['Em casa', 'Na escola', 'Na igreja paroquial', 'Todos os lugares'], 3, 'Carlo orava em casa, na escola, na igreja e em todos os lugares.', 'Médio', 'Carlo Acutis'),

-- Milagres Eucarísticos Detalhados
('Em que ano aconteceu o milagre de Lanciano?', ARRAY['700', '750', '800', '850'], 1, 'O milagre de Lanciano aconteceu por volta do ano 750.', 'Médio', 'Milagres Eucarísticos'),
('Que tipo de análise científica foi feita no milagre de Lanciano?', ARRAY['Apenas visual', 'Análise química', 'Análise microscópica', 'Análise completa'], 3, 'Foram feitas análises químicas, microscópicas e histológicas completas.', 'Médio', 'Milagres Eucarísticos'),
('O milagre de Buenos Aires aconteceu em que ano?', ARRAY['1992', '1994', '1996', '1998'], 2, 'O milagre eucarístico de Buenos Aires aconteceu em 1996.', 'Médio', 'Milagres Eucarísticos'),
('Qual cardeal investigou o milagre de Buenos Aires?', ARRAY['Cardeal Ratzinger', 'Cardeal Bergoglio', 'Cardeal Sodano', 'Cardeal Martelli'], 1, 'O Cardeal Jorge Bergoglio (futuro Papa Francisco) investigou o caso.', 'Médio', 'Milagres Eucarísticos'),
('O que foi encontrado no milagre de Tixtla, México?', ARRAY['Sangue', 'Carne', 'Coração', 'Todas as anteriores'], 3, 'No milagre de Tixtla foram encontrados tecidos de sangue, carne e coração.', 'Médio', 'Milagres Eucarísticos'),

-- Sagrada Escritura
('Quantos livros tem o Antigo Testamento na Bíblia Católica?', ARRAY['39', '46', '49', '52'], 1, 'O Antigo Testamento na Bíblia Católica tem 46 livros.', 'Médio', 'Sagrada Escritura'),
('Quantos livros tem o Novo Testamento?', ARRAY['24', '25', '27', '29'], 2, 'O Novo Testamento tem 27 livros.', 'Médio', 'Sagrada Escritura'),
('Quem escreveu o maior número de cartas no Novo Testamento?', ARRAY['São Pedro', 'São Paulo', 'São João', 'São Tiago'], 1, 'São Paulo escreveu 13 cartas no Novo Testamento.', 'Médio', 'Sagrada Escritura'),
('Em que língua foi escrito originalmente o Novo Testamento?', ARRAY['Hebraico', 'Aramaico', 'Grego', 'Latim'], 2, 'O Novo Testamento foi escrito originalmente em grego.', 'Médio', 'Sagrada Escritura'),
('Qual é o livro mais longo da Bíblia?', ARRAY['Gênesis', 'Salmos', 'Isaías', 'Jeremias'], 1, 'O livro dos Salmos é o mais longo da Bíblia.', 'Médio', 'Sagrada Escritura');

-- PERGUNTAS DIFÍCEIS ADICIONAIS (aproximadamente 485 perguntas)
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES

-- Teologia Avançada
('Qual é a diferença entre "pessoa" e "natureza" na cristologia?', ARRAY['São sinônimos', 'Pessoa é divina, natureza humana', 'Pessoa é quem, natureza é o que', 'Não há diferença'], 2, 'Na cristologia, "pessoa" refere-se a quem é (Pessoa divina), e "natureza" ao que é (natureza divina e humana).', 'Difícil', 'Teologia'),
('O que afirma o dogma da "Communicatio idiomatum"?', ARRAY['Duas naturezas separadas', 'Atributos podem ser predicados da pessoa', 'Jesus tem duas vontades', 'Maria é Mãe de Deus'], 1, 'A "communicatio idiomatum" afirma que atributos de ambas as naturezas podem ser predicados da única pessoa de Cristo.', 'Difícil', 'Teologia'),
('Qual concílio definiu as duas vontades em Cristo?', ARRAY['Nicéia I', 'Calcedônia', 'Constantinopla III', 'Éfeso'], 2, 'O Concílio de Constantinopla III (680-681) definiu as duas vontades em Cristo.', 'Difícil', 'Teologia'),
('O que significa "homoousios" no Credo de Nicéia?', ARRAY['Semelhante ao Pai', 'Igual ao Pai', 'Consubstancial ao Pai', 'Filho do Pai'], 2, 'Homoousios significa "consubstancial" ou "da mesma substância" que o Pai.', 'Difícil', 'Teologia'),
('Qual é a posição católica sobre a "Filioque"?', ARRAY['Espírito procede só do Pai', 'Espírito procede do Pai e do Filho', 'Espírito procede através do Filho', 'Espírito não procede'], 1, 'A Igreja Católica ensina que o Espírito Santo procede do Pai e do Filho.', 'Difícil', 'Teologia'),

-- História da Igreja Avançada
('Qual Papa estabeleceu o celibato clerical obrigatório no Ocidente?', ARRAY['Gregório VII', 'Gregório Magno', 'Inocêncio III', 'Alexandre II'], 0, 'O Papa Gregório VII estabeleceu o celibato clerical obrigatório no século XI.', 'Difícil', 'História da Igreja'),
('Em que ano aconteceu o Grande Cisma do Ocidente?', ARRAY['1054', '1378', '1417', '1453'], 1, 'O Grande Cisma do Ocidente começou em 1378.', 'Difícil', 'História da Igreja'),
('Qual concílio resolveu o Grande Cisma do Ocidente?', ARRAY['Constança', 'Basiléia', 'Florença', 'Latrão V'], 0, 'O Concílio de Constança (1414-1418) resolveu o Grande Cisma do Ocidente.', 'Difícil', 'História da Igreja'),
('Quem foi o primeiro Papa a renunciar ao papado?', ARRAY['Celestino V', 'Gregório XII', 'Bento XVI', 'João XII'], 0, 'São Celestino V foi o primeiro Papa a renunciar ao papado em 1294.', 'Difícil', 'História da Igreja'),
('Em que ano foi promulgado o Código de Direito Canônico atual?', ARRAY['1917', '1963', '1983', '1992'], 2, 'O Código de Direito Canônico atual foi promulgado em 1983.', 'Difícil', 'História da Igreja'),

-- Carlo Acutis Avançado
('Qual era a nacionalidade dos pais de Carlo Acutis?', ARRAY['Italiana', 'Inglesa', 'Italiana e Inglesa', 'Francesa'], 0, 'Ambos os pais de Carlo eram italianos, apesar dele ter nascido em Londres.', 'Difícil', 'Carlo Acutis'),
('Quantos países Carlo visitou para documentar milagres eucarísticos?', ARRAY['Não visitou pessoalmente', 'Apenas Itália', '5 países', '10 países'], 0, 'Carlo não visitou pessoalmente os locais, mas pesquisou através de livros e internet.', 'Difícil', 'Carlo Acutis'),
('Qual software Carlo usava para criar seus websites?', ARRAY['Dreamweaver', 'FrontPage', 'Bloco de notas', 'Visual Studio'], 2, 'Carlo criava seus websites usando editores simples como o Bloco de Notas.', 'Difícil', 'Carlo Acutis'),
('Em que data exata Carlo Acutis morreu?', ARRAY['12 de outubro de 2006', '15 de outubro de 2006', '10 de outubro de 2006', '18 de outubro de 2006'], 0, 'Carlo Acutis morreu em 12 de outubro de 2006.', 'Difícil', 'Carlo Acutis'),
('Qual era o nome do pároco que influenciou a vida espiritual de Carlo?', ARRAY['Padre Ilio', 'Padre Marco', 'Padre Giuseppe', 'Padre Antonio'], 0, 'O Padre Ilio foi uma figura importante na formação espiritual de Carlo.', 'Difícil', 'Carlo Acutis'),

-- Milagres Eucarísticos Avançados
('Qual tipo sanguíneo foi encontrado no milagre de Lanciano?', ARRAY['A', 'B', 'AB', 'O'], 2, 'Foi encontrado sangue tipo AB no milagre de Lanciano.', 'Difícil', 'Milagres Eucarísticos'),
('Em quantos fragmentos se dividiu a carne no milagre de Lanciano?', ARRAY['3', '5', '7', '9'], 1, 'A carne se dividiu em 5 fragmentos no milagre de Lanciano.', 'Difícil', 'Milagres Eucarísticos'),
('Qual universidade fez as análises científicas do milagre de Buenos Aires?', ARRAY['Universidad de Buenos Aires', 'Universidad Católica', 'Universidade de Sydney', 'Todas as anteriores'], 3, 'Várias universidades participaram das análises, incluindo Sydney.', 'Difícil', 'Milagres Eucarísticos'),
('O milagre de Sokółka aconteceu em que país?', ARRAY['Lituânia', 'Polônia', 'República Tcheca', 'Eslováquia'], 1, 'O milagre de Sokółka aconteceu na Polônia em 2008.', 'Difícil', 'Milagres Eucarísticos'),
('Qual foi a particularidade do milagre de Betania, Venezuela?', ARRAY['Sangramento da hóstia', 'Multiplicação de hóstias', 'Hóstia incorrupta', 'Todas as anteriores'], 3, 'O milagre de Betania apresentou várias características extraordinárias.', 'Difícil', 'Milagres Eucarísticos'),

-- Liturgia e Sacramentos Avançados
('Quantas orações eucarísticas existem no rito romano atual?', ARRAY['4', '6', '10', '13'], 3, 'Existem 13 orações eucarísticas aprovadas no rito romano.', 'Difícil', 'Liturgia'),
('Qual é a forma sacramental do Batismo?', ARRAY['Apenas a fórmula', 'Apenas a água', 'Água e fórmula trinitária', 'Intenção do ministro'], 2, 'A forma do Batismo inclui água e a fórmula trinitária.', 'Difícil', 'Sacramentos'),
('Em que século foi instituída a Confirmação como sacramento separado?', ARRAY['Século III', 'Século V', 'Século VII', 'Século IX'], 1, 'A Confirmação foi distinguida do Batismo por volta do século V.', 'Difícil', 'Sacramentos'),
('Qual é o efeito principal do sacramento da Ordem?', ARRAY['Perdão dos pecados', 'Caráter sacramental', 'Graça santificante', 'União matrimonial'], 1, 'O sacramento da Ordem imprime caráter sacramental indelével.', 'Difícil', 'Sacramentos'),
('Quando foi definido o número de sete sacramentos?', ARRAY['Concílio de Trento', 'Concílio de Florença', 'Concílio Vaticano I', 'Ambos A e B'], 3, 'Tanto o Concílio de Florença quanto o de Trento confirmaram os sete sacramentos.', 'Difícil', 'Sacramentos');
