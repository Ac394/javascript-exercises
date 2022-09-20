const reverseString = function(string) {
    //Stam Version
    return string.split('').reverse().join('');
    
    //My Version Below
    // let newString = '';
    // let letter;
    // let i = string.length;
    // while (i >= 0) {
    //     letter = string.charAt(i);
    //     newString += letter;
    //     i--
    // } return newString
};

// Do not edit below this line
module.exports = reverseString;
