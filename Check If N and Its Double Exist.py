class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        count = arr.count(0)
        if count>1:
            return True
        for val in arr:
            if 2*val in arr and val != 0:
                return True
        return False
         
        
