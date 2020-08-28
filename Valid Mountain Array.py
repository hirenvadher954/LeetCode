class Solution:
    def validMountainArray(self, A: List[int]) -> bool:
        N = len(A)
        i = 0
        
        while i<N-1 and A[i] < A[i+1]:
            i+=1
        
        if i==0 or i==N-1:
            return False
        
        while i<N-1 and A[i] > A[i+1]:
            i+=1
            
        return i==N-1   
