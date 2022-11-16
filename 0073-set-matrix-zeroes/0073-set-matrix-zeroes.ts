function setZeroes(matrix: number[][]): void {
    const row = matrix.length;
    const col = matrix[0].length;
    let rows_zero = [];
    let col_zero = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 0) {
                rows_zero.push(i);
                col_zero.push(j);
            }
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (rows_zero.includes(i) || col_zero.includes(j)) {
                matrix[i][j] = 0;
            }
        }
    }
}
