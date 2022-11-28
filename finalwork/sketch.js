// 最終課題を制作しよう
let snow=[];
let cloud=[];
function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(160, 192, 255);
  noStroke();
  fill(170);
  
  for(let x=0;x < windowWidth; x++){
    ellipse(x,random(30,50),random(100,300));
    x=x+50;
  }
  fill(255);
  ellipse(windowWidth/2, windowHeight-100,200);
  ellipse(windowWidth/2, windowHeight-250,150);
  fill(0);
  ellipse(windowWidth/2-30, windowHeight-270,8);
  ellipse(windowWidth/2+10, windowHeight-265,8);
  fill(255,0,0);
  quad(
    windowWidth/2-15, windowHeight-325,
    windowWidth/2+55, windowHeight-300,
    windowWidth/2+65, windowHeight-355,
    windowWidth/2+15, windowHeight-375
    );
  fill(255,125,0);
  triangle(
    windowWidth/2-55, windowHeight-255,
    windowWidth/2-10, windowHeight-250,
    windowWidth/2-15, windowHeight-235
    );
    fill(250,230,0);
  ellipse(windowWidth/2-25, windowHeight-150,20);
  ellipse(windowWidth/2-30, windowHeight-110,20);

  noFill();
  stroke(0); 
  strokeWeight(3);
  arc(windowWidth/2-15, windowHeight-230,30,30,-12,9,PI);
  



  for(let i = 0; i < snow.length; i++){ // すべての雪を描画し、速度の分だけ移動させる
    noStroke();
    fill(255);
    let s = snow[i];
    ellipse(s.x, s.y, s.size);
    s.x += s.vx;
    s.y += s.vy;
  } 
}


function mouseDragged(){ // ドラッグされたら雪を増やす
  let dx = mouseX - pmouseX;
  let dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ 
    let s = { x: mouseX, y: mouseY, size: random(6,25), vx: random(-0.5,0.5), vy: random(3,7) };
    snow.push(s);
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
