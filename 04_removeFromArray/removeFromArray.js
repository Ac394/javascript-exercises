const removeFromArray = function(array, ...args) {
    let newArray = array;
    for (let i = args.length; i >= 0; i--) {
        newArray = newArray.filter(e => e !== args[i]);  
    } return newArray;        
};

// Do not edit below this line
module.exports = removeFromArray;
