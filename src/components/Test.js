const array = ['a','b','c','d']
const array2 = ['a','b']
console.log(array.indexOf('c'));

const newArray = array.filter(u=> (array2.length - array.indexOf(u)) > 0);
console.log(newArray)