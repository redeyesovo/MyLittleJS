var o1 = {};
var o2 = o1;//指向同一内存地址，导致修改o2会影响到o1（局限于对象）

o1.a = 1;
console.log(o2.a);//1

o2.b = 2;
console.log(o1.b);//2
