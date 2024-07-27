function changeColor (image: number[][], sr: number, sc:number, color: number): number[][] {
    const n = image.length;
    const m = image[0].length;

    const currentColor = image[sr][sc];
    image[sr][sc] = color;

    if (sr - 1 >= 0 && image[sr - 1][sc] === currentColor) changeColor(image, sr - 1, sc, color);
    if (sr + 1 < n && image[sr + 1][sc] === currentColor) changeColor(image, sr + 1, sc, color);
    if (sc - 1 >= 0 && image[sr][sc - 1] === currentColor) changeColor(image, sr, sc - 1, color);
    if (sc + 1 < m && image[sr][sc + 1] === currentColor) changeColor(image, sr, sc + 1, color);

    return image;
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {

    if (image[sr][sc] !== color) {
        changeColor(image, sr, sc, color);
    }

    return image;
};