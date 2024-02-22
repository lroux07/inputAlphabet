input.addEventListener("input", () => {
  const txt = document.querySelector("#txt");
  let tab = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A"
  ];

  const input = document.querySelector("#input").value;

  let index = tab.indexOf(input);

  if(index !== -1) {
    txt.textContent = tab[index + 1];
  } else if(index == -1) {
    txt.textContent = "La valeur n'est pas présente dans l'alphabet !";
  }
});