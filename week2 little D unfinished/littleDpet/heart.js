function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(25);
    noStroke();
    fill(255, 0, 0);
    translate(125,130);
    push();
  
    circle(100, 100, 150);
    circle(230, 100, 150);
  
    triangle(31, 130, 299.5, 130, 166.25, 300);
    
    pop();
  }