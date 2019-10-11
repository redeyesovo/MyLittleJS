var foo = 'bar';

var obj ={
    foo:1,
    bar:2
};

console.log(obj.foo);//在引用obj的foo和bar属性时，“.”运算符表明foo为字符串
console.log(obj[foo]);//而“[]”运算符表明foo是变量，指向bar字符串，要想为字符串必须在“[]”中使用‘’

var obj = {
    0.7: 'Hello World'
  };
  
  console.log(obj['0.7']); // "Hello World"
  console.log(obj[0.7]); // "Hello World"
  //数字键可以不加引号，因为会自动转成字符串

  //当键名为数值时不能使用点运算符，只能用“[]”运算符，因为会被当成小数点
  var obj = {
    123: 'hello world'
  };
  
  //  obj.123  报错
  console.log(obj[123]); // "hello world"

  var obj = {
    key1: 1,
    key2: 2
  };
  
  console.log(Object.keys(obj)); //可使用object.keys方法查看一个对象的所有属性

  //属性的遍历可使用for...in循环
  var obj = {
      a:1,
      b:2,
      c:3
  };
  for(var i in obj){
        console.log('键名',i);
        console.log('键值',obj[i]);
  }
  //但是for...in循环：1、它遍历的是所有可遍历的属性，会跳过不可遍历的属性；
  //2、不仅遍历对象自身属性，也遍历继承属性。

  //with操作
  var obj = {
      p1:1,
      p2:2
  };
  with(obj){
      p1=3,
      p2=4
  }
    console.log(obj.p1);
    console.log(obj.p2);