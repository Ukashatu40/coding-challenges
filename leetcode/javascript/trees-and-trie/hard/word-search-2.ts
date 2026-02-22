function findWords(board: string[][], words: string[]): string[] {
  const trie = new Trie();
  const result: string[] = [];
  const m = board.length;
  const n = board[0].length;

  for (const word of words) {
    trie.insert(word);
  }

  const dfs = (i: number, j: number, node: TrieNode, path: string) => {
    if (node.getEnd()) {
      result.push(path);
      node.setEnd(false); // Avoid duplicates
    }

    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] === "#") {
      return;
    }

    const char = board[i][j];
    if (!node.containsKey(char)) {
      return;
    }

    board[i][j] = "#"; // Mark as visited
    dfs(i + 1, j, node.get(char), path + char);
    dfs(i - 1, j, node.get(char), path + char);
    dfs(i, j + 1, node.get(char), path + char);
    dfs(i, j - 1, node.get(char), path + char);
    board[i][j] = char; // Backtrack
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, trie.root, "");
    }
  }

  return result;
}

class TrieNode {
  links: (TrieNode | null)[] = new Array(26).fill(null);
  isEnd: boolean = false;

  constructor() {}

  containsKey(char: string): boolean {
    return this.links[char.charCodeAt(0) - "a".charCodeAt(0)] !== null;
  }

  get(char: string): TrieNode | null {
    return this.links[char.charCodeAt(0) - "a".charCodeAt(0)];
  }

  put(char: string, node: TrieNode): void {
    this.links[char.charCodeAt(0) - "a".charCodeAt(0)] = node;
  }

  setEnd(): void {
    this.isEnd = true;
  }

  getEnd(): boolean {
    return this.isEnd;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node: TrieNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let currenChar = word[i];
      if (!node.containsKey(currenChar)) {
        node.put(currenChar, new TrieNode());
      }
      node = node.get(currenChar);
    }

    node.setEnd();
  }
}
