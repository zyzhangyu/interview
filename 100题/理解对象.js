// 对象的本质是一个散列表

///new关键词创建
let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function () {
  console.log(this.name);
};

///字面量创建
let person = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  },
};

// 引申:什么是散列表
