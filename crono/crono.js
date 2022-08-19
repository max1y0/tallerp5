let seg
let mns
let hor
let tick = 0

function setup() {
  createCanvas(600, 400);
  seg = 58
  mns = 59
  hor = 5
  tick = 1
  noStroke()
}

function draw() {
  background(220);

  //dibujo el reloj
  fill(0)
  textSize(30)
  text(seg + "s", 380, 200)
  text(mns + "m", 300, 200)
  text(hor + "h", 230, 200)

  //tick del segundero
  if (frameCount % 60 == 0) {
    seg = seg + tick
  }

  //control de min y horas
  if (seg > 59) {
    seg = 0
    mns = mns + 1
  }
  if (mns > 59) {
    mns = 0
    hor = hor + 1
  }
  
  //caja de referencias
  fill(50,180,100)
  rect(0,300,600,100)
  fill(220)
  textSize(20)
  //text("R - resetear, P - pausar, I - iniciar",150,350)
  
  //botones
  
  if (keyIsPressed){
    if (key == 'r'){
      seg = 0
      mns = 0
      hor = 0
    }
    
    if (key == 'p'){
      tick = 0
    }
    
    if (key == 'i'){
      tick = 1
    }
    
  }
  

}
