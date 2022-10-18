/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

let solution = function (isBadVersion: any) {

    return firstBadVersion;

function firstBadVersion(n: number): number {
    let left = 1;
    let right = n;
    let result = 1;

    while (left <= right) {
        let mid = (left + right) / 2 >> 0;
        if (isBadVersion(mid) == false) {
            left = mid + 1;
        } else {
            right = mid - 1;
            result = mid;
        }
    }
    return result;
}
};