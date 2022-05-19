// /---/---/--- ~> 1 <~ ---/---/---/
console.log("/---/---/--- ~> 1 <~ ---/---/---/")

function verifyPalindrome(palindrome) {
  let inverseIndex = palindrome.length;
  let isEqual = 0;
  for (let index = 0; index < palindrome.length; index++) {
    inverseIndex -= 1;
    if (palindrome[index] === palindrome[inverseIndex]) {
      isEqual += 1;
    }
  }
  if (isEqual === palindrome.length) {
    return true
  }

  return false
  
}

console.log(verifyPalindrome("teste"));
// /---/---/--- ~> 2 <~ ---/---/---/
// console.log(" ");
// console.log("/---/---/--- ~> 2 <~ ---/---/---/")

// function maxArray(array) {
//   let value = array;
//   value.sort(function (a, b) { return a - b });
//   return indexOf(value)

// }
// console.log(maxArray([2, 3, 6, 7, 10, 1]));

// /---/---/--- ~> 3 <~ ---/---/---/
// console.log(" ");
// console.log("/---/---/--- ~> 3 <~ ---/---/---/")