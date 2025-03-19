let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Array:", arr);
let sortedArr = [...arr].sort((a, b) => a - b);
console.log("Sorted Array:", sortedArr);
console.log("2nd Smallest:", sortedArr[1], "2nd Largest:", sortedArr[sortedArr.length - 2]);
