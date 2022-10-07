function pivotIndex(nums: number[]): number {
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b);
    let index = 0;

    while (index < nums.length) {
        leftSum += nums[index];
        if (leftSum == rightSum) return index;
        rightSum -= nums[index];
        index++;
    }
    return -1;
};