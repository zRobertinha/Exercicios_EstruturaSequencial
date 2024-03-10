const prompt = require("prompt-sync")({sigint:true});

let notas = [];
let soma = 0;
let media;

for(let i=1; i<=4; i++) {
    notas[i] = Number(prompt(`Informe a ${i}° nota: `));
    soma += notas[i];
}
media = soma / 4;
console.log(`A media do aluno é: ${media.toFixed(2)}`);