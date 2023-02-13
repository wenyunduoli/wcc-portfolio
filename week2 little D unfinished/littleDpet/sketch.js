
let canvas;
let button;

let heart = 0;
let love = false;

let normal = 0;
let moreLove = 1;
let deveState = normal;
let deveState2 = needLove;

let deveX;
let deveY;
let deveDiam;



function setup() {
    // createCanvas(600, 600);
    canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");

  deveX = width/2;
  deveY = height/2;
  deveDiam = width/6;

  addGUI();
  }
  
  function draw() {
    background(220);

    if(deveState == normal){
        fill(50,180,120);

        if(deveDiam > width/4){
            deveDiam = withLove;
        }

    }else if(deveDiam == withLove){
        fill(255,0,0);

        if(deveDiam > width/6){
            if(frameCount % 2 == 0) deveDiam--; 
          }else{
            tamaState = normal;
          }
        }

        circle(deveX,deveY,deveDiam);
        fill(0);
        let mouthOffset = deveDiam/2;
        rect(deveX-mouthOffset/2,deveY,mouthOffset,3);

        if(food > 0 ){

            //Tama Eat
            if(frameCount % 30 < 15 && deveState == normal){
              haveLove();
            }
        }        
    }

    


  