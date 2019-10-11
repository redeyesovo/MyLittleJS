//throw手动抛出错误
function UserError(message){
    this.message = message || '默认';
    this.name = 'UserError';
}
//  throw new UserError('错啦');

//try...catch
//如果不确定某些代码是否会报错，把它们放在try...catch代码块之中，便于进一步对错误进行处理
try{
    throw '夭寿啦';
}catch(e){
    console.log('123');
}console.log('321');
//可在catch中用if进行错误类型判断
try {
    foo.bar();
  } catch (e) {
    if (e instanceof EvalError) {
      console.log(e.name + ": " + e.message);
    } else if (e instanceof RangeError) {
      console.log(e.name + ": " + e.message);
    }
  }

  //下面是try、catch、finally的执行顺序
  function test() {
    try {
      console.log(1);
      throw new Error('throw');
    } catch (e) {
      console.log(e.message);
      return 'from_catch';
    } finally {
      console.log(2);
    }
  }
  console.log(test());