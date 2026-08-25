class Retanhulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }
  calcularArea() {
    let area = this.largura * this.altura;
    console.log("a area do retagulo é:" + area);
  }
  calcularPerimetro() {
    let perimetro = 2 * (this.altura + this.largura);
    console.log("O perimetro do seu retangulo é: " + perimetro);
  }
}
const r1 = new Retanhulo(3, 5);
r1.calcularArea();
r1.calcularPerimetro();
