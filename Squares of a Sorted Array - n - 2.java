class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int left = 0;
        int right = n-1;
        for(int index = n-1;index>=0;index--){
            if(Math.abs(nums[left])>nums[right]){
                result[index] = nums[left] * nums[left++];
            }else{
                 result[index] = nums[right] * nums[right--];
            }
        }
        return result;
}
}
