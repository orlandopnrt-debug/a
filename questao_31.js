class Veiculo {
  constructor(placa) {
    this.placa = placa;
  }
  capacidadeCarga() {
    return 0;
  }
}
class Moto extends Veiculo {
  constructor(placa) {
    super(placa);
  }
  capacidadeCarga() {
    return 20;
  }
}
class Caminhao extends Veiculo {
  constructor(placa) {
    super(placa);
  }
  capacidadeCarga() {
    return 5000;
  }
}
