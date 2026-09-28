/*
Sistema de Locadora de Filmes

Pontos que usei IA:
- entender como faria: this.cliente.calcularDesconto();
- lembrar estrutura forEach
- tirar dúvida da sintaxe do find e do reduce
- comentarios
*/

// a) Classe Filme: titulo, genero, precoDiaria e #estoque privado.
//    getter estoqueDisponivel, alugar() e devolver().
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
    return true;
  }

  devolver() {
    this.#estoque = this.#estoque + 1;
  }
}

// b) Classe Cliente: nome e calcularDesconto() (retorna 0).
class Cliente {
  constructor(nome) {
    this.nome = nome;
  }

  calcularDesconto() {
    return 0;
  }
}

// c) ClienteVip herda de Cliente e sobrescreve calcularDesconto() -> 0.1 (polimorfismo).
class ClienteVip extends Cliente {
  constructor(nome) {
    super(nome);
  }

  calcularDesconto() {
    return 0.1;
  }
}

// d) Classe Locacao: cliente, filme, dias e membro estático totalLocacoes.
class Locacao {
  static totalLocacoes = 0;

  constructor(cliente, filme, dias) {
    this.cliente = cliente;
    this.filme = filme;
    this.dias = dias;
    Locacao.totalLocacoes++;
  }

  // e) precoDiaria x dias; multa de 10% se dias > 5; desconto do cliente por polimorfismo.
  calcularValor() {
    let valor = this.filme.precoDiaria * this.dias;

    if (this.dias > 5) {
      valor = valor * 1.1;
    }

    valor = valor - valor * this.cliente.calcularDesconto();
    return valor;
  }
}

// f) Array de filmes (pelo menos 5, com um estoque igual a 0).
const filmes = [];
filmes.push(new Filme("Matrix", "Ficção", 10, 3));
filmes.push(new Filme("O Poderoso Chefão", "Drama", 12, 5));
filmes.push(new Filme("Invocação do Mal", "Terror", 8, 0));
filmes.push(new Filme("Shrek", "Animação", 7, 2));
filmes.push(new Filme("Interestelar", "Ficção", 15, 1));

// g) Array de clientes (pelo menos 3, misturando Cliente e ClienteVip).
const clientes = [];
clientes.push(new Cliente("Carlos Silva"));
clientes.push(new ClienteVip("Ana Souza"));
clientes.push(new ClienteVip("Marcos Oliveira"));

// h) Array de locações (pelo menos 3, com dias variados, incluindo > 5).
const locacoes = [];
locacoes.push(new Locacao(clientes[0], filmes[0], 3));
locacoes.push(new Locacao(clientes[1], filmes[1], 6));
locacoes.push(new Locacao(clientes[2], filmes[3], 2));

// i) Para cada locação, chama alugar() no filme correspondente.
locacoes.forEach((locacao) => {
  locacao.filme.alugar();
});

// j) forEach: filmes com estoque disponível (> 0).
const filmesComEstoque = [];
filmes.forEach((filme) => {
  if (filme.estoqueDisponivel > 0) {
    filmesComEstoque.push(filme.titulo);
  }
});

// k) map: título e preço da diária de cada filme.
const tituloEDiaria = filmes.map((filme) => ({
  titulo: filme.titulo,
  diaria: filme.precoDiaria,
}));

// l) filter: filmes de um gênero específico (ex: "Ficção").
const filmesDeFiccao = filmes.filter(
  (filme) => filme.genero.toLowerCase() === "ficção",
);

// m) find: busca um filme pelo título e exibe suas informações.
const filmeProcurado = filmes.find(
  (filme) => filme.titulo.toLowerCase() === "matrix",
);

if (filmeProcurado) {
  console.log("Título:", filmeProcurado.titulo);
  console.log("Gênero:", filmeProcurado.genero);
  console.log("Preço Diária:", filmeProcurado.precoDiaria);
  console.log("Estoque Disponível:", filmeProcurado.estoqueDisponivel);
} else {
  console.log("Filme não encontrado.");
}

// n) reduce: faturamento total de todas as locações.
const faturamento = locacoes.reduce((acumulador, locacao) => {
  return acumulador + locacao.calcularValor();
}, 0);

// o) some: existe algum filme com estoque zerado?
const temFilmeEsgotado = filmes.some((filme) => filme.estoqueDisponivel === 0);

// p) every: todos os clientes são ClienteVip?
const todosSaoVip = clientes.every((cliente) => cliente instanceof ClienteVip);

// q) Locacao.totalLocacoes acessado diretamente pela classe.
console.log("Total de Locações:", Locacao.totalLocacoes);
console.log("Todos os clientes são VIP?", todosSaoVip);
console.log("Existe filme esgotado?", temFilmeEsgotado);
console.log("Filmes com estoque disponível:", filmesComEstoque);
console.log("Título e diária de cada filme:", tituloEDiaria);
console.log("Filmes de Ficção:", filmesDeFiccao);
console.log("Faturamento total:", faturamento);
