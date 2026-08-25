const prompt = require("prompt-sync")();
function primo() {
  let n = Number(prompt("Digite seu numero: "));
  let cont = 0;
  let memoria = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      cont++;
      memoria.push(i);
    }
  }
  if (cont !== 2) {
    console.log(memoria);
    return false;
  }
  return true;
}

console.log(primo());
