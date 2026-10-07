const perguntas = [

    { //q1
        id:"pa-pg-q1",
        informacoes: "(ENEM 2021) O preço médio cobrado por um pintor para executar um serviço consiste em uma taxa fixa de R$ 25,00 mais uma quantia proporcional à área pintada. O quadro apresenta os valores cobrados por ele em trabalhos recentes.",
        img: "../../imagens/pa-pg/q1-pa.png",
        pergunta: "Qual o preço cobrado para realizar um serviço de pintura de uma área de 150 m2?",
        opcoes: ["R$300,00", "R$325,00", "R$400,00", "R$1050,00", "R$3750,00"],
        correta: "R$325,00",
        explicacao:"Olhando o enunciado da questão podemos perceber algumas informações como:<br> o preço fixo é ‘R$25,00’.<br> \
        O restante do valor é proporcional à área pintada.<br>\
        podemos descobrir qual o valor por metro quadrado, por exemplo: vamos pegar o primeiro valor da tabela que é ‘5 m²  R$35,00’ se\
        organizamos da seguinte forma: <strong>\
        \\[5x = 35 - 25\\] \ \\[5x  = 10\\]\
        \\[x = \\frac{10}{5}\\]  \\[x = 2\\] </strong>  \
        o valor por m² é R$ 2,00. \
        usando a fórmula do ‘termo geral’ da P.A: <strong>\
        \\[a_150 = 27 + (150 - 1) \\times 2\\]\
        \\[a_150 = 27 + 149 \\times 2\\]\
        \\[a_150 = 27 + 298\\]\
        \\[a_150 = R$325,00\\] </strong> \
        Resposta: R$325,00\
"
    },
    { //q2
        id:"pa-pg-q2",
        informacoes: "(ENEM 2014) Um ciclista participará de uma competição e treinará alguns dias da seguinte maneira: no\
        primeiro dia, pedalará 60 km; no segundo dia, a mesma distância do primeiro mais r km; no\
        terceiro dia, a mesma distância do segundo mais r km; e, assim, sucessivamente, sempre\
        pedalando a mesma distância do dia anterior mais r km. No último dia, ele deverá percorrer\
        180 km, completando o treinamento com um total de 1 560 km.",
        pergunta: "A distância r que o ciclista deverá pedalar a mais a cada dia, em km, é",
        opcoes: ["3", "7", "10", "13", "20"],
        correta: "10",
        explicacao:"Olhando o enunciado podemos analisar algumas informações.<br>\
        No primeiro dia ele percorreu 60km. <br> \
        No segundo ele vai percorrer a mesma quantidade do dia anterior mais ‘r’ (60+r).<br>\
        e a soma de todos os valores deve ser ‘1.560 km’. ficando assim:\
        PA (60, 60+r, 60+2r,...., 180) Utilizaremos as duas fórmulas da PA para calcular quem é ‘r’:\
        1º passo: descobrir a quantidade de termos.<strong>\
        \\[S_n = \\frac{n \\times (a_1 + a_n)}{2}\\] \
        para isso utilizaremos a fórmula da soma dos termos ficando assim:\
        \\[1560 = \\frac{(60 + 180) \\times n} {2}\\]\
        \\[1560 = \\frac{240 \\times n}{2}\\]\
        \\[1560 = 120 \\times n\\]\
        \\[n = \\frac{1560}{120}\\]\
        \\[n = 13\\] </strong>\
        2º passo: descobrir a razão ‘r’.\
        agora que sabemos que a quantidade de termos dessa PA podemos descobrir a sua razão.\
        ficando:<strong>\
        \\[180 = 60 + (13 -1) \\times r\\]\
        \\[180 - 60 = (13 - 1)\\times r\\]\
        \\[120 = 12 \\times r\\]\
        \\[r = \\frac{120}{12}\\] </strong>\
        Resposta = 10km\
        "
    },
    { //q3
        id:"pa-pg-q3",
        informacoes: "(ENEM 2021) Uma confeiteira pretende divulgar em um sítio da internet os doces que produz, mas só fará isso\
        se acreditar que o número de acessos por semana compensará seu gasto com a divulgação.\
        Por isso, pediu que lhe enviassem dados sobre o número de acessos ao sítio nas últimas 5 semanas e recebeu o gráfico a seguir.",
        img: "../../imagens/pa-pg/q3-pa.png",
        pergunta: "A confeiteira acredita que, se o número de acessos mantiver o mesmo crescimento semanal para as próximas 5 semanas, ao final desse\
        período valerá a pena investir na divulgação. O número de acessos que a confeiteira acredita\
        ser suficiente para que a divulgação no sítio valha a pena é",
        opcoes: ["162", "170", "172", "312", "320"],
        correta: "170",
        explicacao:"analisando a questão podemos perceber que:<br>\
        o número de termos é 10 (as primeiras 5 semanas + as outras 5).<br>\
        a razão é 2. ( pois 154 - 152 é 2)\
        então podemos fazer:<strong>\
        \\[a_10 = 152 + (10 - 1) \\times 2\\]\
        \\[a_10 = 152 + 9 \\times 2\\]\
        \\[a_10 = 152 + 18\\]\
        \\[a_10 = 170\\] </strong>\
        Resposta = 170\
        "
    },
    {//q4
        id:"pa-pg-q4",
        informacoes: "(ENEM 2020) O isopor é um material composto por um polímero chamado poliestireno. Todos os\
        produtos de isopor são 100% recicláveis, assim como os plásticos em sua totalidade. O gráfico\
        mostra a quantidade de isopor, em tonelada, que foi reciclada no Brasil nos anos de 2007, 2008 e\
        2009. Considere que o aumento da quantidade de isopor reciclado ocorrida de 2008 para 2009\
        repita-se ano a ano de 2009 até 2013 e, a partir daí, a quantidade total reciclada anualmente\
        permaneça inalterada por um período de 10 anos.",
        img: "../../imagens/pa-pg/q4-pa.png",
        pergunta: "Qual é a quantidade prevista para reciclagem de isopor, em tonelada, para o ano de 2020?",
        opcoes: ["21 840", "21 600", "13 440", "13 200", "9 800"],
        correta: "13 200",
        explicacao:"Primeiro precisamos respeitar algumas regras que o enunciado fala como:\
        Considera-se o aumento das toneladas presente no intervalo de 2008 a 2009 então:<strong>\
        \\[8400 - 7200 = 1200\\] </strong>\
        isso se repete ano a ano até 2013, de 2009 até 2013 ocorrerá 4 aumentos( 2010, 2011, 2012 ,2013 ) por isso: <strong>\
        \\[4 \\times 1200 = 4800 + 8400 = 13200 \\]</strong>\
        O enunciado fala que depois de 2013 não ocorreu nem um aumento em um período de 10 anos, o que seria até 2023.\
        ou seja, a resposta dessa questão é 13.200 Toneladas\
        "
    },
    {//q5
        id:"pa-pg-q5",
        informacoes: "(ENEM 2019) Em um município foi realizado um levantamento relativo ao número de médicos, obtendo-se os dados:\
        Tendo em vista a crescente demanda por atendimento médico na rede de saúde pública,\
        pretende-se promover a expansão, a longo prazo, do número de médicos desse município,\
        seguindo o comportamento de crescimento linear no período observado no quadro.",
        img: "../../imagens/pa-pg/q5-pa.png",
        pergunta: "Qual a previsão do número de médicos nesse município para o ano 2040?",
        opcoes: ["387", "424", "437", "574", "711"],
        correta: "437",
        explicacao:"Observando o enunciado e a tabela podemos perceber algumas informações.\
        Primeiro com dois valores da tabela (um seguido do outro) vamos descobrir qual o aumento de médicos por ano.\
        vamos fazer <strong>\\[162 - 137 = 25\\]</strong> e depois dividir por 5. \
        <strong>\\[\\frac{25}{5} = 5\\]</strong> \
        Agora vamos descobrir o intervalo de 2010 até 2040.\
        <strong>\\[2040 - 2010 = 30 Anos\\]</strong>\
        Então multiplicamos <strong>\\[5 \\times 30 = 150\\]</strong> e somamos com o valor de 2010.\
        <strong>\\[287 + 150 = 437\\]</strong>\
"
    },
    {//q6
        id:"pa-pg-q6",
        informacoes: "(ENEM 2015) Ano após ano, muitos brasileiros são vítimas de homicídio no Brasil. O gráfico apresenta a\
        quantidade de homicídios registrados no Brasil, entre os anos 2000 e 2009.",
        img: "../../imagens/pa-pg/q6.png",
        pergunta: "Se o maior crescimento anual absoluto observado nessa série se repetisse de 2009 para\
        2010, então o número de homicídios no Brasil ao final desse período seria igual a",
        opcoes: ["48 839.","52 755.","53 840.","54 017.","54 103."],
        correta: "54 017.",
        explicacao:"Nessa questão precisamos analisar no gráfico qual ano teve o maior aumento, \
        para isso basta olharmos a inclinação de um ano para o outro ou subtrair ele com o seu antecessor (por exemplo, \\(47 943 - 45 360 = 2.583\\)\
        Agora pegamos o número de casos em 2009 e somamos.\
        <strong> \\[51 434 + 2.583 = 54 017\\] </strong>\
        Resultado: 54.017\
        "
    },
    
    {//q8
        id:"pa-pg-q8",
        informacoes: "(ENEM 2013) As projeções para a produção de arroz no período de 2012 - 2021, em uma determinada\
        região produtora, apontam para uma perspectiva de crescimento constante da\
        produção anual. O quadro apresenta a quantidade de arroz, em toneladas, que será\
        produzida nos primeiros anos desse período, de acordo com essa projeção.",
        img: "../../imagens/pa-pg/q8.png",
        pergunta: "A quantidade total de arroz, em toneladas, que deverá ser produzida no período de 2012 a 2021 será de",
        opcoes: ["497,25.","500,85","502,87","558,75","563,25"],
        correta: "558,75",
        explicacao:"Primeiro vamos descobrir qual a razão ‘r’.\
        para isso vamos pegar um valor da tabela e subtrair por seu antecessor ficando.  \
        <strong> \\[51,50 - 50,25 = 1,25\\]</strong>\
        Agora vamos descobrir qual a quantidade de toneladas do ano de 2021.\
        se analisarmos podemos perceber que temos 10 termos, então.\
        <strong> \\[a_10 = 50,25 + (10 -1) \\times 1,25\\]</strong>\
        <strong> \\[a_10 = 50,25 + 9 \\times 1,25\\]</strong>\
        <strong> \\[a_10 = 50,25 + 11,25\\]</strong>\
        <strong> \\[a_10 = 61,50\\]</strong>\
        \
        agora usamos a fórmula da soma de uma PA:\
        <strong> \\[S_10 = \\frac{(50,25 + 61,50) \\times 10} {2}\\]</strong>\
        <strong> \\[S_10 = \\frac{111,75 \\times 10} {2}\\]</strong>\
        <strong> \\[S_10 = 111,75 \\times 5\\]</strong>\
        <strong> \\[S_10 = 558,75\\]</strong>\
        resposta: 558,75 Toneladas.\
        "
    },
    {//q9
        id:"pa-pg-q9",
        informacoes: "(ENEM 2013) Uma torneira não foi fechada corretamente e ficou pingando, da meia-noite às seis horas da\
        manhã, com a frequência de uma gota a cada três segundos. Sabe-se que cada gota d\'água tem volume de 0,2 mL.",
        pergunta: "Qual foi o valor mais aproximado do total de água desperdiçada nesse período, em litros?",
        opcoes: ["0,2","1,2","1,4","12,9","64,8"],
        correta: "1,4",
        explicacao:"Verificando o enunciado vemos que ele diz as seguintes informações:\
        a torneira ficou pingando da meia noite (00:00) até as (6:00).<br>\
        a torneira pingava a cada 3 segundos.<br>\
        Cada gota d’água tem volume de 0,2 ml.<br> \
        1º passo: pegamos o intervalo que a torneira ficou pingando que foi de 6:00 horas e transformamos em segundos,fazendo:\
        <strong> \\[6 \\times 60 \\times 60 = 3600\\]</strong>\
        <strong> \\[6 \\times 3600 = 21600 segundos.\\]</strong>\
        2º passo: pegamos os segundos que achamos e dividimos pelo intervalo de tempo que a torneira pingava que era de 3 segundos para descobrir a quantidade de gotas.\
        <strong> \\[\\frac{21600}{3} = 7200 gotas\\]</strong>\
        3º passo: agora multiplicamos por 0,2 e em seguida dividimos por 1.000 para deixar em litros.\
        <strong> \\[7200 \\times 0,2 = 1440\\]</strong>\
        <strong> \\[\\frac{1440}{1000} = 1.44 L\\]</strong>\
        resposta = 1,44 ou 1,4 L\
        "
    },
    {//q10
        id:"pa-pg-q10",
        informacoes: "(ENEM 2012) Jogar baralho é uma atividade que estimula o raciocínio. Um jogo tradicional é a Paciência, que\
        utiliza 52 cartas. Inicialmente são formadas sete colunas com as cartas. A primeira coluna tem\
        uma carta, a segunda tem duas cartas, a terceira tem três cartas, a quarta tem quatro cartas, e\
        assim sucessivamente até a sétima coluna, a qual tem sete cartas, e o que sobra forma o monte, que são as cartas não utilizadas nas colunas.",
        pergunta: "A quantidade de cartas que forma o monte é",
        opcoes: ["21","24","26","28","31"],
        correta: "24",
        explicacao:"De acordo com o enunciado, temos os seguintes valores:\
        Tem 52 cartas.\
        Temos 7 montes, o primeiro com 1 carta e o último com 7 cartas.\
        para acharmos quantas cartas vão para o monte, precisamos primeiro fazer a soma dos montes,\
        <strong>\\[a7 = \\frac{(1+7) \\times 7} {2}\\]</strong>\
        <strong>\\[a7 = \\frac{8 \\times 7}{2}\\]</strong>\
        <strong>\\[a7 = \\frac{56} {2}\\]</strong>\
        <strong>\\[a7 = 28 cartas.\\]</strong>\
        agora o total de cartas existentes pela quantidade que somamos:\
        <strong>\\(52 - 28 = 24\\)</strong> Cartas\
        Resposta = 24 cartas no monte.\
"
    },

];

// Sorteio das perguntas
const quizatual = "pa-pg";
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
