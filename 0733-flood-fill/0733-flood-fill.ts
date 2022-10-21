function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image[sr][sc] == color) return image;
    let oldColor = image[sr][sc];
    let fill = (x, y) => {
        if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] != oldColor) return;
        image[x][y] = color;
        fill(x + 1, y);
        fill(x - 1, y);
        fill(x, y + 1);
        fill(x, y - 1);
    }
    fill(sr, sc);
    return image;
}
