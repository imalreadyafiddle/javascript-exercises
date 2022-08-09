const palindromes = function (string) {
    // store a regex expression that identifies non alphanumeric chars
    var reggie = /[\W_]/g;
    var lowerString = string.toLowerCase().replace(reggie, '');
    var reverselowerString = lowerString.split('').reverse().join('');
    return lowerString === reverselowerString;
    // convert string to lowercase with no punctuation
    // evaluate if string == string.reverse
        // return true or false
};

// Do not edit below this line
module.exports = palindromes;
