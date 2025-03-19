// 1 - DiceMap
let diceMap = {};
for (let i = 1; i <= 6; i++) {
    diceMap[i] = 0;
}
while (true) {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceMap[roll]++;
    if (diceMap[roll] === 10) break;
}
console.log("Dice Counts:", diceMap);

let max = -1, min = 11, maxNum, minNum;
for (let i = 1; i <= 6; i++) {
    if (diceMap[i] > max) {
        max = diceMap[i];
        maxNum = i;
    }
    if (diceMap[i] < min) {
        min = diceMap[i];
        minNum = i;
    }
}
console.log("Max occurred:", maxNum, "Min occurred:", minNum);

// 2 - BirthMonthMap
let birthMap = {};
for (let i = 1; i <= 12; i++) {
    birthMap[i] = [];
}
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    birthMap[month].push(i);
}
for (let month in birthMap) {
    console.log("Month:", month, "Individuals:", birthMap[month]);
}
