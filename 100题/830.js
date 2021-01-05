/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {

    let length = s.length;

    let left = 0, right = 1;

    let result = [];
    while (left < length) {
        
        while (s[left] === s[right]) {
            right++;
        }

        if (right - left > 2){
            result.push([left,right])
        }

        left = right
    }

    return result
};



 

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {



};