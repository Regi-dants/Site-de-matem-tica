
const assuntos = [
    {
        titulo: "Geometria <br>Plana",
        logo: "bi-triangle-fill",
        link: "perguntas/Geometria-plana.html"
    },
    {
        titulo: "Geometria <br>Espacial",
        logo: "bi-box",
        link: "perguntas/Geometria-espacial.html"
    },
    {
        titulo: "Estatística",
        logo: "bi-bar-chart-line-fill",
        link: "perguntas/estatistica.html"
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
        titulo: "Progreções",
        logo: "bi-pie-chart-fill",
        link: "perguntas/pa-e-pg.html"
    },
    {
        titulo: "Álgebra e Aritmética",
        logo: "bi-superscript",
        link: "perguntas/algebra.html"
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
