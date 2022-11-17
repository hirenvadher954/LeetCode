function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const n = matrix[0].length;
    let first_row_has_zero = false;
    let first_col_has_zero = false;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] == 0) {
                if (row == 0) {
                    first_row_has_zero = true;
                }
                if (col == 0) {
                    first_col_has_zero = true;
                }
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            if (matrix[row][0] == 0 || matrix[0][col] == 0) {
                matrix[row][col] = 0;
            }
        }
    }

    if(first_row_has_zero){
        for (let col = 0; col < n; col++) {
            matrix[0][col] = 0
        }
    }

    if(first_col_has_zero){
        for (let row = 0; row < m; row++) {
            matrix[row][0] = 0
        }
    }
}