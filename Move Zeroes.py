class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        c = nums.count(0)
        while c!=0:
            i = nums.index(0)
            nums.insert(len(nums),0)
            nums.pop(i)
            c-=1
        return nums    
