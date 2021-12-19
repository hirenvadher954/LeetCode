import java.io.*;
import java.util.HashSet;
class twoElementSum {
  public static void getPairOfSum(int arr[], int sum) {
    HashSet<Integer> myset = new HashSet<Integer> ();
    for (int i = 0; i<arr.length; ++i) {
      int j = sum - arr[i];
      if (myset.contains(j)) {
        System.out.println("Found elements with the given sum as " + sum + " is (" + arr[i] + ", " + j + ")");
      }
      myset.add(arr[i]);
    }
  }
  public static void main(String[] args) {
    int arr[] = { 1, 4, 45, 6, 10, 8 };
    int sum = 16;
    getPairOfSum(arr, sum);
  }
}
