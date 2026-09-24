const prompt = require("prompt-sync")();

// --- MANIPULAÇÃO DE OBJETOS ---
// Cria um objeto com três propriedades básicas
let person = { nome: "Ana", idade: 25, aprovado: true };
console.log(person);

// Adiciona dinamicamente uma nova propriedade chamada 'city' ao objeto
person.city = "Manaus";
console.log(person);

// Remove permanentemente a propriedade 'aprovado' do objeto
delete person.aprovado;
console.log(person);

// --- ESTRUTURA FOR...IN ---
// O loop 'for...in' percorre cada chave (propriedade) dentro do objeto 'person'
for (let key in person) {
  // Acessa o nome da propriedade (key) e o seu valor correspondente (person[key])
  console.log(key, "✈", person[key]);
}

// --- MÉTODO FOREACH ---
let fruits = ["maçã", "banana", "uva"];
// O 'forEach' executa uma função para cada item do array sem alterar o array original
fruits.forEach(function (fruit, index) {
  // Recebe o item atual (fruit) e a sua posição no array (index)
  console.log(index, "⟹", fruit);
});

// --- MÉTODO MAP ---
let prices = [10, 20, 30];
// O 'map' transforma o array, retornando um NOVO array com os valores modificados
let withTax = prices.map(function (price) {
  // Multiplica cada preço por 1.1 para aplicar uma taxa de 10%
  return price * 1.1;
});
console.log(withTax);

// --- MÉTODO FILTER ---
let ages = [15, 23, 50, 60, 12, 3];
// O 'filter' cria um NOVO array contendo apenas os elementos que passam no teste lógico
let adults = ages.filter(function (age) {
  // Retorna verdadeiro (mantém no array) apenas se a idade for maior ou igual a 18
  return age >= 18;
});
console.log(adults);
console.log(adults.length); // Exibe a quantidade de itens que passaram no filtro

// --- MÉTODO FIND ---
let users = [
  { id: 1, n: "bruno" },
  { id: 2, n: "Ana" },
];
// O 'find' busca e retorna o PRIMEIRO elemento do array que satisfaz a condição
// Aqui usamos uma arrow function curta (u => u.id === 2) para buscar pelo ID igual a 2
let user = users.find((u) => u.id === 2);
console.log(user);

// --- MÉTODO REDUCE ---
let nums = [1, 2, 3, 4, 5];
// O 'reduce' reduz todos os valores do array a um único valor final acumulado
let total = nums.reduce(function (acc, n) {
  // Multiplica o acumulador (acc) pelo número atual (n) a cada iteração
  return acc * n;
}, 1); // O número 1 no final é o valor inicial do acumulador (acc)
console.log(total);
