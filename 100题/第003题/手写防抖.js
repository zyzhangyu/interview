// 写于2021年01月04日 复习100道题的前10道时默写

function debounce(func, wait){

    let timeout;
    let that = this;
    let args = arguments;
    return function(){
        clearTimeout(timeout);
        
        timeout = setTimeout(()=>{
            func.call(that, args);
        }, wait)
    }
}


function debounce(func, wait, immediate) {

    let timeout;
    let that = this;
    let args = arguments;
    return function(){
        if (immediate) {
            !timeout && func.call(that, args);    
        }
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(()=>{
            func.call(that, args)
        })
    }
}


function debounce(func, wait, immediate) {

    let timeout;
    let that = this;
    let args = arguments;
    return function(){
        timeout && clearTimeout(timeout);
        if (immediate){
            !timeout && func.call(that, args);
        }
        timeout = setTimeout(()=>{
            func.apply(that, args)
        }, wait)
    }
}