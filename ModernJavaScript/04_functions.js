// function declaration
function greet1(){
  console.log('Hello there');
}

greet1();

function greet2(firstName, lastName){
  console.log(`Hello ${firstName} ${lastName}`);
}
greet2('Jack', 'William');
greet2();

function greet3(fname = 'Jack', lname='William'){
  console.log(`Hello ${fname} ${lname}`);
}
greet3();
greet3('Krish', 'Mandal');

// Function Expression
const square = function(x=3){
  console.log(x*x);
};

square();
square(5);

// IIFEs
(function(){
  console.log('IIFE');
})();

(function(num){
  console.log(`IIFE is called with number ${num}`)
})(3);

// Property Methods
// When functions are put inside an Object - that is call Method
const todo = {
  add:function(){
    console.log('Add todo...');
  },
  edit:function(id){
    console.log(`Edit todo ${id} ...`);
  }
}

todo.delete = function(){
  console.log('Delete todo ...');
}

todo.add();
todo.edit(20);
todo.delete();