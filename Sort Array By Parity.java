class Solution {
    public int[] sortArrayByParity(int[] nums) {
             int start = 0;
        int end = nums.length - 1;
        int[] temp = new int[nums.length];
        for (int j : nums) {
            if (j % 2 == 0) {
                temp[start++] = j;
            } else {
                temp[end--] = j;
            }
        }
        return temp;
    }
}
