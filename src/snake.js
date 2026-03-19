class Snake {
  constructor(p5) {
    this.x = 300;
    this.xspeed = 1;
    this.y = 300;
    this.yspeed = 0;

    this.dir = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
    }

    this.update = function() {
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;
    
    }

    this.show = function() {
      p5.fill(255);
      p5.rect(this.x, this.y, 20, 20);
    }
  }
}



export default Snake;
