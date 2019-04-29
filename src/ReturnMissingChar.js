//returns different character from word2
function ReturnDiffChar(word1, word2) {
  let splitWord1 = word1.split("");
  let splitWord2 = word2.split("");
  let totLen = splitWord1.length + splitWord2.length;
  console.log("size: ", totLen);
  let missChar = [];
  for (let i = 0; i < totLen; i++) {
    if (splitWord1[i] !== splitWord2[i]) {
      missChar.push(splitWord2[i]);
    }
  }

  let join = missChar.join("");
  console.log("missing character in string 2 is: ", join);
  return join;
}

console.log(ReturnDiffChar("timeoff", "timeoffa"));
