function Sum(...args) {
  if (args.length === 1) {
    const [firstArg] = args;
    if (firstArg instanceof Array) {
      return Sum(firstArg);
    }
    else
      return args[0];
  }

  return args.reduce((a, b) => a + b);
}

console.log(Sum(1, 2, 3));
console.log(Sum([1, 2, 3],[4,5]));
console.log(Sum(1, 2, 3,4,5,6));
console.log(Sum(6));
