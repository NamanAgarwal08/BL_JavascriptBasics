let place = parseInt(process.argv[2]);
if (place == 1) {
    console.log("Unit");
} else if (place == 10) {
    console.log("Ten");
} else if (place == 100) {
    console.log("Hundred");
} else if (place == 1000) {
    console.log("Thousand");
} else if (place == 10000) {
    console.log("Ten Thousand");
} else {
    console.log("Invalid Input");
}