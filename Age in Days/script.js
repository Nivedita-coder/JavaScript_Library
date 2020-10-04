function calculate() {

  const bday = Date.parse(document.getElementById("bday").value);
  const today = Date.now();
  const calc = Math.floor((today - bday) / (24 * 3600 * 1000));
  const result = document.getElementById("result");


  result.style.display = "block";
  result.value = "You are " + calc + " days old!";

}
