//Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）
//整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器
//异步操作需要暂停的地方，都用yield语句注明
function* gen(x) {
    var y = yield x + 2;
    return y;
  }
  
  var g = gen(1);
  g.next() // { value: 3, done: false }
  g.next() // { value: undefined, done: true }
  //其中g为内部指针（即遍历器）
  //这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象
  //调用指针g的next方法，会移动内部指针，指向第一个遇到的yield语句，上例是执行到x + 2为止
  
  //Generator函数的内外数据交换，数据输出即next方法的value属性，数据输入即next方法的参数
  //Generator函数的错误处理，函数体外，使用指针对象的throw方法抛出的错误，可以被函数体内的try...catch代码块捕获

  function run(fn){
      var gen = fn();
      function next(err,data){
          var result = gen.next(data);
          if(result.done) return;
          result.value(next);
      }
      next();
  }
  function* g(){}
  run(g);

  