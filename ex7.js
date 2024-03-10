const prompt = require("prompt-sync")({sigint:true});

let lado = Number(prompt("Informe o tamanho do lado do quadrado: "));
let area = Math.pow(lado,2);
let dobroArea = area*2;

console.log(`O dobro da area do quadrado é: ${dobroArea}`);