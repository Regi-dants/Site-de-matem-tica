let verificacao = localStorage.getItem("teste3");

let teste3;
if (verificacao == null) {

    teste3 = {
        Completas: [],
        Acessos: [],
        Desafio: {
            questoes: []
        },

        Conquistas: {
            Completas: [],
            progresso: {},
            pop_up: [],
        },

        primeiroAcesso: true
    };

    localStorage.setItem("teste3", JSON.stringify(teste3));

} else {

    teste3 = JSON.parse(verificacao);
    if (!Array.isArray(teste3.Conquistas.pop_up)) {
        teste3.Conquistas.pop_up = [];
    }
}


// -------------------------
// SALVAR QUESTÃO
// -------------------------

function salvarquestao(question) {

    if (!teste3.Completas.includes(question)) {

        teste3.Completas.push(question);

        localStorage.setItem(
            "teste3",
            JSON.stringify(teste3)
        );
    }
}


// -------------------------
// SALVAR CONQUISTA
// -------------------------

function salvarconquista(id) {
    if (!teste3.Conquistas.Completas.includes(id)) {
        teste3.Conquistas.Completas.push(id);

        teste3.Conquistas.pop_up.push(id);

        localStorage.setItem("teste3", JSON.stringify(teste3));
    }
}




// -------------------------
// SALVAR PROGRESSO
// -------------------------

function salvarprogresso(id, progresso) {

    teste3.Conquistas.progresso[id] = progresso;

    localStorage.setItem(
        "teste3",
        JSON.stringify(teste3)
    );
}




// -------------------------
// MOSTRAR
// -------------------------

function mostrar() {

    let ver = document.getElementById("teste");

    ver.innerHTML = `
        <h2>Completas: ${teste3.Completas}</h2>
        <h2>Completas: ${teste3.Completas.length}</h2>
        <h2>Conquistas: ${teste3.Conquistas.Completas}</h2>
        <h2>Acessos: ${teste3.Acessos}</h2>
        <h2>Progresso: ${JSON.stringify(teste3.Conquistas.progresso)}</h2>
        <h2>Primeiro acesso: ${teste3.primeiroAcesso}</h2>
    `;
}
