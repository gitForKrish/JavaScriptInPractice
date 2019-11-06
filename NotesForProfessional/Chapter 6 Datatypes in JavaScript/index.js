function Sum(...args) {
  if (args.length === 1) {
    const [firstArg] = args;
    if (firstArg instanceof Array) 
      return Sum(firstArg);
    else
      return firstArg;
  }
  return args.reduce((a, b) => a + b);
}

console.log(Sum(1, 2, 3));
console.log(Sum([1, 2, 3]));
console.log(Sum(6));
