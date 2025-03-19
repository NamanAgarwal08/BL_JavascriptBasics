let hn = parseInt(process.argv[2]);
let harmonic = 0;
for (let i = 1; i <= hn; i++) {
    harmonic += 1 / i;
}
console.log("Harmonic Number:", harmonic);