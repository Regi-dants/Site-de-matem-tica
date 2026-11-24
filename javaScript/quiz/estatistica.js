const perguntas = [
    {//q1
    informacoes: "(ENEM 2022) Ao escutar a notícia de que um filme recém-\
    lançado arrecadou, no primeiro mês de\
    lançamento, R$ 1,35 bilhão em bilheteria, um\
    estudante escreveu corretamente o número que\
    representa essa quantia, com todos os seus\
    algarismos.",
    pergunta: "O número escrito pelo estudante foi",
    opcoes: ["135 000,00", "1 350 000,00", "13 500 000,00", "135 000 000,00", "1 350 000 000,00"],
    correta: "1 350 000 000,00",
    explicacao: ""
    },
    {//q2
    informacoes: "(ENEM 2022) Em uma competição de velocidade, diz que há\
    uma ultrapassagem quando um veículo que está\
    atrás de outro passa à sua frente, com ambos se\
    deslocando no mesmo sentido. Considere uma\
    competição automobilística entre cinco carros\
    em uma pista com 100 m de comprimento, onde\
    todos largam no mesmo instante e da mesma\
    linha. O gráfico mostra a variação da distância\
    percorrida por cada veículo, em função do\
    tempo, durante toda a competição.",
    img: "../../imagens/estatistica/estatistica-q2.png",
    pergunta: "Qual o número de ultrapassagens, após o início\
    da competição, efetuadas pelo veículo que\
    chegou em último lugar?",
    opcoes: ["0", "1", "2", "3", "4"],
    correta: "0",
    explicacao: ""
    },
    {//q3
    informacoes: "(ENEM 2022) Em uma universidade, atuam professores que\
    estão enquadrados funcionalmente pela sua\
    maior titulação: mestre ou doutor. Nela há,\
    atualmente, 60 mestres e 40 doutores. Os\
    salários mensais dos professores mestres e dos\
    doutores são, respectivamente, R$ 8 000,00 e R$\
    12 000,00.<br>\
    A diretoria da instituição pretende\
    proporcionar um aumento salarial diferenciado\
    para o ano seguinte, de tal forma que o salário\
    médio mensal dos professores dessa instituição\
    não ultrapasse R$ 12 240,00. A universidade já\
    estabeleceu que o aumento salarial será de 25%\
    para os mestres e precisa ainda definir o\
    percentual de reajuste para os doutores.",
    pergunta: "Mantido o número atual de professores com suas\
    atuais titulações, o aumento salarial, em\
    porcentagem, a ser concedido aos doutores\
    deverá ser de, no máximo.",
    opcoes: ["14,4", "20,7", "22,0", "30,0", "37,5"],
    correta: "30,0",
    explicacao: "Primeiramente para esta questão teremos que achar aumento máximo concedido\
    para os doutores em valor percentual, então vamos começar achando o “teto salarial”, \
    ou seja, o limite máximo que a instituição irá pagar para isso temos que descobrir qual \
    o total de professores, para isso somamos os 40 doutores e os 60 mestres:\
    \\[40 + 60 = 100\\]\
    agora multiplicamos pelo máximo que a instituição pretende pagar no máximo que é 12.240:\
    \\[ 100 \\times 12.240 = 1.224.000 \\]\
    agora para acharmos quanto foi o aumento dos doutores, primeiro temos que tirar do 1.224.000 \
    o valor que é destinado aos mestres, então pegamos o salário anterior e multiplicamos por 25% \
    ou 125% já que queremos o valor total do aumento:\
    \\[ 8.000 \\times 1,25 = 10.000 \\]\
    e como temos 60 mestres, multiplicamos por 60 e subtraímos o 1.224.000 pelo resultado da multiplicação:\
    \\[ 10.000 \\times 60 = 600.000 \\]\
    \\[ 1.224.000 - 600.000 = 624.000 \\]\
    Agora temos o valor total destinado somente para os doutores, para sabermos qual o salário atual \
    depois do aumento devemos dividir pela quantidade de doutores:\
    \\[ 624.000 / 40 = 15.600 \\]\
    e para descobrirmos o valor percentual, subtraímos o 15.600 pelo salário antigo e depois dividimos \
    pelo salário antigo novamente.\
    \\[ \\frac{15.600 - 12.000}{ 12.000} = 3.600\\]\
    \\[ \\frac {3.600} {12.000} = 0,30\\]\
    passando para porcentagem:\
    \\[ 0,30 \\times 100 = 30%\\]\
    <p style=' color:green;'>Resposta = 30%</p>\
    "
    },
    {//q4
    informacoes: "(ENEM 2022) Uma das informações que pode auxiliar no\
    dimensionamento do número de pediatras que\
    devem atender em uma Unidade Básica de Saúde\
    (UBS) é o número que representa a mediana da\
    quantidade de crianças por família existente na\
    região sob sua responsabilidade. O quadro\
    mostra a distribuição das frequências do\
    número de crianças por família na região de\
    responsabilidade de uma UBS.",
    img: "../../imagens/estatistica/estatistica-q4.png",
    pergunta: "O número que representa a mediana da\
    quantidade de crianças por família nessa região\
    é",
    opcoes: ["1,0", "1,5", "1,9", "2,1", "2,5"],
    correta: "1,5",
    explicacao: "Esta questão nós temos que achar a mediana da quantidade de crianças por família, para acharmos a mediana devemos saber qual o soma das frequências  da quantidade de crianças:\
    \\[ 100 + 400 + 200 + 150 + 100 + 50 = 1000 \\]\
    Como o número é par devemos descobrir quais são os dois termos do meio, somá-los e dividir por 2, então vamos analisar, os valores que queremos achar estão na posição 500 e 501,\
    logo quando o número de crianças por família é ‘0’ vai até a posição 100, e quando é ‘1’ \
    vai até a posição 500 e quando é ‘2’ vai até 600, achamos os dois valores que são ‘1’ e ‘2’,seguindo:\
    \\[ 1 + 2 = 3 \\]\
    \\[ 3/2 = 1,5 \\]\
    <p style=' color:green;'>Resposta =1,5</p>\
"
    },
    {//q5
    informacoes: "(ENEM 2022) Uma instituição de ensino superior ofereceu\
    vagas em um processo seletivo de acesso a Seus\
    cursos. Finalizadas as inscrições, foi divulgada a\
    relação do número de candidatos por vaga em\
    cada um dos cursos oferecidos. Esses dados são\
    apresentados no quadro.",
    img: "../../imagens/estatistica/estatistica-q5.png",
    pergunta: "Qual foi o número total de candidatos inscritos nesse processo seletivo?",
    opcoes: ["200", "400", "1 200", "1 235", "7 200"],
    correta: "1 235",
    explicacao: "Para fazermos esta questão devemos multiplicar o número de vagas oferecidas \
    pelo número de candidatos por vaga ficando então:\
    \\[  Administração = 30 \\times 6 = 180  \\]\
    \\[  Ciências-contábeis = 40 \\times 6 = 240 \\]\
    \\[  Engenharia-elétrica = 50 \\times 7 = 450 \\]\
    \\[  história = 30 \\times 8 = 240 \\]\
    \\[  letras = 25 \\times 4 = 100 \\]\
    \\[  pedagogia = 25 \\times 5 = 125 \\]\
    agora somamos tudo:\
    \\[ 180 + 240 + 450 + 240 + 100 + 125 = 1.235 \\]\
    <p style=' color:green;'>Resposta = 1.235</p>\
"
    },
    {//q6
    informacoes: "(ENEM 2022) Nos cinco jogos finais da última temporada, com\
    uma média de 18 pontos por jogo, um jogador foi\
    eleito O melhor do campeonato de basquete. Na\
    atual temporada, cinco jogadores têm a chance\
    de igualar ou melhorar essa média. No quadro\
    estão registradas as pontuações desses cinco\
    jogadores nos quatro primeiros jogos das finais\
    deste ano.",
    img: "../../imagens/estatistica/estatistica-q6.png",
    pergunta: "O quinto e último jogo será realizado para\
    decidir a equipe campeã e qual o melhor jogador\
    da temporada. <br> \
    O jogador que precisa fazer a menor quantidade\
    de pontos no quinto jogo, para igualar a média\
    de pontos do melhor jogador da temporada\
    passada, é o",
    opcoes: ["I", "II", "III", "IV", "V"],
    correta: "I",
    explicacao: "primeiramente, como são 5 jogos e a média a ser alcançada é de 18 pontos por\
    partida, qualquer jogador precisa somar 90 pontos no total pois:\
    \\[total = 5 \\times 18 = 90 \\]\
    Agora somamos os pontos de cada atleta registrados na tabela da prova: \
    \\[ I = 12 + 25 + 20 + 20 = 77\\]\
    \\[ II = 12 + 12 + 27 + 20 = 71\\]\
    \\[ III = 14 + 14 + 17 + 26 = 71 \\]\
    \\[ IV = 15 + 18 + 21 + 21 = 75 \\]\
    \\[ V = 22 + 15 + 23 + 15 = 75 \\]\
    por fim Subtraindo o acumulado da meta de 90 pontos, o Jogador I é o que \
    já possui a maior pontuação e, portanto, precisa marcar menos pontos na última partida:\
    \\[ 90 - 77 = 13 \\]\
    <p style=' color:green;'>Resposta = 13</p>\
    "
    },
    {//q7
    informacoes: "(ENEM 2022) A esperança de vida ao nascer é o número médio\
    de anos que um indivíduo tende a viver a partir\
    de seu nascimento, considerando dados da\
    população. No Brasil, esse número vem\
    aumentando consideravelmente, como mostra o\
    gráfico.",
    img: "../../imagens/estatistica/estatistica-q7.png",
    pergunta: "Pode-se observar que a esperança de vida ao\
    nascer em 2012 foi exatamente a média das\
    registradas nos anos de 2011 e 2013. Suponha\
    que esse fato também ocorreu com a esperança de vida ao nascer em 2013, em relação às\
    esperanças de vida de 2012 e de 2014.<br>\
    Caso a suposição feita tenha sido confirmada, a\
    esperança de vida ao nascer no Brasil no ano de\
    2014 terá sido, em ano, igual a",
    opcoes: ["74,23", "74,51", "75,07", "75,23", "78,49"],
    correta: "74,51",
    explicacao: ""
    },
    {//q8
    informacoes: "Coloquei uma pizza no forno às 8 h, momento em\
    que o cachorro saiu para o quintal. Após 15\
    minutos, o telefone tocou, atendi e fiquei 4\
    minutos conversando. Ah, lembrei que, 5\
    minutos antes de o telefone tocar, meu vizinho\
    tocou a campainha, eu atendi e ele disse que iria\
    pegar uma encomenda no correio. Eu pedi para\
    que ele pegasse a minha também. Nossa\
    conversa durou 3 minutos e, após 30 minutos,\
    ele voltou com a minha encomenda. Eu abria\
    porta para atendê-lo, quando o cachorro\
    aproveitou para entrar em casa. Nossa conversa\
    durou apenas 2 minutos, mas a pizza não\
    queimou, porque eu já tinha tirado do forno 15\
    minutos antes de me despedir do vizinho.\
    Os quadrinhos, dispostos em ordem aleatória,\
    representam momentos da situação descrita e\
    formam a base do raciocínio usado para\
    determinar o tempo que a pizza ficou no forno.",
    img: "../../imagens/estatistica/estatistica-q8.png",
    pergunta: "A ordem cronológica das ações relatadas no\
    texto, relativas à medição do tempo\
    transcorrido, é representada pela sequência de\
    quadrinhos",
    opcoes: ["2;3;4;5;1.", "2;4;3;5;1.", "5;3;4;2;1.", "5;4;3;1;2.", "5;4;3;2;1."],
    correta: "5;4;3;2;1.",
    explicacao: ""
    },
    {//q9
    informacoes: "Cinco atletas que participarão de uma maratona\
    treinam frequentemente. As distâncias\
    percorridas por eles no último treino estão\
    registradas, em quilômetro, no quadro.",
    img: "../../imagens/estatistica/estatistica-q9.png",
    pergunta: "Um sexto atleta, que também participará da\
    maratona, pretende realizar um treino\
    percorrendo uma distância igual à média das\
    distâncias percorridas pelos cinco atletas no\
    último treino por eles realizado.<br>\
    A distância, em quilômetro, que esse sexto atleta\
    deverá percorrer em seu treino é",
    opcoes: ["41,8", "42,4", "42,6", "42,8", "43,4"],
    correta: "42,6",
    explicacao: "Na questão temos atualmente 1 distância de cada atleta e ao todo temos 5 atletas\
     que tirando a média da igual à distância do sexto atleta. Então primeiro devemos tirar\
      a média aritmética da distância dos 5 atletas, ficando:\
    \\[42,8 + 41,6 + 41,8 + 43,4 + 43,4 = 213 \\]\
    \\[213/ 5 = 42,6 \\]\
    Então o sexto atleta percorreu 42,6km\
    <p style=' color:green;'>Resposta = 42,6</p>\
"
    },
    {//q11
    informacoes: "O gerente de uma concessionária apresentou a\
    seguinte tabela em uma reunião de dirigentes.\
    Sabe-se que ao final da reunião, a fim de elaborar\
    metas e planos para o próximo ano, o\
    administrador avaliará as vendas, com base na\
    mediana do número de automóveis vendidos no\
    período de janeiro a dezembro.",
    img: "../../imagens/estatistica/estatistica-q11.png",
    pergunta: "Qual foi a mediana dos dados apresentados?",
    opcoes: ["40,0", "42,5", "45,0", "47,5", "50,0"],
    correta: "42,5",
    explicacao: "Para descobrirmos a mediana basta nos organizamos\
    os valores do menor para o maior e ver qual fica no meio e caso\
    o número de valores seja par, somamos os dois do meio e dividimos por 2.\
    \\[20, 25, 30, 35, 35, 40, 45, 50, 55, 60, 65, 70\\]\
    \\[40 + 45 = 85\\]\
    \\[85/2 = 42,5 \\]\
    <p style=' color:green;'>Resposta =42,5</p>\
    "
    },
    
]

const quizatual = "estatistica";

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