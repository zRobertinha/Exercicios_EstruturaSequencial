const prompt = require("prompt-sync")({sigint:true});

let peso = Number(prompt("Informe o peso de peixes em quilos: "));
let pesoExcedente;
let valorMulta;

if (peso > 50) {
    pesoExcedente = peso - 50;
    valorMulta = pesoExcedente*4;

    console.log(`Quantidade de quilos além do limite (50 quilos): ${pesoExcedente}`);
    console.log(`Valor da multa: ${valorMulta}R$`);
} else {
    console.log(`O peso não ultrapassou o limite!!`)
}