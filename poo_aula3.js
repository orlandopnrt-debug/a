class Person {
  #idade;
  constructor(nome, idade, nacionalidade) {
    this.nome = nome;
    this.#idade = idade;
    this.nacionalidade = nacionalidade;
  }

  get age() {
    return this.#idade;
  }

  set age(novaIdade) {
    if (novaIdade > 0) {
      this.#idade = novaIdade;
    } else {
      console.log("Idade inválida!");
    }
  }
}
/*
const ana = new Person("Ana", 25, "Brasileira");

// Testando o GET
console.log(`Idade atual: ${ana.age}`);

// Testando o SET
ana.age = -5;
ana.age = 26;
console.log(`Nova idade após o set: ${ana.age}`);
class NPC extends Person {
  constructor(nome, idade, nacionalidade, action) {
    super(nome, idade, nacionalidade);
    this.action = action;
  }
  actions() {
    console.log(`${this.nome} has action ${this.action}`);
  }
}
const carla = new NPC("Carla", 20, "Brazilian", true);
console.log(carla.age);
carla.actions();

class */
class NPC extends Person {
  damage() {
    return 1;
  }
}
class Boss extends Person {
  damage() {
    return 220;
  }
}
// CORREÇÃO: Criando o array de vilões com a sintaxe correta do JavaScript
const villains = [
  new NPC("Carla", 20, "Brazilian"),
  new Boss("Diego", 35, "Spaniard"),
];

// Testando o dano de cada vilão no array
villains.forEach((villain) => {
  console.log(`${villain.nome} causa ${villain.damage()} de dano.`);
});
