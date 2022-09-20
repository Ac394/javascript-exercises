const sumAll = function(firstNumber, secondNumber) {
    let bigNumber, smallNumber, sum = 0;
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || firstNumber < 0 || secondNumber < 0) {
        return 'ERROR';
    } else if (firstNumber > secondNumber) {
        bigNumber = firstNumber;
        smallNumber = secondNumber;
    } else {
        bigNumber = secondNumber;
        smallNumber = firstNumber;
    }
    for (i = smallNumber; i <= bigNumber; i++) {
        sum += i;
    } return sum;
};

// Do not edit below this line
module.exports = sumAll;