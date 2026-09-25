class Filme {
  #estoque;
  constructor(titulo, genero, precoDiaria, estoque) {
    this.titulo = titulo;
    this.genero = genero;
    this.precoDiaria = precoDiaria;
    this.#estoque = estoque;
  }
  get estoqueDisponivel() {
    return this.#estoque;
  }
  alugar() {
    if (this.#estoque <= 0) {
      return false;
    }
    this.#estoque = this.#estoque - 1;
  }
  devolver() {
    this.#estoque = this.#estoque + 1;
  }
}
class Cliente {
  constructor(name) {
    this.name = name;
  }
  calcularDesconto() {
    return 0;
  }
}
class ClienteVip extends Cliente {
  constructor(name) {
    super(name);
  }
  calcularDesconto() {
    return 0.1;
  }
}
class locacao {
  static totalLocacoes = 0;
  constructor(cliente, filme, dias) {
    this.filme = filme;
    this.cliente = cliente;
    this.dias = dias;
    locacao.totalLocacoes++;
  }
  calcularValor() {
    let valor = this.filme.precoDiaria * this.dias;
    if (this.dias > 5) {
      valor = valor * 1.1;
    }
    valor = valor - valor * this.cliente.calcularDesconto();
    return valor;
  }
}
const filmes = [];

filmes.push(new Filme("Matrix", "Ficção", 10, 3));
filmes.push(new Filme("O Poderoso Chefão", "Drama", 12, 5));
filmes.push(new Filme("Invocação do Mal", "Terror", 8, 0));
filmes.push(new Filme("Shrek", "Animação", 7, 2));
filmes.push(new Filme("Interestelar", "Ficção", 15, 1));
