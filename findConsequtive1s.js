/* Program to find the max count of consecutive 1's in an array
 array = [2,1,2,1,1,1,3,4,1,1]

*/

const findConsequtive1s = (array) => {
  let maxCount = 0;
  let lastMax = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      maxCount += 1;
    } else if (maxCount > lastMax) {
      lastMax = maxCount;
      maxCount = 0;
    } else {
      maxCount = 0;
    }
  }

  return lastMax
};

console.log(findConsequtive1s([2, 1, 2, 1, 1, 1, 3, 4, 1, 1]))
