function majorityElement(nums: number[]): number {
    let counts = {};
    let n = nums.length;
    
    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    let major = Math.ceil(n / 2);
    for (let key in counts) {
        if (counts[key] >= major) {
            return parseInt(key);
        }
    }
}
