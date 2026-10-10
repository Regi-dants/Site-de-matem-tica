
const assuntos = [
    {
        titulo: "Geometria <br>Plana",
        logo: "bi-triangle-fill",
        link: "perguntas/Geometria-plana.html"
    },
    {
        titulo: "Geometria <br>Espacial",
        logo: "bi-box",
        link: "perguntas/geometria-espacial.html"
    },
    {
        titulo: "Estatística",
        logo: "bi-bar-chart-line-fill",
        link: "#"
    },
    {
        titulo: "Porcentagem",
        logo: "bi-bar-chart-line-fill",
        link: "perguntas/porcentagem.html"
    },
    {
        titulo: "Probabilidade",
        logo: "bi-dice-5-fill",
        link: "perguntas/Probabilidade.html"
    },
    {
        titulo: "Razão e <br>Proporção",
        logo: "bi-pie-chart-fill",
        link: "perguntas/razão-e-proporção.html"
    },
    {
        titulo: "PA e <br>PG",
        logo: "bi-pie-chart-fill",
        link: "perguntas/pa-e-pg.html"
    },
    {
        titulo: "Trigonometria",
        logo: "bi-compass",
        link: "#"
    },
    {
        titulo: "Geometria <br>Analitica",
        logo: "bi-bounding-box-circles",
        link: "#"
    },

];

const container = document.getElementById("containerQuiz");

for (const assunto of assuntos) {

    container.innerHTML += `
        <nav class="quizes-assuntos">
        <div id="logo">
        <i id="formas"  class="bi ${assunto.logo}"></i>
        <h2>${assunto.titulo}</h2>
        </div>
            <a href="${assunto.link}">Iniciar quiz <i class="bi bi-chevron-compact-right"></i></a>
        </nav>
    `;
}
