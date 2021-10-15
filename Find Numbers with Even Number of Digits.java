class Solution {
    public int findNumbers(int[] nums) {
          int count = 0;
        for (int num :
                nums) {
            boolean evenNumber = Integer.toString(num).length() % 2 == 0;
            if (evenNumber)
                count++;
        }
        return count;
    }
}
