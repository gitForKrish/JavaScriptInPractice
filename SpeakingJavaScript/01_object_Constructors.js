var person = {
    name:'User1',
    describe: function(){
        console.log('Person named '+ this.name);
    }
}

console.log(person.name);
person.describe();

person.name = 'User2';
person.describe();

person.newProperty = 'Property added';  // property created automatically

// 'in' operator checks whether a property exists
console.log('newProperty' in person);
console.log('unknownProperty' in person);

console.log(person.newProperty !== undefined);
console.log(person.unknownProperty === undefined); // Reading a property that doesn't exists return undefined

// 'delete' operator use to remove property from object
delete person.newProperty;
console.log('newProperty' in person);

// Extracting Method
var func = person.describe;
func();     // Person named undefined
// when we extract a method, it loses the connection with object and 'this' will become 'undefined'.
// To solve this issue, you need to use 'bind()'.
var bindFunc = person.describe.bind(person);
bindFunc();
// or
var boundFunc = func.bind(person);
boundFunc();

/************************************************************************************************/
var obj = {
    'not an identifier': 123
}
console.log(obj['not an identifier']);
obj['not an identifier'] = 456;
console.log(obj['not an identifier']);

var hw = {
    hello: 'world'
}
console.log(hw.hello);
console.log(hw['hello']);

var x = 'hello';
console.log(hw[x]);

console.log(hw['hel'+'lo']);

/************************************************************************************************/
// Functions Inside a Method - Every function has its own special variable 'this'.
var user = {
    name: 'Ram',
    friends: ['Jack', 'Stanly'],
    logHiToFriends: function(){
        this.friends.forEach(function(friend){  // each function has its own 'this' 
            console.log(this.name + ' says hi to ' + friend);   // undefined says hi to Jack/Stanley
        });
    }
}
user.logHiToFriends();

// To fix the above issue
// Fix 1
user.logHiToFriends = function(){
    var that = this;    // as 'this' is overwritten by inner function, thus store it into 'that'
    this.friends.forEach(function(friend){
        console.log(that.name + ' says hi to '+ friend);
    });
}
user.logHiToFriends();

// Fix 2
user.logHiToFriends = function(){
    this.friends.forEach(function(friend){
        console.log(this.name + ' says hi to '+ friend);
    }, this);   // passing 'this' to inner function
}
user.logHiToFriends();

/************************************************************************************************/
function Point(x,y){ 
    this.x = x;
    this.y = y;
}
Point.prototype.dist = function(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
}

// function Point sets up the instance data and specific to each instance like p1, p2
var p1 = new Point(3,5);
var p2 = new Point(8,10);

// Point.prototype contains an object with the methods which is shared among all instances like p1, p2
console.log(p1.dist());
console.log(p2.dist());

/************************************************************************************************/