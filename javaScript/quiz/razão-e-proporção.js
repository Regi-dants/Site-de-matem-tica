
const perguntas = [

    {
        id: "razão-e-proporção-1",
        informacoes: "(ENEM 2014) Um confeiteiro deseja fazer um bolo cuja receita indica a utilização de açúcar e farinha de trigo\
        em quantidades fornecidas em gramas. Ele sabe que uma determinada xícara utilizada para\
        medir os ingredientes comporta 120 gramas de farinha de trigo e que três dessas xícaras de\
        açúcar correspondem, em gramas, a quatro de farinha de trigo ",
        pergunta: "Quantos gramas de açúcar cabem em uma dessas xícaras?",
        opcoes: ["30", "40", "90", "160", "360"],
        correta: "160",
        explicacao: "de acordo com o enunciado, uma xícara foi utilizada para medir os ingredientes\
        comporta 120g de farinha de trigo, e que usando essa xícara 3 vezes para medir o açúcar\
        corresponde a usar 4 vezes para farinha de trigo, então ficaria assim:<br>\
    obs: “a” = gramas de açúcar em uma xícara \
        \\[ 120 \\times 4 = 3 \\times a\\]\
        \\[ 480 = 3a \\]\
        \\[ \\frac{480} {3} = a\\]\
        \\[ a = 160 \\]\
    <p style=' color:green;'>Resposta = 4</p>\
"
    },
    {
        id: "razão-e-proporção-2",
        informacoes: "(ENEM 2014) Enquanto as lâmpadas comuns têm 8 mil horas de vida útil, as lâmpadas LED têm 50 mil horas.",
        pergunta: "De acordo com a informação e desprezando\
        possíveis algarismos na parte decimal, a lâmpada LED tem uma durabilidade de",
        opcoes: ["1 750 dias a mais que a lâmpada comum", "2 000 dias a mais que a lâmpada comum", "2 083 dias a mais que a lâmpada comum",
            "42 000 dias a mais que a lâmpada comum", "1 008 000 dias a mais que a lâmpada comum"],
        correta: "1 750 dias a mais que a lâmpada comum",
        explicacao: "Para esta questão, vamos converter o tempo de vida útil de cada\
        lâmpada de horas para dias, dividindo cada valor por 24 (já que 1 dia tem 24 horas):<br>\
    lâmpadas comuns:\
    \\[ 8.000 / 24 \\approx 333 \\text{ dias} \\]\
    lâmpadas LED:\
    \\[ 50.000 / 24 \\approx  2.083 \\text{ dias} \\]\
    agora, subtraímos o tempo da lâmpada comum do tempo da lâmpada LED: \
    \\[ 2.083 - 333 = 1750 \\]\
    <p style=' color:green;'>Resposta = 1.750 </p>\
"
    },
    {
        id: "razão-e-proporção-4",
        informacoes: " (ENEM 2011) Café no Brasil<br> \
        O consumo atingiu o maior nível da história noano passado: os brasileiros beberam o equivalente a 331 \
        <br> Considere que a xícara citada na notícia seja\
        equivalente a, aproximadamente, 120 mL de café. Suponha que em 2010 os brasileiros bebam\
        ainda mais café, aumentando o consumo em \\(\\frac{1}{5}\\) do que foi consumido no ano anterior.",
        pergunta: "De acordo com essas informações, qual a previsão mais aproximada para o consumo de café em 2010?",
        opcoes: ["8 bilhões de litros", "16 bilhões de litros", "32 bilhões de litros", "40 bilhões de litros", "48 bilhões de litros"],
        correta: "48 bilhões de litros",
        explicacao: "De acordo com o enunciado, foram consumidas 331 bilhões de xícaras de café\
         e cada xícara equivale a 120 mL. Primeiro, vamos calcular o consumo total em mililitros\
          e converter para litros (dividindo por 1.000):<br>\
    Consumo anterior em mL: \
    \\[ 331 \\times 120 = 39.720 \\text{ bilhões de mL} \\]\
    Convertendo para litros: \
    \\[ \\frac{39.720}{1.000} = 39,72 \\text{ bilhões de litros} \\]\
    Agora, calculamos o aumento de \\(\\frac{1}{5}\\) sobre esse valor e somamos ao consumo anterior: \
    \\[ 39,72 \\times \\frac{1}{5} = 7,944 \\text{ bilhões de litros} \\] \
    \\[ 39,72 + 7,944 = 47,664 \\approx 48 \\text{ bilhões de litros} \\]\
    <p style='color:green;'>Resposta = 48 bilhões de litros</p>\
"
    },
    {
        id: "razão-e-proporção-5",
        informacoes: "(ENEM 2009) Segundo as regras da Fórmula 1, o peso mínimo do carro, de tanque vazio, com o piloto, é de 605\
        kg, e a gasolina deve ter densidade entre 725 e 780 gramas por litro. Entre os circuitos nos quais\
        ocorrem competições dessa categoria, o mais longo é Spa-Francorchamps, na Bélgica, cujo\
        traçado tem 7 km de extensão. O consumo médio de um carro da Fórmula 1 é de 75 litros para\
        cada 100 km. Suponha que um piloto de uma equipe específica, que utiliza um tipo de gasolina\
        com densidade de 750 g/L, esteja no circuito de Spa-Francorchamps, parado no box para reabastecimento ",
        pergunta: "Caso ele pretenda dar mais 16\
        voltas, ao ser liberado para retornar à pista, seu carro deverá pesar, no mínimo.",
        opcoes: ["617 Kg", "668 Kg", "680 Kg", "689 Kg", "717 Kg"],
        correta: "668 Kg",
        explicacao: "De acordo com o enunciado, o circuito tem 7 km de extensão e o piloto dará 16 voltas.<br>\
        Primeiro, calculamos a distância total que será percorrida:<br>\
        Distância total:\
        \\[ 16 \\times 7 = 112 \\text{ km} \\]\
        Como o carro consome 75 litros a cada 100 km (ou 0,75 litro por km), calculamos o volume de gasolina necessário:\
        \\[ 112 \\times 0,75 = 84 \\text{ litros} \\]\
        Sabendo que a densidade da gasolina é de 750 g/L (ou 0,75 kg/L), multiplicamos o volume pela densidade para achar o peso do combustível em quilogramas:\
        \\[ 84 \\times 0,75 = 63 \\text{ kg} \\]\
        Por fim, somamos o peso da gasolina ao peso mínimo do carro com o piloto e tanque vazio (605 kg):\
        \\[ 605 + 63 = 668 \\text{ kg} \\]\
        <p style='color:green;'>Resposta = 668 kg</p>"
    },
    {
        id: "razão-e-proporção-7",
        informacoes: "(ENEM 2010) A classificação de um país no quadro de medalhas nos Jogos Olímpicos depende do\
        número de medalhas de ouro que obteve na competição, tendo como critérios de desempate\
        o número de medalhas de prata seguido do número de medalhas de bronze conquistados.\
        Nas Olimpíadas de 2004, o Brasil foi o décimo sexto colocado no quadro de medalhas, tendo\
        obtido 5 medalhas de ouro, 2 de prata e 3 de bronze. Parte desse quadro de medalhas é reproduzida a seguir.",
        img: "../../imagens/razão-e-proporção/q7-razão-e-proporção.png",
        pergunta: "Se o Brasil tivesse obtido mais 4 medalhas de ouro, 4 de prata e 10 de bronze, sem alteração no\
        número de medalhas dos demais países mostrados no quadro, qual teria sido a\
        classificação brasileira no quadro de medalhas nas Olimpíadas de 2004?",
        opcoes: ["13º", "12º", "11º", "10º", "9º"],
        correta: "12º",
        explicacao: "De acordo com o enunciado nas olimpíadas de 2004 o brasil teve 5 medalhas de ouro\
        , 2 de prata e 3 de bronze. a questão quer saber se o brasil tivesse obtido mais 4 de ouro, 4 de prata\
         e 10 de bronze em qual lugar ele ficaria?\
        \\[ 5 + 4 = 9 \\text{medalhas de Ouro} \\]\
        \\[ 2 + 4 = 6  \\text{medalhas de Prata}\\]\
        \\[ 3 + 10 = 13 \\text{medalhas de Bronze} \\]\
        \\[ 9 + 6 + 13 = 28 \\text{medalhas no total} \\]\
        Comparando com a tabela, o Brasil empata em número de ouros (9) com Coreia do Sul\
        , Grã-Bretanha, Cuba e Ucrânia. Pelo critério de desempate (medalhas de prata)\
        , o Brasil fica atrás de Cuba (7 pratas) e à frente da Ucrânia (5 pratas), assumindo o 12º lugar \
        <p style='color:green;'>Resposta = 12°</p> \
        "
    },
    {
        id: "razão-e-proporção-8",
        informacoes: "(ENEM 2010) O hábito de comer um prato de folhas todo dia faz proezas para o corpo. Uma das formas de\
        variar o sabor das saladas é experimentar diferentes molhos. Um molho de iogurte com\
        mostarda contém 2 colheres de sopa de iogurte\
        desnatado, 1 colher de sopa de mostarda, 4 colheres de sopa de água, 2 colheres de sopa de azeite.",
        pergunta: "Considerando que uma colher de sopa equivale a aproximadamente 15 mL, qual é o número\
        máximo de doses desse molho que se faz utilizando 1,5 L de azeite e mantendo a\
        proporcionalidade das quantidades dos demais ingredientes ",
        opcoes: ["5", "20", "50", "200", "500"],
        correta: "50",
        explicacao: "De acordo com o enunciado, cada dose do molho utiliza 2 colheres de sopa de azeite\
         e cada colher equivale a 15 mL. Primeiro, calculamos a quantidade de azeite gasta em 1 dose \
         (os demais ingredientes não interferem no cálculo):<br>\
        Azeite por dose:\
        \\[ 2 \\times 15 = 30 \\text{ mL} \\]\
        Como temos 1,5 L de azeite disponíveis, convertemos esse valor para mililitros (multiplicando por 1.000):\
        \\[ 1,5 \\times 1.000 = 1.500 \\text{ mL} \\]\
        Agora, dividimos o total de azeite disponível pela quantidade usada em cada dose:\
        \\[ \\frac{1.500}{30} = 50 \\]\
        <p style='color:green;'>Resposta = 50</p>"
    },
    {
        id: "razão-e-proporção-11",
        informacoes: "(ENEM 2010) Algumas pesquisas estão sendo desenvolvidas para se obter arroz e feijão com maiores teores\
        de ferro e zinco e tolerantes à seca. Em média, para cada 100 g de arroz cozido, o teor de ferro\
        é de 1,5 mg e o de zinco é de 2,0 mg. Para 100 g de feijão, é de 7 mg o teor de ferro e de 3 mg o de\
        zinco. Sabe-se que as necessidades diárias dos dois micronutrientes para uma pessoa adulta\
        são de aproximadamente 12,25 mg de ferro e 10 mg de zinco.\
        <br><br>Considere que uma pessoa adulta deseja\
        satisfazer suas necessidades diárias de ferro e zinco ingerindo apenas arroz e feijão. Suponha\
        que seu organismo absorva completamente todos os micronutrientes oriundos desses alimentos.",
        pergunta: "Na situação descrita, que quantidade a pessoa deveria comer diariamente de arroz e feijão, respectivamente?",
        opcoes: ["58g e 456g", "200g e 200g", "350g e 100g", "375g e 500g", "400g e 89g"],
        correta: "350g e 100g",
        explicacao: "De acordo com o enunciado, os valores de ferro e zinco são dados para cada porção de 100 g.\
         Vamos chamar de ''a'' a quantidade de porções de 100 g de arroz e de 'f' a quantidade de porções de 100 g de feijão:<br>\
            obs: 'a' = porções de 100 g de arroz | “f” = porções de 100 g de feijão<br>\
            Montando o sistema com as necessidades diárias de ferro (12,25 mg) e zinco (10 mg):\
           \\[ 1,5a + 7f = 12,25\\]\
           \\[ 2a + 3f = 10\\]\
            Isolando 'a' na segunda equação:\
           \\[ 2a = 10 - 3f\\implies a = 5 - 1,5f\\]\
            Substituindo na primeira equação para achar 'f':\
           \\[ 1,5(5 - 1,5f) + 7f = 12,25\\]\
           \\[ 7,5 - 2,25f + 7f = 12,25\\]\
           \\[ 4,75f = 4,75\\implies f = 1\\text{ (ou } 100\\text{ g de feijão)}\\]\
            Substituindo 'f = 1' para achar 'a':\
           \\[ a = 5 - 1,5(1) = 3,5\\text{ (ou } 350\\text{ g de arroz)}\\]\
            <p style='color:green;'>Resposta = 350 g de arroz e 100 g de feijão</p>"
    },
    {
        id: "razão-e-proporção-13",
        informacoes: "(ENEM 2011) Muitas medidas podem ser tomadas em nossas casas visando à utilização racional de energia\
        elétrica. Isso deve ser uma atitude diária de cidadania. Uma delas pode ser a redução do\
        tempo no banho. Um chuveiro com potência de 4 800 W consome 4,8 kW por hora.",
        pergunta: "Uma pessoa que toma dois banhos diariamente, de 10 minutos cada, consumirá, em sete dias, quantos kW?",
        opcoes: ["0,8", "1,6", "5,6", "11,2", "33,6"],
        correta: "11,2",
        explicacao: "Nesta questão podemos observar as seguintes informações: uma pessoa toma dois banho\
         diariamente de 10 minutos cada e em 7 dias, quantos kW irá consumir?\
        para isso multiplicamos os dois banhos pela quantidade de tempo e depois pelos dias:\
        \\[ 2 \\times 10 = 20 \\text{ minutos }\\]\
        \\[ 20 \\times 7 = 140 \\text{ minutos} \\]\
        transformando em horas:\
        \\[ 140 / 60 \\approx 2,33 \\]\
        agora multiplicamos pela quantidade de kW horas:\
        \\[ 2,33 \\times 4,8 = 11,184 \\text{ Arredondando fica → } = 11,2\\]\
        <p style='color:green;'>Resposta = 11,2 </p>\
        "
    },
    {
        id: "razão-e-proporção-16",
        informacoes: "(ENEM 2011) Em uma sala de aula, três alunos resolveram\
        fazer uma brincadeira de medição. Cada um escolheu um objeto próprio para medir o\
        comprimento da lousa. O primeiro foi até a lousa e, usando o comprimento de um livro, verificou\
        que era possível enfileirar 13 deles e ainda sobrava um pequeno espaço igual à metade do\
        comprimento do livro. O segundo pegou seu lápis e começou a medir a lousa. No final,\
        percebeu que esse comprimento era igual a 20 lápis. O terceiro, para economizar tempo, pegou\
        uma régua graduada e mediu o comprimento do livro que o colega havia usado, obtendo 28 cm.",
        pergunta: "Com base nessas informações, qual é a medida mais aproximada do comprimento do lápis?",
        opcoes: ["10cm", "18cm", "19cm", "26cm", "41cm"],
        correta: "19cm",
        explicacao: ""
    },
    {
        id: "razão-e-proporção-18",
        informacoes: "(ENEM 2012) Uma mãe recorreu à bula para verificar a dosagem de um remédio que precisava dar a seu\
        filho. Na bula, recomendava-se a seguinte dosagem: 5 gotas para cada 2 kg de massa corporal a cada 8 horas.",
        pergunta: "Se a mãe ministrou corretamente 30 gotas do remédio a seu filho a cada 8 horas, então a massa corporal dele é de",
        opcoes: ["12kg", "16kg", "24kg", "36kg", "75kg"],
        correta: "12kg",
        explicacao: "Nesta questão basta fazermos regra de três:\
        \\[\\begin{aligned}\
        5 &\\longrightarrow 2 \\\\ \
        30&\\longrightarrow x\
        \\end{aligned}\
        \\]\
        multiplicamos meio pelos estremos:\
        \\[ 5 \\times x = 2 \\times 30\\]\
        \\[ 5x = 60 \\]\
        \\[x = \\frac{60}{5}\\]\
        \\[x = 12 \\]\
        <p style='color:green;'>Resposta = 12kg </p>\
        "
    },


]





const quizatual = "razão-e-proporção";

// Sorteio das perguntas
const sorteadas = [];
while (sorteadas.length < 5) {
    let numero = Math.floor(
        Math.random() * perguntas.length
    );
    if (!sorteadas.includes(numero)) {
        sorteadas.push(numero);
    }
}
console.log(sorteadas);
console.log(quizatual);
