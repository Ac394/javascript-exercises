const repeatString = function(string, times) {
    if (times < 0) {
        return 'ERROR'
    } else {
    let newString = '';    
    while (times > 0) {
        newString += string;
        times--;        
    } return newString;
  }
};

// Do not edit below this line
module.exports = repeatString;
