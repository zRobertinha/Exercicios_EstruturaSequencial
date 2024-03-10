const prompt = require("prompt-sync")({sigint:true});

let altura = Number(prompt("Informe a sua altura: "));
let sexo = prompt("informe o seu genero (feminino ou masculino): ");
let pesoHomem = (72.7*altura) - 58;
let pesoMulher = (62.1*altura) - 44.7;

if(sexo == "feminino") {
    console.log(`Seu peso ideia: ${pesoMulher.toFixed(1)}`);
} else {
    console.log(`Seu peso ideal: ${pesoHomem.toFixed(1)}`);
}
