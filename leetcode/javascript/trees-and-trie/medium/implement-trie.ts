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

  searchPrefix(word: string): TrieNode | null {
    let node: TrieNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let currenChar = word[i];
      if (node.containsKey(currenChar)) {
        node = node.get(currenChar);
      } else {
        return null;
      }
    }
    return node;
  }

  search(word: string): boolean {
    let node: TrieNode | null = this.searchPrefix(word);
    return node !== null && node.getEnd();
  }

  startsWith(prefix: string): boolean {
    let node: TrieNode | null = this.searchPrefix(prefix);
    return node !== null;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
