const {
    uniqueValues,
    letterFrequency,
    sortByKey,
    deepClone,
    intersection,
  } = require('./extended_formatting.js');
  
  console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); 
  console.log(letterFrequency('hello')); 
  console.log(sortByKey([{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }], 'age')); 
  console.log(deepClone({ a: 1, b: { c: 2 } })); 
  console.log(intersection([1, 2, 3], [2, 3, 4])); 
  