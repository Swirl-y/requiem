import p5 from 'p5';
import Snake from './snake.js';

const sketch = (p) => {
let snake;
let rez = 20;
let food;
let w;
let h;

  p.setup = () => {
  p.createCanvas(400, 400);
  w = p.floor(400 / rez);
  h = p.floor(400 / rez);
  p.frameRate(10);
  snake = new Snake(p, w, h);
  foodLocation();
  };
  
function foodLocation() {
  let x = p.floor(p.random(w));
  let y = p.floor(p.random(h));
  food = p.createVector(x, y);
}

  p.draw = () => {
    p.scale(rez);
  p.background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
      snake = new Snake(p, w, h);
  foodLocation();
  }

  p.noStroke();
  p.fill(255, 0, 0);
  p.rect(food.x, food.y, 1, 1);
  };


  p.keyPressed = () => {
    console.log()
    if (p.keyCode === 38) {
      snake.setDir(0, -1);
    } else if (p.keyCode === 40) {
      snake.setDir(0, 1);
    } else if (p.keyCode === 39) {
      snake.setDir(1, 0);
    } else if (p.keyCode === 37) {
      snake.setDir(-1, 0);
    }
    return false;
  };
};



new p5(sketch, document.getElementById('app'));