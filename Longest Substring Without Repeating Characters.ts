function lengthOfLongestSubstring(s: string): number {
    let windowStart = 0, frequencyMap = {}, maxLength = 0;
    for(let i = 0; i < s.length; i++){
        if(!(s[i] in frequencyMap)){
            frequencyMap[s[i]] = 0;
        }
        frequencyMap[s[i]]+=1;
        while(i - windowStart +1 >Object.keys(frequencyMap).length){
            const leftChart = s[windowStart];
            frequencyMap[leftChart] -=1;
           if(frequencyMap[leftChart]==0){
               delete frequencyMap[leftChart];
           }
           windowStart+=1; 
        }
        maxLength = Math.max(maxLength, i - windowStart + 1 );
    }
    return maxLength;
};
