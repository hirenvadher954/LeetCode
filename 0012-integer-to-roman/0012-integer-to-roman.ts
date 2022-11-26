function intToRoman(num: number): string {
    const roman: string[] = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const val: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let res: string = "";
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            res += roman[i];
        }
    }
    return res;
}
