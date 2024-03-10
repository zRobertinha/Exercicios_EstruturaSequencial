const prompt = require("prompt-sync")({sigint:true});

let salarioHora = Number(prompt("Informe o valor hora do seu salário: "));
let horasTrabalhadas = Number(prompt("Informe a quantidade de horas trabalhadas no mês: "));
let salarioBruto = salarioHora*horasTrabalhadas;
let impostoRenda = (salarioBruto*11)/100;
let inss = (salarioBruto*8)/100;
let sindicato = (salarioBruto*5)/100;
let salarioLiquido = (salarioBruto-impostoRenda-inss-sindicato);

console.log(`Salário bruto: ${salarioBruto.toFixed(2)} R$`);
console.log(`IR (11%): ${impostoRenda.toFixed(2)} R$`);
console.log(`INSS (8%): ${inss.toFixed(2)} R$`);
console.log(`Sindicato (5%): ${sindicato.toFixed(2)} R$`);
console.log(`Salário Liquido: ${salarioLiquido.toFixed(2)} R$`);
