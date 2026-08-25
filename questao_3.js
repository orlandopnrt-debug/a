const prompt = require("prompt-sync")();
let n = Number(prompt("digite seu numero:"));
let memoria = [];
for (let i = 0; i <= n; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    memoria.push(i);
  }
}
const soma = memoria.reduce((total, valor) => total + valor, 0);
console.log(memoria);
console.log(soma);
