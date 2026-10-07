const perguntas = [
    { //q1
        id: "probabilidade-q1",
        informacoes: "(ENEM 2020) Amigo secreto é uma brincadeira tradicional nas festas de fim de ano.Um grupo de amigos se reúne e cada um deles sorteia o nome da pessoa que irá presentear.No dia da troca de presentes,\
        uma primeira pessoa presenteia seu amigo secreto. Em seguida, o presenteado revela seu amigo secreto e o presenteia. A brincadeira continua até que todos sejam presenteados,\
        mesmo no caso em que o ciclo se fecha.Dez funcionários de uma empresa, entre eles um casal, participarão de um amigo secreto. A primeira pessoa a revelar será definida por sorteio.",
        pergunta: "Qual é a probabilidade de que a primeira pessoa a revelar o seu amigo secreto e a última presenteada sejam as duas pessoas do casal?",
        opcoes: ["\\(\\frac{1}{5} \\)", "\\(\\frac{1}{45} \\)", "\\(\\frac{1}{50} \\)", "\\(\\frac{1}{90} \\)", "\\(\\frac{1}{100} \\)"],
        correta: "\\(\\frac{1}{5} \\)"
    },
    { //q2
        id: "probabilidade-q2",
        informacoes: "(ENEM 2014) O número de frutos de uma determinada espécie de planta se distribui de acordo com as probabilidades apresentadas no quadro.",
        img: "../../imagens/Probabilidade/probabilidade-q2.png",
        pergunta: "A probabilidade de que, em tal planta, existam, pelo menos, dois frutos é igual a",
        opcoes: ["3%", "7%", "13%", "16%", "20%"],
        correta: "20%"
    },
    { //q3
        id: "probabilidade-q3",
        informacoes: "(ENEM 2014) A probabilidade de um empregado permanecer em uma dada empresa particular por 10 anos ou mais é de 1/6.\
        Um homem e uma mulher começam a trabalhar nessa companhia no mesmo dia. Suponha que não haja nenhuma relação entre o trabalho dele\
        e o dela, de modo que seus tempos de permanência na firma são independentes entre si.",
        pergunta: "A probabilidade de ambos, homem e mulher, permanecerem nessa empresa por menos de 10 anos é de",
        opcoes: ["\\[\\frac{60}{36} \\]", "\\[\\frac{25}{36} \\]", "\\[\\frac{24}{36} \\]", "\\[\\frac{12}{36} \\]", "\\[\\frac{1}{36} \\]"],
        correta: "\\[\\frac{25}{36} \\]"
    },
    { //q4
        id: "probabilidade-q4",
        informacoes: "(ENEM 2013) Uma fábrica possui duas máquinas que produzem o mesmo tipo de peça. Diariamente a\
        máquina M produz 2 000 peças e a máquina N produz 3 000 peças. Segundo o controle de\
        qualidade da fábrica, sabe-se que 60 peças, das 2 000 produzidas pela máquina M, apresentam\
        algum tipo de defeito, enquanto que 120 peças, das 3 000 produzidas pela máquina N, também\
        apresentam defeitos. Um trabalhador da fábrica escolhe ao acaso uma peça, e esta é defeituosa.",
        pergunta: "Nessas condições, qual a probabilidade de que a peça defeituosa escolhida tenha sido produzida pela máquina M?",
        opcoes: ["\\[\\frac{3}{100} \\]", "\\[\\frac{1}{25} \\]", "\\[\\frac{1}{3} \\]", "\\[\\frac{3}{7} \\]", "\\[\\frac{2}{3} \\]",],
        correta: "\\[\\frac{1}{3} \\]"
    },
    {//q5
        id: "probabilidade-q5",
        informacoes: "(ENEM 2010) O diretor de um colégio leu numa revista que os pés das mulheres estavam aumentando. Há\
        alguns anos, a média do tamanho dos calçados das mulheres era de 35,5 e, hoje, é de 37,0.\
        Embora não fosse uma informação científica, ele ficou curioso e fez uma pesquisa com as\
        funcionárias do seu colégio, obtendo o quadro a seguir:",
        img: "../../imagens/Probabilidade/probabilidade-q5.png",
        pergunta: "Escolhendo uma funcionária ao acaso e sabendo que ela tem calçado maior que 36,0, a probabilidade de ela calçar 38,0 é",
        opcoes: ["\\[\\frac{1}{3}\\]", "\\[\\frac{1}{5}\\]", "\\[\\frac{2}{5}\\]", "\\[\\frac{5}{7}\\]", "\\[\\frac{5}{14}\\]"],
        correta: "\\[\\frac{5}{7}\\]"
    },
    {//q7
        id: "probabilidade-q7",
        informacoes: "(ENEM 2010) Um experimento foi conduzido com o objetivo de avaliar\
        o poder germinativo de duas culturas de cebola, conforme a tabela.",
        img: "../../imagens/Probabilidade/probabilidade-q7.png",
        pergunta: "Desejando-se fazer uma avaliação do poder germinativo de uma das culturas de cebola, \
        uma amostra foi retirada ao acaso. Sabendo-se que a amostra escolhida germinou, a probabilidade de essa amostra pertencer à Cultura A é de",
        opcoes: ["\\[\\frac{8}{27}\\]", "\\[\\frac{19}{27}\\]", "\\[\\frac{381}{773}\\]", "\\[\\frac{392}{773}\\]", "\\[\\frac{392}{800}\\]"],
        correta: "\\[\\frac{392}{773}\\]"
    },
    {//q9
        id: "probabilidade-q9",
        informacoes: "(ENEM 2011) Todo o país passa pela primeira fase de campanha de vacinação contra a gripe suína (H1N1). Segundo um médico infectologista do Instituto Emílio Ribas, de São Paulo, a\
        imunização 'deve mudar', no país, a história da epidemia. Com a vacina, de acordo com ele, o Brasil tem a chance de barrar uma tendência do\
        crescimento da doença, que já matou 17 mil no mundo. A tabela apresenta dados específicos de um único posto de vacinação.",
        img: "../../imagens/Probabilidade/probabilidade-q9.png",
        pergunta: "Escolhendo-se aleatoriamente uma pessoa atendida nesse posto de vacinação, a probabilidade de ela ser portadora de doença crônica é",
        opcoes: ["8%", "9%", "11%", "12%", "22%"],
        correta: "11%"
    },
    {//q10
        id: "probabilidade-q10",
        informacoes: "(ENEM 2011) Rafael mora no Centro de uma cidade e decidiu se mudar, por recomendações médicas, para\
        uma das regiões: Rural, Comercial, Residencial Urbano ou Residencial Suburbano. A principal\
        recomendação médica foi com as temperaturas das 'ilhas de calor' da região, que deveriam ser\
        inferiores a 31°C. Tais temperaturas são apresentadas no gráfico:",
        img: "../../imagens/Probabilidade/probabilidade-q10.png",
        pergunta: "Escolhendo, aleatoriamente, uma das outras regiões para morar, a probabilidade de ele\
        escolher uma região que seja adequada às recomendações médicas é",
        opcoes: ["\\[\\frac{1}{5}\\]", "\\[\\frac{1}{4}\\]", "\\[\\frac{2}{5}\\]", "\\[\\frac{3}{5}\\]", "\\[\\frac{3}{4}\\]",],
        correta: "\\[\\frac{3}{4}\\]"
    },
    {//q12
        id: "probabilidade-q12",
        informacoes: "(ENEM 2012) Uma coleta de dados em mais de 5 mil sites da internet apresentou os conteúdos de interesse\
        de cada faixa etária. Na tabela a seguir estão os dados obtidos para a faixa etária de 0 a 17 anos. \n\
        * Serviços web: aplicativos on-line, emoticons, mensagens para redes socias, entre outros.\n\
        ** Sites sobre vestibular, ENEM, páginas com material de pesquisa escolar.\n\
        Considere que esses dados refletem os interesses dos brasileiros desta faixa etária.",
        img: "../../imagens/Probabilidade/probabilidade-q12.png",
        pergunta: "Selecionando, ao acaso, uma pessoa desta faixa etária, a probabilidade de que ela não tenha preferência por horóscopo é",
        opcoes: ["0,09", "0,10", "0,11", "0,79", "0,91"],
        correta: "0,91"
    },
    {//q13
        id: "probabilidade-q13",
        informacoes: "(ENEM 2013) Uma fábrica possui duas máquinas que produzem o mesmo tipo de peça. Diariamente a\
        máquina M produz 2 000 peças e a máquina N produz 3 000 peças. Segundo o controle de qualidade da fábrica, sabe-se que 60 peças, das 2\
        000 produzidas pela máquina M, apresentam algum tipo de defeito, enquanto que 120 peças, das 3 000 produzidas pela máquina N, também\
        apresentam defeitos. Um trabalhador da fábrica escolhe ao acaso uma peça, e esta é defeituosa.",
        pergunta: "Nessas condições, qual a probabilidade de que a peça defeituosa escolhida tenha sido produzida pela máquina M?",
        opcoes: ["\\[\\frac{3}{100}\\]", "\\[\\frac{1}{25}\\]", "\\[\\frac{1}{3}\\]", "\\[\\frac{3}{7}\\]", "\\[\\frac{2}{3}\\]"],
        correta: "\\[\\frac{1}{3}\\]"
    },
    {//q14
        id: "probabilidade-q14",
        informacoes: "(ENEM 2014) A probabilidade de um empregado permanecer em uma dada empresa particular por 10 anos ou mais é de 1/6.\
        Um homem e uma mulher começam a trabalhar nessa companhia no mesmo dia. Suponha que não haja nenhuma relação entre o trabalho dele\
        e o dela, de modo que seus tempos de permanência na firma são independentes entre si.",
        pergunta: "A probabilidade de ambos, homem e mulher, permanecerem nessa empresa por menos de 10 anos é de",
        opcoes: ["\\[\\frac{60}{36}\\]", "\\[\\frac{25}{36}\\]", "\\[\\frac{24}{36}\\]", "\\[\\frac{12}{36}\\]", "\\[\\frac{1}{36}\\]"],
        correta: "\\[\\frac{25}{36}\\]"
    },
    {//q17
        id: "probabilidade-q17",
        informacoes: "(ENEM 2014) O psicólogo de uma empresa aplica um teste para analisar a aptidão de um candidato a\
        determinado cargo. O teste consiste em uma série de perguntas cujas respostas devem ser verdadeiro ou falso e termina quando o\
        psicólogo fizer a décima pergunta ou quando o candidato der a segunda resposta errada. Com\
        base em testes anteriores, o psicólogo sabe que a probabilidade de o candidato errar uma resposta é 0,20.",
        pergunta: "A probabilidade de o teste terminar na quinta pergunta é",
        opcoes: ["0,02048.", "0,08192.", "0,24000.", "0,40960.", "0,49152."],
        correta: "0,08192."
    },
    {//q18
        id: "probabilidade-q18",
        informacoes: "(ENEM 2015) Em uma central de atendimento, cem pessoas receberam senhas numeradas de 1 até 100. Umadas senhas é sorteada ao acaso.",
        pergunta: "Qual é a probabilidade de a senha sorteada ser um número de 1 a 20?",
        opcoes: ["\\[\\frac{1}{100} \\]", "\\[\\frac{19}{100} \\]", "\\[\\frac{20}{100} \\]", "\\[\\frac{21}{100} \\]", "\\[\\frac{80}{100} \\]"],
        correta: "\\[\\frac{20}{100} \\]"
    },
    


];
//atualmente a 13 questões
// q1 a q5, q7, q9 a q10, q12 a q14, q17 e q18,
//

// Sorteio das perguntas
const quizatual = "probabilidade";
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