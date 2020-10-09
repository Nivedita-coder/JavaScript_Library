const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function encryptText() {
  const form = document.forms[0];

  let title = document.getElementById("titleId");

  title.innerHTML = "Encrypted text";

  let shift = Number(form.shift.value);

  let sourceText = form.sourceText.value;

  form.sourceText.value = [...sourceText]
    .map((char) => encrypt(char, shift))
    .join("");
}

function decryptText() {
  const form = document.forms[0];
  let title = document.getElementById("titleId");

  title.innerHTML = "Plain text";

  let shift = Number(form.shift.value);
  let sourceText = form.sourceText.value;

  shift = (alphabet.length - shift) % alphabet.length;

  form.sourceText.value = [...sourceText]
    .map((char) => encrypt(char, shift))
    .join("");
}

function encrypt(char, shift) {
  let include = alphabet.includes(char.toUpperCase());

  if (include) {
    let position = alphabet.indexOf(char.toUpperCase());

    let newPosition = (position + shift) % alphabet.length;
    return alphabet[newPosition];
  } else return char;
}
