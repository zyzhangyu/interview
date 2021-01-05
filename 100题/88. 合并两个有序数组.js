/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {


    if (m == 0) {
        nums1.splice(0, n, ...nums2)
        return
    }
    let a = nums1.slice(0,m);
    let b = nums2.slice(0,n);
    let al = a.length 
    let bl = b.length 
    let i = 0;
    let j = 0;

    console.log(nums1);
    while(i < al){

        while(j < bl){

            ///如果第二个数组的元素比第一个数组的元素小 将其插入
            if (b[j] <= a[i]){
                nums1.splice(i + j, 0, b[j])
                nums1.pop()
                console.log("查看-1-",nums1, j, i)
                j++
                continue
            }else {
                
                
                if (i == al - 1){
                    nums1.splice(al + j, 0, b[j])
                    console.log("查看-2-",nums1, j, i)
                    nums1.pop()

                    j++
                    continue;
                }
                ///如果第一个元素中已经没有元素了
                break;
            }
        }
        i++;

    }
    
};
