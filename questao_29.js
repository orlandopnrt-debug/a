const prompt = require("prompt-sync")();

class Funcionario {
  constructor(nome, anosDeCasa) {
    this.nome = nome;
    this.anosDeCasa = anosDeCasa;
  }

  calcularBonus() {
    if (this.anosDeCasa < 2) {
      return 0;
    } else if (this.anosDeCasa >= 2 && this.anosDeCasa <= 5) {
      return 500;
    } else {
      return 1000;
    }
  }
}

let nomeDigitado = prompt("Digite o nome do funcionário: ");
let anosDigitados = Number(prompt("Digite os anos de casa: "));

const f1 = new Funcionario(nomeDigitado, anosDigitados);

console.log(
  "O bônus do funcionário " + f1.nome + " é: R$ " + f1.calcularBonus(),
);
