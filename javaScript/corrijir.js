function corrigir(salvar = true) {





    let acertos = 0;
    const acertos_ids = [];
    const feedbacks = document.querySelectorAll(".feedback");
    const correcoes = document.querySelectorAll(".correcao");
    let tipoquiz = quizatual
    const respostasDesafio = [];
    sorteadas.forEach((indice, posicao) => {

        let q = perguntas[indice];

        const marcada = document.querySelector(
            `input[name="q${indice}"]:checked`
        );

        const feedback = feedbacks[posicao];
        const correcao = correcoes[posicao];


        // Mostra a resolução da questão
        correcao.innerHTML = q.explicacao;
        if (salvar){
        MathJax.typesetPromise([correcao]);}
        if (marcada) {

            if (marcada.value === q.correta) {

                feedback.innerHTML = "✔ Correto!";
                acertos++;

                respostasDesafio.push({ questao: q.id, respondeu: marcada.value, acertou: true });
                if (salvar) {
                    salvarquestao(q.id);
                }

            } else {

                feedback.innerHTML =
                    `✘ Incorreto! A correta é ${q.correta}`;
                respostasDesafio.push({ questao: q.id, respondeu: marcada.value, acertou: false });
            }

        } else {

            feedback.innerHTML =
                `⚠ Não respondida! A correta é ${q.correta}`;
            respostasDesafio.push({ questao: q.id, respondeu: null, acertou: false });
        }
    });
if (salvar && tipoquiz === "desafio-diario-tipe") {
    salvarDesafio(respostasDesafio);
}

    document.getElementById("btn-corrijir").style.display = "none";

    document.getElementById("resultado").innerHTML =
        `Você acertou ${acertos} de ${sorteadas.length} questão(ões).`;

    if (acertos === sorteadas.length && salvar) {
        console.log("EVENTO GABARITO ENVIADO");

        verificarConquistas({
            tipoEvento: "gabarito",
            quiz: tipoquiz,
            corretas: acertos,
            total: sorteadas.length
        });
        verificarConquistas({
            tipoEvento: "acertos",
            quiz: tipoquiz,
            corretas: acertos,
            total: sorteadas.length
        });
        verificarQuizcompleto(quizatual)
    }
    else if(salvar) {
        verificarConquistas({
            tipoEvento: "acertos",
            quiz: tipoquiz,
            corretas: acertos,
            total: sorteadas.length
        });
        verificarQuizcompleto(quizatual)
    }
}