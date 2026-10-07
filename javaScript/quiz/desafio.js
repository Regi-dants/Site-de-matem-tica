const perguntas = [
    {
        id: "geometria-plana-q28",
        informacoes: "(ENEM 2019) uma administração municipal encomendou a pintura de dez placas de sinalização para colocar\
        em seu pátio de estacionamento. O profissional contratado para o serviço inicial\
        pintará o fundo de dez placas e cobrará um valor de acordo com a área total dessas placas. O\
        formato de cada placa é um círculo de diâmetro d = 40 cm, que tangencia lados de um retângulo,\
        sendo que o comprimento total da placa é h = 60 cm, conforme lustrado na figura. Use 3,14 como\
        aproximação para π.",
        img: "../imagens/Geometria-plana/Q28-geometria-plana.png",
        pergunta: "Qual é a soma das medidas das áreas, em centímetros quadrados, das dez placas?",
        opcoes: ["16 628cm²", "22 280cm²", "28 560cm²", "41 120cm²", "66 240cm²"],
        correta: "22 280cm²",
        explicacao: "Observando a Imagem podemos perceber que temos um quadrado e a metade de um circulo, veja na imagem a seguir <br> \
        <img src='../imagens/Geometria-plana/respostas/q28.png' class='imagem-resolucao'><br> \
        Iremos ultilizar as seguintes formulas: <br> Quadrado: \\(A = L^2\\) <br> Circulo: \\(A = \\pi \\times r^2\\) Obs: apos calcularmos a area do circulo dividiremos por '2' para achar sua metade! \
        1º passo: achar a area do quadrado, vamos chamar de 'A1':  <br>\
        \\[A1 = 40^2\\]  \\[A1 = 1600cm\\]      \
        2º passo:Achar a metade da area do circulo, iremos chamar de 'A2':\
        como o raio ('r') é metade do Diâmetro ('d') logo o raio será 20cm.\
        \\[A2 = 3,14 \\times 20^2\\]     \
        \\[A2 = 3,14 \\times 400\\]     \
        \\[A2 = 1256cm^2\\]\
        \\[A2 = 628\\]         \
        3º passo: somamos os resultados e apos isso multiplicamos pelo numero de placas, que de acordo com o enunciado são '10' placas \
        \\[A = 1600 + 628\\] \
        \\[A = 2228\\] agora multiplicamos: \\[A = 2228 \\times 10\\] \
        \\[A = 22 280\\] \
        Resposta: 22 280cm²  \
        "},
    { //q1
        id: "pa-pg-1",
        informacoes: "(ENEM 2021) O preço médio cobrado por um pintor para executar um serviço consiste em uma taxa fixa de R$ 25,00 mais uma quantia proporcional à área pintada. O quadro apresenta os valores cobrados por ele em trabalhos recentes.",
        img: "../imagens/pa-pg/q1-pa.png",
        pergunta: "Qual o preço cobrado para realizar um serviço de pintura de uma área de 150 m2?",
        opcoes: ["R$300,00", "R$325,00", "R$400,00", "R$1050,00", "R$3750,00"],
        correta: "R$325,00"
    },
    { //q3
        id: "probabilidade-q1",
        informacoes: "(ENEM 2014) A probabilidade de um empregado permanecer em uma dada empresa particular por 10 anos ou mais é de \\(\\frac{1}{6}\\).  \
    &nbsp;Um homem e uma mulher começam a trabalhar nessa companhia no mesmo dia. Suponha que não haja nenhuma relação entre o trabalho dele e o dela, \
    de modo que seus tempos de permanência na firma são independentes entre si.",
        pergunta: "A probabilidade de ambos, homem e mulher, permanecerem nessa empresa por menos de 10 anos é de",
        opcoes: ["\\[\\frac{60}{36} \\]", "\\[\\frac{25}{36} \\]", "\\[\\frac{24}{36} \\]", "\\[\\frac{12}{36} \\]", "\\[\\frac{1}{36} \\]"],
        correta: "\\[\\frac{25}{36} \\]"
    },
    { //q3
        informacoes: "(ENEM 2014) A probabilidade de um empregado permanecer em uma dada empresa particular por 10 anos ou mais é de \\(\\frac{1}{6}\\).  \
    &nbsp;Um homem e uma mulher começam a trabalhar nessa companhia no mesmo dia. Suponha que não haja nenhuma relação entre o trabalho dele e o dela, \
    de modo que seus tempos de permanência na firma são independentes entre si.",
        pergunta: "A probabilidade de ambos, homem e mulher, permanecerem nessa empresa por menos de 10 anos é de",
        opcoes: ["teste.png", "teste2.png", "teste3.png", "teste4.png", "teste.png"],
        correta: "teste.png"
    },
]

const quizatual = "desafio-diario-tipe";



const sorteadas = [1, 2, 0];


console.log(quizatual);



function salvarDesafio(diario) {

    // se ainda não existe Desafio
    if (teste3.Desafio == null) {
        teste3.Desafio = {
            questoes: []
        };
    }

    diario.forEach((desafio) => {
        teste3.Desafio.questoes.push(desafio);
    });

    // salvar
    localStorage.setItem(
        "teste3",
        JSON.stringify(teste3)
    );
}

function carregarDesafio() {
    console.log(MathJax);
    console.log(typeof MathJax.typesetPromise);
    console.log("aqui");
    console.log("Desafio:", teste3.Desafio);
    console.log("Questões:", teste3.Desafio?.questoes);

    if (teste3.Desafio != null && teste3.Desafio.questoes.length > 0) {

        let desafio = teste3.Desafio;

        desafio.questoes.forEach((questao) => {
            const resultado = perguntas.find((q) => {
                return q.id === questao.questao;
            });

            const indice = perguntas.findIndex((q) => {
                return q.id === resultado.id;
            });

            const opcoes = document.querySelectorAll(`input[name="q${indice}"]`);

            const respondida = Array.from(opcoes).find((input) => {
                return input.value === questao.respondeu;
            });

            if (respondida) {
                respondida.checked = true;
            }

            console.log("input encontrado:", respondida);
            console.log("indice:", indice);
            console.log("resposta salva:", questao.respondeu);
            console.log("resultado:", resultado);
        });
        corrigir(false);

    }

}



