

///组合继承其实也存在效率问题,
// 最主要的效率问题就是父类构造函数始终会被调用两次
// 一次在是创建子类原型时调用,另一次是在子类构造函数中调用.
// 本质上,子类原型最终是要包含超类对象的所有实例属性,
// 子类构造函数只要在执行重写自己的原型就行了


function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name,age){
    
    SuperType.call(this, name); ///第二次调用SuperType()
    this.age = age;
}

// 实例.__proto__. ==原型 
// 原型.constructor==构造函数
// 构造函数.prototype==原型
SubType.prototype = new SuperType(); ///第一次调用SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
    console.log(this.age);
}


///上面的缺点是调用了两次原型的构造函数

function inheritPrototype(subType, superType){
    let prototype = Object.create(super.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType(name){
    this.name = name
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    console.log(this.age)
}




// 我觉得忽略了一点，
// es6的class继承不仅是对原型实例进行了继承，
// 还对构造方法进行了继承，
// class本质还是一个构造函数，
// 转码后的实现逻辑还是组合寄生继承。

