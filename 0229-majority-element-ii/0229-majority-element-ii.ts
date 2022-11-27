function majorityElement(nums: number[]): number[] {

  let number1: number = -1, number2: number = -1, count1: number = 0, count2: number = 0, len: number = nums.length;
  for (let i: number = 0; i < len; i++) {
    if (nums[i] == number1)
      count1++;
    else if (nums[i] == number2)
      count2++;
    else if (count1 == 0) {
      number1 = nums[i];
      count1 = 1;
    } else if (count2 == 0) {
      number2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  let ans: number[] = [];
  count1 = 0;
  count2 = 0;
  for (let i: number = 0; i < len; i++) {
    if (nums[i] == number1)
      count1++;
    else if (nums[i] == number2)
      count2++;
  }
  if (count1 > len / 3)
    ans.push(number1);
  if (count2 > len / 3)
    ans.push(number2);
  return ans;
}