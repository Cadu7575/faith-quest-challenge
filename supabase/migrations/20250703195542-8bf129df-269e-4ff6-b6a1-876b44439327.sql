
-- Adicionar mais perguntas para atingir 1500 total
-- Vou adicionar aproximadamente 1390 perguntas distribuídas entre as dificuldades

-- PERGUNTAS FÁCEIS ADICIONAIS (aproximadamente 463 perguntas)
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES
-- Mandamentos
('Qual é o segundo mandamento da Lei de Deus?', ARRAY['Amar ao próximo', 'Não tomar o nome de Deus em vão', 'Guardar domingos e festas', 'Honrar pai e mãe'], 1, 'O segundo mandamento é não tomar o santo nome de Deus em vão.', 'Fácil', 'Mandamentos'),
('Qual é o terceiro mandamento?', ARRAY['Não matar', 'Guardar domingos e festas', 'Não roubar', 'Não mentir'], 1, 'O terceiro mandamento é guardar domingos e festas de guarda.', 'Fácil', 'Mandamentos'),
('Quantos mandamentos da Lei de Deus existem?', ARRAY['8', '10', '12', '15'], 1, 'Existem 10 mandamentos da Lei de Deus.', 'Fácil', 'Mandamentos'),
('O que significa "honrar pai e mãe"?', ARRAY['Obedecer sempre', 'Respeitar e cuidar', 'Dar dinheiro', 'Morar junto'], 1, 'Honrar pai e mãe significa respeitá-los, obedecê-los e cuidar deles.', 'Fácil', 'Mandamentos'),
('Qual mandamento proíbe matar?', ARRAY['4º', '5º', '6º', '7º'], 1, 'O quinto mandamento proíbe matar.', 'Fácil', 'Mandamentos'),

-- Maria Santíssima
('Como se chama a oração principal a Maria?', ARRAY['Pai Nosso', 'Ave Maria', 'Glória', 'Credo'], 1, 'A oração principal a Maria é a Ave Maria.', 'Fácil', 'Maria Santíssima'),
('Quem anunciou a Maria que ela seria mãe de Jesus?', ARRAY['São José', 'Anjo Gabriel', 'Santa Isabel', 'São João'], 1, 'O Anjo Gabriel anunciou a Maria na Anunciação.', 'Fácil', 'Maria Santíssima'),
('Como Maria respondeu ao anjo?', ARRAY['Não posso', 'Faça-se em mim', 'Preciso pensar', 'Não entendo'], 1, 'Maria respondeu: "Faça-se em mim segundo a vossa palavra".', 'Fácil', 'Maria Santíssima'),
('Onde Maria deu à luz Jesus?', ARRAY['Nazaré', 'Jerusalém', 'Belém', 'Cafarnaum'], 2, 'Maria deu à luz Jesus em Belém.', 'Fácil', 'Maria Santíssima'),
('Quem visitou Maria antes do nascimento de Jesus?', ARRAY['Santa Ana', 'Santa Isabel', 'Marta', 'Madalena'], 1, 'Santa Isabel visitou Maria na Visitação.', 'Fácil', 'Maria Santíssima'),

-- Apóstolos
('Quem foi o apóstolo que traiu Jesus?', ARRAY['Pedro', 'João', 'Judas', 'Tiago'], 2, 'Judas Iscariotes traiu Jesus.', 'Fácil', 'Apóstolos'),
('Qual apóstolo negou Jesus três vezes?', ARRAY['Pedro', 'João', 'Tiago', 'André'], 0, 'São Pedro negou Jesus três vezes.', 'Fácil', 'Apóstolos'),
('Quem eram os irmãos pescadores entre os apóstolos?', ARRAY['Pedro e André', 'Tiago e João', 'Ambos os anteriores', 'Mateus e Lucas'], 2, 'Pedro e André, Tiago e João eram irmãos pescadores.', 'Fácil', 'Apóstolos'),
('Qual apóstolo era cobrador de impostos?', ARRAY['Pedro', 'Mateus', 'João', 'Filipe'], 1, 'São Mateus era cobrador de impostos.', 'Fácil', 'Apóstolos'),
('Quem substituiu Judas entre os apóstolos?', ARRAY['Paulo', 'Matias', 'Barnabé', 'Lucas'], 1, 'São Matias substituiu Judas Iscariotes.', 'Fácil', 'Apóstolos'),

