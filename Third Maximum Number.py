class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        nums = list(set(nums))
        if len(nums)==1:
            return nums[0]
        if len(nums)==2:
            return max(nums)
        nums.sort()
        return nums[-3]
        
