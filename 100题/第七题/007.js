
console.log("简述JS中的继承,并且说明ES5/6中继承的区别?");

class Super{}
class Sub extends Super{}

const sub = new Sub();
sub.__proto__ === Super;



///子类可以通过__proto__寻找到父类.
///ES6的继承先 生成父类实例,再调用子类的构造函数修饰父类实例.这个差别使得ES6可以继承内置对象.

function Super(){}
function Sub(){}
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
var sub = new Sub();
Sub.__proto__ == Function.prototype;

///通过ES5的方式  Sub.__proto__ === Function.prototype
///ES5的继承先 生成了 子类实例 , 在调用父类的构造函数修饰子类实例.




///原型链继承的基本思想 是 通过原型继承多个引用类型的属性和方法.

///构造函数 原型和实例的关系:
/// 每个构造函数都有一个原型对象, 原型有一个属性指回构造函数,而实例有一个内部指针指向原型.
///如果原型是另一个类型的实例呢? 那就意味着这个原型本身有一个内部指针指向另一个原型,



///原型链继承:
ECMA-262 把原型链定义为 ECMAScript 的主要继承方式。所有原型链继承也是我们在ES5里面见到最多讨论最多的继承.
基本思想是,通过原型继承多个引用类型的属性和方法.
构造函数 原型 实例 三者的关系:
每个构造函数都有一个原型对象,
原型有一个属性指回构造函数,
而实例有一个内部指针指向原型.




