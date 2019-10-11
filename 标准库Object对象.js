//instanceof运算符用来验证，一个对象是否为指定的构造函数的实例
//如果参数是原始类型的值，Object方法将其转为对应的包装对象的实例
var obj = Object(1);
console.log(obj instanceof Object);
console.log(obj instanceof Number);
var obj = Object('haha');
console.log(obj instanceof Object);
console.log(obj instanceof String);
var obj = Object(true);
console.log(obj instanceof Object);
console.log(obj instanceof Boolean);
//利用这点写一个函数来判断变量是否为对象
function isObject(a){
    return a===Object(a);
}
console.log(isObject([]));
console.log(isObject(true));

//Object.keys、Object.getOwnPropertyNames遍历对象返回数组，数组中为对象自身的属性名
//Object.keys不会返回不可枚举的属性，而Object.getOwnPropertyNames会

//Object.prototype.toString可以看出一个值是什么类型
console.log(Object.prototype.toString.call(null));

var date = new Date();
console.log(date.toString());
console.log(date.toLocaleString());

//属性描述对象
//6个元属性：value、writable、configurable、enumerable、get、set
//Object.getOwnPropertyDescriptor(对象,属性名),只能获取对象自身属性不能获取继承属性
var obj = { p:'a' }
console.log(Object.getOwnPropertyDescriptor(obj,'p'));

//如果一次性定义或修改多个属性，可以使用Object.defineProperties()方法
var obj = Object.defineProperties({},{
    p1:{value:123,enumerable:true},
    p2:{value:'abc',enumerable:true},
    p3:{get:function(){
        return this.p1 + this.p2;
    },enumerable:true,
    configurable:true
    }
});
console.log(obj.p1);
console.log(obj.p2);
console.log(obj.p3);

function getMessage() {
	this.word = 'abc'
	return 'w';
}

var msg = new getMessage();
console.log(msg)