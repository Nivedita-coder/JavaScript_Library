function palindrome(str, word) {
  let jum = 0;
  function count(word) {
    while (word.length >= str.length) {
      if (word.substring(0, str.length) == str) {
        jum++;
      }
      word = word.substring(1);
    }
  }
  count(word);
  count(reverseString(word));
  return jum;
}
function reverseString(str) {
  return str;
}
console.log(palindrome("nana", "banananana"));
