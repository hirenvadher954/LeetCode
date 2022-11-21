function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let merged: Array<Array<number>> = [];

    for (let i = 0; i < intervals.length; i++) {
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push([intervals[i][0], intervals[i][1]]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }

    return merged;
};