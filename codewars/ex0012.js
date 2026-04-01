// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let individualWords = str.split(" ");
  individualWords.forEach((word, index) => {
    if (!/[a-z]/i.test(word)) return;
    individualWords[index] = word.slice(1) + word.slice(0, 1) + "ay";
  });
  newStr = individualWords.join(" ");
  return newStr;
}

console.log(pigIt("Pig latin is cool !"));
