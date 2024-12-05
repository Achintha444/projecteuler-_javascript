// Solution for 6-euler006.js
// Problem URL: https://www.hackerrank.com/contests/projecteuler/challenges/euler006/problem

/**
 * To solve this problem, we can find the sum of the squares of the first n natural numbers and the square of the sum of the first n natural numbers
 * using the equations in the function below. The difference between these two values is the answer to the problem.
 */
function sumSquareDiff(n) {
    let squareSum = [n*(n+1)*((2*n)+1)]/6;
    let natSum = [n*(n+1)]/2;
    
    return (natSum * natSum) - squareSum;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        console.log(sumSquareDiff(n));
    }
}
