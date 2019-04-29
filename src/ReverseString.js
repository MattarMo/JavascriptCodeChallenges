//takes a string and reverses it
//you cannot reverse a string but you can reverse an array refer to methods below
function solution(A) {
  let rev = A.split("")
    .reverse()
    .join("");

  return rev;
}

console.log(solution("ReverseMe"));

/*
   The split() method splits a String object into an array of string by separating the string into sub strings.
   The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
   The join() method joins all elements of an array into a string.
   */
