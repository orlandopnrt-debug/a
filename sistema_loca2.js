/*
Sistema de Locadora de Filmes

Pontos que usei IA:
- entender como faria: this.cliente.calcularDesconto();
- lembrar estrutura forEach
- tirar dúvida da sintaxe do find e do reduce
- comentarios
- funções de apagar dos arrays (item r)
*/

// precisa instalar antes: npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

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
  if (!locacao.filme.alugar()) {
    console.log("Sem estoque para:", locacao.filme.titulo);
  }
});

// listar filmes (forEach)
function listarFilmes() {
  filmes.forEach((filme, i) => {
    console.log(
      i + 1,
      "-",
      filme.titulo,
      "|",
      filme.genero,
      "| R$",
      filme.precoDiaria,
      "| Estoque:",
      filme.estoqueDisponivel,
    );
  });
}

// listar clientes (forEach)
function listarClientes() {
  clientes.forEach((cliente, i) => {
    console.log(
      i + 1,
      "-",
      cliente.nome,
      "|",
      cliente instanceof ClienteVip ? "VIP" : "Comum",
    );
  });
}

// listar locações (forEach)
function listarLocacoes() {
  locacoes.forEach((locacao, i) => {
    console.log(
      i + 1,
      "-",
      locacao.cliente.nome,
      "|",
      locacao.filme.titulo,
      "|",
      locacao.dias,
      "dia(s) | R$",
      locacao.calcularValor().toFixed(2),
    );
  });
}

function cadastrarFilme() {
  const titulo = prompt("Título: ");
  const genero = prompt("Gênero: ");
  const precoDiaria = parseFloat(prompt("Preço da diária: "));
  const estoque = parseInt(prompt("Estoque: "));

  filmes.push(new Filme(titulo, genero, precoDiaria, estoque));
  console.log("Filme cadastrado.");
}

function cadastrarCliente() {
  const nome = prompt("Nome: ");
  const tipo = prompt("Tipo (1 = Comum, 2 = VIP): ");

  if (tipo === "1") {
    clientes.push(new Cliente(nome));
  } else if (tipo === "2") {
    clientes.push(new ClienteVip(nome));
  } else {
    console.log("Tipo inválido.");
    return;
  }
  console.log("Cliente cadastrado.");
}

function realizarLocacao() {
  listarClientes();
  const numCliente = parseInt(prompt("Número do cliente: "));

  if (isNaN(numCliente) || numCliente < 1 || numCliente > clientes.length) {
    console.log("Cliente inválido.");
    return;
  }

  listarFilmes();
  const numFilme = parseInt(prompt("Número do filme: "));

  if (isNaN(numFilme) || numFilme < 1 || numFilme > filmes.length) {
    console.log("Filme inválido.");
    return;
  }

  const dias = parseInt(prompt("Quantos dias: "));

  if (isNaN(dias) || dias <= 0) {
    console.log("Número de dias inválido.");
    return;
  }

  const filme = filmes[numFilme - 1];

  if (!filme.alugar()) {
    console.log("Sem estoque para:", filme.titulo);
    return;
  }

  const locacao = new Locacao(clientes[numCliente - 1], filme, dias);
  locacoes.push(locacao);
  console.log("Locação registrada. Valor:", locacao.calcularValor().toFixed(2));
}

// r) apagar de cada array (splice)
function apagarFilme() {
  listarFilmes();
  const numero = parseInt(prompt("Número do filme para apagar (0 cancela): "));

  if (isNaN(numero) || numero < 1 || numero > filmes.length) {
    console.log("Nenhum filme apagado.");
    return;
  }

  filmes.splice(numero - 1, 1);
  console.log("Filme apagado.");
}

function apagarCliente() {
  listarClientes();
  const numero = parseInt(
    prompt("Número do cliente para apagar (0 cancela): "),
  );

  if (isNaN(numero) || numero < 1 || numero > clientes.length) {
    console.log("Nenhum cliente apagado.");
    return;
  }

  clientes.splice(numero - 1, 1);
  console.log("Cliente apagado.");
}

function apagarLocacao() {
  listarLocacoes();
  const numero = parseInt(
    prompt("Número da locação para apagar (0 cancela): "),
  );

  if (isNaN(numero) || numero < 1 || numero > locacoes.length) {
    console.log("Nenhuma locação apagada.");
    return;
  }

  // devolve o filme pro estoque
  locacoes[numero - 1].filme.devolver();
  locacoes.splice(numero - 1, 1);
  Locacao.totalLocacoes--;
  console.log("Locação apagada.");
}

