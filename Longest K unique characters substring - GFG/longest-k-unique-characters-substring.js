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
        let cf = {};
        let max_len = 0;
        let window_start = 0;
        for(let i = 0; i< s.length; i++){
            if(!(s[i] in cf)){
                cf[s[i]] = 0;
            }
            cf[s[i]]+=1;
            while(Object.keys(cf).length>k){
                cf[s[window_start]]-=1;
                if(cf[s[window_start]]==0){
                    delete cf[s[window_start]];
                }
                window_start+=1;
            }
            max_len = Math.max(max_len,i-window_start+1);
            
        }
        return max_len;
        
    }
}