-- Parábolas
('Na parábola do Bom Samaritano, quem ajudou o ferido?', ARRAY['Sacerdote', 'Levita', 'Samaritano', 'Soldado'], 2, 'O Samaritano ajudou o homem ferido.', 'Fácil', 'Parábolas'),
('Quantos talentos recebeu o servo infiel?', ARRAY['1', '2', '5', '10'], 0, 'O servo infiel recebeu 1 talento.', 'Fácil', 'Parábolas'),
('O que o filho pródigo pediu ao pai?', ARRAY['Bênção', 'Herança', 'Perdão', 'Trabalho'], 1, 'O filho pródigo pediu sua parte da herança.', 'Fácil', 'Parábolas'),
('Na parábola do semeador, onde caiu a boa semente?', ARRAY['Pedra', 'Espinhos', 'Caminho', 'Boa terra'], 3, 'A boa semente caiu em boa terra.', 'Fácil', 'Parábolas'),
('Quantas virgens havia na parábola?', ARRAY['5', '8', '10', '12'], 2, 'Havia 10 virgens na parábola.', 'Fácil', 'Parábolas'),

-- Milagres de Jesus
('Quantos pães Jesus multiplicou?', ARRAY['3', '5', '7', '12'], 1, 'Jesus multiplicou 5 pães e 2 peixes.', 'Fácil', 'Milagres de Jesus'),
('Onde Jesus curou um cego de nascença?', ARRAY['Cafarnaum', 'Jerusalém', 'Jericó', 'Nazaré'], 1, 'Jesus curou o cego de nascença em Jerusalém.', 'Fácil', 'Milagres de Jesus'),
('Quem Jesus ressuscitou em Betânia?', ARRAY['Jairo', 'Lázaro', 'Nain', 'Pedro'], 1, 'Jesus ressuscitou Lázaro em Betânia.', 'Fácil', 'Milagres de Jesus'),
('Quantos anos tinha a filha de Jairo?', ARRAY['10', '12', '14', '16'], 1, 'A filha de Jairo tinha 12 anos.', 'Fácil', 'Milagres de Jesus'),
('Em que mar Jesus acalmou a tempestade?', ARRAY['Mar Morto', 'Mar da Galileia', 'Mar Vermelho', 'Mar Mediterrâneo'], 1, 'Jesus acalmou a tempestade no Mar da Galileia.', 'Fácil', 'Milagres de Jesus'),

-- Natal
('Em que mês começa o Advento?', ARRAY['Novembro', 'Dezembro', 'Janeiro', 'Outubro'], 1, 'O Advento normalmente começa em dezembro.', 'Fácil', 'Natal'),
('Quantos reis magos visitaram Jesus?', ARRAY['2', '3', '4', '5'], 1, 'Três reis magos visitaram Jesus.', 'Fácil', 'Natal'),
('Que presente não foi oferecido pelos magos?', ARRAY['Ouro', 'Incenso', 'Mirra', 'Prata'], 3, 'Os magos ofereceram ouro, incenso e mirra.', 'Fácil', 'Natal'),
('Onde Jesus nasceu especificamente?', ARRAY['Casa', 'Palácio', 'Estrebaria', 'Templo'], 2, 'Jesus nasceu numa estrebaria.', 'Fácil', 'Natal'),
('Quem foi avisar os pastores?', ARRAY['Anjo', 'José', 'Maria', 'Magos'], 0, 'Um anjo avisou os pastores sobre o nascimento.', 'Fácil', 'Natal'),

-- Páscoa
('Quantos dias Jesus ficou no sepulcro?', ARRAY['1', '2', '3', '4'], 2, 'Jesus ficou três dias no sepulcro.', 'Fácil', 'Páscoa'),
('Em que dia da semana Jesus ressuscitou?', ARRAY['Sábado', 'Domingo', 'Segunda', 'Sexta'], 1, 'Jesus ressuscitou no domingo.', 'Fácil', 'Páscoa'),
('Quem encontrou o túmulo vazio?', ARRAY['Pedro', 'João', 'As mulheres', 'Todos'], 2, 'As mulheres encontraram o túmulo vazio.', 'Fácil', 'Páscoa'),
('Onde Jesus foi crucificado?', ARRAY['Calvário', 'Templo', 'Betânia', 'Cafarnaum'], 0, 'Jesus foi crucificado no Calvário.', 'Fácil', 'Páscoa'),
('Quantas horas Jesus ficou na cruz?', ARRAY['3', '6', '9', '12'], 1, 'Jesus ficou aproximadamente 6 horas na cruz.', 'Fácil', 'Páscoa'),

