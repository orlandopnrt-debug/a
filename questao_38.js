class Paciente {
  #vacinado;
  constructor(nome, vacinado) {
    this.nome = nome;
    this.#vacinado = vacinado;
  }
  get status() {
    return this.#vacinado;
  }
}
const pacientes = [
  new Paciente("Bruno", true),
  new Paciente("Ana", false),
  new Paciente("Andre", true),
];
let pacientebuscado = "Bruno";
let pacienfind = pacientes.find(
  (Paciente) => Paciente.nome === pacientebuscado,
);
console.log(pacienfind.status);
