const nombreSecret = Math.floor(Math.random() * 100) + 1;

let devine = 0;

while (devine !== nombreSecret) {
  devine = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));

  if (devine < nombreSecret) {
    alert("Trop petit !");
  } else if (devine > nombreSecret) {
    alert("Trop grand !");
  } else if (devine === nombreSecret) {
    alert("Bravo !");
  } else {
    alert("Veuillez entrer un nombre valide !");
  }
}
