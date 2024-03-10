const prompt = require("prompt-sync")({sigint:true});

let metros = Number(prompt(`Informe o metro: `));
let cm = (metros * 100);
console.log(`${metros} metros possui ${cm} centímetros`)