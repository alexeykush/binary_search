const arr = [1, 4, 7, 8, 9, 12, 23, 50, 52];

const binarySearch = (arr, el) => {
    let start = 0;
    let end = arr.length;
    let middle = Math.floor(arr.length / 2);
    while (start !== middle && end !== middle) {
        if (el < arr[middle]) {
            end = middle;
            middle = Math.floor(end / 2);
        } else {
            start = middle;
            middle = Math.floor((end + start) / 2);
        }
    }
    return arr[middle] === el;
};
console.log(binarySearch(arr, 23));