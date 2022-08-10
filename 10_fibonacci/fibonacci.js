const fibonacci = function(num) {
    num = parseInt(num)
    if (typeof(num) !== "number" || num <= 0) {return "OOPS"}
    var n1 = 1, n2 = 0, temp;
    while (num > 0) {
        temp = n1;
        n1 = n1 + n2;
        n2 = temp;
        num--;
    }; return n2;
};

// Do not edit below this line
module.exports = fibonacci;
