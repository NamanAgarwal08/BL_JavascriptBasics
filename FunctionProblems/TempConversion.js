function convertTemperature(choice, value) {
    switch (choice) {
        case 1:
            if (value >= 0 && value <= 100) {
                console.log("C to F:", (value * 9 / 5) + 32);
            } else {
                console.log("Invalid Celsius Input");
            }
            break;
        case 2:
            if (value >= 32 && value <= 212) {
                console.log("F to C:", (value - 32) * 5 / 9);
            } else {
                console.log("Invalid Fahrenheit Input");
            }
            break;
        default:
            console.log("Invalid Choice");
    }
}
convertTemperature(parseInt(process.argv[2]), parseFloat(process.argv[3]));