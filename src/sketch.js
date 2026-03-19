import p5 from 'p5';
import Snake from './snake.js';

const sketch = (p) => {
  let snake;

  p.setup = () => {
    p.createCanvas(600, 600);
    snake = new Snake(p);
  };
  
  p.draw = () => {
    p.background(51);
    snake.update();
    snake.show();
  };

  p.keyPressed = () => {
    if (p.keyCode === p.UP_ARROW) {
      snake.dir(0, -1);
    } else if (p.keyCode === p.DOWN_ARROW) {
      snake.dir(0, 1);
    } else if (p.keyCode === p.RIGHT_ARROW) {
      snake.dir(1, 0);
    } else if (p.keyCode === p.LEFT_ARROW) {
      snake.dir(-1, 0);
    }
    return false;
  };
};

new p5(sketch, document.getElementById('app'));