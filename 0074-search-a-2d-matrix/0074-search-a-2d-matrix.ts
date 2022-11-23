function searchMatrix(matrix: number[][], target: number): boolean {
    let flat_matrix = matrix.flat();
    if(flat_matrix.includes(target)){
        return true;
    }
    return false;
};