function majorityElement(nums: number[]): number {
    let count = 0;
    let candidate = 0;

    for (const num of nums) {
        if (count == 0) {
            candidate = num;
            count = 1;
        } else if (num == candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}