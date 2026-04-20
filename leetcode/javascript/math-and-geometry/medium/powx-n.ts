function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;
  let currentProduct = x;

  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    if (i % 2 === 1) {
      result *= currentProduct;
    }
    currentProduct *= currentProduct;
  }

  return result;
}
