function solucao(olhosNasLaterais) {
    if (olhosNasLaterais) {
        return "PRESA";
      } else {
        return "PREDADOR";
      }
 }

const olhosNaLateral = true;
const saida = solucao(olhosNaLateral);
console.log(saida);