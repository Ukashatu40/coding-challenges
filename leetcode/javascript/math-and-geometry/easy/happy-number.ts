function isHappy(n: number): boolean {
  const seen = new Set<number>();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }

  return n === 1;
}

function getNext(n: number): number {
  let totalSum = 0;

  while (n > 0) {
    const d = n % 10;
    totalSum += d * d;
    n = Math.floor(n / 10);
  }

  return totalSum;
}
