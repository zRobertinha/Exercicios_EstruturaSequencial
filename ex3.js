const prompt = require("prompt-sync")({sigint:true});

let n1 = Number(prompt("Informe o primeiro numero: "));
let n2 = Number(prompt("Informe o segundo numero: "));
let soma;

soma = n1 + n2;
console.log(`A soma dos números é: ${soma}`);


