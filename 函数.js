//函数的递归，即调用自身，实现斐波那契数列
function fib(num){
    if(num===0) return 0;
    if(num===1) return 1;
    return fib(num - 2) + fib(num - 1);
};
console.log(fib(6));

//如果同时使用function命令和赋值语句声明一个同名函数，只会采用赋值语句
var f = function(){
    console.log('这是赋值语句');
}
function f(){
    console.log('这是function命令声明函数');
}

//对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明也都是全局变量
if(true){
    var x = 5;
}
console.log(x);

//函数的传递方式为传值传递
//在函数体内部修改参数值不会影响函数外部
//但如果函数参数是复合类型的值的话，那么传递方式是传址传递，即传入函数的为原始值的地址
//导致原始值被影响
var obj = {
    p:1
}
function f(o){
    o.p = 2;
}
f(obj);
console.log(obj.p);

//arguments对象用于包含函数运行时所有参数，它是对象而不是数组
//arguments[0]即第一个参数，以此类推
//arguments.length判断参数个数

//闭包
//闭包简单点来说就是定义在函数中的函数，用来使外部获得函数中的内部变量,即闭包是内外部的桥梁
function f1(){
    var n = 114514;
    function f2(){
        console.log(n+'\n');
    }
    return f2;
}
var result = f1()
result();
//闭包的两个特点
//1、如上可以读取函数内部的量
//2、让这些读取的量始终保持在内存之中
function happy(n){
    return function(){
        return n++;
    };
}
var m = happy(6);
for(var i=0;i<5;i++){
    console.log(m()+'\n');
}
//m的存在依赖于happy，始终在内存中，不会被垃圾回收机制回收
//闭包的另一个用处，封装对象的私有属性和私有方法
(function(){
    // var tmp = newData;//避免污染全局变量
    // processData(tmp);
    // storeData(tmp);
}());


//eval接受一个字符串作为参数，并且将字符串作为语句执行，如果参数非字符串那么原样返回
eval('var a = 1;');
console.log(a+'\n');
//eval中字符串应有其独自存在的意义，不能与eval外的命令配合
//eval没有自己的域，都在当前域内执行，因此可能修改当前域的变量的值，导致安全问题
//因此js中如果使用严格模式，eval内部声明的变量不会影响到外部域，但仍能读写当前域的变量
