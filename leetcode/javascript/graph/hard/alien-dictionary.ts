// Alien Dictionary
// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

// Example 1:

// Input:
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
// Output: "wertf"
// Example 2:

// Input:
// [
//   "z",
//   "x"
// ]
// Output: "zx"
// Example 3:

// Input:
// [
//   "z",
//   "x",
//   "z"
// ]
// Output: ""
// Explanation: The order is invalid, so return "".
// Note:

// You may assume all letters are in lowercase.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.

function alienOrder(words: string[]): string {
  const graph = new Map<string, Set<string>>();
  const inDegree = new Map<string, number>();

  // Initialize the graph and in-degree map
  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) {
        graph.set(char, new Set());
      }
      if (!inDegree.has(char)) {
        inDegree.set(char, 0);
      }
    }
  }

  // Build the graph and calculate in-degrees
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);
    let foundDifference = false;

    for (let j = 0; j < minLength; j++) {
      const char1 = word1[j];
      const char2 = word2[j];

      if (char1 !== char2) {
        if (!graph.get(char1)!.has(char2)) {
          graph.get(char1)!.add(char2);
          inDegree.set(char2, inDegree.get(char2)! + 1);
        }
        foundDifference = true;
        break;
      }
    }

    // Check for invalid case where word2 is a prefix of word1
    if (!foundDifference && word1.length > word2.length) {
      return "";
    }
  }

  // Topological sort using Kahn's algorithm
  const queue: string[] = [];
  for (const [char, degree] of inDegree.entries()) {
    if (degree === 0) {
      queue.push(char);
    }
  }

  let result = "";
  while (queue.length > 0) {
    const char = queue.shift()!;
    result += char;

    for (const neighbor of graph.get(char)!) {
      inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
      if (inDegree.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result.length === inDegree.size ? result : "";
}
