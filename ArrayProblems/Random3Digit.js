let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Array:", arr);

let max = Math.max(...arr);
let min = Math.min(...arr);
let secondMax = -Infinity;
let secondMin = Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
    }
    if (arr[i] < secondMin && arr[i] > min) {
        secondMin = arr[i];
    }
}
console.log("2nd Largest:", secondMax, "2nd Smallest:", secondMin);