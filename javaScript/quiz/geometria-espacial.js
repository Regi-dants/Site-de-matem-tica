const perguntas = [
    {
        id:"geometria-espacial-q1",
        informacoes: "Na figura estão destacadas duas trajetórias sobre a superfície do globo terrestre, descritas\
        ao se percorrer parte dos meridianos 1, 2 e da Linha do Equador, sendo que os meridianos 1 e\
        2 estão contidos em planos perpendiculares entre si.O plano a é paralelo ao que contém a Linha do Equador.",
        img: "../../imagens/geometria-espacial/q1-geometria-espacial.png",
        pergunta: "A vista superior da projeção ortogonal sobre o plano a dessas duas trajetórias é",
        opcoes: ["../../imagens/geometria-espacial/alternativas/q1-opção-a.png", "../../imagens/geometria-espacial/alternativas/q1-opção-b.png", 
            "../../imagens/geometria-espacial/alternativas/q1-opção-c.png", "../../imagens/geometria-espacial/alternativas/q1-opção-d.png", "../../imagens/geometria-espacial/alternativas/q1-opção-e.png"],
            correta: "../../imagens/geometria-espacial/alternativas/q1-opção-e.png",
            explicacao: ""
    },
    {
        id:"geometria-espacial-q12",
        informacoes: "Uma carga de 100 contêineres, idênticos ao modelo apresentado na Figura 1, deverá ser\
        descarregada no porto de uma cidade. Para isso, uma área retangular de 10 m por 32 m foi cedida\
        para o empilhamento desses contêineres (Figura 2).",
        img: "../../imagens/geometria-espacial/q12-geometria-espacial.png",
        pergunta: "De acordo com as normas desse porto, os contêineres deverão ser empilhados de forma a\
        não sobrarem espaços nem ultrapassarem a área delimitada.\
        Após o empilhamento total da carga e atendendo\
        à norma do porto, a altura mínima a ser atingida por essa pilha de contêineres é",
        opcoes: ["12,5 m", "17,5 m", "25,0 m", "22,5 m", "32,5 m"],
        correta: "12,5 m",
        explicacao: ""
    },
    {
        id:"geometria-espacial-q17",
        informacoes: "Em uma aula de matemática, a professora propôs que os alunos construíssem um cubo a\
        partir da planificação em uma folha de papel, representada na figura a seguir.",
        img: "../../imagens/geometria-espacial/q17-geometria-espacial.png",
        pergunta: "Após a construção do cubo, apoiou-se sobre a mesa a face com a letra M.\
        As faces paralelas deste cubo são representadas pelos pares de letras",
        opcoes: ["E-N, E-M e B-R", "B-N, E-E e M-R", "E-M, B-N e E-R", "B-E, E-R e M-N", "E-N, B-M e E-R"],
        correta: "E-M, B-N e E-R",
        explicacao: ""
    },
    {
        id:"geometria-espacial-19",
        informacoes: "Uma empresa responsável por produzir arranjos de parafina recebeu uma encomenda de arranjos\
        em formato de cone reto. Porém, teve dificuldades em receber de seu fornecedor o\
        molde a ser utilizado e negociou com a pessoa que fez a encomenda o uso de arranjos na forma\
        de um prisma reto, com base quadrada de dimensões 5 cm × 5 cm.",
        img: "",
        pergunta: "Considerando que o arranjo na forma de cone utilizava um volume de 500 mL, qual deverá ser\
        a altura, em cm, desse prisma para que a empresa gaste a mesma quantidade de parafina utilizada no cone?",
        opcoes: ["8", "14", "20", "60", "200"],
        correta: "20",
        explicacao: ""
    },
    {
        id:"geometria-espacial-22",
        informacoes: "Alguns testes de preferência por bebedouros de água foram realizados com bovinos, envolvendo\
        três tipos de bebedouros, de formatos e tamanhos diferentes. <br> Os bebedouros 1 e 2 têm a\
        forma de um tronco de cone circular reto, de altura igual a 60 cm, e diâmetro da base superior\
        igual a 120 cm e 60 cm, respectivamente. O bebedouro 3 é um semicilindro, com 30 cm de\
        altura, 100 cm de comprimento e 60 cm de largura. Os três recipientes estão ilustrados na figura.",
        img: "../../imagens/geometria-espacial/q22-geometria-espacial.png",
        pergunta: "Considerando que nenhum dos recipientes tenha tampa, qual das figuras a seguir representa uma planificação para o bebedouro 3?",
        opcoes: ["../../imagens/geometria-espacial/alternativas/q22-opção-a.png", "../../imagens/geometria-espacial/alternativas/q22-opção-b.png",
        "../../imagens/geometria-espacial/alternativas/q22-opção-c.png", "../../imagens/geometria-espacial/alternativas/q22-opção-d.png", "../../imagens/geometria-espacial/alternativas/q22-opção-e.png"],
        correta: "../../imagens/geometria-espacial/alternativas/q22-opção-e.png",
        explicacao: ""
    },
    {
        id:"geometria-espacial-23",
        informacoes: "(ENEM 2010) Uma fábrica produz barras de chocolates no formato de paralelepípedos e de cubos, com o\
        mesmo volume. As arestas da barra de chocolate no formato de paralelepípedo medem 3 cm de\
        largura, 18 cm de comprimento e 4 cm de espessura.",
        img: "",
        pergunta: "Analisando as características das figuras geométricas descritas, a medida das arestas dos chocolates que têm o formato de cubo é igual a",
        opcoes: ["5 cm", "6 cm", "12 cm", "24 cm", "25 cm"],
        correta: "6 cm",
        explicacao: ""
    },
    {
        id:"geometria-espacial-29",
        informacoes: "A figura seguinte mostra um modelo de sombrinha muito usado em países orientais.",
        img: "../../imagens/geometria-espacial/q29-geometria-espacial.png",
        pergunta: "Esta figura é uma representação de uma superfície de revolução chamada de",
        opcoes: ["pirâmide", "semiesfera", "cilindro", "tronco de cone", "cone"],
        correta: "tronco de cone",
        explicacao: ""
    },
    

]



const quizatual = "geometria-espacial";

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

/*
{
    informacoes: "",
    img: ".png",
    pergunta: "",
    opcoes: ["", "", "", "", ""],
    correta: "",
    explicacao: ""
},*/