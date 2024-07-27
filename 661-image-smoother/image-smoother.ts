function calcFloor(img: number[][], i: number, j: number): number {
    let n: number = img.length;
    let m: number = img[0].length;
    let nums: number[] = [];

    for (let row = i - 1; row <= i + 1; row++) {
        for (let cols = j - 1; cols <= j + 1; cols++) {
            if (row >= 0 && cols >= 0 && row < n && cols < m) {
                const num = img[row][cols];

                nums.push(num);
            }
        }
    }

    return Math.floor(nums.reduce((a, b) => a+b) / nums.length);
}

function imageSmoother(img: number[][]): number[][] {
    let n: number = img.length;
    let m: number = img[0].length;
    let ans: number[][] = new Array(n).fill(0).map(() => (new Array(m).fill(0)));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            ans[i][j] = calcFloor(img, i, j);
        }
    }

    return ans;
};