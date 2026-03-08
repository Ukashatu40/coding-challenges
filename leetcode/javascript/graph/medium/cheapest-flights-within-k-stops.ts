function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number,
): number {
  let costs: number[] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  costs[src] = 0;

  for (let i = 0; i <= k; i++) {
    // Create a copy to ensure we only use costs from the PREVIOUS iteration
    let temp = [...costs];
    for (const [u, v, cost] of flights) {
      // If the source of this flight hasn't been reached yet, skip it
      if (costs[u] === Number.MAX_SAFE_INTEGER) continue;

      if (temp[v] > costs[u] + cost) {
        temp[v] = costs[u] + cost;
      }
    }
    costs = temp;
  }

  // Fix: check against MAX_SAFE_INTEGER, not MIN_SAFE_INTEGER
  return costs[dst] === Number.MAX_SAFE_INTEGER ? -1 : costs[dst];
}
