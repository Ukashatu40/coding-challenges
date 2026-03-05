// Find The Celebrity
// https://leetcode.com/problems/find-the-celebrity/
class Solution extends Relation {
  findCelebrity(n: number): number {
    let candidate = 0;
    for (let i = 1; i < n; i++) {
      if (this.knows(candidate, i)) {
        candidate = i;
      }
    }
    for (let i = 0; i < n; i++) {
      if (
        i !== candidate &&
        (this.knows(candidate, i) || !this.knows(i, candidate))
      ) {
        return -1;
      }
    }
    return candidate;
  }
}

// function knows(a: number, b: number): boolean {
//   // This function is a placeholder for the actual implementation
//   // that checks if person 'a' knows person 'b'.
//   // In a real scenario, this would be provided by the problem's environment.
//   return false; // Replace with actual logic
// }
