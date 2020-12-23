
///寄生式继承背后的思路类似于寄生构造函数和工厂模式:
// 创建一个实现继承的函数,以某种方式增强对象,然后返回这个对象.


///original是新对象的基准对象
function createAnother(original) {
    let clone = Object.create(original);
    clone.sayHi = function(){
        console.log("Hi");
    }
    return clone;
}

let person = { 
    name: "Nicholas", 
    friends: ["Shelby", "Court", "Van"] 
};

let anotherPerson = createAnother(person); 
anotherPerson.sayHi(); // "hi"
console.log(anotherPerson.name);
console.log(anotherPerson.friends);