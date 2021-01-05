/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {


    let dp = [0, 1, 2, 3];


    if (n <= 3) {return dp[n]}

    for (let i = 4; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};