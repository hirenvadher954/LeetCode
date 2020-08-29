class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        i,j = (0,0)
        while j<len(A):
            if A[j]%2==0:
                A[i],A[j] = A[j],A[i]
                i+=1
            j+=1    
        return A       
                
                
