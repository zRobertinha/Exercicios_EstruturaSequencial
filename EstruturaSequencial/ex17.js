const prompt = require("prompt-sync")({sigint:true});

let area = Number(prompt("Informe a area a ser pintada em metros quadrados: "));
let litros = (area/6) * 1.1;
let qtLatas = parseInt(litros / 18);
let valorLata = 80;
let qtGaloes = parseInt(litros / 3.6);
let valorGalao = 25;

// LATAS
if (litros % 18 != 0) {
    qtLatas += 1;
    valorLata = qtLatas * valorLata;
}

// GALOES
if (litros % 3.6 != 0) {
    qtGaloes += 1;
    valorGalao = qtGaloes * valorGalao;
}

let lata_mix = parseInt(litros / 18);
let galao_mix = parseInt((litros - lata_mix*18) / 3.6);

let valor_mix_lata;
let valor_mix_galao;
if (litros % 3.6 != 0) {
    galao_mix += 1;
    
    valor_mix_lata = lata_mix*80;
    valor_mix_galao = galao_mix * 25;
}

console.log(`Comprando apenas latas de 18l: ${qtLatas} latas - Valor ${valorLata} R$`);
console.log(`Comprando apenas galões de 3.6l: ${qtGaloes} galões - Valor ${valorGalao} R$`);
console.log(`Comprando latas e galões: ${lata_mix} latas - ${galao_mix} galões - Valor total: ${valor_mix_lata + valor_mix_galao} R$`);