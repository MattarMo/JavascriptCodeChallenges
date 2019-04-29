 //check if string is a palinedrome
 function CheckPalindrome(word1) { 

    let reverseWord1 = word1.split("").reverse().join("");
    if(word1 === reverseWord1) {
      return true;
    }
  
  return false; 
  }
    
  console.log( CheckPalindrome("mom"));