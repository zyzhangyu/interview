function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function Subtype() {}

///继承
Subtype.prototype = new SuperType()


let instance1 = new Subtype();
instance1.colors.push("black");
console.log(instance1.colors);


let instance2 = new Subtype();
console.log(instance2.colors)