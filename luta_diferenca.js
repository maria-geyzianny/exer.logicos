function solucao(pesos){
    diferenca = pesos[1] - pesos[0]
    if(diferenca <= 5 ){
        return "PODEM LUTAR";
    } else {
        return "NAO PODEM LUTAR"
    }
}

const pesos = [50, 53];
const saida = solucao(pesos);
console.log(saida);

