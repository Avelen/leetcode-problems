function kthDistinct(arr: string[], k: number): string {
    let hash = {}

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = hash[arr[i]] + 1 || 1;
    }

    for (let h in hash) {
        if (hash[h] === 1 && k === 1) return h;

        if (hash[h] === 1) {
            k-= 1;
        }
    }

    return '';
};