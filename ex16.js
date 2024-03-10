const prompt = require("prompt-sync")({sigint:true});

let metrosQuadrados = Number(prompt("Informe o tamanho da área a ser pintada (em metros quadrados): "));
let cobertura = metrosQuadrados/3;
let latas = parseInt(cobertura/18);

if(cobertura % 18 != 0) {
    latas += 1;
}

console.log(`Quantidade de latas a serem compradas: ${latas}`);
console.log(`Preço total: ${(latas*80).toFixed(2)} R$`);
