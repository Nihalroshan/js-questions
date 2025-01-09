const data = [
  { id: 1, name: "test", age: 29, uniqueId: [{ id: 1932 }] },
  { id: 2, name: "test2", age: 26, uniqueId: [{ id: 1933 }] },
  { id: 3, name: "test3", age: 24, uniqueId: [{ id: 1934 }] },
  { id: 4, name: "test4", age: 28, uniqueId: [{ id: 1935 }] },
];

//         expected format = {
//   '1932': { id: 1, name: 'test', age: 29, uniqueId:[{id: 1932}] },
//   '1933': { id: 2, name: 'test2', age: 26, uniqueId: [{id: 1933}] },
//   '1934': { id: 3, name: 'test3', age: 24, uniqueId:  [{id: 1934}] },
//   '1935': { id: 4, name: 'test4', age: 28, uniqueId: [{id: 1935}] }
// }

// CODE I HAVE DONE: 

const formatted = data?.map((item) => {
  return {
    [item?.uniqueId[0]?.id]: item,
  };
});

//CORRECTED ONE: 
const formattedObj = data?.reduce((acc, curr) => {
    const uniqueId = curr?.uniqueId[0]?.id
    if(uniqueId){
        acc[uniqueId] = curr
    }
    return acc
},{})

console.log(formattedObj);
