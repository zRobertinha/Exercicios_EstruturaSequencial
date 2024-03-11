const prompt = require("prompt-sync")({sigint:true});

let tamanhoArquivo = Number(prompt("Informe o tamanho do arquivo (em MB): "));
let velocidade = Number(prompt("Informe  a velocidade de internet (em Mbps): "));
let tempo = ((tamanhoArquivo*8) / velocidade) / 60;

console.log(`O tempo aproximado de download do arquivo é: ${tempo.toFixed(0)} minutos`);