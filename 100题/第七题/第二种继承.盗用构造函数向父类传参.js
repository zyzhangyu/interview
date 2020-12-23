function SuperType(name){
    this.name = name;
}

function SubType(){
    ///继承SuperType并传参
    SuperType.call(this, "Nicholas");
    ///实例属性
    this.age = 29;
}

let instance = new SubType();
console.log(instance.name);
console.log(instance.age);

///盗用构造函数继承的问题在于子类不能访问父类原型上定义的方法,
///因为所有类型只能使用构造函数模式.由于这些问题,盗用构造函数基本上也不能单独使用.