class Adress {}
class Person {
  static species = "Homo sapiens";
  static totalCreated = 0;
  constructor(name, age, nacionalidade) {
    this.name = name;
    this.age = age;
    this.nacionalidade = nacionalidade;
    Person.totalCreated++;
  }
}

class NPC extends Person {
  constructor(name, age, nacionalidade, action) {
    super(name, age, nacionalidade);
    this.action = action;
  }
}
const cArla = new NPC("Carla", 20, "br", true);
console.log(cArla instanceof NPC);
console.log(cArla instanceof Person);
console.log(cArla instanceof Adress);
