const add = function(...numbers) {
	let result = 0;
  for (const number of numbers) {
    result += number;
  } return result;
};

const subtract = function(...numbers) {
	let result = 0;
  for (const number of numbers) {
    if (result === 0) {
      result = number
    } else { result -= number}    
  } return result;
};

const sum = function(array) {
	let result = 0;
  for (i = 0; i < array.length; i++) {
    result += parseInt(array[i]);
  } return result;
};

const multiply = function(array) {
  let result = 1;
  for (i = 0; i < array.length; i++) {
    result *= array[i];    
  } return result;
};

const power = function(a,b) {
  return Math.pow(a,b);  
};

const factorial = function(a) {
	if ( a == 0) {
    return 1
  }  
  for (i = a-1; i > 1; i--) {
    a *= i;
  }
  return a;
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
