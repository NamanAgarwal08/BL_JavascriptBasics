// 1 - Random3Digit
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

// 2 - Sorted2ndLargest
let sortedArr = [...arr].sort((a, b) => a - b);
console.log("Sorted Array:", sortedArr);
console.log("2nd Smallest:", sortedArr[1], "2nd Largest:", sortedArr[sortedArr.length - 2]);

// 3 - PrimeFactorsArray
let n = parseInt(process.argv[2]);
let factors = [];
for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        factors.push(i);
        n = n / i;
    }
}
if (n > 1) {
    factors.push(n);
}
console.log("Prime Factors Array:", factors);

// 4 - TripletSumZero
let inputArr = [1, -1, 2, -2, 0, 3, -3];
let found = false;
for (let i = 0; i < inputArr.length - 2; i++) {
    for (let j = i + 1; j < inputArr.length - 1; j++) {
        for (let k = j + 1; k < inputArr.length; k++) {
            if (inputArr[i] + inputArr[j] + inputArr[k] === 0) {
                console.log("Triplet:", inputArr[i], inputArr[j], inputArr[k]);
                found = true;
            }
        }
    }
}
if (!found) console.log("No triplet found");

// 5 - RepeatedDigits
let repeated = [];
for (let i = 10; i < 100; i++) {
    if (Math.floor(i / 10) === i % 10) {
        repeated.push(i);
    }
}
console.log("Repeated Digits:", repeated);
