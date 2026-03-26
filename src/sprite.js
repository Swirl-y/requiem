class Sprite {
constructor(p5, animation, x, y, speed, width) {  
   this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;

      this.show = function() {
    let index = p5.floor(this.index) % this.len;
    p5.image(this.animation[index], this.x, this.y);
  }

  this.animate = function() {
    this.index += this.speed;
    this.x += this.speed * 15;

    if (this.x > width) {
      this.x = -this.w;
    }
  }

}





}



export default Sprite;