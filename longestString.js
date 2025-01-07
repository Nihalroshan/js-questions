// Write a program to find the longest word in a given sentence?

const findLongestWord = (string) => {
  const strArr = string.split(" ");
  let longestWord = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    if(strArr[i].length > longestWord.length){
        longestWord = strArr[i]
    }
  }
  return longestWord
};


console.log(findLongestWord("In this sentence the longest word."))

