// Console - formatted output
let myObj = {
  name:'K',
  age:30
};
console.log("%O", myObj);
console.log("%o", myObj);
console.table(myObj);
console.dir(myObj);
console.dirxml(myObj);

// Rest Operator, instanceof operator, reduce method
function sum(...args) {
  if (args.length === 1) {
    const [firstArgs] = args;
    if (firstArgs instanceof Array)
      return sum(...firstArgs);
    else
      return firstArgs;
  }
  return args.reduce((a,b) => (a+b));
}

console.log(sum(1,2,3));
console.log(sum([3,3]));
console.log(sum(6));

// Reversing string - split, reverse and join method
let str = 'first';
let revStr = str.split('').reverse().join('');
console.log(`Original: ${str} \nReverse: ${revStr}`);

let revString = '';
for (let index = str.length-1; index >= 0; index--) 
  revString += str[index];
console.log(`Original: ${str} \nReverse: ${revString}`);

// Stategy pattern - replace switch case having many cases
const Animals = {
  dog(){
    console.log('Doggy');
  },
  cat(){
    console.log('Catty');
  },
  man(){
    console.log('Manny');
  },
  lion(){
    console.log('Liony');
  },
  tiger(){
    console.log('Tiggery');
  },
  zebra(){
    console.log('Zebray');
  },
  default(){
    console.log('Dafaulty');
  }
}

function MakeAnimalSpeak(name) {
  const animal = Animals[name] || Animals.default;
  animal();
}

MakeAnimalSpeak();
MakeAnimalSpeak('man');
MakeAnimalSpeak('DoNotExist');
MakeAnimalSpeak('cat');