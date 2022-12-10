function nextPermutation(nums: number[]): void {
    let index = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index = i - 1;
            break;
        }
    }

    if (index === -1) {
        nums.reverse();
        return;
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[index]) {
            swap(i, index);
            break;
        }
    }
    reverse(index + 1);
    function swap(i: number, j: number) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function reverse(start: number) {
        let left = start, right = nums.length - 1;
        while (left < right) {
            swap(left, right);
            left++;
            right--;
        }
    }
}
