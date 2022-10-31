function twoSum(nums: number[], target: number): number[] {
    let seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(seen.has(target - nums[i])) {
            return [seen.get(target - nums[i]), i];
        }
        seen.set(nums[i], i);
    }
}