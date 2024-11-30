// Solution for 1-euler001.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem?isFullScreen=true

/**
 * To solve this problem, we need to find the sum of all multiples of 3 or 5 below a given number n.
 * We can use the formula for the sum of the first n natural numbers, which is n*(n+1)/2, to calculate the sum of multiples of 3, 5, and 15.
 * The sum of multiples of 15 is subtracted to avoid double-counting.
 * The result is then converted to a string to match the expected output format and support big inputs.
 */

function multipleThreeFive(n) {
    n = BigInt(n) - 1n; // Convert to BigInt to handle big inputs

    let threeCount = n / 3n;
    let fiveCount = n / 5n;
    let fifteenCount = n / 15n;

    function positiveIntCount(count) {
        return count * (count + 1n) / 2n;
    }

    return (
        3n * positiveIntCount(threeCount) +
        5n * positiveIntCount(fiveCount) -
        15n * positiveIntCount(fifteenCount)
    ).toString(); // Convert BigInt to string for consistent output
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());

        console.log(multipleThreeFive(n));
    }

}