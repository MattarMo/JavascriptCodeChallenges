//remove duplicates from string in an array
const removeDupsInString = a => {
  let b = [];
  let len = a.length;

  let temp;
  for (let i = 0; i < len; i++) {
    if (a[i] !== temp) {
      b.push(a[i]);
      temp = a[i];
    }
  }
  return b;
};
console.log(removeDupsInString("ABBACCA"));
