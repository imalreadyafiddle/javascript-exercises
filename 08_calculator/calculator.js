const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  const sum = numbers.reduce((sum, number) => sum + number, 0);
  return sum;
};

const multiply = function(numbers) {
  const product = numbers.reduce((product, number) => product * number, 1);
  return product;
};

const power = function(number, exponent) {
	return number ** exponent;
};

const factorial = function(num) {
	let result = num;
  if (num === 0 || num === 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    result = result * num;
  } return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
