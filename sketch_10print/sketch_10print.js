// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// 10PRINT
// https://www.youtube.com/watch?v=bEyTZ5ZZxZs

let x = 0;
let y = 0;
let spacing = 15;

function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  strokeWeight(1.2);
  stroke(x,y,(255-x)-y)
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
  if (y>height){
    y=height
  }
  if (mouseIsPressed){
    background(220)
    x=0
    y=0
  }

}
