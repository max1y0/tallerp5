let posY
let posY2
function setup() {
  createCanvas(400, 400);
  posY = 0
  posY2 = 0
}

function draw() {
  background(41);
  fill(220,220,250)
  ellipse(100,posY,20,50)
  ellipse(200,posY-90,20,50)
  ellipse(300,posY2,20,50)
  
  posY = posY + 4
  posY2 = posY2 +5
  
  if (posY > 500){
    posY = -50
  }
  if (posY2 > 500){
    posY2 = -40
  }
}
