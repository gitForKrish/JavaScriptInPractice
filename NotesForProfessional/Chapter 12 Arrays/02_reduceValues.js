let numbers = [10,20,30,80,10];
let sum = numbers.reduce((a,b) => a+b); // Reduce method: first para is accumulator

console.log(sum);

console.log(numbers.reduce((a,b)=> a+b,50)); // 50 is the initial value, will be assigned to a

// Flaten array of objects
let objArray = [
  {
    key:'one',
    value: 1
  },
  {
    key:'two',
    value:2
  },
  {
    key:'three',
    value:3
  },
  {
    key:'four',
    value:4
  },
];
let flatObject = objArray.reduce(
  (obj, curr) => {
    obj[curr.key] = curr.value;
    return obj;  
  },{});
console.log(flatObject);