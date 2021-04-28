var ball1x = 300;
var ball1y = 300;

var ball2x = 300;
var ball2y = 300;

var ball3x = 300;
var ball3y = 300;

var ball4x = 300;
var ball4y = 300;

var ball5x = 300;
var ball5y = 300;

var ball6x = 300;
var ball6y = 300;

var ball7x = 300;
var ball7y = 300;

var ball8x = 300;
var ball8y = 300;

var ball9x = 300;
var ball9y = 300;

var ball10x = 300;
var ball10y = 300;

var ball11x = 300;
var ball11y = 300;

var ball12x = 300;
var ball12y = 300;

var ball13x = 300;
var ball13y = 300;

var ball14x = 300;
var ball14y = 300;

var ball15x = 300;
var ball15y = 300;

var ball16x = 300;
var ball16y = 300;

var ball17x = 300;
var ball17y = 300;

var ball18x = 300;
var ball18y = 300;

var ball19x = 300;
var ball19y = 300;

var ball20x = 300;
var ball20y = 300;

var ball1Size = 40;
var ball2Size = 40;
var ball3Size = 40;
var ball4Size = 40;
var ball5Size = 40;
var ball6Size = 40;
var ball7Size = 40;
var ball8Size = 40;
var ball9Size = 40;
var ball10Size = 40;
var ball11Size = 40;
var ball12Size = 40;
var ball13Size = 40;
var ball14Size = 40;
var ball15Size = 40;
var ball16Size = 40;
var ball17Size = 40;
var ball18Size = 40;
var ball19Size = 40;
var ball20Size = 40;

var score =-90;
var bubbles =-20;



function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background('black');
  
  line(ball1x, ball1y, mouseX, mouseY);
  ellipse(ball1x, ball1y, ball1Size, ball1Size);
  
  line(ball2x, ball2y, mouseX, mouseY);
  ellipse(ball2x, ball2y, ball2Size, ball2Size);
  
  line(ball3x, ball3y, mouseX, mouseY);
  ellipse(ball3x, ball3y, ball3Size, ball3Size);
  
  line(ball4x, ball4y, mouseX, mouseY);
  ellipse(ball4x, ball4y, ball4Size, ball4Size);
  
  line(ball5x, ball5y, mouseX, mouseY);
  ellipse(ball5x, ball5y, ball5Size, ball5Size);
  
  line(ball6x, ball6y, mouseX, mouseY);
  ellipse(ball6x, ball6y, ball6Size, ball6Size);
  
  line(ball7x, ball7y, mouseX, mouseY);
  ellipse(ball7x, ball7y, ball7Size, ball7Size);
  
  line(ball8x, ball8y, mouseX, mouseY);
  ellipse(ball8x, ball8y, ball8Size, ball8Size);
    
  line(ball9x, ball9y, mouseX, mouseY);
  ellipse(ball9x, ball9y, ball9Size, ball9Size);
      
  line(ball10x, ball10y, mouseX, mouseY);
  ellipse(ball10x, ball10y, ball10Size, ball10Size);
  
  line(ball11x, ball11y, mouseX, mouseY);
  ellipse(ball11x, ball11y, ball11Size, ball11Size);
  
  line(ball12x, ball12y, mouseX, mouseY);
  ellipse(ball12x, ball12y, ball12Size, ball12Size);
  
  line(ball13x, ball13y, mouseX, mouseY);
  ellipse(ball13x, ball13y, ball13Size, ball13Size);
  
  line(ball14x, ball14y, mouseX, mouseY);
  ellipse(ball14x, ball14y, ball14Size, ball14Size);
  
  line(ball15x, ball15y, mouseX, mouseY);
  ellipse(ball15x, ball15y, ball15Size, ball15Size);
  
  line(ball16x, ball16y, mouseX, mouseY);
  ellipse(ball16x, ball16y, ball16Size, ball16Size);
  
  line(ball17x, ball17y, mouseX, mouseY);
  ellipse(ball17x, ball17y, ball17Size, ball17Size);
  
  line(ball18x, ball18y, mouseX, mouseY);
  ellipse(ball18x, ball18y, ball18Size, ball18Size);
    
  line(ball19x, ball19y, mouseX, mouseY);
  ellipse(ball19x, ball19y, ball19Size, ball19Size);
      
  line(ball20x, ball20y, mouseX, mouseY);
  ellipse(ball20x, ball20y, ball20Size, ball20Size);
  
  levelOne();
  
  text(("Welcome to Space Bubbles!"), width/2, 20);
  text(("Score: " + score), width/2, 50);
  text(("Bubbles Popped: " + bubbles), width/2, 80);

} // end draw

