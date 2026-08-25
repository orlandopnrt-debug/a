const prompt = require("prompt-sync")();
let produtos = [];
let nume = Number(prompt("Quantos produtos tem?"));
for (let i = 1; i <= nume; i++) {
  let nomep = prompt("Qual seu produto ");
  let quantp = Number(prompt("Quantos tem em estoque ainda "));
  produtos.push({ produto: nomep, quantidade: quantp });
}
let n = produtos.some((produto) => produto.quantidade == 0);
console.log(n);
