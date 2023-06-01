function solucao(altitude){
    if (altitude >= 0 && altitude <= 20){
        return "TROPOSFERA";

    } else if (altitude > 20 && altitude <= 50 ){
        return "ESTRATOSFERA";

    } else if (altitude > 50 && altitude <= 80){
        return "MESOSFERA";

    } else if (altitude > 80 && altitude <= 450) {
        return "TERMOSFERA";

    } else if (altitude > 450 && altitude <= 900){
        return "EXOSFERA";
    } else {
       return "Altitude inválida.";
      }
}

let altitude = 85
let saida = solucao(altitude)
console.log(saida)



        



