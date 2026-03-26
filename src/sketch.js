import p5 from "p5";
import Sprite from "./sprite.js";

const sketch = (p5) => {
  let spritesheet;
  let spritedata;
  let animation = [];
  let horses = [];
  p5.setup = async () => {
    p5.createCanvas(640, 480);
    const url = new URL('./assets/horse.png', import.meta.url).href
    const urlj = new URL('./assets/horse.json', import.meta.url).href
    spritedata = await p5.loadJSON(urlj);
    spritesheet =await p5.loadImage(url);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }

    for (let i = 0; i < 5; i++) {
      horses[i] = new Sprite(
        p5,
        animation,
        0,
        i * 75,
        p5.random(0.1, 0.4),
        p5.width,
      );
    }
  };

  p5.draw = () => {
    p5.background(0);

    for (let horse of horses) {
      horse.show();
      horse.animate();
    }

    //p5.image(animation[p5.frameCount % animation.length], 0, 0)
  };
};

new p5(sketch, document.getElementById("app"));
