const prompt = require("prompt-sync")();
let cont = 0;
let n = Number(prompt("digite seu numero:"));
let memoria = [];
while (n > cont) {
  let n2 = prompt("o codido de produto");
  memoria.push(n2);
  n--
}

verify = memoria.includes("B2");
console.log(verify);
