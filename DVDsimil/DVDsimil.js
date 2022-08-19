let posX
let posY
let velocidadX
let velocidadY
function setup() {
  createCanvas(400, 400);
  posX =0
  posY = 0
  velocidadX = 7
  velocidadY = 3.3
  background(220)
}

function draw() {
  fill(posX,posY-50,120)
  rect(posX,posY,50,40)
  posX = posX + velocidadX
  posY = posY + velocidadY
  
  if (posX > 400){
    velocidadX = -velocidadX
  }
  if (posX < 0 ){
    velocidadX = -velocidadX
  }
  
  if (posY > 400 || posY <0){
      velocidadY = -velocidadY
  }
  
}
