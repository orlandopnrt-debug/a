class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    const area = this.raio ** 2 * Math.PI;
    // .toFixed(2) limita o resultado em 2 casas decimais
    console.log("Área do círculo: " + area.toFixed(2));
  }

  calcularCircunferencia() {
    const circunferencia = this.raio * 2 * Math.PI;
    console.log("Circunferência do círculo: " + circunferencia.toFixed(2));
  }
}

const c1 = new Circulo(1);

// CORREÇÃO: Adicionados os parênteses () para executar as funções
c1.calcularArea(); // Saída: Área do círculo: 3.14
c1.calcularCircunferencia(); // Saída: Circunferência do círculo: 6.28
