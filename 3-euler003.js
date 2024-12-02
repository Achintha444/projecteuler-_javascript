// Solution for 2-euler002.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem

/**
 * To solve this problem, we need to find the largest prime factor of a given number n.
 * We start by checking for factors of 2, then check for odd factors starting from 3.
 * If n is still greater than 2 after these checks, it means n is a prime number and is the largest prime factor.
 */

function largestPrimeFactor(n) {
    let largestPrime = -1;

    // Check for factors of 2
    while (n % 2 === 0) {
        largestPrime = 2;
        n /= 2;
    }

    // Check for odd factors starting from 3
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            largestPrime = i;
            n /= i;
        }
    }

    // If n is still greater than 2, it is a prime number
    if (n > 2) {
        largestPrime = n;
    }

    return largestPrime;
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        console.log(largestPrimeFactor(n).toString());
    }
}