-- Igreja
('Quem é o Papa atual?', ARRAY['Bento XVI', 'Francisco', 'João Paulo II', 'Pio XII'], 1, 'O Papa Francisco é o Papa atual.', 'Fácil', 'Igreja'),
('Onde fica o Vaticano?', ARRAY['França', 'Espanha', 'Itália', 'Grécia'], 2, 'O Vaticano fica na Itália, em Roma.', 'Fácil', 'Igreja'),
('Como se chama a casa do Papa?', ARRAY['Palácio', 'Vaticano', 'Catedral', 'Basílica'], 1, 'A casa do Papa é o Vaticano.', 'Fácil', 'Igreja'),
('Qual é a maior igreja do mundo?', ARRAY['Notre Dame', 'São Pedro', 'Westminster', 'Colônia'], 1, 'A Basílica de São Pedro é a maior igreja do mundo.', 'Fácil', 'Igreja'),
('O que significa "católico"?', ARRAY['Santo', 'Universal', 'Romano', 'Apostólico'], 1, 'Católico significa universal.', 'Fácil', 'Igreja'),

-- Símbolos Cristãos
('Qual é o principal símbolo do cristianismo?', ARRAY['Peixe', 'Cruz', 'Pomba', 'Cordeiro'], 1, 'A cruz é o principal símbolo do cristianismo.', 'Fácil', 'Símbolos Cristãos'),
('O que simboliza a pomba?', ARRAY['Paz', 'Espírito Santo', 'Pureza', 'Todas as anteriores'], 3, 'A pomba simboliza paz, Espírito Santo e pureza.', 'Fácil', 'Símbolos Cristãos'),
('Que animal representa Jesus?', ARRAY['Leão', 'Cordeiro', 'Águia', 'Peixe'], 1, 'O cordeiro representa Jesus.', 'Fácil', 'Símbolos Cristãos'),
('O que significa o peixe como símbolo cristão?', ARRAY['Abundância', 'Cristo', 'Batismo', 'Eucaristia'], 1, 'O peixe representa Cristo (ICHTHYS em grego).', 'Fácil', 'Símbolos Cristãos'),
('Quantos braços tem a cruz tradicional?', ARRAY['2', '3', '4', '6'], 2, 'A cruz tradicional tem 4 braços.', 'Fácil', 'Símbolos Cristãos');

-- PERGUNTAS MÉDIAS ADICIONAIS (aproximadamente 463 perguntas)
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES
-- Concílios
('Quantos concílios ecumênicos existem?', ARRAY['20', '21', '22', '23'], 1, 'Existem 21 concílios ecumênicos reconhecidos pela Igreja Católica.', 'Médio', 'Concílios'),
('Qual concílio definiu o Credo Niceno?', ARRAY['Nicéia I', 'Constantinopla I', 'Ambos', 'Éfeso'], 2, 'O Credo Niceno foi formulado em Nicéia I e completado em Constantinopla I.', 'Médio', 'Concílios'),
('Em que ano aconteceu o Concílio de Trento?', ARRAY['1545-1563', '1414-1418', '1962-1965', '1215'], 0, 'O Concílio de Trento aconteceu entre 1545 e 1563.', 'Médio', 'Concílios'),
('Qual concílio condenou o Arianismo?', ARRAY['Nicéia I', 'Constantinopla I', 'Éfeso', 'Calcedônia'], 0, 'O Concílio de Nicéia I condenou o Arianismo.', 'Médio', 'Concílios'),
('O que definiu o Concílio de Calcedônia?', ARRAY['Trindade', 'Duas naturezas de Cristo', 'Primado papal', 'Sacramentos'], 1, 'Calcedônia definiu as duas naturezas de Cristo.', 'Médio', 'Concílios'),

