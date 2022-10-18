const fibonacci = function(number) {
    let array =[0,1];
    number = +number;
    if (number < 0) return 'OOPS';    
    for (let i = 2; i <= number+1; i++) {
        array[i] = array[i-1] + array[i-2];
    }
    return array[number];
};

// Do not edit below this line
module.exports = fibonacci;
