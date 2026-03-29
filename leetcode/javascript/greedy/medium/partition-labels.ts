function partitionLabels(s: string): number[] {
  const lastOccurrence: Record<string, number> = {};
  const result: number[] = [];
  let start = 0;
  let end = 0;

  // Record the last occurrence of each character
  for (let i = 0; i < s.length; i++) {
    lastOccurrence[s[i]] = i;
  }

  // Iterate through the string to determine partitions
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastOccurrence[s[i]]);

    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }

  return result;
}

// Example usage:
const s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s)); // Output: [9,7,8]
