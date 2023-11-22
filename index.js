const heroi = "Victor"
let pontosDeVida = 7001
let nivel = ""

if (pontosDeVida <= 1000){
    nivel = "Ferro"
}
else if (pontosDeVida <= 2000 ){
    nivel = "Bronze"
}
else if ( pontosDeVida <= 5000 ){
    nivel = "Prata"
}
else if ( pontosDeVida <= 6000 ){
    nivel = "Ouro"
}
else if (pontosDeVida <= 7000 ){
    nivel = "Platina"
}
else if (pontosDeVida <= 8000 ){
    nivel = "Diamante"
}
else if (pontosDeVida <= 9000 ){
    nivel = "Ascendente"

}else if (pontosDeVida <= 10000 ){
    nivel = "Imortal"
}
else if (pontosDeVida > 10001 ){
    nivel = "Radiante"
}

console.log("O Héroi de nome " + heroi + "está no nível de " + nivel)