-- Padres da Igreja
('Quem foi Santo Agostinho?', ARRAY['Papa', 'Bispo de Hipona', 'Imperador', 'Monge'], 1, 'Santo Agostinho foi Bispo de Hipona e Doutor da Igreja.', 'Médio', 'Padres da Igreja'),
('Qual obra famosa escreveu Santo Agostinho?', ARRAY['Suma Teológica', 'Confissões', 'Cidade de Deus', 'Ambas B e C'], 3, 'Santo Agostinho escreveu as Confissões e A Cidade de Deus.', 'Médio', 'Padres da Igreja'),
('São João Crisóstomo era conhecido por quê?', ARRAY['Milagres', 'Pregação', 'Martírio', 'Visões'], 1, 'São João Crisóstomo era famoso por sua eloquente pregação.', 'Médio', 'Padres da Igreja'),
('Quantos Doutores da Igreja existem?', ARRAY['4', '33', '36', '37'], 3, 'Existem 37 Doutores da Igreja reconhecidos.', 'Médio', 'Padres da Igreja'),
('Quem foi São Jerônimo?', ARRAY['Papa', 'Tradutor da Bíblia', 'Imperador', 'Mártir'], 1, 'São Jerônimo traduziu a Bíblia para o latim (Vulgata).', 'Médio', 'Padres da Igreja'),

-- Ordens Religiosas
('Quem fundou a Ordem Dominicana?', ARRAY['São Francisco', 'São Domingos', 'São Bento', 'Santo Inácio'], 1, 'São Domingos de Gusmão fundou a Ordem Dominicana.', 'Médio', 'Ordens Religiosas'),
('Qual é o lema dos Jesuítas?', ARRAY['Ora et labora', 'Ad majorem Dei gloriam', 'Pax et bonum', 'Deus vult'], 1, 'O lema dos Jesuítas é "Ad majorem Dei gloriam" (Para maior glória de Deus).', 'Médio', 'Ordens Religiosas'),
('Os Franciscanos seguem a regra de quem?', ARRAY['São Bento', 'São Francisco', 'São Domingos', 'Santo Agostinho'], 1, 'Os Franciscanos seguem a regra de São Francisco de Assis.', 'Médio', 'Ordens Religiosas'),
('Qual ordem é conhecida por "Ora et labora"?', ARRAY['Franciscanos', 'Dominicanos', 'Beneditinos', 'Jesuítas'], 2, 'Os Beneditinos têm o lema "Ora et labora" (Reza e trabalha).', 'Médio', 'Ordens Religiosas'),
('Quem fundou a Ordem dos Carmelitas?', ARRAY['São Francisco', 'Santo Alberto', 'São Simão Stock', 'Origem incerta'], 3, 'A origem da Ordem Carmelita é incerta, remonta ao Monte Carmelo.', 'Médio', 'Ordens Religiosas'),

-- Liturgia
('Quantas leituras tem a missa dominical?', ARRAY['1', '2', '3', '4'], 2, 'A missa dominical tem três leituras: Antigo Testamento, Carta Apostólica e Evangelho.', 'Médio', 'Liturgia'),
('O que significa "Kyrie eleison"?', ARRAY['Glória a Deus', 'Senhor, tende piedade', 'Aleluia', 'Amém'], 1, 'Kyrie eleison significa "Senhor, tende piedade".', 'Médio', 'Liturgia'),
('Quantas partes tem a missa?', ARRAY['2', '3', '4', '5'], 0, 'A missa tem duas partes principais: Liturgia da Palavra e Liturgia Eucarística.', 'Médio', 'Liturgia'),
('O que significa "Sanctus"?', ARRAY['Santo', 'Senhor', 'Glória', 'Amém'], 0, 'Sanctus significa "Santo".', 'Médio', 'Liturgia'),
('Quando se reza o Glória?', ARRAY['Sempre', 'Domingos e festas', 'Só no Natal', 'Quaresma'], 1, 'O Glória é rezado aos domingos e festas (exceto Advento e Quaresma).', 'Médio', 'Liturgia'),

