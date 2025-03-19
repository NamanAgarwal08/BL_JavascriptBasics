let money = 100;
let bets = 0;
let wins = 0;
while (money > 0 && money < 200) {
    bets++;
    if (Math.floor(Math.random() * 2) === 1) {
        money++;
        wins++;
    } else {
        money--;
    }
}
console.log("Total Bets:", bets);
console.log("Wins:", wins);
console.log("Money:", money);
