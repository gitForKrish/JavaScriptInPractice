var a = 1;
let b = 2;
const c = 3;
console.log('Global Scope - Initial :', a,b,c);

function test(){
  var a = 4;
  let b =5;
  const c = 6;
  console.log('Function Scope :', a,b,c);
}
test();
console.log('Global Scope - after function call :', a,b,c);

if(true){
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('Block (IF) Scope :', a,b,c);
}
console.log('Global Scope - after if block scope', a,b,c);

var a = 10; // Redefining is possible
// let b = 11; // SyntaxError: Identifier 'b' has already been declared

for (let b = 0; b < 5; b++) {
  console.log('Loop with let:', b);  
}
console.log('Global Scope - after for block scope', a,b,c);

for (var a = 0; a < 5; a++) {
  console.log('Loop with var:', a);    
}
console.log('Global Scope - after for block scope', a,b,c);