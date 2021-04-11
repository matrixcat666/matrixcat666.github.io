function setup() { createCanvas(600, 600);
}
function draw() {
background(213, 176, 255);
// hair attempt
fill(31, 17, 2);
beginShape(); 
vertex(300, 100); 
vertex(60, 200); 
vertex(150, 220);
vertex(70, 330); 
vertex(120, 300); 
vertex(90, 420); 
vertex(150, 370); 
vertex(120, 480); 
vertex(330, 300); 
vertex(480, 480);
vertex(470, 330);
vertex(500, 380);
vertex(490, 270);
vertex(520, 320);
vertex(470, 150);
vertex(375, 150);
endShape();
line(300, 100, 375, 150);
//face
fill(156, 108, 64);
circle(300, 300, 300);
//mouth
line(330, 400, 300, 420);
line(270, 400, 300, 420);
//eyesies i think
fill(300, 300, 300);
circle(225, 265, 50);
circle(375, 265, 50);
fill (69, 42, 0);
circle(225, 265, 40);
circle(375, 265, 40);
fill(0, 0, 0);
circle(225, 265, 30);
circle(375, 265, 30);
//eye shiney
fill(300, 300, 300);
circle(235, 255, 10);
circle(385, 255, 10);
circle(215, 275, 5);
circle(365, 275, 5);
//nosie
fill(156, 108, 64);
triangle(280, 310, 300, 330, 320, 310);
//bangs attempt
fill(31, 17, 2);;
beginShape(); 
vertex(360, 150); 
vertex(300, 120); 
vertex(170, 200);
vertex(130, 270); 
vertex(250, 200); 
vertex(220, 230); 
vertex(300, 200); 
vertex(270, 240); 
vertex(350, 200); 
vertex(430, 270); 
vertex(400, 200); 
vertex(470, 300); 
vertex(430, 200);
vertex(390, 170); 
endShape();
//clickies
if (mouseIsPressed) {
  background(255, 0, 128);
  // hair static
  fill(31, 17, 2);
  beginShape(); 
  vertex(300, 100); 
  vertex(60, 200); 
  vertex(150, 220);
  vertex(70, 330); 
  vertex(120, 300); 
  vertex(90, 420); 
  vertex(150, 370); 
  vertex(120, 480); 
  vertex(330, 300); 
  vertex(480, 480);
  vertex(470, 330);
  vertex(500, 380);
  vertex(490, 270);
  vertex(520, 320);
  vertex(470, 150);
  vertex(375, 150);
  endShape();
  line(300, 100, 375, 150);
  //face
  fill(156, 108, 64);
  circle(300, 300, 300);
  //nose red boop
  fill(207, 17, 48);
  triangle(280, 310, 300, 330, 320, 310);
  //open mouth in shock
  fill(0, 0, 0);
  circle(300, 400, 70);
  //blushies
  fill(255, 0, 0, 89);
  ellipse(210, 310, 50, 20);
  fill(255, 0, 0, 89);
  ellipse(390, 310, 50, 20);
  //expand eyesies i think
  fill(300, 300, 300);
  circle(225, 265, 50);
  circle(375, 265, 50);
  fill (69, 42, 0);
  circle(225, 265, 40);
  circle(375, 265, 40);
  fill(0, 0, 0);
  circle(225, 265, 35);
  circle(375, 265, 35);
  //eye shiney
  fill(300, 300, 300);
  circle(235, 255, 13);
  circle(385, 255, 13);
  circle(215, 275, 7);
  circle(365, 275, 7);
  //bangs attempt
  fill(31, 17, 2);
  beginShape(); 
  vertex(360, 150); 
  vertex(300, 120); 
  vertex(170, 200);
  vertex(130, 270); 
  vertex(250, 200); 
  vertex(220, 230); 
  vertex(300, 200); 
  vertex(270, 240); 
  vertex(350, 200); 
  vertex(430, 270); 
  vertex(400, 200); 
  vertex(470, 300); 
  vertex(430, 200);
  vertex(390, 170); 
  endShape();
} else {
}
}
