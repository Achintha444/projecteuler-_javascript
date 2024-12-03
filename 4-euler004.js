// Solution for 4-euler004.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler004/problem

/**
 * To solve this problem, first we need a function to check if a number is a palindrome.
 * Then, we iterate through all possible pairs of two-digit numbers (i and j) and calculate their product.
 * If the product is a palindrome and greater than the current largest palindrome, we update the result.
 * Finally, we return the largest palindrome found as a string.
 */

function isPalindrome(n) {
    return n.toString() === n.toString().split("").reverse().join("");
}

function largestPalindrome(n) {
    if (n <= 102200) return 101101;

    let result = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            const product = i * j;
            if (n > product && result < product && isPalindrome(product)) result = product;
        }
    }

    return result.toString();
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());

        console.log(largestPalindrome(n));
    }
}
