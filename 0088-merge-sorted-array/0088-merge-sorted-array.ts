function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    //i is the index of the last element in nums1
    let i: number = m -1;
    
    //j is the index of the last element in nums2
    let j: number = n-1;
    
    //k is the index of the last element in the merged array
    let k: number = m+n-1;
    
    //while both arrays have elements
    while(i>=0&&j>=0){
        
        //if the last element of nums1 is greater than the last element of nums2
        if(nums1[i]>nums2[j]){
            //place the last element of nums1 at the end of the merged array
            nums1[k--] = nums1[i--];
        }
        
        //if the last element of nums2 is greater than the last element of nums1
        else{
             //place the last element of nums2 at the end of the merged array
             nums1[k--] = nums2[j--];
        }
    }

    //if nums1 has no more elements
    while(j>=0){
        //place the remaining elements of nums2 at the beginning of the merged array
        nums1[k--] = nums2[j--];
    }
};