const prompt = require("prompt-sync")({sigint:true});

let numero = prompt("Informe um número: ")
console.log(`O numero informado foi: ${numero}`)