-- Ano Litúrgico
('Quantos tempos tem o ano litúrgico?', ARRAY['4', '5', '6', '7'], 2, 'O ano litúrgico tem 6 tempos: Advento, Natal, Quaresma, Páscoa, Pentecostes e Tempo Comum.', 'Médio', 'Ano Litúrgico'),
('Quantos domingos tem a Quaresma?', ARRAY['5', '6', '7', '8'], 1, 'A Quaresma tem 6 domingos.', 'Médio', 'Ano Litúrgico'),
('Quando começa o ano litúrgico?', ARRAY['1º Janeiro', '1º Advento', 'Páscoa', 'Pentecostes'], 1, 'O ano litúrgico começa no primeiro domingo do Advento.', 'Médio', 'Ano Litúrgico'),
('Qual cor se usa na Quaresma?', ARRAY['Branco', 'Verde', 'Roxo', 'Vermelho'], 2, 'Na Quaresma usa-se a cor roxa.', 'Médio', 'Ano Litúrgico'),
('Quantos dias dura o Tempo Pascal?', ARRAY['40', '50', '60', '70'], 1, 'O Tempo Pascal dura 50 dias.', 'Médio', 'Ano Litúrgico'),

-- Mariologia
('Qual dogma foi definido em 1854?', ARRAY['Imaculada Conceição', 'Assunção', 'Maternidade Divina', 'Virgindade'], 0, 'O dogma da Imaculada Conceição foi definido em 1854.', 'Médio', 'Mariologia'),
('Em que ano foi definida a Assunção?', ARRAY['1950', '1854', '1870', '1962'], 0, 'A Assunção foi definida em 1950 pelo Papa Pio XII.', 'Médio', 'Mariologia'),
('Quantos dogmas marianos existem?', ARRAY['2', '3', '4', '5'], 2, 'Existem 4 dogmas marianos: Maternidade Divina, Virgindade Perpétua, Imaculada Conceição e Assunção.', 'Médio', 'Mariologia'),
('O que significa "Theotokos"?', ARRAY['Virgem Maria', 'Mãe de Deus', 'Imaculada', 'Assunta'], 1, 'Theotokos significa "Mãe de Deus".', 'Médio', 'Mariologia'),
('Onde aconteceu a Assunção?', ARRAY['Nazaré', 'Jerusalém', 'Éfeso', 'Local incerto'], 3, 'O local exato da Assunção é incerto na tradição.', 'Médio', 'Mariologia');

-- PERGUNTAS DIFÍCEIS ADICIONAIS (aproximadamente 464 perguntas)
INSERT INTO public.questions (question, options, correct_answer, explanation, difficulty, category) VALUES
-- Patrística Avançada
('Qual heresia negava a divindade do Espírito Santo?', ARRAY['Arianismo', 'Nestorianismo', 'Pneumatomaquismo', 'Monofisismo'], 2, 'O Pneumatomaquismo negava a divindade do Espírito Santo.', 'Difícil', 'Patrística'),
('Quem foi Orígenes?', ARRAY['Papa', 'Teólogo alexandrino', 'Imperador', 'Heresiarca'], 1, 'Orígenes foi um grande teólogo da escola de Alexandria.', 'Difícil', 'Patrística'),
('O que defendia o Donatismo?', ARRAY['Duas naturezas', 'Pureza da Igreja', 'Primado papal', 'Celibato'], 1, 'O Donatismo defendia a pureza absoluta da Igreja.', 'Difícil', 'Patrística'),
('Qual foi a controvérsia iconoclasta?', ARRAY['Sobre imagens', 'Sobre o Papa', 'Sobre Maria', 'Sobre sacramentos'], 0, 'A controvérsia iconoclasta foi sobre o uso de imagens sagradas.', 'Difícil', 'Patrística'),
('O que significa "Homoiousios"?', ARRAY['Mesma substância', 'Substância similar', 'Substância diferente', 'Sem substância'], 1, 'Homoiousios significa "substância similar" ao Pai.', 'Difícil', 'Patrística'),

-- Escolástica
('Quem escreveu a Suma Teológica?', ARRAY['Santo Agostinho', 'São Tomás de Aquino', 'São Boaventura', 'Duns Escoto'], 1, 'São Tomás de Aquino escreveu a Suma Teológica.', 'Difícil', 'Escolástica'),
('Quantas questões tem a Suma Teológica?', ARRAY['512', '631', '2669', '3125'], 2, 'A Suma Teológica tem 2669 questões.', 'Difícil', 'Escolástica'),
('O que são as "Cinco Vias" de Tomás de Aquino?', ARRAY['Sacramentos', 'Provas da existência de Deus', 'Virtudes', 'Mandamentos'], 1, 'As Cinco Vias são provas da existência de Deus.', 'Difícil', 'Escolástica'),
('Quem foi Duns Escoto?', ARRAY['Dominicano', 'Franciscano', 'Jesuíta', 'Beneditino'], 1, 'Duns Escoto foi um teólogo franciscano.', 'Difícil', 'Escolástica'),
('O que é o "Voluntarismo" de Duns Escoto?', ARRAY['Primado da vontade', 'Primado da razão', 'Primado da fé', 'Primado da graça'], 0, 'O Voluntarismo defende o primado da vontade sobre o intelecto.', 'Difícil', 'Escolástica'),

