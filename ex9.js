const prompt = require("prompt-sync")({sigint:true});

let temperaturaF = Number(prompt("Informe a temperatura em Fahrenheit: "));
let temperaturaC = 5*((temperaturaF-32) / 9);

console.log(`A temperatura em Celsius: ${temperaturaC}`);