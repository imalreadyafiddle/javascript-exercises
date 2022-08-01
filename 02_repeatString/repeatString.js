const repeatString = function(string, num) {
    if (num < 0) {
        repeatedString = "ERROR";
    } else {
    repeatedString = string.repeat(num);
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
