/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let sum = 0;
  let i = 0;
  while (i < s.length) {
    if (i < s.length - 1) {
      let twoSymbols = s.slice(i, i + 2);
      if (hashMap[twoSymbols]) {
        sum += hashMap[twoSymbols];
        i += 2;
        continue;
      }
    }
    let oneSymbol = s[i];
    sum += hashMap[oneSymbol];

    i += 1;
  }

  return sum;
};
