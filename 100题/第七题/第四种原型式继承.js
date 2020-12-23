

///这个object函数会创建一个临时构造函数,将传入的对象赋值给构造函数的原型.
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

///本质上这是一次浅复制

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
}

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");


let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda"
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends)


///适用于你有一个对象,你想在他的基础上再创建一个新对象.


// Object.create()规范了上面这个原型式继承
// 接收两个参数,作为新对象原型的对象,以及给新对象定义额外属性的对象(第二个可选). 
let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
}
let anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log(person.friends);
console.log(anotherPerson.friends);
console.log(yetAnotherPerson.friends);

///Object.create()的第二个参数与Object,defineProperties()的第二个参数一样:
// 每个新增属性都通过各自的描述符来描述.
// 以这种方式添加的属性会遮蔽原型对象上的同名属性.
let person = {
    name:"Nicholas",
    friends:["Shelby", "Court", "Van"]
}
let anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
})
console.log(anotherPerson.name)

///原型式继承非常适合不需要单独创建构造函数,但仍然需要在对象间共享信息的场合.
// 但要记住,属性中包含的引用值始终会在相关对象间共享,根使用原型模式是一样的.