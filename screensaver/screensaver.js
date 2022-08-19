let posH
let posV
function setup() {
  createCanvas(400, 400);
  posH = 0
  posV = 20
  noStroke()
}

function draw() {
  //background(200)
  fill(posH,255-posV,100)
  ellipse(posH,posV,50,50)
  posH = posH + 20
  posV = posV + 14
  if (posH > 400 ) {
      posH = -posH
    }
  if (posV > 400 ) {
      posV = 0
    }
}
