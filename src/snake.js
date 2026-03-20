class Snake {
  constructor(p, w, h) {
    this.body = [];
    this.body[0] = p.createVector(p.floor(w / 2), p.floor(h / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  

  this.setDir = function (x, y){
    this.xdir = x;
    this.ydir = y;
  }


  this.update = function() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }

  this.grow = function() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  this.endGame = function() {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
      return true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        return true;
      }
    }
    return false;
  }

  this.eat = function(pos) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  this.show = function() {
    for (let i = 0; i < this.body.length; i++) {
      p.fill(0);
      p.noStroke();
      p.rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
  }
}


export default Snake;