function uniquePaths(m: number, n: number): number {
  let N = n + m - 2;
  let r = m - 1; 
  let res = 1;
  for (let i = 1; i <= r; i++)
      res = res * (N - r + i) / i;
  return res;
}