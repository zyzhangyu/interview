


let a = NaN === NaN
console.log("打印一下两个NaN:")
console.log(a)


let b = {} === {}
console.log("打印一下两个{}")
console.log(b)







 




 遍历操作

 keys()
 values()
 entries()
 forEach()

 const s = new Set();

 [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
 
 for (let i of s) {
   console.log(i);
 }
 // 2 3 5 4

keys()
values()
entries()

Set.prototype[Symbol.iterator] === Set.prototype.values

let set = new Set(['red', 'green', 'blue']);

for (let x of set) {
  console.log(x);
}

let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))


let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];



WeakSet

WeakSet的成员只能是对象,而不能是其他类型的值.
const ws = new WeakSet();
ws.add(1) // TypeError: Invalid value used in weak set
ws.add(Symbol()) // TypeError: invalid value used in weak set

// 弱引用


适合存放临时对象以及存放根对象绑定的信息.
但是实际上任何Iterable接口的对象,都可以作为WeakSet的参数.
WeakSet的成员是不适合引用的,WeakSet不可遍历.


const ws = new WeakSet();

const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}



const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)



对象的升级(本质上是hash结构)
传统上只能用子串做key 这极大的限制了他.

const data = {}
const element = document.getElementById('myDiv')
data[element] = 'metadata'
data['[Object HTMLDivElement]'] // "metadata"

解除了对象只能用字符串做key的限制

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) //true
m.delete(o) //true
m.has(o) //false


const map = new Map([
    ['name','张三'],
    ['title', "Author"]
]);

map.size //2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"


Set和Map都可以生成新的Map
 
const set = new Set([
    ['foo', 1],
    ['bar', 2]
])
const m1 = new Map(set);
m1.get('foo')

const m2 = new Map([['baz',3]])
const m3 = Map(m2)
m3.get('bar') //3



const map = new Map()
map
.set(1, 'aaa')
.set(1, 'bbb');

map.get(1) //"bbb"


new Map().get('asfddfsasadf') // undefined


///这个非常适合做为题目
const map = new Map();
map.set(['a', 555]);
map.get(['a']) // undefined

const map = new Map()
const k1 = ['a']
const k2 = ['a']

map
.set(k1, 111)
.set(k2, 222);

map.get(k1);
map.get(k2);


同名碰撞 clash


map[Symbol.iterator] === map.entries






[...map.keys()]
[...map.values()]
[...map.entries()]
[...map]



const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

const map1 = new Map(
  [...map0].filter(([k, v]) => k < 3)
);
// 产生 Map 结构 {1 => 'a', 2 => 'b'}

const map2 = new Map(
  [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
// 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}




map.forEach(function(value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
  });



const reporter = {
    report: function(key, value) {
        console.log("Key : %s, Value: %s", key, value);
    }
}


map.forEach(function(value, key, map) {
    this.report(key, value);
})



const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
[...myMap]
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]


/// 数组转为Map
new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
  ])
  // Map {
  //   true => 7,
  //   Object {foo: 3} => ['abc']
  // }



  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
  
  const myMap = new Map()
    .set('yes', true)
    .set('no', false);
  strMapToObj(myMap)
  // { yes: true, no: false }



let obj = {"a":1, "b":2}
let map = new Map(Object.entries(obj));

function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v
    }
    return obj;
}

const myMap = new Map().set('yes', true).set('no', false);
strMapToObj(myMap)


WeakMap
WeakMap
WeakMap
WeakMap
WeakMap
WeakMap

WeakMap结构与Map的区别有两点:

WeakMap只接受对象接收键名(null除外),不接受其他类型的值作为键名.

const map = new WeakMap();
map.set(1, 2);// TypeError: 1 is not an object!
map.set(Symbol(), 2)// TypeError: Invalid value used as weak map key
map.set(null, 2)// TypeError: Invalid value used as weak map key


WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。请看下面的例子。
WeakMap的设置目的在于,有时候我们想在某个对象上面存放一些数据,但是这会形成对于这个对象的引用.请看下面的例子.

const e1 = document.getElementById('foo');
const e2 = document.getElementById("bar");

const arr = [
    [e1, 'foo 元素'],
    [e2, 'bar 元素']
]

arr[0] = null;
arr[1] = null;



const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element) // "some information"
































































