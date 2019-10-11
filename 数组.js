//数组是特殊的对象，而数组的键名皆为数值，所以读取成员只能用“[]”而不能用“.”
//清除数组的一个有效方法，将数组的length设置为0
//for...in循环遍历数组不仅遍历数字键，还会遍历非数字键所以一般用for或while循环
//而且数组有forEach方法遍历数组，如下
var as = ['1','2','3'];
as.forEach(function(a){
    console.log(a);
});

//数组的空位，length属性不过滤空位，但forEach、for...in、Object.keys方法会过滤
//类似数组的对象：一个数组的键名都是正数或零，并有length属性而这个length属性不是动态值
//还有类似数组的对象就是函数的arguments对象、大多数DOM元素和字符串
function args(){
    return arguments;//arguments对象
}
var arrayLike = args('a','b');

console.log(arrayLike[0]);
console.log(arrayLike.length);
console.log(arrayLike instanceof Array);

//var elts = document.getElementsByTagName('h3');
//console.log(elts.length);

//字符串
console.log('abcd'[3]);
console.log('abcd' instanceof Array);


//数组的slice方法可以将“类似数组的对象”变成真正的数组
var arr = Array.prototype.slice.call(arrayLike)
console.log(arr);
arr.forEach(function(arr){
    console.log(arr);
    console.log('成功使用数组的forEach方法循环输出arr的键值');
})
//"类似数组的对象"可以通过call()把数组的方法放到对象上，如下通过call()将forEach
//移植到arrayLike上使用
function print(value,index){
    console.log(index + ':' +value);
}
Array.prototype.forEach.call(arrayLike,print);
//如下是第二个例子，在arguments对象上调用forEach方法
function logArgs(){
    Array.prototype.forEach.call(arguments,function(elem,i){
        console.log(i+'.'+elem);
    });
}
function logArgs(){
    for(var i=0;i<arguments.length;i++){
        console.log(i+'.'+arguments[i]);
    }
}
//但是这些方法都比原生的forEach方法满，最好还是将“类似数组的对象”转换为数组再使用forEach方法