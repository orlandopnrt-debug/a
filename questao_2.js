const prompt = require("prompt-sync")();
let cont = 0;
let n = Number(prompt("digite seu numero:"));
let memoria = [];
while (n > cont) {
  memoria.push(n);
  n--;
}
console.log(memoria);
