


// 手写New


function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}



///new关键字管用函数的具体过程


///传入的参数是构造函数 和 
function _new(fn, ...arg) {
    ///1.首先创建一个空的对象, 空对象的__proto__属性指向构造函数的原型对象
    var obj = Object.create(fn.prototype);

    ///2.把上面创建的空对象赋值构造函数内部的this, 用构造函数内部的方法修改空对象
    const result = fn.apply(obj, ...arg);


    ///3.如果构造函数返回一个非基本类型的值,则返回这个值,否则返回上面创建的对象
    return result instanceof Object ? result : obj
}


// 关于红宝书中的new

new操作符,这种方式调用构造函数会执行如下操作:

1. 在内存中创建一个新对象
2. 这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性.
3. 构造函数内部的this被赋值为这个新对象(即this指向新对象)
4. 执行构造函数内部的代码(给新对象添加属性)
5. 如果构造函数返回非空对象,则返回该对象,否则,返回刚创建的新对象.



function _new(fn, ...arg) {
    ///在内存中创建一个新对象
    let obj = {};
    ///这个对象内部的[[Prototype]]特征被赋值为构造函数的prototype属性
    obj.__proto_  = fn.prototype
    ///构造函数内部的this 被赋值为这个新对象   ///执行构造函数的内部代码, 给新对象添加属性
    const result = fn.apply(obj, ...arg);
    ///如果构造函数返回非空对象,则返回该对象,否则返回刚创建的新对象
    return Object.prototype.toString.call(result) === '[Object Object]' ? result : obj;
}


function _new(fn, ...args) {
    let obj = {}
    obj.__proto__ = fn.prototype;
    const result = fn.apply(obj, ...args)
    return Object.prototype.toString.call(result) === "[Object Object]" ? result : obj;
}