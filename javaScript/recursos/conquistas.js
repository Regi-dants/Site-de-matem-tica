const Conquistas = [
    {
        id: "1-passos",
        nome: "Primeiros passos",
        tipo: "geral",
        objetivo: 1,
        regra: "acesso",
        detalhes: "Acesse qualquer assunto pela primeira vez",
        emblema: "../imagens/emblemas/primeiros-passos.png"
    },
    {
        id: "o-comeco",
        nome: "O começo",
        tipo: "geral",
        objetivo: 1,
        regra: "primeiro-acesso",
        detalhes: "Seja bem Vindo ao site Math-Tec!",
        emblema: "../imagens/emblemas/o-comeco.png"
    },

    {
        id: "primeiro-gabarito",
        nome: "Primeiro Gabarito",
        tipo: "geral",
        objetivo: 1,
        regra: "gabarito",
        detalhes: "Gabarite um quiz pela primeira vez",
        emblema: "../imagens/emblemas/gabarito-nivel1.png"

    },
    {
        id: "geo-plana-1",
        nome: "O inicio da Geometria plana",
        tipo: "porquiz",
        objetivo: 10,
        regra: "acertos",
        quiz: "geometria-plana",
        detalhes: "Faça e Acerte 10 quetões de Geometria Plana",
        emblema: "../imagens/emblemas/geo-plana-nivel1.png"
    },
    {
        id: "probabili-1",
        nome: "pricinpiante da probabilidade",
        tipo: "porquiz",
        objetivo: 10,
        regra: "acertos",
        quiz: "probabilidade",
        detalhes: "Faça e Acerte 10 questões de probabilidade",
        emblema: "../imagens/emblemas/probabilidade-nivel1.png"
    },
    {
        id: "PA-pg-1",
        nome: "Novato das Progreções",
        tipo: "porquiz",
        objetivo: 1,
        regra: "acertos",
        quiz: "pa-e-pg",
        detalhes: "Faça e acerte 10 questões do quiz PA e PG",
        emblema: "../imagens/emblemas/pa-pg-nivel1.png"
    },

    {
        id: "mestre-geometria",
        nome: "Mestre da Geometria",
        tipo: "porquiz",
        objetivo: "todas",
        regra: "quiz-completo",
        quiz: "geometria-plana",
        detalhes: "Acerte todas as questões de Geometria Plana",
        emblema: "../imagens/emblemas/geo-plana-nivel4.png"
    },
    {
        id: "mestrepa-pg",
        nome: "Mestre das Progreções",
        tipo: "porquiz",
        objetivo: "todas",
        regra: "quiz-completo",
        quiz: "pa-pg",
        detalhes: "Acerte todas as questões sobre Progreções (P.A e P.G)",
        emblema: "../imagens/emblemas/pa-pg-nivel4.png"
    },
    {
        id: "mestre-probabilidade",
        nome: "Mestre das Probabilidades",
        tipo: "porquiz",
        objetivo: "todas",
        regra: "quiz-completo",
        quiz: "probabilidade",
        detalhes: "Acerte todas as questões de probabilidade",
        emblema: "../imagens/emblemas/probabilidade-nivel4.png"
    },
    //tipo testes
    {
        id: "teste--1",
        nome: "Gabarito Nivel1",
        tipo: "geral",
        objetivo: 5,
        regra: "gabarito",
        detalhes: "Gabarite 5 quizzes",
        emblema: "../imagens/emblemas/gabarito-nivel1.png"
    },
    {
        id: "acertos",
        nome: "Primeiros acertos",
        tipo: "geral",
        objetivo: 10,
        regra: "acertos",
        detalhes: "acerte 10 questões de qualquer assunto",
        emblema: "../imagens/emblemas/acertos-nivel1.png"
    },
    {
        id: "acertos2",
        nome: "Acertos Nivel2",
        tipo: "geral",
        objetivo: 25,
        regra: "acertos",
        detalhes: "acerte 25 questões de qualquer assunto",
        emblema: "../imagens/emblemas/acertos-nivel2.png"
    },

    {
        id: "explorador-nov",
        nome: "Explorador Novato",
        tipo: "geral",
        objetivo: 4,
        regra: "acesso",
        detalhes: "Acesse 4 assuntos diferentes",
        emblema: "../imagens/emblemas/explorador-nov.png"
    },

];
/*
tipos funcionando:
acertos , gabarito , acesso e primeiro acesso




*/
/*
tipoEvento → O QUE aconteceu
quiz       → Em qual quiz
assunto    → Em qual assunto
corretas   → Quantas acertou
total      → Quantas questões havia

*/

