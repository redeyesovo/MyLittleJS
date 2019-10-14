function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())

//Generator函数中的yield表达式和next方法
//yield是中断出，每调用一次next方法就向下寻找一次yield直到找到return为止，然后返回undefined
//正常函数只能返回一个值，因为只能执行一次return
//Generator 函数可以返回一系列的值，因为可以有任意多个yield
//yield表达式只能用在 Generator 函数里面，用在其他地方都会报错

//next方法可以带参数
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true) // { value: 0, done: false }
//Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的
//通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值
//可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为

//for...of循环可以自动遍历Generator函数运行时生成的Iterator对象（不需要next）
function* foo(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}
for(let v of foo()){
  console.log(v)
}
//当next返回的done属性为true时便会停止循环，因此不会返回return语句
//以下使用Generator函数和for...of循环实现斐波那契数列
function* fibonacci(){
  let [prev,curr]=[0,1];
  for(;;){
    yield curr;
    [prev,curr]=[curr,prev+curr];
  }
}
for(let v of fibonacci){
  if(v>100)break;
  console.log(v)
}

//Generator.prototype.return()
//返回给定的值，并且终结遍历 Generator 函数
//如果 Generator 函数内部有try...finally代码块，且正在执行try代码块
//return方法会导致立刻进入finally代码块，执行完以后，整个函数结束
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }

//yield*表达式，在一个 Generator 函数里面执行另一个 Generator 函数
function* foo() {
  yield 'a';
  yield 'b';
}
function* bar() {
  yield 'x';
  yield* foo();
  yield 'y';
}
//等同于如下代码
/*function* bar() {
  yield 'x';
  yield 'a';
  yield 'b';
  yield 'y';
}*/

//yield*可用于取出具有Iterator接口的遍历成员
//yield*命令可以很方便地取出嵌套数组的所有成员。
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree)) {
  console.log(x);
}
// a
// b
// c
// d
// e

//Generator 函数的一个重要实际意义就是用来处理异步操作，改写回调函数
function* loadUI() {
  showLoadingScreen();              //  第一个next
  yield loadUIDataAsynchronously(); //  第一个next
  hideLoadingScreen();              //  第二个next
}
var loader = loadUI();
// 加载UI
loader.next()

// 卸载UI
loader.next()