// j) forEach: filmes com estoque disponível (> 0).
function filmesComEstoque() {
  filmes.forEach((filme) => {
    if (filme.estoqueDisponivel > 0) {
      console.log(filme.titulo, "| Estoque:", filme.estoqueDisponivel);
    }
  });
}

// k) map: título e preço da diária de cada filme.
function tituloEDiaria() {
  const lista = filmes.map((filme) => ({
    titulo: filme.titulo,
    diaria: filme.precoDiaria,
  }));

  lista.forEach((item) => {
    console.log(item.titulo, "| Diária: R$", item.diaria);
  });
}

// l) filter: filmes de um gênero específico.
function filmesPorGenero() {
  const genero = prompt("Gênero: ");

  const lista = filmes.filter(
    (filme) => filme.genero.toLowerCase() === genero.toLowerCase(),
  );

  lista.forEach((filme) => {
    console.log(filme.titulo, "|", filme.genero);
  });
}

// m) find: busca um filme pelo título e exibe suas informações.
function buscarFilme() {
  const titulo = prompt("Título: ");

  const filme = filmes.find(
    (f) => f.titulo.toLowerCase() === titulo.toLowerCase(),
  );

  if (filme) {
    console.log("Título:", filme.titulo);
    console.log("Gênero:", filme.genero);
    console.log("Preço Diária:", filme.precoDiaria);
    console.log("Estoque Disponível:", filme.estoqueDisponivel);
  } else {
    console.log("Filme não encontrado.");
  }
}

// n) reduce: faturamento total de todas as locações.
function faturamentoTotal() {
  const faturamento = locacoes.reduce((acumulador, locacao) => {
    return acumulador + locacao.calcularValor();
  }, 0);

  console.log("Faturamento total:", faturamento.toFixed(2));
}

// o) some, p) every e q) Locacao.totalLocacoes
function resumo() {
  const temFilmeEsgotado = filmes.some(
    (filme) => filme.estoqueDisponivel === 0,
  );
  const todosSaoVip = clientes.every(
    (cliente) => cliente instanceof ClienteVip,
  );

  console.log("Total de Locações:", Locacao.totalLocacoes);
  console.log("Existe filme esgotado?", temFilmeEsgotado);
  console.log("Todos os clientes são VIP?", todosSaoVip);
}

// s) menu com while (true) e switch/case
const textoMenu =
  "1 - Listar filmes\n" +
  "2 - Cadastrar filme\n" +
  "3 - Apagar filme\n" +
  "4 - Buscar filme por título\n" +
  "5 - Filmes por gênero\n" +
  "6 - Filmes com estoque\n" +
  "7 - Título e diária dos filmes\n" +
  "8 - Listar clientes\n" +
  "9 - Cadastrar cliente\n" +
  "10 - Apagar cliente\n" +
  "11 - Listar locações\n" +
  "12 - Realizar locação\n" +
  "13 - Apagar locação\n" +
  "14 - Faturamento total\n" +
  "15 - Resumo\n" +
  "0 - Sair";

let sair = false;

while (true) {
  console.log(textoMenu);
  const opcao = prompt("Opção: ");

  switch (opcao) {
    case "1":
      listarFilmes();
      break;
    case "2":
      cadastrarFilme();
      break;
    case "3":
      apagarFilme();
      break;
    case "4":
      buscarFilme();
      break;
    case "5":
      filmesPorGenero();
      break;
    case "6":
      filmesComEstoque();
      break;
    case "7":
      tituloEDiaria();
      break;
    case "8":
      listarClientes();
      break;
    case "9":
      cadastrarCliente();
      break;
    case "10":
      apagarCliente();
      break;
    case "11":
      listarLocacoes();
      break;
    case "12":
      realizarLocacao();
      break;
    case "13":
      apagarLocacao();
      break;
    case "14":
      faturamentoTotal();
      break;
    case "15":
      resumo();
      break;
    case "0":
      sair = true;
      break;
    default:
      console.log("Opção inválida.");
  }

  // linha em branco pra separar do menu
  console.log("");

  // o break do switch só sai do switch, então esse encerra o while
  if (sair) {
    break;
  }
}

console.log("Encerrado.");
