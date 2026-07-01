function somar(a: number, b: number) {
  return a + b;
}

console.log(somar(5, 10));

// --- Annotation e Inference --- //

// variaveis
const produto: string = "Notebook";
const preco: number = 2500;

// objetos
const carro: { marca: string; ano: number } = {
  marca: "Toyota",
  ano: 2020,
};

/*
  A inferencia de tipos é um recurso do TypeScript que permite que o compilador deduza automaticamente o tipo de uma variável com base no valor atribuído a ela. Isso significa que, em muitos casos, não precisa declarar o tipo.
  
  Precisamos tipar funcões, pois o TypeScript não consegue inferir o tipo de retorno de uma função.
*/

// exercicio 01:
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();

  /*
    AJUSTES: 
     - tipagem do argumento da função normalizarTexto para string
     - ajuste de 'trims()' para 'trim()' no retorno da função
     - ajuste de 'toLowercase()' para 'toLowerCase()' no retorno da função  
  */
}
console.log(normalizarTexto("  Olá, Mundo!  "));

// exercicio 02:
const input = document.querySelector("input");
const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");

  if (!p) return;
  p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}
