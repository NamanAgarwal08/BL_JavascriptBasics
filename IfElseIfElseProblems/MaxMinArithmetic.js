let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

let max = op1;
if (op2 > max) max = op2;
if (op3 > max) max = op3;
if (op4 > max) max = op4;

let min = op1;
if (op2 < min) min = op2;
if (op3 < min) min = op3;
if (op4 < min) min = op4;

console.log("Results:", op1, op2, op3, op4);
console.log("Maximum:", max);
console.log("Minimum:", min);
