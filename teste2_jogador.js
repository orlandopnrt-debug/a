class JogadorFutebol {
  constructor(nome, posicao, idade, nacionalidade, altura, peso) {
    this._nome = nome;
    this._posicao = posicao.toLowerCase();
    this._idade = idade;
    this._nacionalidade = nacionalidade;
    this._altura = altura;
    this._peso = peso;
  }

  // --- GETTERS ---
  get nome() { return this._nome; }
  get posicao() { return this._posicao; }
  get idade() { return this._idade; }
  get nacionalidade() { return this._nacionalidade; }
  get altura() { return this._altura; }
  get peso() { return this._peso; }

  // --- SETTERS ---
  set nome(nome) { this._nome = nome; }
  set posicao(posicao) { this._posicao = posicao.toLowerCase(); }
  set idade(idade) { this._idade = idade; }
  set nacionalidade(nacionalidade) { this._nacionalidade = nacionalidade; }
  set altura(altura) { this._altura = altura; }
  set peso(peso) { this._peso = peso; }

  // --- MÉTODOS ---

  // Calcula os anos restantes para a aposentadoria por posição
  tempoParaAposentar() {
    let idadeAposentadoria = 0;

    if (this._posicao.includes("defesa") || this._posicao.includes("zagueiro") || this._posicao.includes("goleiro")) {
      idadeAposentadoria = 40;
    } else if (this._posicao.includes("meio") || this._posicao.includes("volante")) {
      idadeAposentadoria = 38;
    } else if (this._posicao.includes("atacante") || this._posicao.includes("ponta")) {
      idadeAposentadoria = 35;
    }

    return idadeAposentadoria - this._idade;
  }

  // Imprime todos os dados formatados
  imprimirDados() {
    console.log(`=== Dados do Jogador ===`);
    console.log(`Nome: ${this._nome}`);
    console.log(`Posição: ${this._posicao.toUpperCase()}`);
    console.log(`Idade: ${this._idade} anos`);
    console.log(`Nacionalidade: ${this._nacionalidade}`);
    console.log(`Altura: ${this._altura}m`);
    console.log(`Peso: ${this._peso}kg`);
    console.log(`Tempo para aposentadoria: ${this.tempoParaAposentar()} ano(s)`);
    console.log(`========================\n`);
  }
}

// --- EXEMPLO DE USO ---
const jogador1 = new JogadorFutebol("Carlos", "Atacante", 28, "Brasileiro", 1.75, 72);
jogador1.imprimirDados();

const jogador2 = new JogadorFutebol("Roberto", "Defesa", 34, "Português", 1.89, 85);
jogador2.imprimirDados();
