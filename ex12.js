const prompt = require("prompt-sync")({sigint:true});

let altura = Number(prompt("Informe a sua altura: "));
let pesoIdeal = (72.7*altura) - 58;

console.log(`O seu peso ideal é: ${pesoIdeal.toFixed(1)}`);