function search(arr, target, start = 0, end = arr.length - 1) {
    const mid = ((start + end) / 2) >> 0;

    if (target === arr[mid]) return mid;

    if (start >= end) return -1;

    return target < arr[mid]
        ? search(arr, target, start, mid - 1)
        : search(arr, target, mid + 1, end);
}