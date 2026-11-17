const perguntas = [
    {
        id: "porcentagem-1",
        informacoes: "(ENEM 2015) Uma pesquisa recente aponta que 8 em cada 10 homens brasileiros dizem cuidar de sua beleza, não apenas de sua higiene pessoal. <br> \
        Outra maneira de representar esse resultado é exibindo o valor percentual dos homens\
        brasileiros que dizem cuidar de sua beleza.",
        pergunta: "Qual é o valor percentual que faz essa representação?",
        opcoes: ["80%", "8%", "0,8%", "0,08%", "0,008%"],
        correta: "80%",
        explicacao: "Para resolvermos esta questão, basta dividir 8 por 10, que resulta em 0,8 depois\
         multiplicamos por 100 (andar a vírgula duas casas para direita) resultando na nossa resposta → 80%\
         <p style=' color:green;'> Resposta = 80% </p>"
    },
    {
        id: "porcentagem-2",
        informacoes: "(ENEM 2013) O turismo brasileiro atravessa um período de franca expansão. Entre 2002 e 2006, o número\
        de pessoas que trabalham nesse setor aumentou 15% e chegou a 1,8 milhão. Cerca de 60% desse\
        contingente de trabalhadores está no mercado informal, sem carteira assinada.",
        pergunta: "Para regularizar os empregados informais que estão nas atividades ligadas ao turismo, o\
        número de trabalhadores que terá que assinar carteira profissional é",
        opcoes: ["270 mil", "720 mil", "810 mil", "1,08 milhão", "1,35 milhão"],
        correta: "1,08 milhão",
        explicacao: "Para transformar uma porcentagem em número decimal, dividimos seu valor por 100. <br>\
        Por exemplo, 30 dividido por 100 resulta em 0,3. Já para transformar um número decimal em porcentagem, multiplicamos seu valor por 100.<br>\
        Sabendo disso, 60% é a mesma coisa que 0,6 agora basta multiplicar pela quantidade de funcionários.\
        Como a quantidade total de trabalhadores é de 1,8 milhões, basta multiplicar esse valor por 0,6, que representa os 60% de trabalhadores informais.  \
        \\(1,8 \\times 0,6\\) = 1,08 milhões. <br>\
        <p style=' color:green;'> Resposta = 1,08 milhões</p>  \
        "
    },
    {
        id: "porcentagem-3",
        informacoes: "(ENEM 2011) O salário-mínimo ― menor salário que um trabalhador pode receber ― é estabelecido por\
        lei e reavaliado todos os anos com base no custo de vida da população.",
        img: "../../imagens/porcentagem/q3-porcentagem.png",
        pergunta: "Que número inteiro representa, o valor mais aproximado do aumento sofrido pelo salário-mínimo, de 1994 a 2008, em pontos percentuais?",
        opcoes: ["14", "38", "67", "265", "493"],
        correta: "493",
        explicacao: "Para descobrirmos qual foi o aumento percentual do salário mínimo, precisamos primeiro calcular a diferença entre o salário de 2008 e o de 1994.\
        \\[415 - 70 = 345\\]  \
        Agora dividimos o aumento pelo valor inicial, que era R$70, para descobrir quanto esse aumento representa proporcionalmente ao salário de 1994. \
        \\[345/70 \\approx 4,929 \\] agora multiplicamos por 100 ficando 492,9%\
        A alternativa mais próxima é 493, que representa o aumento percentual aproximado do salário mínimo no período.\
        <p style=' color:green;'> Resposta 493% </p>\
        "
    },
    {
        id: "porcentagem-8",
        informacoes: "(ENEM 2010) Os dados do gráfico seguinte foram gerados a\
        partir de dados colhidos no conjunto de seis regiões metropolitanas pelo Departamento\
        Intersindical de Estatística e Estudos Socioeconômicos (Dieese).",
        img: "../../imagens/porcentagem/q8-porcentagem.png",
        pergunta: "Supondo que o total de pessoas pesquisadas na região metropolitana de Porto Alegre equivale a\
        250 000, o número de desempregados em março de 2010, nessa região, foi de",
        opcoes: ["24 500", "25 000", "220 500", "223 000", "227 500"],
        correta: "24 500",
        explicacao: "Nessa questão temos que descobrir supondo que a quantidade de entrevistados seja 250.000 pessoas, qual é a quantidade de desempregados.<br> \
        Analisando o gráfico, podemos perceber que os valores estão em “taxas” ou no caso em porcentagem, primeiro vamos dividir o valor por cem, para depois multiplicar pela quantidade de pessoas.\
        \\[9,8/100 = 0,098\\] \
        Como estamos procurando a quantidade de desempregados, devemos multiplicar a taxa de desemprego pelo total de pessoas pesquisadas, então multiplicando pelo número de pessoas fica:\
        \\[250.000 \\times 0,098 = 24.500 \\] \
        <p style=' color:green;'>Resposta → 24.500 pessoas </p>\
        "
    },
    {
        id: "porcentagem-9",
        informacoes: "(ENEM 2010) Uma empresa possui um sistema de controle de qualidade que classifica o seu desempenho\
        financeiro anual, tendo como base o do ano anterior. Os conceitos são: <br> - insuficiente, quando\
        o crescimento é menor que 1%; <br> - regular, quando o crescimento é maior ou igual a 1% e menor que\
        5%; <br> - bom, quando o crescimento é maior ou igual a 5% e menor que 10%; <br> - ótimo, quando é maior\
        ou igual a 10% e menor que 20%; <br> - e excelente, quando é maior ou igual a 20%. <br>Essa empresa apresentou lucro de R$ 132 000,00 em 2008 e de\
        R$ 145 000,00 em 2009.",
        pergunta: "De acordo com esse sistema de controle de qualidade, o desempenho financeiro dessa empresa no ano de 2009 deve ser considerado ",
        opcoes: ["insuficiente", "regular", "bom", "ótimo", "excelente"],
        correta: "bom",
        explicacao: "Para descobrirmos a resposta desta questão, devemos subtrair o valor obtido em 2009 pelo valor de 2008, então:\
        \\[145.000 - 132.000 = 13000\\]\
        agora dividimos 13000 por 132000, para descobrirmos qual foi o valor do aumento em porcentagem:\
        \\[13000/132000 = 0.098\\]\
        agora multiplicamos por 100 para deixar em valor percentual, ficando: 9,8% <br>\
        agora olhamos para os conceitos e vemos onde o 9,8% está, ficando no conceito “bom”\
        <p style=' color:green;'>Resposta → “bom” </p>\
        "
    },
    {
        id: "porcentagem-10",
        informacoes: "(ENEM 2011) Uma enquete, realizada em março de 2010, perguntava aos internautas se eles acreditavam\
        que as atividades humanas provocam o aquecimento global. Eram três as alternativas\
        possíveis e 279 internautas responderam à enquete, como mostra o gráfico.",
        img: "../../imagens/porcentagem/q10-porcentagem.png",
        pergunta: "Analisando os dados do gráfico, quantos internautas responderam 'NÃO' à enquete?",
        opcoes: ["Menos de 23.", "Mais de 23 e menos de 25.", "Mais de 50 e menos de 75.",
        "Mais de 100 e menos de 190.", "Mais de 200."],
        correta: "Mais de 50 e menos de 75.",
        explicacao: "Como esta questão que apenas quem marcou “não” nas pesquisas, multiplicamos \
        o número de participantes pelo valor em porcentagem marcaram não nas pesquisas, ficando:\
        \\[ 25\\% / 100 = 0,25 \\]\
        \\[0,25 \\times 279 = 69,75\\]\
        olhando nas opções temos nossa resposta que é\
        <p style=' color:green;'>Resposta = Mais de 50 e menos de 75 </p>\
        "
    },
    {
        id: "porcentagem-11",
        informacoes: "(ENEM 2011) Uma pessoa aplicou certa quantia em ações. No primeiro mês, ela perdeu 30% do total do\
        investimento e, no segundo mês, recuperou 20% do que havia perdido. Depois desses dois meses,\
        resolveu tirar o montante de R$ 3 800,00 gerado pela aplicação.",
        pergunta: "A quantia inicial que essa pessoa aplicou em ações corresponde ao valor de",
        opcoes: ["R$ 4 222,22", "R$ 4 523,80", "R$ 5 000,00", "R$ 13 300,00", "R$ 17 100,00"],
        correta: "R$ 5 000,00",
        explicacao: "De acordo com a questão ele perde 30% do valor total que ele tinha investido sobrando 70%,\
         logo em seguida ele recupera 20% de 30% então fazemos:\
        \\[20\\% / 100 = 0,2\\] \\[30\\% / 100 = 0,3\\]\
        \\[ 0,2 \\times 0,3 = 0,06\\]\
        Onde 0,06 é 6%, agora somamos com 70% ficando 76%, agora dividimos 3800 que foi o montante que ele sacou por 76%, ficando:\
        \\[76\\% / 100 = 0,76\\]\
        \\[ 3800 / 0,76 = 5000\\]\
        <p style=' color:green;'>Resposta = 5000</p>\
        "
    },
    {
        id: "porcentagem-13",
        informacoes: "(ENEM 2012) Um laboratório realiza exames em que é possível observar a taxa de glicose de uma pessoa. \
        Os resultados são analisados de acordo com o quadro a seguir.",
        img: "../../imagens/porcentagem/q13-porcentagem.png",
        pergunta: "Um paciente fez um exame de glicose nesse\
        laboratório e comprovou que estava com hiperglicemia. Sua taxa de glicose era de 300\
        mg/dL. Seu médico prescreveu um tratamento em duas etapas. Na primeira etapa ele conseguiu\
        reduzir sua taxa em 30% e na segunda etapa em 10%.<br>\
        Ao calcular sua taxa de glicose após as duas reduções, o paciente verificou que estava na categoria de",
        opcoes: ["hipoglicemia", "normal", "pré-diabetes", "diabetes melito", "hiperglicemia"],
        correta: "diabetes melito",
        explicacao: "Analisando os dados da questão, temos 300mg/dL da taxa de glicose, 30% de redução no primeiro tratamento e 10% no segunda tratamento. <br>\
        primeiro vamos descobrir o quanto diminuiu no primeiro tratamento, fazemos 300 vezes 30% ou nesse caso 0,3, logo:\
        \\[ 30\\%/ 100 = 0,3\\]\
        \\[ 300 \\times 0,3 = 90\\]\
        agora subtraímos:\
        \\[ 300 - 90 = 210 \\]\
        Achamos a quantidade de glicose que ele ficou após o primeiro tratamento, agora vamos para o segundo que ele perdeu 10%:\
        \\[ 210 \\times 0,1 = 21 \\]\
        subtraindo:\
        \\[ 210 - 21 = 189\\]\
        Agora verificamos em qual grupo ele ficou tendo 189mg/dL de glicose, ficando no grupo “diabetes melito”, pois está dentro do intervalo 125 mg/dL a 250 mg/dL da tabela \
        <p style=' color:green;'>Resposta = diabetes melito</p>\
        "
    },
    {
        id: "porcentagem-15",
        informacoes: "(ENEM 2013) Observe no gráfico alguns dados a respeito da produção e do destino do lixo no Brasil no ano de 2010.",
        img: "../../imagens/porcentagem/q15-porcentagem.png",
        pergunta: "A partir desses dados, supondo que todo o lixo brasileiro, com exceção dos recicláveis, é\
        destinado aos aterros ou aos lixões, quantos milhões de toneladas de lixo vão para os lixões?",
        opcoes: ["5,9", "7,6", "10,9", "42,7", "76,8"],
        correta: "7,6",
        explicacao: "Observando o gráfico e o'que a questão pede, podemos perceber o seguinte.<br>\
        Temos 61 milhões de lixo, dentre eles temos 30% recicláveis, 54% matéria orgânica e \
        16% outros rejeitos, e de acordo com o outro gráfico os detritos vão 24% para aterro sem controle, 58% para aterros sanitários e 18% para lixão.<br>\
        De acordo com o comando da questão queremos apenas a porcentagem da matéria orgânica e outros rejeitos, e depois descobrir a quantidade que vai para o lixão.\
        Primeiro, vamos somar as porcentagens da matéria orgânica e outros rejeitos, \\( 54\\% + 16\\% = 70\\%\\), multiplicamos pela quantidade de lixo.\
        \\[61 \\times 0,7\\ = 42,7\\]\
        agora pela porcentagem que vai para o lixão:\
        \\[42,7 \\times 0,18\\ = 7,686\\]\
        que corresponde aproximadamente a 7,6 milhões \
        <p style=' color:green;'>Resposta = 7,6 milhões</p>\
        "
    },
    {
        id: "porcentagem-16",
        informacoes: "(ENEM 2013) Para aumentar as vendas no início do ano, uma loja de departamentos remarcou os preços de\
        seus produtos 20% abaixo do preço original. Quando chegam ao caixa, os clientes possuem o\
        cartão fidelidade da loja têm direito a um desconto adicional de 10% sobre o valor total de suas compras. <br>\
        Um cliente deseja comprar um produto que custava R$ 50,00 antes da remarcação de preços.\
        Ele não possui o cartão fidelidade da loja.",
        pergunta: "Caso esse cliente possuísse o cartão fidelidade da\
        loja, a economia adicional que obteria ao efetuar a compra, em reais, seria de",
        opcoes: ["15,00", "14,00", "10,00", "5,00", "4,00"],
        correta: "4,00",
        explicacao: "Para esta questão temos que primeiramente descobrir quanto está o preço atual do produto que antes da remarcação de 20% que custava R$50,00, então:\
        \\[ 20/ 100 = 0,2\\]\
        \\[0,2 \\times 50 = 10\\]\
        descobrimos o valor do desconto,agora subtraímos pelo preço antes da remarcação:\
        \\[ 50 - 10 = 40\\]\
        De acordo com a questão queremos saber o quanto ele iria economizar se tivesse o cartão fidelidade que tem 10% de desconto, então:\
        \\[ 10/100 = 0,1\\]\
        \\[ 40 \\times 0,1 = 4\\]\
        <p style=' color:green;'>Resposta = 4</p>\
        "
    },
]







const quizatual = "porcentagem";
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