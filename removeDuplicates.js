/* Q. Remove duplicates from an array


    simplest way with build in functions is to use Set(arr), it seems that this is the most efficient way

*/

const arr = [2,3,5,3,6,2]

console.log([...new Set(arr)])