
const numToruses = 50
const offset = 2/numToruses;
let toruses = []


function setup() {
  createCanvas(600,800, WEBGL);
  createEasyCam();
  document.oncontextmenu = ()=>false;
  const origin = createVector(width/2,height/2)
  let col1 = color(255,20,100)
  let col2 = color(100,50,255)
  
  
  for (let i=0; i<numToruses; i++) {
    let lerpValue = map(i,0,numToruses,0,1)
    let myColor = lerpColor(col1,col2,lerpValue)
    toruses.push(new Torus(origin,i,myColor))
}
}

function draw() {
  background(220);
  let rotationSpeed = 0.0005

  for (let i = 0; i < toruses.length ; i++) {
    toruses[i].show(rotationSpeed);

  }
}


class Torus {
  constructor(origin,i,myColor) {
    this.origin = origin;
    this.offset = i*offset;
    this.myColor = myColor;
  }
  
  show(rotationSpeed) {
    noStroke()
    push()
    // this.rotationX = this.offset+sin(millis()*rotationSpeed)*rotationAmount;
    // this.rotationY = this.offset+sin(millis()*rotationSpeed)*rotationAmount;
    
    this.rotationX = this.offset+(millis()*rotationSpeed*1.2);
    this.rotationY = this.offset+(millis()*rotationSpeed);

    rotateX(this.rotationX)
    rotateY(this.rotationY)
    fill(this.myColor)
    torus(200,1,5)
    pop()
  }

  
}