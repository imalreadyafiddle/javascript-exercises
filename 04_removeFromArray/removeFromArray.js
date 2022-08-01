const removeFromArray = function(array, ...argsToRemove) {
    
    for (i = argsToRemove.length - 1; i >= 0; i--) {
        array = array.filter(number => number !== argsToRemove[i]);
    }
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
