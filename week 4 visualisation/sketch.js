let sleepPattern;

function setup(){
    createCanvas(500, 500);
   

    angleMode(RADIANS);
    noLoop();

    fetch("./json/sleepPattern.json").then(function(response) {
        return response.json();
      }).then(function(data) {

        sleepPattern = data.sleepPattern;

        drawChart();
      }).catch(function(err){
        console.log(`Something went wrong: ${err}`);
      });

}

function draw() {
    background(200);
  
  }

  function drawChart(){

    console.log(sleepPattern);
    
    
    let total = 0;
    for(let i = 0; i < sleepPattern.length; i++){

      total += sleepPattern[i].amount;
      
    } 

    console.log(total);
  
  let centerX = width/2;
  let centerY = height/2;
  let diam = 300;
  let angleStart = TWO_PI*0.2;
  
  for(let i = 0; i < sleepPattern.length; i++){
    //draw
    let item = sleepPattern[i];

    let itemFraction = item.amount/total;
    let itemAngle = itemFraction * TWO_PI;
    let angleEnd = angleStart + itemAngle;
    
    let lineEndX = cos(angleEnd) * (diam*0.75);
    let lineEndY = sin(angleEnd) * (diam*0.75);
    
    
    stroke(20,10,255);
    strokeWeight(3);
    
    line(centerX,centerY,centerX+lineEndX,centerY+lineEndY);
    
    
    fill(item.color);
   
    arc(centerX,centerY,diam,diam,angleStart,angleEnd,PIE);
    
    angleStart += itemAngle;
    }
}