//Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

const arr1 = [1,2,1]
const arr2 = [1,4,1]

function findSquare(arr1, arr2){
  if (arr1.length !== arr2.length) return false
  
  
  const map = new Map()
  
  for(let i = 0; i< arr1.length; i++){
    map.set(arr1[i]*arr1[i], true)
  }
  console.log(map)
  
  for(let j=0;j<arr2.length;j++){
    if(!map.get(arr2[j])){
      return false
    }
  }
  
  return true
  
  
  
}


console.log(findSquare(arr1,arr2))
