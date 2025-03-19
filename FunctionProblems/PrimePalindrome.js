function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPalindrome(n) {
    return parseInt(n.toString().split('').reverse().join(''));
}

let num = parseInt(process.argv[2]);
if (isPrime(num)) {
    let palindrome = getPalindrome(num);
    console.log("Number is Prime");
    if (isPrime(palindrome)) {
        console.log("Palindrome is also Prime");
    } else {
        console.log("Palindrome is not Prime");
    }
} else {
    console.log("Number is not Prime");
}
