function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue: [string, number][] = [[beginWord, 1]];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift()!;

    if (currentWord === endWord) return level;

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = "a".charCodeAt(0); c <= "z".charCodeAt(0); c++) {
        const newWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);
        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0;
}
