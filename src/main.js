import p5 from 'p5';

console.log('script loaded!');
console.log(document.getElementById('app'));

const sketch = (p) => {
  p.setup = () => {
    // Creates a canvas 600 pixels wide
  // and 400 pixels high.
    p.createCanvas(600, 400)
  };

  p.draw = () => {
    //sky blue background
   p.background(135, 206, 235);
   //sun in top-right corner
   p.fill("yellow") ; //yellow

   p.stroke("orange") ; //orange outline

   p.strokeWeight(20) ; //large outline

   p.circle(550, 50, 100)
   //grass on bottom half
 
   p.stroke(0) ; //black outline
   
   p.strokeWeight(1) ; //outline thickness
 
   p.fill("green") ;
 
   p.rect(0, 200, 600, 200) ;
   //emojis
   p.textSize(75)
   p.text("🌸", 100, 250) //flower
   p.text("🐞", p.mouseX, p.mouseY) ; //ladybug
  };
};


new p5(sketch, document.getElementById('app'));
