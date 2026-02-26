class TrieNode {
  children: Record<string, TrieNode> = {};
  word: boolean = false;
}
class WordDictionary {
  trie: TrieNode;
  constructor() {
    this.trie = new TrieNode();
  }

  addWord(word: string): void {
    let node: TrieNode = this.trie;

    for (let char of word.split("")) {
      if (!node.children.hasOwnProperty(char)) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.word = true;
  }

  searchInNode(word: string, node: TrieNode): boolean {
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.hasOwnProperty(char)) {
        if (char === ".") {
          for (const letter of Object.keys(node.children)) {
            const child = node.children[letter];
            if (this.searchInNode(word.substring(i + 1), child)) {
              return true;
            }
          }
        }
        return false;
      } else {
        node = node.children[char];
      }
    }

    return node.word;
  }
  search(word: string): boolean {
    return this.searchInNode(word, this.trie);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
