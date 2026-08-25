const prompt = require("prompt-sync")();
let nume = Number(prompt("Quantos numeros deseja digitar:"));
let num = [];
for (let i = 0; i < nume; i++) {
  let n2 = Number(prompt("Digite o NUmero que desja "));
  num.push(n2);
}
num = num.sort((a, b) => a - b);
console.log(num);
