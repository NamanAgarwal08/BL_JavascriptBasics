function isPalindrome(num1, num2) {
    let rev1 = parseInt(num1.toString().split('').reverse().join(''));
    let rev2 = parseInt(num2.toString().split('').reverse().join(''));
    console.log(rev1 === num2 && rev2 === num1 ? "Palindrome" : "Not Palindrome");
}
isPalindrome(parseInt(process.argv[2]), parseInt(process.argv[3]));