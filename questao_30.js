const prompt = require("prompt-sync")();

class Cofre {
  #senha;
  constructor(senha) {
    this.#senha = senha;
  }
  abrir() {
    for (let i = 1; i <= 5; i++) {
      if (i == 5) {
        console.log("Ultima Tentativa");
        let senhadigitada = prompt("Digite sua senha: ");
        if (senhadigitada == this.#senha) {
          return "Cofre Aberto";
        } else {
          console.log("Bloqueado");
          return "Falha ao abrir";
        }
      } else {
        let senhadigitada = prompt("Digite sua senha: ");
        if (senhadigitada == this.#senha) {
          return "Cofre Aberto";
        } else {
          console.log("Tente Novamente");
        }
      }
    }
  }
}

let meuCofre = new Cofre("1234");
console.log(meuCofre.abrir());
