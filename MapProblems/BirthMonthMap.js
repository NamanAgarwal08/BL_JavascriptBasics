let birthMap = {};
for (let i = 1; i <= 12; i++) {
    birthMap[i] = [];
}
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    birthMap[month].push(i);
}
for (let month in birthMap) {
    console.log("Month:", month, "Individuals:", birthMap[month]);
}
