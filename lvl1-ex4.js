function triangleArea(width, height) {
  let area = width * height;
}
let width = prompt("Entrez la base du traingle :");
let height = prompt("Entrez la hauteur du triangle :");

width = parseInt(width);
height = parseInt(height);

let area = (width * height) / 2;

console.log("L'air du triangle est : " + area); // Prints undefined
