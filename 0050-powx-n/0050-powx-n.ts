
function myPow(x: number, n: number): number {
    let ans = 1;
    let number = Math.abs(n);

    while (number > 0) {
        if (number % 2 == 1) {
            ans = ans * x;
            number -= 1;
        } else {
            x = x * x;
            number /= 2;
        }
    }

    if (n < 0) ans = 1 / ans;
    return ans;
}