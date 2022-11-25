function majorityElement(nums: number[]): number {
    let count = {}
    let n = nums.length
    for(let i = 0; i<n;i++){
        if(count[nums[i]]){
            count[nums[i]] += 1;
        }else{
            count[nums[i]]  = 1;
        }
    }
    let major = Math.ceil(n / 2);
    for(let key in count){
        if(count[key]>=major){
            return parseInt(key);
        }
    }
};
