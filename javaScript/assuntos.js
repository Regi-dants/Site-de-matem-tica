const assuntos = [
    {
        titulo: "Geometria Plana",
        descricao: "Aprenda sobre figuras planas, áreas, perímetros e ângulos.",
        link: "../html/assuntos/assunto-Geometria-plana.html"
    },
    {
        titulo: "Geometria Espacial",
        descricao: "Estude sólidos geométricos, áreas, volumes e suas propriedades.",
        link: "#"
    },
    
    {
        titulo: "Geometria Analítica",
        descricao: "Aprenda a trabalhar com pontos, retas, distâncias e coordenadas.",
        link: "#"
    },
    {
        titulo: "Progressão Aritmética",
        descricao: "Aprenda a identificar padrões, encontrar termos e calcular somas de uma PA.",
        link: "../html/assuntos/assunto-PA.html"
    },
    {
        titulo: "Progressão Geométrica",
        descricao: "Aprenda sobre sequências, razão e cálculo dos termos de uma PG.",
        link: "../html/assuntos/assunto-PG.html"
    },
    {
        titulo: "Probabilidade",
        descricao: "Aprenda a calcular as chances de ocorrência de diferentes eventos.",
        link: "../html/assuntos/assunto-probabilidade.html"
    },
    {
        titulo: "Trigonometria",
        descricao: "Aprenda seno, cosseno, tangente e suas aplicações nos triângulos.",
        link: "#"
    },
    {
        titulo: "Razão e Proporção",
        descricao: "Aprenda a comparar grandezas e resolver problemas de proporção.",
        link: "#"
    }
];
const container = document.getElementById("add-assuntos");

for (const assunto of assuntos) {

    container.innerHTML += `
        <nav class="criador-assuntos">
            <h2>${assunto.titulo}</h2>
            <p>${assunto.descricao}</p>
            <a onclick="verificarConquistas({ tipoEvento: 'acesso',assunto:'${assunto.titulo}' });" href="${assunto.link}"> Acessar assunto </a>
        </nav>
    `;

}