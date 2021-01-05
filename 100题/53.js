/**
 * @param {number[]} nums
 * @return {number}
 */
 



var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

 



var addBinary = function(a, b) {

    let i = a.length - 1
    let j = b.length - 1

    let res = ''
    let c = 0 ///进位使用

    while(i >= 0 || j >= 0 || c) {
        /// + 号变成数组了
        let aa = + a[ i-- ] || 0
        let bb = + b[ j-- ] || 0
        let total = aa + bb + c
        c = total /2 | 0
        
    } 
}


123