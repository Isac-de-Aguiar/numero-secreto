let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let quantidadeTentativas = 10;
let tentativas = 0;

function verificandoNumero() {

    let palpite = parseInt(document.getElementById("palpite").value);
    tentativas ++;
    let restantes = quantidadeTentativas - tentativas;
    if (restantes < 0) restantes = 0;


    if (palpite === numeroSecreto) {
        alert("🎉 Acertou! O número secreto é " + numeroSecreto);

    } else if (tentativas < quantidadeTentativas) {
        if (palpite > numeroSecreto) {
            alert("❌ Errado! O número secreto é MENOR");
        } else {
            alert("❌ Errado! O número secreto é MAIOR");
        }
        
    } else {
        alert("😢 Você perdeu. O número secreto é " + numeroSecreto);
    }

    document.getElementById("tentativasRestantes").innerText =
        "Tentativas restantes: " + restantes;
}