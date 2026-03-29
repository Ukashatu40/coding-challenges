function mergeTriplets(triplets: number[][], target: number[]): boolean {
  const maxValues = [0, 0, 0];

  for (const triplet of triplets) {
    if (
      triplet[0] <= target[0] &&
      triplet[1] <= target[1] &&
      triplet[2] <= target[2]
    ) {
      maxValues[0] = Math.max(maxValues[0], triplet[0]);
      maxValues[1] = Math.max(maxValues[1], triplet[1]);
      maxValues[2] = Math.max(maxValues[2], triplet[2]);
    }
  }

  return (
    maxValues[0] === target[0] &&
    maxValues[1] === target[1] &&
    maxValues[2] === target[2]
  );
}

// Example usage:
const triplets = [
  [2, 5, 3],
  [1, 8, 4],
  [1, 7, 5],
];
const target = [2, 7, 5];
console.log(mergeTriplets(triplets, target)); // Output: true
