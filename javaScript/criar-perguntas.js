// DIV do HTML
const quiz = document.querySelector(".question");


// Cria as perguntas na tela
for (let i = 0; i < sorteadas.length; i++) {
    
    let indice = sorteadas[i];
    
    
    
    // pega a pergunta sorteada
    let q = perguntas[indice];
    let info = "";
    let imagem = "";
    let respostas = "";
    
    
    
    q.opcoes.forEach((opcao) => {
        if (opcao.includes(".png")) {
            respostas += `
            <label>
            <input type="radio"
            name="q${indice}"
            value="${opcao}"><img src="${opcao}" width="100">
            </label>
            `;
        }
        else {
            respostas += `
            <label>
            <input type="radio"
            name="q${indice}"
            value="${opcao}">
            ${opcao}
            </label>
            `;
        }
    });
    
    if (q.informacoes) {
        info = `<h3>${q.informacoes}</h3>`;
    }
    
    if (q.img) {
        imagem = `<img src="${q.img}" width="400">`;
    };
    
    quiz.innerHTML += `
    <div class="question">
    <h3>${info}</h3>
    ${imagem}
    <h3>${q.pergunta}</h3>
    
    <div class="respostas">
    ${respostas}
    </div>
    
    <div class="feedback"></div>
    <div class="correcao"></div>
    </div>
    `}
    carregarDesafio();