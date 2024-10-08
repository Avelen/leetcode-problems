class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (node[c] == null) node[c] = {};
            node = node[c];
        }
        node.isWord = true;
    }

    traverse(word) {
        let node = this.root;
        for (let c of word) {
            node = node[c];
            if (node == null) return null;
        }
        return node;
    }

    search(word) {
        const node = this.traverse(word);
        return node != null && node.isWord === true;
    }

    startsWith(prefix) {
        const node = this.traverse(prefix);
        return node != null;
    }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */