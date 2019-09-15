alert('Call from External Javascript');

console.log([1,2,3,4]);
console.log({a:1,b:2});

console.table([1,2,3,4]);
console.table({a:1,b:2});

console.error('This is an error');
console.warn('This is a warning');

console.time('timerLabel');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
console.timeEnd('timerLabel');

console.clear();