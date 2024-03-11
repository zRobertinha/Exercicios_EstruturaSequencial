const prompt = require("prompt-sync")({sigint:true});

let metrosQuadrados = Number(prompt("Informe o tamanho da área a ser pintada (em metros quadrados): "));
let cobertura = metrosQuadrados/6;
let latas = parseInt(cobertura/18);
let galoes = parseInt(cobertura/3.6);
let preco_latas = 0;
let preco_galoes = 0;

if(cobertura % 18 != 0) {
    latas += 1;
    preco_latas = latas*80;

} else if(cobertura % 3.6 != 0) {
    galoes += 1;
    preco_galoes = galoes*25;
}

