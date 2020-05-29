
function setup() {

    canvas = createCanvas(windowWidth, windowHeight, WEBGL);//ブラウザのウィンドウサイズに合わせてcanvas作成
    background(255);
    canvas.style('z-index','-1');//canvasを後ろに移動する。
    noFill();
    stroke(150,200,150);
}

function draw(){
  background(255);
  for(i=0; i<30; i++){

    rotateX(frameCount * 0.001+(i*0.01));
    rotateY(frameCount * 0.001+(i*0.01));
    // box(windowHeight/2, windowHeight/2, windowHeight/2);
    box(windowHeight/2+(i*10));
  };
};
