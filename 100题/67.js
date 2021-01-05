//  二进制求和


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {


    ///1.首先让两个字符串等长,若不等长,在短的字符串前补0,否则之后的操作会超出索引

    let al = a.length  - 1
    let bl = b.length  - 1
    let carry = 0;
    let result = "";
    ///当a或b字符串还有没添加的项时,就要继续
    while(al >= 0 || bl >= 0 || carry) {
        let at = + a[al--] || 0
        let bt = + b[bl--] || 0
        let total = at + bt + carry
        console.log("参加计算的是", at, "+" , bt , "+", carry, "===" ,total)
        if (total == 2){
            carry = 1;
            total = 0;
        } else if (total == 3){
            carry = 1;
            total = 1;
        } else {
            carry = 0
        }
        console.log("total == ", total, "result ==", result)
        result = total + '' + result
        console.log("第一次结果 result ==", result)
    }
    return result
};
 