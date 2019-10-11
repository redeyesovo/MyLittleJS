//下面是一个Shape构造函数
function Shape() {
    this.x = 0;
    this.y = 0;
  }
  Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  //让Rectangle构造函数继承Shape
  function Rectangle(){
      Shape.call(this);
  }
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;

  //多重继承
  function M1() {
    this.hello = 'hello';
  }
  
  function M2() {
    this.world = 'world';
  }
  
  function S() {
    M1.call(this);
    M2.call(this);
  }
  
  // 继承 M1
  S.prototype = Object.create(M1.prototype);
  // 继承链上加入 M2
  Object.assign(S.prototype, M2.prototype);
  
  // 指定构造函数
  S.prototype.constructor = S;
  
  var s = new S();
  console.log(s.hello)
  console.log(s.world)