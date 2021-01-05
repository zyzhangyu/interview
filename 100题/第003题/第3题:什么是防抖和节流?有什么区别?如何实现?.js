防抖:

触发高频率时间后n秒内只会执行一次,如果n秒内高频事件再次被触发,则重新计算时间.

///fn就是事件
function  debounce(fn) 
{
    /// 创建一个标记用来存放定时器的返回值
    let timeout = null;

    return function () {
        /// 每当用户输入的时候把前一个setTimeout clear掉
        clearTimeout(timeout);

        timeout = setTimeout(()=>{
            fn.apply(this, arguments);
        }, 5000);
    };

    function sayHi() {
        console.log("防抖成功");
    }

    var inp = document.getElementById("inp");
    inp.addEventListener('input', debounce(sayHi));///防抖
}

 