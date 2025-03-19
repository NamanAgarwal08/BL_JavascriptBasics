let total = 0;
for (let i = 0; i < 5; i++) {
    let randomTwoDigit = Math.floor(Math.random() * 90) + 10;
    total += randomTwoDigit;
}
let average = total / 5;
console.log("Sum of 5 Two-Digit Numbers:", total);
console.log("Average:", average);