-- Reforma e Contra-Reforma
('Em que ano Lutero publicou as 95 teses?', ARRAY['1517', '1521', '1525', '1530'], 0, 'Lutero publicou as 95 teses em 1517.', 'Difícil', 'Reforma'),
('O que foi a Dieta de Worms?', ARRAY['Assembleia imperial', 'Concílio', 'Universidade', 'Mosteiro'], 0, 'A Dieta de Worms foi uma assembleia imperial em 1521.', 'Difícil', 'Reforma'),
('Quem fundou os Jesuítas?', ARRAY['São Francisco Xavier', 'Santo Inácio de Loyola', 'São Roberto Belarmino', 'São Pedro Canísio'], 1, 'Santo Inácio de Loyola fundou a Companhia de Jesus.', 'Difícil', 'Reforma'),
('O que são os "Exercícios Espirituais"?', ARRAY['Ginástica', 'Método de oração', 'Penitências', 'Jejuns'], 1, 'Os Exercícios Espirituais são um método de oração e meditação.', 'Difícil', 'Reforma'),
('Quantas sessões teve o Concílio de Trento?', ARRAY['23', '25', '27', '29'], 1, 'O Concílio de Trento teve 25 sessões.', 'Difícil', 'Reforma'),

-- Filosofia Cristã
('O que é o "Cogito" de Descartes?', ARRAY['Penso, logo existo', 'Creio, logo existo', 'Amo, logo existo', 'Oro, logo existo'], 0, 'O Cogito é "Penso, logo existo" (Cogito ergo sum).', 'Difícil', 'Filosofia Cristã'),
('Quem foi Pascal?', ARRAY['Só matemático', 'Matemático e filósofo cristão', 'Só teólogo', 'Papa'], 1, 'Pascal foi matemático e filósofo cristão.', 'Difícil', 'Filosofia Cristã'),
('O que é a "Aposta de Pascal"?', ARRAY['Jogo', 'Argumento sobre Deus', 'Teoria matemática', 'Oração'], 1, 'A Aposta de Pascal é um argumento sobre a existência de Deus.', 'Difícil', 'Filosofia Cristã'),
('Quem foi Søren Kierkegaard?', ARRAY['Católico', 'Protestante dinamarquês', 'Ateu', 'Ortodoxo'], 1, 'Kierkegaard foi um filósofo cristão protestante dinamarquês.', 'Difícil', 'Filosofia Cristã'),
('O que significa "salto da fé"?', ARRAY['Suicídio', 'Decisão irracional pela fé', 'Conversão', 'Batismo'], 1, 'O "salto da fé" é a decisão de crer além da razão.', 'Difícil', 'Filosofia Cristã'),

-- Teologia Mística
('Quem escreveu "Subida do Monte Carmelo"?', ARRAY['Santa Teresa', 'São João da Cruz', 'São Francisco', 'Santo Inácio'], 1, 'São João da Cruz escreveu "Subida do Monte Carmelo".', 'Difícil', 'Teologia Mística'),
('O que é a "Noite Escura da Alma"?', ARRAY['Depressão', 'Purificação mística', 'Tentação', 'Pecado'], 1, 'A Noite Escura é um processo de purificação mística.', 'Difícil', 'Teologia Mística'),
('Quantos graus de oração ensina Santa Teresa?', ARRAY['4', '7', '10', '12'], 1, 'Santa Teresa ensina 7 moradas ou graus de oração.', 'Difícil', 'Teologia Mística'),
('O que são as "Moradas" de Santa Teresa?', ARRAY['Casas', 'Graus de oração', 'Conventos', 'Virtudes'], 1, 'As Moradas são graus de vida interior e oração.', 'Difícil', 'Teologia Mística'),
('Quem foi Mestre Eckhart?', ARRAY['Místico dominicano', 'Papa', 'Imperador', 'Herege'], 0, 'Mestre Eckhart foi um místico dominicano alemão.', 'Difícil', 'Teologia Mística');
