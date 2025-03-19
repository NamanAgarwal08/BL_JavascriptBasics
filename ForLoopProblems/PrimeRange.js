let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);
for (let num = start; num <= end; num++) {
    let prime = true;
    if (num <= 1) prime = false;
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime) console.log(num);
}
