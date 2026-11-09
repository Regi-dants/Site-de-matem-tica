const notificacao = document.getElementById(
    "notificacao-conquista"
);

let temporizadorNotificacao;

function mostrarNotificacaoConquista(id) {
    return new Promise(resolve => {
        const conquista = Conquistas.find(c => c.id === id);

        if (!conquista) {
            console.warn("Conquista não encontrada:", id);
            resolve();
            return;
        }

        const notificacao = document.getElementById("notificacao-conquista");
        const imagem = document.getElementById("emblema-notificacao");

        imagem.src = conquista.emblema;

        notificacao.classList.add("visivel");

        clearTimeout(temporizadorNotificacao);

        temporizadorNotificacao = setTimeout(() => {
            notificacao.classList.remove("visivel");
            resolve();
        }, 4000);
    });
}

/*----------------------------------------- 
Parte responsavel pelo  fila de notificação atual
------------------------------------------*/
let processandoFilaConquistas = false;

async function processarFilaConquistas() {
    if (processandoFilaConquistas) {
        return;
    }

    processandoFilaConquistas = true;

    try {
        while (teste3.Conquistas.pop_up.length > 0) {

            const id = teste3.Conquistas.pop_up[0];

            console.log("Mostrando:", id);

            await mostrarNotificacaoConquista(id);
            await new Promise(resolve => setTimeout(resolve, 500));

            console.log("Finalizou:", id);

            if (teste3.Conquistas.pop_up[0] === id) {
                teste3.Conquistas.pop_up.shift();

                localStorage.setItem(
                    "teste3",
                    JSON.stringify(teste3)
                );
            }
        }
    } finally {
        processandoFilaConquistas = false;
    }
}


processarFilaConquistas();

