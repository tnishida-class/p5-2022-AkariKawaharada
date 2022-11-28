// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(count<50){size=100+(count+=0.01);}
    else{size=200-(count+=0.01);}
    if(keyIsDown("A".charCodeAt(0))){if(count<50){size=100+(count+=1);}
    else{size=200-(count+=1);}
       
    
    }
    
  
  stroke(0);
    ellipse(width / 2, height / 2, size);
  }
