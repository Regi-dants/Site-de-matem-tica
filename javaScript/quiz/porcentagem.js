const perguntas = [
    {
        id: "porcentagem-1",
        informacoes: "(ENEM 2015) Uma pesquisa recente aponta que 8 em cada 10 homens brasileiros dizem cuidar de sua beleza, não apenas de sua higiene pessoal. <br> \
        Outra maneira de representar esse resultado é exibindo o valor percentual dos homens\
        brasileiros que dizem cuidar de sua beleza.",
        pergunta: "Qual é o valor percentual que faz essa representação?",
        opcoes: ["80%", "8%", "0,8%", "0,08%", "0,008%"],
        correta: "80%",
        explicacao: ""
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
        explicacao: ""
    },
    {
        id: "porcentagem-3",
        informacoes: "(ENEM 2011) O salário-mínimo ― menor salário que um trabalhador pode receber ― é estabelecido por\
        lei e reavaliado todos os anos com base no custo de vida da população.",
        img:"../../imagens/porcentagem/q3-porcentagem.png",
        pergunta: "Que número inteiro representa, o valor mais aproximado do aumento sofrido pelo salário-mínimo, de 1994 a 2008, em pontos percentuais?",
        opcoes: ["14", "38", "67", "265", "493"],
        correta: "493",
        explicacao: ""
    },
    {
        id: "porcentagem-8",
        informacoes: "(ENEM 2010) Os dados do gráfico seguinte foram gerados a\
        partir de dados colhidos no conjunto de seis regiões metropolitanas pelo Departamento\
        Intersindical de Estatística e Estudos Socioeconômicos (Dieese).",
        img:"../../imagens/porcentagem/q8-porcentagem.png",
        pergunta: "Supondo que o total de pessoas pesquisadas na região metropolitana de Porto Alegre equivale a\
        250 000, o número de desempregados em março de 2010, nessa região, foi de",
        opcoes: ["24 500", "25 000", "220 500", "223 000", "227 500"],
        correta: "24 500",
        explicacao: ""
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
        explicacao: ""
    },
    {
        id: "porcentagem-10",
        informacoes: "(ENEM 2011) Uma enquete, realizada em março de 2010, perguntava aos internautas se eles acreditavam\
        que as atividades humanas provocam o aquecimento global. Eram três as alternativas\
        possíveis e 279 internautas responderam à enquete, como mostra o gráfico.",
        img:"../../imagens/porcentagem/q10-porcentagem.png",
        pergunta: "Analisando os dados do gráfico, quantos internautas responderam 'NÃO' à enquete?",
        opcoes: ["Menos de 23.", "Mais de 23 e menos de 25.", "Mais de 50 e menos de 75.",
        "Mais de 100 e menos de 190.", "Mais de 200."],
        correta: "Mais de 50 e menos de 75.",
        explicacao: ""
    },
    {
        id: "porcentagem-11",
        informacoes: "(ENEM 2011) Uma pessoa aplicou certa quantia em ações. No primeiro mês, ela perdeu 30% do total do\
        investimento e, no segundo mês, recuperou 20% do que havia perdido. Depois desses dois meses,\
        resolveu tirar o montante de R$ 3 800,00 gerado pela aplicação.",
        pergunta: "A quantia inicial que essa pessoa aplicou em ações corresponde ao valor de",
        opcoes: ["R$ 4 222,22", "R$ 4 523,80", "R$ 5 000,00", "R$ 13 300,00", "R$ 17 100,00"],
        correta: "R$ 5 000,00",
        explicacao: ""
    },
    {
        id: "porcentagem-13",
        informacoes: "(ENEM 2012) Um laboratório realiza exames em que é possível observar a taxa de glicose de uma pessoa. \
        Os resultados são analisados de acordo com o quadro a seguir.",
        img:"../../imagens/porcentagem/q13-porcentagem.png",
        pergunta: "Um paciente fez um exame de glicose nesse\
        laboratório e comprovou que estava com hiperglicemia. Sua taxa de glicose era de 300\
        mg/dL. Seu médico prescreveu um tratamento em duas etapas. Na primeira etapa ele conseguiu\
        reduzir sua taxa em 30% e na segunda etapa em 10%.<br>\
        Ao calcular sua taxa de glicose após as duas reduções, o paciente verificou que estava na categoria de",
        opcoes: ["hipoglicemia", "normal", "pré-diabetes", "diabetes melito", "hiperglicemia"],
        correta: "diabetes melito",
        explicacao: ""
    },
    {
        id: "porcentagem-15",
        informacoes: "(ENEM 2013) Observe no gráfico alguns dados a respeito da produção e do destino do lixo no Brasil no ano de 2010.",
        img:"../../imagens/porcentagem/q15-porcentagem.png",
        pergunta: "A partir desses dados, supondo que todo o lixo brasileiro, com exceção dos recicláveis, é\
destinado aos aterros ou aos lixões, quantos milhões de toneladas de lixo vão para os lixões?",
        opcoes: ["5,9", "7,6", "10,9", "42,7", "76,8"],
        correta: "7,6",
        explicacao: ""
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
        explicacao: ""
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