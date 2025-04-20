let n = parseInt(prompt("Entrez le nombre de termes de la suite de Fibonacci :"));

let a = 0, b = 1;

console.log("Suite de Fibonacci :");

for (let i = 0; i < n; i++) {
  console.log(a);
  let suivant = a + b;
  a = b;
  b = suivant;
};