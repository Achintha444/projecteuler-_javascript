// Solution for 2-euler002.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler002/problem

/**
 * To solve this problem, we need to keep track of the Fibonacci sequence and sum up the even numbers.
 * We can use an array to store the Fibonacci numbers and another array to store the even numbers, so we do not 
 * have to calculate them again.
 * The function sumEvenFib calculates the Fibonacci sequence up to a given number n and returns the sum of the even numbers.
 */

const fib = [1n, 2n, 3n, 5n, 8n];
const evenFib = [2n, 8n];

function sumEvenFib(n) {
    n = BigInt(n);

    let currentFib = fib[fib.length - 1];

    while (currentFib <= n) {
        currentFib = currentFib + fib[fib.length - 2];

        if (currentFib % 2n === 0n) evenFib.push(currentFib);

        fib.push(currentFib);
    }

    let result = 0n;

    for (let i = 0; i < evenFib.length; i++) {
        if (evenFib[i] > n) break;
        result += evenFib[i];
    }

    return result.toString();
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());

        console.log(sumEvenFib(n));
    }
}
