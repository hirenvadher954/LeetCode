function generate(numRows: number): number[][] {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        result.push(row);
        for (let j = 1; j < result.length - 1; j++) {
            result[i][j] = result[i - 1][j-1] + result[i - 1][j];
        }
    }
    return result;
}