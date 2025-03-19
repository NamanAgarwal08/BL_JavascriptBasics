let min = 999;
let max = 100;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    if (num < min) {
        min = num;
    }
    if (num > max) {
        max = num;
    }
}
console.log("Minimum:", min);
console.log("Maximum:", max);