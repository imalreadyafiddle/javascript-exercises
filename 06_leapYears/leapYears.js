// Determine if a given year is a leap year, return true if so, false if not.
const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}
// Do not edit below this line
module.exports = leapYears;
