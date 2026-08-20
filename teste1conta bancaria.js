const prompt = require("prompt-sync")();
class Conta {
  #saldo;
  constructor(titular, saldoincial = 0) {
    this.titular = titular;
    this.#saldo = saldoincial;
  }
  depositar(valor) {
    if (valor < 0) {
      console.log("valor invalido");
      return;
    }
    this.#saldo += valor;
    return;
  }
  sacar(valor) {
    if (valor > this.#saldo) {
      console.log("saldo menor que saque");
      return;
    }
    if (valor < 0) {
      console.log("valor menor de saque menor que 0");
      return;
    }
    this.#saldo -= valor;
  }
  verSaldo() {
    console.log("proprietario:", this.titular, "\nsaldo de:", this.#saldo);
  }
}
let prop = prompt("qual o proprietario: ");
let valorInit = Number(prompt("valor inicial da conta: "));
const minhaConta = new Conta(prop, valorInit);
let op = 0;
while (op != 4) {
  console.log(`Escolha uma opção:
1 - Ver Saldo
2 - Depositar
3 - Sacar
4 - Sair`);
  op = Number(prompt("DIGITE O NUMERO: "));
  if (op == 1) {
    minhaConta.verSaldo();
  } else if (op == 2) {
    let dep = Number(prompt("Digite o valor a ser depositao "));
    minhaConta.depositar(dep);
  } else if (op == 3) {
    let saque = Number(prompt("Digite o valor a ser sacado"));
    minhaConta.sacar(saque);
  } else if (op == 4) {
    console.log("ATÉ MAIS SENHOR(A) ", minhaConta.titular);
  } else console.log("invalido");
}
