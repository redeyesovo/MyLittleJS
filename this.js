//1、this指向会变
//如果this所在方法不在对象第一层，此时this只指向前一层的对象
var a = {
    p: 1,//this不在第一层
    b:{
        m:function(){
            console.log(this.p);
        }
    }
};
a.b.m()
//
var a = {
    b: {
      m: function() {
        console.log(this.p);
      },
      p: 'Hello'
    }
  };
  a.b.m()
  //此时若将对象内部方法赋值给一个变量，this会指向全局
  var a = {
    b: {
      m: function() {
        console.log(this.p);
      },
      p: 'Hello'
    }
  };
  
  var hello = a.b.m;
  hello()
  //而避免的方式就是将this所在的对象的上一层对象赋给变量,然后调用this所在的那层对象
  var a = {
    b: {
      m: function() {
        console.log(this.p);
      },
      p: 'Hello'
    }
  };
  
  var hello = a.b;
  hello.m()

  //foreach方法的回调函数中的this，其实是指向window对象，因此取不到o.v的值
  //使用中间变量固定this，即找一个工具人代替this
  var o = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
      var that = this;
      this.p.forEach(function (item) {
        console.log(that.v+' '+item);
      });
    }
  }
  o.f()

  //Function.prototype.call()改变this指向
var obj = {};
var f = function () {
  return this;
};
console.log(f());
console.log(f.call(obj));

  //call方法的参数，应该是一个对象
  //如果参数为空、null和undefined，则默认传入全局对象
var n = 123;
var obj = { n: 456 };
function a() {
  console.log(this.n);
}
//  a.call() // 123
//  a.call(null) // 123
//  a.call(undefined) // 123
//  a.call(window) // 123
//  a.call(obj) // 456
//call方法还可以接受多个参数。
//func.call(thisValue, arg1, arg2, ...)
//call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数

//Function.prototype.apply()
//apply方法区别于call方法，它接收一个数组作为函数执行时的参数
function f(x, y){
    console.log(x + y);
  }
  
  f.call(null, 1, 1) // 2
  f.apply(null, [1, 1]) // 2
  
  //也可以使用Function.prototype.bind()绑定this指向
  //bind绑定之后，别的bind无法再次绑定this
  var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }
  var boundGetX = module.getX.bind(module);
  console.log(boundGetX());

  //bind结合回调函数使用
  var counter = {
    count: 0,
    inc: function () {
      'use strict';
      this.count++;
    }
  };
  function callIt(callback) {
    callback();
  }
  callIt(counter.inc.bind(counter));
  console.log(counter.count)
  //如果直接把counter.inc赋给callIt那么counter.inc的this会指向全局对象