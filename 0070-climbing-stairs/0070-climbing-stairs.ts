function climbStairs(n: number): number {
    let memo = {1: 1, 2: 2}
    let climb = (n) => {
        if(memo[n]){
            return memo[n]
        }else{
            memo[n] = climb(n-1) + climb(n-2)
            return memo[n];
        }
    }
    return climb(n);
    
};