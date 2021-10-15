class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
   int globalMax = 0;
        int localMax = 0;
        for (int num : nums) {
            if (num == 0) {
                localMax = 0;
            } else {
                localMax++;
                globalMax = Math.max(globalMax, localMax);
            }
        }
        return globalMax;

    }
}
