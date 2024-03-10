const prompt = require("prompt-sync")({sigint:true});

let n1, n2, n3;
let a;
let b;
let c;

n1 = Number(prompt("Informe um número: "));
n2 = Number(prompt("Informe mais um número: "));
n3 = Number(prompt("Agora informe o último número: "));

a = ((n1*2)*(n2/2));
b = ((n1*3)+n3);
c = Math.pow(n3, 3);

console.log(`O produto do dobro do primeiro com a metade do segundo: ${a}`);
console.log(`A soma do triplo do primeiro com o terceiro: ${b}`);
console.log(`O terceiro elevado ao cubo: ${c}`);