class Triangle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 0;
    this.angleSpeed = random(-0.05, 0.05);
  }

  move() {
    this.angle += this.angleSpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(random(0,255), 10, 200, 180);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  }
}

let triangles = [];

function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  
  for (let i = 0; i < 50; i++) {
    triangles.push(new Triangle(random(width), random(height), random(20, 100)));
  }
}

function draw() {
  let _r = noise(frameCount * 0.01) * 255;
  let g = noise(frameCount * 0.01 + 100) * 255;
  let b = noise(frameCount * 0.01 + 200) * 255;
  background(_r, g, b);
  // background(10,30,170);
  for (let triangle of triangles) {
    triangle.move();
    triangle.display();
  }
}

