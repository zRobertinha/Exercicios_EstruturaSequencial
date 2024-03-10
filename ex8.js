const prompt = require("prompt-sync")({sigint:true});

let valorHora = Number(prompt("Quanto você recebe por hora: "));
let qtHora = Number(prompt("Quantas horas você trabalhou esse mês: "));
let totalSalario = valorHora*qtHora;

console.log(`O seu salário esse mês será: ${totalSalario.toFixed(2)}`);