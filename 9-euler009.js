// Solution for 9-euler009.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler009/problem

/**
 * To solve this problem, we need to find the Pythagorean triplets that sum up to a given number.
 * We can achieve this by iterating through all possible values of a and b between 3 and n/2.
 * For each pair of a and b, we can calculate c as n - a - b.
 * We can then check if a^2 + b^2 = c^2.
 * If it is, we can calculate the product of a, b, and c and compare it to the current largest product.
 * We can return the largest product found.
 */

function pyTriplets(n) {
    if (n < 12) return -1;
    if (n === 12) return 60;

    const maxN = Math.ceil(n / 2);

    let result = -1;

    for (let a = 3; a <= maxN; a++) {
        for (let b = a + 1; b <= maxN; b++) {
            if (a + b >= n) break;

            const c = n - a - b;

            if (((a ** 2 + b ** 2) === (c ** 2)) && result < a * b * c)
                result = a * b * c;
        }
    }

    return result;
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());
        console.log(pyTriplets(n));
    }
}