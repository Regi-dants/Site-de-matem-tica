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
            progresso: {}
        },

        primeiroAcesso: true
    };

    localStorage.setItem("teste3", JSON.stringify(teste3));

} else {

    teste3 = JSON.parse(verificacao);
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

function salvarconquista(conquista) {

    if (!teste3.Conquistas.Completas.includes(conquista)) {

        teste3.Conquistas.Completas.push(conquista);

        localStorage.setItem(
            "teste3",
            JSON.stringify(teste3)
        );
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
