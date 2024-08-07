class UnionFind {
    constructor() {
        this.parent = {};
        this.rank = {};
        this.value = {};
    }

    find(x) {
        if (this.parent[x] === undefined) {
            this.parent[x] = x;
            this.rank[x] = 0;
            this.value[x] = 1.0;
            return x;
        }

        if (this.parent[x] !== x) {
            let originalParent = this.parent[x];
            this.parent[x] = this.find(this.parent[x]);
            this.value[x] *= this.value[originalParent];
        }

        return this.parent[x];
    }

    union(x, y, val) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
                this.value[rootY] = this.value[x] / (this.value[y] * val);
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
                this.value[rootX] = this.value[y] * val / this.value[x];
            } else {
                this.parent[rootY] = rootX;
                this.value[rootY] = this.value[x] / (this.value[y] * val);
                this.rank[rootX]++;
            }
        }
    }
}

function checkContradictions(equations, values) {
    let uf = new UnionFind();

    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let value = values[i];

        if (uf.find(a) === uf.find(b)) {
            if (Math.abs(uf.value[a] / uf.value[b] - value) > 1e-5) {
                return true;
            }
        } else {
            uf.union(a, b, value);
        }
    }

    return false;
}
