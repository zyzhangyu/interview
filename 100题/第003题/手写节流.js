// 写于2021年01月04日 复习100道题的前10道时默写


function throttle(func, wait) {

    let timeout;

    return function(){
        let that = this;
        let args = arguments;
     
        if (!timeout){
            timeout = setTimeout(()=>{
                timeout = null
                func.apply(that, args)
            },wait)
        }
    }
}



Set
数组  唯一 
WeakSet 对象类型 弱引用
 
Map  相对Object 
WeakMap 只能用对象做键  弱引用



function deepCopy(obj){

    深度优先 递归自身

    广度优先 队列存储
}


setTieout  加入宏任务队列

Promise  立即执行  resove之内的代码微任务队列

async  立即执行




script start
console.log('async1 start');
console.log('promise1');
console.log('script end');


宏
console.log('setTimeout');

微
console.log('async2');
console.log('async1 end');
console.log('promise2');



script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout



第一题 key 60分
第二题 ['1', '2', '3'].map(parseInt) what & why ?  1 NAN NAN
第三题  手写防抖和节流还是有障碍
第四题 介绍下 Set、Map、WeakSet 和 WeakMap 的区别？   掌握的还可以
第五题 第 5 题：介绍下深度优先遍历和广度优先遍历，如何实现？   手写不能
第六题 请分别用深度优先思想和广度优先思想实现一个拷贝函数？
第七题 ES5/ES6 的继承除了写法以外还有什么区别？  已经完全没有头绪了
第八题 setTimeout、Promise、Async/Await 的区别  宏任务 微任务 同步执行
第九题：（头条、微医）Async/Await 如何通过同步的方式实现异步      不能说明
第十题 无障碍  await 后面的代码 加入微任务队列
