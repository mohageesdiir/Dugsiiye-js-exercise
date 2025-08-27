function operate(a, b, callback) {
  return callback(a, b);
}

console.log("multiply");

function multiply(a, b) {
  return a * b;
}

console.log(`multiply ${operate(20, 4, multiply)}`);

console.log("==============");

console.log("divide");

function divide(a, b) {
  return a / b;
}

console.log(` division ${operate(25, 5, divide)}`);
