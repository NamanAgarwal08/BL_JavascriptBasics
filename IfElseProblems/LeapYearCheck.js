let year = parseInt(process.argv[2]);
if (year >= 1000 && year <= 9999) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
} else {
    console.log("Invalid Year");
}