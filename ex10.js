const prompt = require("prompt-sync")({sigint: true});

let temperaturaC = Number(prompt("Informe a temperatura em Celsius: "));
let temperaturaF = ((temperaturaC*(9 / 5)) + 32);

console.log(`A temperatura em Fahrenheit é: ${temperaturaF}`);
