// 拦截并向基本操作嵌入额外行为的能力.

// 给目标对象设定一个关联的代理对象,代理对象可以做抽象的目标对象来使用.

// 在对目标对象的各种操作影响目标对象之前, 可以在代理对象中对这些操作加以控制.

// ES6 添加.

const target = {
    id: 'target'
}
const handler = {};
const proxy = new Proxy(target, handler);

console.log(target.id); ///target
console.log(proxy.id); ///target


///给目标属性赋值会反应在两个对象上
///因为两个对象访问的是同一个值
target.id = 'foo';
console.log(target.id); /// foo
console.log(proxy.id); ///foo

// 给代理属性赋值会反映在两个对象上 // 因为这个赋值会转移到目标对象 
proxy.id = 'bar'; 
console.log(target.id); // bar 
console.log(proxy.id); // bar

// hasOwnProperty()方法在两个地方 
// 都会应用到目标对象 
console.log(target.hasOwnProperty('id')); // true 
console.log(proxy.hasOwnProperty('id')); // true

// Proxy.prototype 是 undefined
// 因此不能使用 instanceof 操作符
console.log(target instanceof Proxy); // TypeError: Function has non-object prototype 'undefined' in instanceof check
console.log(proxy instanceof Proxy); // TypeError: Function has non-object prototype 'undefined' in instanceof check


// 严格相等可以用来区分代理和目标
console.log(target === proxy); // false



const target = {
    foo: 'bar'
}

const handler = {
    ///捕获器在处理程序对象中以方法名为键
    get() {
        return 'handler override';
    }
}

const proxy = new Proxy(target, handler);
 

console.log(target.foo); ///bar

console.log(proxy.foo); /// handler override

console.log(target['foo']);  /// bar
console.log(proxy['foo']); /// handler override

console.log(Object.create(target)['foo']);  ///bar
console.log(Object.create(proxy)['foo']); /// handler override

 


const target = {
    foo: 'bar'
}

const handler = {
    get(trapTarget, property, receiver){
        
    }
}




const target = {
    foo: 'bar'
}

const handler = {
    get() {
        return Reflect.get(...arguments)
    }
}

const proxy = new Proxy(target, handler);
console.log(proxy.foo)
console.log(proxy.foo)


const target = {
    foo: 'bar'
}

const handler = {
    get: Reflect.get
}

const proxy = new Proxy(target, handler)
console.log(proxy.foo); ///bar
console.log(target.foo); ///bar




外观数列N 