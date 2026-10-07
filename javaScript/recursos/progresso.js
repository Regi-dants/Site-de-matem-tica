let mostrarconquistas = document.getElementById("Mostrar-conquistas");

for (let conquist of Conquistas) {

    // quais questões estão desbloqueadas ou bloqueadas
    let desbloqueada = teste3.Conquistas.Completas.includes(conquist.id);
    let classe = desbloqueada ? "desbloqueada" : "bloqueada";

    // progresso
    let progresso = teste3.Conquistas.progresso[conquist.id] ?? 0;

    // descobrir objetivo
    let objetivo;

    if (conquist.objetivo === "todas") {
        objetivo = quantidadeQuestoes[conquist.quiz];
    } else {
        objetivo = conquist.objetivo;
    }

    // barra de progresso
    let porcentagem = (progresso / objetivo) * 100;

    mostrarconquistas.innerHTML += `
        <div class="conquist ${classe}">
        <img src="${conquist.emblema}" alt="${conquist.nome}" class="emblemas">
            <h2>${conquist.nome}</h2>
            <p>${conquist.detalhes}</p>

            <div class="barra">
                <div class="progresso" style="width: ${porcentagem}%"></div>
            </div>

            <span>${progresso}/${objetivo}</span>
        </div>
    `;
}