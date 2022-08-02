// take a farenheit temp, return it as celsius, rounding to one decimal point if needed
const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9);
  return Math.round(cTemp * 10) / 10;
};

// take a celsius temp, return it as farenheit, rounding to one decimal point if needed
const ctof = function(cTemp) {
  let fTemp = (cTemp * 9/5 + 32);
  return Math.round(fTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
