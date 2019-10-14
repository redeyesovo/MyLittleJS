function takeLongTime(n) {
    return new Promise(resolve=>{
        setTimeout(()=>resolve(n+200),n);
    })
}
function step1(n){
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}
function step2(n){
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
function step3(n){
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
async function doIt() {
    console.log("doIt");
    const time1=300;
    const time2=await step1(time1);
    const time3=await step2(time2);
    const result=await step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}

//await中如果Promise状态变为rejected，那么接下来的await都会终止
//如果不希望终止可以将此await放入try、catch语句中
async function f() {
    try {
      await Promise.reject('出错了');
    } catch(e) {
    }
    return await Promise.resolve('hello world');
}
  f()
  .then(v => console.log(v))
  //或者在此await后面加上catch处理错误
  async function f() {
    await Promise.reject('出错了')
      .catch(e => console.log(e));
    return await Promise.resolve('hello world');
}
  
  f()
  .then(v => console.log(v))

  //如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject
    async function f() {
        await new Promise(function (resolve, reject) {
        throw new Error('出错了');
        });
    }
    f()
    .then(v => console.log(v))
    .catch(e => console.log(e))
    // Error：出错了
    //解决方式是将await放入try、catch语句中
    async function f() {
        try {
          await new Promise(function (resolve, reject) {
            throw new Error('出错了');
          });
        } catch(e) {
        }
        return await('hello new world');
    }
    async function f() {
        await new Promise(function (resolve, reject) {
            throw new Error('出错了');
        }).catch(err=> console.log(err));
        return await('hello new world');
    }
      