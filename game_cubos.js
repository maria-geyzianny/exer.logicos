function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    let acumulador = 0;
    for (elemento of itensColetados) {
        if (elemento === itemNecessario1) {
            acumulador++
        } else if (elemento === itemNecessario2) {
            acumulador++
        } else if (elemento === itemNecessario3) {
            acumulador++
        }

        if (acumulador === 3) {
            break
        }
    }
    if (acumulador >= 3) {
        return "PODE ENFRENTAR";
    } else {
        return "NAO PODE ENFRENTAR";
    }
}

let itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]
itemNecessario1 = "machado"
itemNecessario2 = "capa"
itemNecessario3 = "machado"
const saida = solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3)
console.log(saida)