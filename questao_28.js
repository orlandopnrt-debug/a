const prompt = require("prompt-sync")();

class Carro {
  constructor(velocidade) {
    this.velocidade = velocidade;
  }

  acelerar(n) {
    this.velocidade = this.velocidade + n;
    console.log("Velocidade atual: " + this.velocidade + " km/h");
  }

  frear(n) {
    this.velocidade = this.velocidade - n;
    if (this.velocidade < 0) {
      this.velocidade = 0;
      console.log("Velocidade menor que 0, velocidade zerada.");
    }
    console.log("Velocidade atual: " + this.velocidade + " km/h");
  }
}

let carro1 = new Carro(0);

while (true) {
  let n1 = Number(
    prompt(
      "Digite 1 para acelerar \nDigite 2 para frear \nDigite 3 para finalizar\n> ",
    ),
  );

  if (n1 === 1) {
    let quantoAcelerar = Number(prompt("Quanto deseja acelerar? "));
    carro1.acelerar(quantoAcelerar);
  } else if (n1 === 2) {
    let quantoFrear = Number(prompt("Quanto deseja frear? "));
    carro1.frear(quantoFrear);
  } else if (n1 === 3) {
    console.log("Desligando o motor... Programa finalizado!");
    break;
  } else {
    console.log("Opção inválida! Escolha 1, 2 ou 3.");
  }
}
