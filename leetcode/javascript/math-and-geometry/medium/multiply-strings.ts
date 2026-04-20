function multiply(num1: string, num2: string): string {
  const m = num1.length,
    n = num2.length;
  const pos = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
      const p1 = i + j,
        p2 = i + j + 1;
      const sum = mul + pos[p2];

      pos[p1] += Math.floor(sum / 10);
      pos[p2] = sum % 10;
    }
  }

  let result = "";
  for (const p of pos) {
    if (!(result === "" && p === 0)) {
      result += p.toString();
    }
  }

  return result === "" ? "0" : result;
}
