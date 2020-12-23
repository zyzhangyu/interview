

///构造函数 原型和实例的关系:
/// 每个构造函数都有一个原型对象, 原型有一个属性指回构造函数,而实例有一个内部指针指向原型.
///如果原型是另一个类型的实例呢? 那就意味着这个原型本身有一个内部指针指向另一个原型,

///父类型, 定义一个属性和一个方法
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
}


///子类型, 定义一个属性和一个方法
function SubType() {
    this.subproperty = false;
}

///构造函数.prototype = 原型
///将SuperType的实例 赋值给自己的原型  (SubType.prototype即为SubType的原型)
///这一步即可实现对SuperType的继承
SubType.prototype = new SuperType();

///通过字面量添加新方法,这回导致上一行无效 --- 慎用
// SubType.prototype = {
//     getSubValue(){
//         return this.property;
//     },
//     someOtherMethod(){
//         return false;
//     }
// }

SubType.prototype.getSubValue = function(){
    return this.subproperty;
}
// 覆盖已有的方法 
SubType.prototype.getSuperValue = function () {
     return false; 
};
let instance = new SubType();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());
let superInstance = new SuperType();
instance

// 实例.__proto__. ==原型 
// 原型.constructor==构造函数
// 构造函数.prototype==原型

///如果一个实例的原型链中出现过相应的构造函数,则instanceof返回true.
console.log(instance instanceof Object);  // true 
console.log(instance instanceof SuperType); // true  
console.log(instance instanceof SubType); // true  


///第二种方式是使用isPrototypeOf()方法
/// 只要原型链中出现过就会返回true
console.log(Object.prototype.isPrototypeOf(instance));
console.log(SuperType.prototype.isPrototypeOf(instance));
console.log(SubType.prototype.isPrototypeOf(instance));

