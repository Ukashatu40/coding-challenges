/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let minValue = -2147483648;
  let maxValue = 2147483647;
  let isNegative = x < 0;

  let strValue = "";
  if (isNegative) {
    strValue = `${x}`.slice(1);
  } else {
    strValue = `${x}`;
  }

  let reversed = +strValue.split("").reverse().join("");

  if (reversed < minValue || reversed > maxValue) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
};
