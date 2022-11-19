/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while(mid<=high){
        switch(nums[mid]){
            case 0:
                swap(low++,mid++)
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(high--,mid)
                break;
                
        }
    }

    function swap(i,j){
        [nums[i],nums[j]] = [nums[j],nums[i]]
    }
};