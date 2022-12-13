//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function printArray(res, n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];;
        s+=" "; 
    }
    console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let s = readLine();
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.longestKSubstr(s, k);
    console.log(res);
  }
}



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    longestKSubstr(s, k) {
           if([...new Set(s)].join('').length < k){
            return -1;
        }
    let windowStart = 0,
        maxLength = 0,
        charFrequency = {};

    // in the following loop we'll try to extend the range [window_start, window_end]
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const rightChar = s[windowEnd];
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;
        // shrink the sliding window, until we are left with 'k' distinct characters in 
        // the char_frequency
        while (Object.keys(charFrequency).length > k) {
            const leftChar = s[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart += 1; // shrink the window
        }
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
        
    }
}
