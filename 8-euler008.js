// Solution for 8-euler008.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler008/problem

/**
 * To solve this problem, we need to find the largest product of k consecutive digits in a given number.
 * We can achieve this by iterating through the number and calculating the product of k consecutive digits.
 * We can use the reduce method to calculate the product of the digits in an array.
 * We can then compare the product of each set of k consecutive digits to find the largest product.
 */

function largestProduct(n, k, num) {
    if (n < k) return 0;

    function multiply(numArr) {
        return numArr.reduce(
            (accumulator, currentValue) => accumulator * parseInt(currentValue),
            1
        );
    }

    const numArray = num.toString().split("");
    let result = 0;

    for (let i = 0; i <= numArray.length - k; i++) {
        const slicedNum = numArray.slice(i, i + k);

        const mulSlicedNum = multiply(slicedNum)

        if (result < multiply(slicedNum)) result = mulSlicedNum;
    }

    return result;
}

function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        var num = readLine();

        console.log(largestProduct(n, k, num));
    }
}
