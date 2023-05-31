

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function atmosfera(altitude){
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
        throw new Error("Altitude inválida.");
      }
}


rl.question('Qual a altitude', (altitude) => {
    atmosfera(altitude)
    rl.close();
});


        



