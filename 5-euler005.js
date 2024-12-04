// Solution for 5-euler005.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler005/problem

/**
 * To solve this problem, we need to find the LCM of a given range of numbers.
 * We can use the formula for the LCM of two numbers, which is (a*b)/gcd(a,b), and apply it iteratively to find the LCM of the entire range.
 * The function leastCommonMultiple calculates the LCM of a given range of numbers.
 * The main function reads the input, calls the leastCommonMultiple function, and prints the result.
 */

function leastCommonMultiple(n) {
    let range = Array.from({ length: n }, (_, i) => i + 1)

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let result = 1;

    range.forEach((current) => {
        result = lcm(result, current);
    });

    return result;
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        console.log(leastCommonMultiple(n));
    }
}
