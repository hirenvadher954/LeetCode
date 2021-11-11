class Solution {
    public void rotate(int[] nums, int k) {
         if (nums.length == 0) {
            return;
        }
        int[] temp = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            temp[(i + k) % nums.length] = nums[i];
        }
        Arrays.setAll(nums, i -> temp[i]);
    }
}
