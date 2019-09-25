function greeting(name){
  console.log(`Hello ${name}`);
}

// setTimeout allows us to run a function once after the interval of time.
setTimeout(greeting, 4000, 'John');     // Hello John (after 4 sec)

setTimeout(greeting(), 4000, 'Krish');  // Hello undefined (immediately)
// greeting() will immediately invoked with undefined argument and return undefined to 
// setTimeout(), thus setTimeout will not scheduled anything

// Canceling with clearTimeout
let timerId = setTimeout(
  () => alert('Alert will not come as scheduling will be cancelled with clearTimeout'), 2000);
console.log(timerId);
clearTimeout(timerId);  // cancel the scheduled method call
console.log(timerId);

let tId = setInterval(()=>console.log('tick'), 1000);
setTimeout(()=> {clearInterval(tId);}, 5000); // Will be stopped after 5 secs