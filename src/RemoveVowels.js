//removes voewls from string
function ReturnVowels(sen) {
  let split = sen.split("");
  let len = split.length;

  let vowels = [];
  for (let i = 0; i < len; i++) {
    if (
      split[i] !== "a" &&
      split[i] !== "e" &&
      split[i] !== "i" &&
      split[i] !== "o" &&
      split[i] !== "u"
    ) {
      vowels.push(split[i]);
    }
  }
  let join = vowels.join("");
  return join;
}

console.log(ReturnVowels("timeoff"));
//output = tmff
