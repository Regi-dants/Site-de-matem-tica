const perguntas = [
    {//q2
    informacoes: "Um nutricionista preparou cinco opções de\
    dieta para seus clientes. A quantidade de\
    calorias, em quilocaloria, de cada dieta é\
    apresentada no quadro, em função de três\
    componentes básicos: proteínas, carboidratos e\
    suplementos.",
    img: "../../imagens/algebra/algebra-q2.png",
    pergunta: "Como um de seus clientes apresentou muita\
    redução de massa corporal, o nutricionista\
    recomendou que ele escolhesse uma das cinco\
    dietas do quadro e quadruplicasse a quantidade\
    de proteínas, triplicasse a quantidade de\
    carboidratos e duplicasse a quantidade de\
    suplementos recomendadas pela dieta escolhida.<br>\
    O cliente seguirá a recomendação do\
    nutricionista, mas deseja escolher a dieta na qual\
    ele consumirá a menor quantidade de calorias\
    dentre as opções disponíveis.<br>\
    O cliente deverá escolher a dieta",
    opcoes: ["I", "II", "III", "IV", "V"],
    correta: "III",
    explicacao: ""
    },
    {//q3
    informacoes: "Uma pessoa pretende viajar por uma companhia\
    aérea que despacha gratuitamente uma mala\
    com até 10 kg.<br>\
    Em duas viagens que realizou, essa pessoa\
    utilizou a mesma mala e conseguiu 10 kg com as\
    seguintes combinações de itens:",
    img: "../../imagens/algebra/algebra-q3.png",
    pergunta: "Para ter certeza de que sua bagagem terá massa\
    de 10 kg, ela decide levar essa mala com duas calças, um sapato e o máximo de camisetas,\
    admitindo que itens do mesmo tipo têm a mesma\
    massa.<br>\
    Qual a quantidade máxima de camisetas que\
    essa pessoa poderá levar?",
    opcoes: ["22", "24", "26", "33", "39"],
    correta: "24",
    explicacao: ""
    },
    {//q4
    informacoes: "Uma das bases mais utilizadas para representar\
    um número é a base decimal. Entretanto, os\
    computadores trabalham com números na base\
    binária. Nessa base, qualquer número natural é\
    representado usando apenas os algarismos 0 e 1.<br>\
    Por exemplo, as representações dos números 9 e\
    12, na base binária, são 1001 e 1100,\
    respectivamente. A operação de adição, na base\
    binária, segue um algoritmo similar ao utilizado\
    na base decimal, como detalhado no quadro:",
    img: "../../imagens/algebra/algebra-q4.png",
    pergunta: "Por exemplo, na base binária, a soma dos\
    números 10 e 10 é 100, como apresentado\
    \\[10 + 10 = 100\\]\
    Considerando as informações do texto, o\
    resultado da adição 9 + 12 será representado, na\
    base binária, por",
    opcoes: ["101", "1101", "1111", "10101", "11001"],
    correta: "10101",
    explicacao: ""
    },
    {//q5
    informacoes: "Um segmento de reta está dividido em duas\
    partes na proporção áurea quando o todo está\
    para uma das partes na mesma razão em que\
    essa parte está para a outra.<br>\
    Essa constante de\
    proporcionalidade é comumente representada\
    pela letra grega φ, e seu valor é dado pela\
    solução positiva da equação φ2 = φ + 1.\
    Assim como a potência φ2, as potências\
    superiores de φ podem ser expressas da forma\
    aφ + b, em que a e b são inteiros positivos, como\
    apresentado no quadro.",
    img: "../../imagens/algebra/algebra-q5.png",
    pergunta: "A potência φ7, escrita na forma aφ + b (a e b são\
    inteiros positivos), é",
    opcoes: ["5φ + 3", "7φ + 2", "9φ + 6", "11φ +7", "13φ + 8"],
    correta: "13φ + 8",
    explicacao: ""
    },
    {//q6
    informacoes: "Querendo reduzir custos na limpeza da área de\
    estacionamento de um prédio, o síndico resolveu\
    comprar uma lavadora de alta pressão. Sabe-se\
    que, na utilização desse equipamento, o\
    consumo de água é menor, entretanto, existe o\
    gasto com energia elétrica. O síndico coletou os\
    dados de cinco modelos de lavadora com mesmo preço, e cujos consumos de água e de energia são\
    os fornecidos no quadro.",
    img: "../../imagens/algebra/algebra-q6.png",
    pergunta: "As tarifas de água e de energia elétrica são,\
    respectivamente, R$ 0,0025 por litro de água e\
    R$ 0,30 por quilowatt-hora. <br>\
    O modelo de lavadora que o síndico deve\
    adquirir para gastar menos com a limpeza do\
    estacionamento é",
    opcoes: ["", "", "", "", ""],
    correta: "",
    explicacao: ""
    },
    {//q7
    informacoes: "Uma partida de futebol tem dois tempos de 45\
    minutos cada. A duração do intervalo entre cada\
    tempo é de 15 minutos. Eventualmente, por\
    ocasião de paralisações ocorridas durante um\
    dos tempos (como comemorações de gols,\
    atendimento a jogadores que necessitem de\
    maca), ocorre acréscimo ao tempo de jogo.<br>\
    No Brasil, o segundo tempo é iniciado zerando-\
    se o cronômetro, mas em campeonatos\
    europeus, começa com o cronômetro\
    posicionado em 45 minutos. Em uma partida de\
    um campeonato europeu, um time marcou um\
    gol aos 17 minutos e 45 segundos. A outra\
    equipe empatou o jogo aos 54 minutos e 32\
    segundos. O tempo do intervalo foi respeitado e \
    houve um acréscimo de 2 minutos ao primeiro\
    tempo do jogo.",
    pergunta: "O tempo transcorrido entre os dois gols foi de:",
    opcoes: ["54 minutos e 47 segundos.", "53 minutos e 47 segundos.", "51 minutos e 47 segundos.", "38 minutos e 47 segundos."
        , "36 minutos e 47 segundos."],
    correta: "53 minutos e 47 segundos.",
    explicacao: ""
    },
    {//q9
    informacoes: "Usando um computador construído com peças\
    avulsas, o japonês Shigeru Kondo calculou o\
    valor da constante matemática π com precisão\
    de 5 trilhões de dígitos. Com isso, foi quebrado o\
    recorde anterior, de dois trilhões de dígitos,\
    estabelecido pelo francês Fabrice Bellard.",
    pergunta: "A quantidade de zeros que segue o algarismo 5\
    na representação do número de dígitos de π\
    calculado pelo japonês é",
    opcoes: ["3", "6", "9", "12", "15"],
    correta: "6",
    explicacao: ""
    },
    {//10
    informacoes: "Um dos conceitos mais utilizados nos estudos\
    sobre a dinâmica de populações é o de densidade\
    demográfica. Esta grandeza, para um local, é a\
    razão entre o seu número de habitantes e a\
    medida da área do seu território. Quanto maior\
    essa razão, expressa em habitante por\
    quilometro quadrado, se diz que mais\
    densamente povoado é o local.<br>\
    Querendo fazer uma visita de estudos ao local\
    mais densamente povoado, entre um grupo de\
    cinco escolhidos, um geógrafo coletou as\
    informações sobre população e área territorial\
    dos locais de seu interesse, obtendo os dados\
    apresentados no quadro, referentes ao ano de\
    2014.",
    img: "../../imagens/algebra/algebra-q10.png",
    pergunta: "Para cumprir seu objetivo de visita, qual dos\
    locais apresentados deverá ser o escolhido pelo\
    geógrafo?",
    opcoes: ["Malta", "Brasil", "México", "Namíbia", "Ilha Norfolk"],
    correta: "Malta",
    explicacao: ""
    },
    {//q12
    informacoes: "Os tempos gastos por três alunos para resolver\
    um mesmo exercício de matemática foram: 3,25\
    minutos; 3,4 minutos e 191 segundos.",
    pergunta: "O tempo gasto a mais, em segundo, pelo aluno\
    que concluiu por último a resolução do exercício,\
    em relação ao primeiro que o finalizou, foi igual\
    a",
    opcoes: ["13", "14", "15", "21", "29"],
    correta: "13",
    explicacao: ""
    },
]

const quizatual = "algebra-e-aritmetica";

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