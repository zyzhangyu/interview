

var countAndSay = function(n) {
    if (n === 1){
        return "1";
    }

    ///前一个是n-1
    let pre = countAndSay(n - 1);

    let result = "", left = 0, right = 0;

    ///指针最右面 比 字符串长度小 
    while (right < pre.length) {
        while(pre[left] === pre[right] && right < pre.length) {
            right++;
        }
        result += (right - left).toString() + pre[left];
        left = right;
    }
    return result;

}



/**
 * @param {number} n
 * @return {string}
 */


///递归加双指针解此题
var countAndSay = function(n) {

    if (n === 1){
        return "1";
    }

    let pre = countAndSay(n-1);
    let left = 0;
    let right = 0;
    let result = "";

    while(right < pre.length) {
        while (pre[left] === pre[right] && right < pre.length){
            right++;
        }
        result =  result + (right-left).toString() + pre[left] ;
        left = right
    }
    return result
};