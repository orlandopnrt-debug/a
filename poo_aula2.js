class Person {
  constructor(name, age, nationality) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    console.log(`${name} wast just born into existence`);
  }
}
const ana = new Person("Ana", 25, "Brazilian");
console.log(ana.name)