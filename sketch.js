var object
var pen=[]

function setup() {
  createCanvas(1000,400);
  
}

function draw() {
  background(255,255,255);  
 if(mouseIsPressed){
 object=new Brush()
 pen.push(object)
 }
 for(var i=0;i<pen.length;i=i+1){
 pen[i].display();
 }

}