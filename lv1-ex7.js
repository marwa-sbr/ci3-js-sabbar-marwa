let mots = ["chien", "nîmes", "air", "pays"];

let motLePlusLong = "";

for (let i = 0; i < mots.length; i++) {
  if (mots[i].length > motLePlusLong.length) {
    motLePlusLong = mots[i];
  }
}

console.log("Le mot le plus long est : " + motLePlusLong)