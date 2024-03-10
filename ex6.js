const prompt = require("prompt-sync")({sigint:true});

let raio = Number(prompt("Informe o raio do circulo em cm: "));
let area = Math.PI*(Math.pow(raio,2));

console.log(`A area do circulo é ${area.toFixed(2)} cm2`);