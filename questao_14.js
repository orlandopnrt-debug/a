const prompt = require("prompt-sync")();
let nume = Number(prompt("Quantidade de numeros"));
let num = [];
for (let i = 0; i < nume; i++) {
  let n2 = Number(prompt("digite a idade :"));
  num.push(n2);
}
num = num.every((n) => n > 18);
console.log(num);
