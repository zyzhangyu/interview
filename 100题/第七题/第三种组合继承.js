


function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name, age) {
    ///继承属性
    SuperType.call(this,name);
    this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function() {
    console.log(this.age);
}

let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayName();
instance1.sayAge();

let instance2 = new SubType("Greg", 27);
console.log(instance2.colors);
instance2.sayName();
instance2.sayAge();

instance1



function Super() {}
function Sub() {}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var sub = new Sub();
Sub.__proto__ === Function.prototype;
console.log(sub)