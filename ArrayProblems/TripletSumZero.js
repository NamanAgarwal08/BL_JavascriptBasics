let inputArr = [1, -1, 2, -2, 0, 3, -3];
let found = false;
for (let i = 0; i < inputArr.length - 2; i++) {
    for (let j = i + 1; j < inputArr.length - 1; j++) {
        for (let k = j + 1; k < inputArr.length; k++) {
            if (inputArr[i] + inputArr[j] + inputArr[k] === 0) {
                console.log("Triplet:", inputArr[i], inputArr[j], inputArr[k]);
                found = true;
            }
        }
    }
}
if (!found) console.log("No triplet found");