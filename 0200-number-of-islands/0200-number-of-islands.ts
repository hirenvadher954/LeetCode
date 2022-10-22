function numIslands(grid: string[][]): number {
    let count = 0;

    let dfs = (grid, x: number, y: number) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] != '1') return;
        grid[x][y] = '#';
        dfs(grid, x + 1, y);
        dfs(grid, x - 1, y);
        dfs(grid, x, y + 1);
        dfs(grid, x, y - 1);
    };

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] == '1') {
                dfs(grid, x, y);
                count++;
            }
        }
    }
    return count;
}