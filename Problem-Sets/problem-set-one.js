// 1. Palindrome Number

function determineIfIntegerIsAPalindrome(integer) {
  // convert integer to string
  let integerStr = integer.toString();
  // create An array of substrings
  let integerArr = integerStr.split("");
  // reverse elements in the array
  let reversedArrayElements = integerArr.reverse();
  // combine substrings into single string
  let combineIntegers = reversedArrayElements.join("");
  if (combineIntegers == integer) {
    return true;
  } else return false;
}

console.log(determineIfIntegerIsAPalindrome(203));
