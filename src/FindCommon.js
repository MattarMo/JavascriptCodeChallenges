//finds common characters from two strings
function FindCommon(sen1, sen2) {
  let split1 = sen1.split("");
  let split2 = sen2.split("");
  let match = [];
  const length = split1.length + split2.length;

  for (let i = 0; i < length; i++) {
    if (split1[i] === split2[i]) match.push(split1[i]);
  }
  let join = match.join("");
  return join;
}

console.log(FindCommon("timeoff", "timeout"));
