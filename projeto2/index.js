function calcularNivel(wins, losses) {
    const saldoVitorias = wins - losses;

    let nivel;

    if (wins < 10) {
        nivel = "Ferro";
    } else if (wins >= 11 && wins <= 20) {
        nivel = "Bronze";
    } else if (wins >= 21 && wins <= 50) {
        nivel = "Prata";
    } else if (wins >= 51 && wins <= 80) {
        nivel = "Ouro";
    } else if (wins >= 81 && wins <= 90) {
        nivel = "Diamante";
    } else if (wins >= 91 && wins <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel);
}

calcularNivel(87,21);
