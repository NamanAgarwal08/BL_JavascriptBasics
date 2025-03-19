let repeated = [];
for (let i = 10; i < 100; i++) {
    if (Math.floor(i / 10) === i % 10) {
        repeated.push(i);
    }
}
console.log("Repeated Digits:", repeated);