const quantidadeQuestoes = {
    "geometria-plana": 13,
    "probabilidade": 13,
    "pa-pg": 10,
};














// 
function verificarQuizcompleto() {

    const questoesQuiz = perguntas.filter((q) => {
        return q.id.startsWith(quizatual);
    });

    const acertadas = questoesQuiz.filter((q) => {
        return teste3.Completas.includes(q.id);
    });

    console.log("Total:", questoesQuiz.length);
    console.log("Acertadas:", acertadas.length);

    const completo = acertadas.length === questoesQuiz.length;

    verificarConquistas({
        tipoEvento: "quiz-completo",
        quiz: quizatual,
        corretas: acertadas.length,
        total: questoesQuiz.length,
        completo: completo
    });

    return completo;
}
const resultado = verificarQuizcompleto();

console.log(resultado);



// ==========================================
// VERIFICAR CONQUISTAS
// ==========================================

verificarQuizcompleto()
function verificarConquistas(dados) {
    let novoAcesso;
    for (let conquista of Conquistas) {

        // Verifica se a conquista já foi completada
        if (teste3.Conquistas.Completas.includes(conquista.id)) {
            continue;
        }


        // Pega o progresso atual da conquista
        let progresso =
            teste3.Conquistas.progresso[conquista.id] ?? 0;


        switch (conquista.tipo) {


            // ==================================
            // TODOS OS QUIZZES
            // ==================================

            case "todosquiz":

                switch (conquista.regra) {

                    case "gabarito":

                        if (dados.tipoEvento === "gabarito") {

                            progresso++;

                        }

                        break;
                }

                break;


            // ==================================
            // CONQUISTAS GERAIS
            // ==================================

            case "geral":

                switch (conquista.regra) {

                    case "primeiro-acesso":

                        if (
                            dados.tipoEvento === "primeiro-acesso" &&
                            teste3.primeiroAcesso === true
                        ) {
                            progresso++;
                            teste3.primeiroAcesso = false;
                        }

                        break;
                    case "acesso":

                        if (
                            dados.tipoEvento === "acesso" && !teste3.Acessos.includes(dados.assunto)

                        ) {
                            progresso++;
                            novoAcesso = dados.assunto




                        }

                        break;
                    case "acertos":
                        if (
                            dados.tipoEvento === "acertos"

                        ) {
                            progresso += dados.corretas;

                        }
                        break;
                    case "gabarito":

                        if (dados.tipoEvento === "gabarito") {
                            progresso++;
                        }

                        break;
                }

                break;

            // ==================================
            // POR QUIZ
            // ==================================

            case "porquiz":

                switch (conquista.regra) {

                    case "gabarito":

                        if (
                            dados.tipoEvento === "gabarito" &&
                            conquista.quiz === dados.quiz
                        ) {

                            progresso++;

                        }

                        break;
                    case "acertos":

                        if (
                            dados.tipoEvento === "acertos" &&
                            conquista.quiz === dados.quiz
                        ) {

                            progresso += dados.corretas;

                        }

                        break;
                    case "quiz-completo":
                        
                        
                        if (conquista.quiz === dados.quiz) {

                            progresso = dados.corretas;
                        }

                        break;
                }

                break;

        }


        // ==================================
        // SALVAR O PROGRESSO
        // ==================================
        if (progresso > 0) {
            
            salvarprogresso(conquista.id, progresso);
        }
        
        
        // ==================================
        // VERIFICAR SE COMPLETOU
        // ==================================
        let objetivo;
        
        if (conquista.objetivo === "todas") {
            objetivo = quantidadeQuestoes[conquista.quiz];
            progresso 
        } else {
            objetivo = conquista.objetivo;
        }
        
        if (progresso >= objetivo) {
            
            progresso = objetivo;
            
            salvarprogresso(
                conquista.id,
                progresso
            );
            
            salvarconquista(conquista.id);
        }
        
    }
    if (novoAcesso != null) {
    
        teste3.Acessos.push(novoAcesso);
    
        localStorage.setItem(
            "teste3",
            JSON.stringify(teste3)
        );
    }
    
}