//remove duplicate numbers from an array
const removeDups = a => {
  let b = [];
  let len = a.length;
  a.sort();

  let temp;
  for (let i = 0; i < len; i++) {
    if (a[i] !== temp) {
      b.push(a[i]);
      temp = a[i];
    }
  }
  return b;
};

console.log(removeDups([1, 2, 5, 2, 1, 8]));
