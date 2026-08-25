const prompt = require("prompt-sync")();
let palavra = prompt("digite sua palvra: ");
const vetor = palavra.split("");
let vetor2 = [];
tam = vetor.length;
let n = 0;
for (let i = tam - 1; i >= 0; i--) {
  vetor2[n] = vetor[i];
  n++;
}
palavra = vetor2.join("");
console.log(palavra);
