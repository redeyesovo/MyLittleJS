//export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能
//export输出模块
var name = 'haha';
export{name};
export function multiply(x, y) {
    return x * y;
};

//使用as关键词可重命名
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

//export接口的定义
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};

//export命令应该出现在模块顶端，不能出现在块级作用域内

foo();
import { foo } from 'my_module';
//上面的代码不会报错，因为import的执行早于foo的调用
//这种行为的本质是，import命令是编译阶段执行的，在代码运行之前
//import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
// 报错
import { 'f' + 'oo' } from 'my_module';
// 报错
let module = 'my_module';
import { foo } from module;
// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}
//import在静态解析阶段执行，所以它是一个模块之中最早执行的
// circle.js
export function area(radius) {
    return Math.PI * radius * radius;
}
  
export function circumference(radius) {
    return 2 * Math.PI * radius;
}
import { area, circumference } from './circle';
console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
//或者使用整体加载
import * as circle from '.cirlce'
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

//export default为模块指定默认输出
//export-default.js
export default function () {
    console.log('foo');
}
//其他模块加载该模块时，import命令可以为该匿名函数指定任意名字
//这时import命令后面，不使用大括号
//import-default.js
import customName from './export-default';
customName(); // 'foo'
//export时，对应import语句需要{}
//export default时，对应import语句不需要{}
//export default命令其实只是输出一个叫做default的变量，它后面不能跟变量声明语句
export var a=1;//(ok)
export default var a=1；//(❌)
export default 42;//(ok)指定对外接口为default
export 42;//(❌)报错是因为没有指定对外的接口

