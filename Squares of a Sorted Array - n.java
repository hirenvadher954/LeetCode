class Solution {
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
         int k;
        for (k = 0; k < n; k++) {
            if (nums[k] >= 0) {
                break;
            }
        }
        int i = k - 1;
        int j = k;
        int index = 0;
        int[] temp = new int[n];
        while (i >= 0 && j < n) {
            if (nums[i] * nums[i] < nums[j] * nums[j]) {
                temp[index] = nums[i] * nums[i];
                i--;
            } else {
                temp[index] = nums[j] * nums[j];
                j++;
            }
            index++;
        }
        while (i >= 0) {
            temp[index++] = nums[i]*nums[i--];
        }
        while (j < n) {
            temp[index++] = nums[j]*nums[j++];
        }
        System.arraycopy(temp, 0, nums, 0, temp.length);
        return nums;
    }
}
