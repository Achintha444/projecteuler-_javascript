// Solution for 7-euler007.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler007/problem

/**
 * To solve this problem, we first need to store the calculated primes in an array. 
 * We can then check if the nth prime is already in the array, if it is, we can return it. 
 * If it is not, we can calculate the next prime and add it to the array. 
 * We can use the isPrime function to check if a number is prime.
 */

const primes = [2, 3, 5, 7];

function isPrime(n) {
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

function nthPrime(n) {
    if (primes[n - 1]) return primes[n - 1];

    for (let i = primes.length; i < n; i++) {
        const latestPrime = primes[i - 1];
        let currentPrime = latestPrime + 2;

        while (!isPrime(currentPrime)) {
            currentPrime += 2;
        }

        primes.push(currentPrime);
    }

    return primes[primes.length - 1];
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        console.log(nthPrime(n));
    }
}