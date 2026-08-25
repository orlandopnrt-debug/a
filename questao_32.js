class Forma {
  calcularArea() {
    return 0;
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado ** 2;
  }
}

class Triangulo extends Forma {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

const q1 = new Quadrado(4);
const t1 = new Triangulo(6, 3);

console.log("Área do Quadrado: " + q1.calcularArea());
console.log("Área do Triângulo: " + t1.calcularArea());
