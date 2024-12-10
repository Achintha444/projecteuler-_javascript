// Solution for 10-euler010.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler010/problem

/**
 * To solve this problem, we first need to store the calculated primes in an array.
 * We can then check if the primes less than or equal to n are already in the array, 
 * if they are, we can return the sum of those primes.
 * If they are not, we can calculate the next prime and add it to the array.
 */

function isPrime(n) {
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

const primes = [2, 3, 5, 7];

function sumOfPrimes(n) {
    let result = 0;
    const lastPrime = primes[primes.length - 1];

    if (lastPrime >= n) {
        for (let i = 0; i < primes.length; i++) {
            if (primes[i] > n) break;
            result += primes[i];
        }
    } else {
        result = primes.reduce((acc, current) => acc + current, 0);

        for (let i = lastPrime + 1; i <= n; i++) {
            if (isPrime(i)) {
                result += i;
                primes.push(i);
            }
        }
    }

    return result;
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        console.log(sumOfPrimes(n));
    }
}