function levelOne(){
  text("Click to pop the Bubbles!", width/2, height-70);
  text("Earn points for each Bubble you pop!", width/2, height-40);
  text("Win cool prizes from your points!", width/2, height-10);
  
  var distToBall1= dist(ball1x, ball1y, mouseX, mouseY);
  if (distToBall1 <ball1Size/2){
    if (mouseIsPressed){
    ball1x = random(width);
    ball1y= random(height);
    ball1Size = random(100); 
    score= score +5;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall2= dist(ball2x, ball2y, mouseX, mouseY);
  if (distToBall2 <ball2Size/2){
    if (mouseIsPressed){
    ball2x = random(width);
    ball2y= random(height);
    ball2Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall3= dist(ball3x, ball3y, mouseX, mouseY);
  if (distToBall3 <ball3Size/2){
    if (mouseIsPressed){
    ball3x = random(width);
    ball3y= random(height);
    ball3Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall4= dist(ball4x, ball4y, mouseX, mouseY);
  if (distToBall4 <ball4Size/2){
    if (mouseIsPressed){
    ball4x = random(width);
    ball4y= random(height);
    ball4Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall5= dist(ball5x, ball5y, mouseX, mouseY);
  if (distToBall5 <ball5Size/2){
    if (mouseIsPressed){
    ball5x = random(width);
    ball5y= random(height);
    ball5Size = random(100);
    score= score +10;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall6= dist(ball6x, ball6y, mouseX, mouseY);
  if (distToBall6 <ball6Size/2){
    if (mouseIsPressed){
    ball6x = random(width);
    ball6y= random(height);
    ball6Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall7= dist(ball7x, ball7y, mouseX, mouseY);
  if (distToBall7 <ball7Size/2){
    if (mouseIsPressed){
    ball7x = random(width);
    ball7y= random(height);
    ball7Size = random(100); 
    score= score +5;
    bubbles= bubbles +1;
    }
  }
    
  var distToBall8= dist(ball8x, ball8y, mouseX, mouseY);
  if (distToBall8 <ball8Size/2){
    if (mouseIsPressed){
    ball8x = random(width);
    ball8y= random(height);
    ball8Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
    
  var distToBall9= dist(ball9x, ball9y, mouseX, mouseY);
  if (distToBall9 <ball9Size/2){
    if (mouseIsPressed){
    ball9x = random(width);
    ball9y= random(height);
    ball9Size = random(100);
    score= score +5;
    bubbles= bubbles +1;
    }
  }
    
  var distToBall10= dist(ball10x, ball10y, mouseX, mouseY);
  if (distToBall10 <ball10Size/2){
    if (mouseIsPressed){
    ball10x = random(width);
    ball10y= random(height);
    ball10Size = random(100);
    score= score +10;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall11= dist(ball11x, ball11y, mouseX, mouseY);
  if (distToBall11 <ball11Size/2){
    if (mouseIsPressed){
    ball11x = random(width);
    ball11y= random(height);
    ball11Size = random(100); 
    fill(random(100));
    score= score +5;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall12= dist(ball12x, ball12y, mouseX, mouseY);
  if (distToBall12 <ball12Size/2){
    if (mouseIsPressed){
    ball12x = random(width);
    ball12y= random(height);
    ball12Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall13= dist(ball13x, ball13y, mouseX, mouseY);
  if (distToBall13 <ball13Size/2){
    if (mouseIsPressed){
    ball13x = random(width);
    ball13y= random(height);
    ball13Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall14= dist(ball14x, ball14y, mouseX, mouseY);
  if (distToBall14 <ball14Size/2){
    if (mouseIsPressed){
    ball14x = random(width);
    ball14y= random(height);
    ball14Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall15= dist(ball15x, ball15y, mouseX, mouseY);
  if (distToBall15 <ball15Size/2){
    if (mouseIsPressed){
    ball15x = random(width);
    ball15y= random(height);
    ball15Size = random(100);
    score= score +10;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall16= dist(ball16x, ball16y, mouseX, mouseY);
  if (distToBall16 <ball16Size/2){
    if (mouseIsPressed){
    ball16x = random(width);
    ball16y= random(height);
    ball16Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
  
  var distToBall17= dist(ball17x, ball17y, mouseX, mouseY);
  if (distToBall17 <ball17Size/2){
    if (mouseIsPressed){
    ball17x = random(width);
    ball17y= random(height);
    ball17Size = random(100); 
    score= score +5;
    bubbles= bubbles +1;
    }
  }
    
  var distToBall18= dist(ball18x, ball18y, mouseX, mouseY);
  if (distToBall18 <ball18Size/2){
    if (mouseIsPressed){
    ball18x = random(width);
    ball18y= random(height);
    ball18Size = random(100);
    score= score +1;
    bubbles= bubbles +1;
    }
  }
    
  var distToBall19= dist(ball19x, ball19y, mouseX, mouseY);
  if (distToBall19 <ball19Size/2){
    if (mouseIsPressed){
    ball19x = random(width);
    ball19y= random(height);
    ball19Size = random(100);
    score= score +5;
    bubbles= bubbles +1;
    }
  }
    
  var distToBall20= dist(ball20x, ball20y, mouseX, mouseY);
  if (distToBall20 <ball20Size/2){
    if (mouseIsPressed){
    ball20x = random(width);
    ball20y= random(height);
    ball20Size = random(100);
    score= score +20;
    bubbles= bubbles +1;
    }
  }
}
