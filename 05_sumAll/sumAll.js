// take two numbers (e.g., 3, 6), add them and all the numbers in between (3 + 4 + 5 + 6), return sum
// script returns ERROR if a number is negative or is not a number
// non-integers will give wonky results
const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let twoNumbers = [numOne, numTwo];
    if (numOne > 0 && numTwo > 0 && typeof(numOne) === 'number' && typeof(numTwo) === 'number') {
        // sort, but off of numerical value and not the stupid default unicode value
        // don't ask me why this works, it just does
        twoNumbers.sort(function(a,b) {
            return a - b;
        });
       // assign value of lower number to i, add i to sum and increment i by one 
       // until higher number is reached
        for (i = twoNumbers[0]; i <= twoNumbers[1]; i++) {
            sum += i;
            // almost forgot to actually return something
        } return sum;
    } else {
        // the easy part
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = sumAll;
