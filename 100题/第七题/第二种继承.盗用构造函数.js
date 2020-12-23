

///盗用构造函数也叫做对象伪装或经典继承.
///基本思路,在子类构造函数中调用父类的构造函数.

function SuperType(){
    this.colors = ["red", "blue", "green"]
}

function SubType() {
    ///继承 SuperType
    SuperType.call(this);
}

let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); /// "red, blue, green, black"


let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green"