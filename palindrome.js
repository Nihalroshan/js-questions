//Check a given string palindrome

const checkPalindrome = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome("abba"));
