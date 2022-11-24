function searchMatrix(matrix: number[][], target: number): boolean {
    let row_length = matrix.length;
    let col_length = matrix[0].length;
    let low = 0;
    let high = (row_length * col_length) - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let mid_element = matrix[Math.floor(mid / col_length)][mid % col_length];
        if (mid_element === target) {
            return true;
        } else if (mid_element < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}