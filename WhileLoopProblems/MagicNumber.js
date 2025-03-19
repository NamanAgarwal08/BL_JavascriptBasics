let low = 1;
let high = 100;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function guessNumber() {
    if (low === high) {
        console.log("Magic Number is:", low);
        readline.close();
        return;
    }
    let mid = Math.floor((low + high) / 2);
    readline.question(`Is your number less than or equal to ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            high = mid;
        } else {
            low = mid + 1;
        }
        guessNumber();
    });
}
guessNumber();