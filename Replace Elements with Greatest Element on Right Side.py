class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        N = len(arr)
        max_from_right = arr[N-1]
        arr[N-1] = -1
        
        for i in range(N-2,-1,-1):
            temp = arr[i]
            arr[i] = max_from_right
            
            if max_from_right< temp: 
                max_from_right=temp
        
        return arr        
