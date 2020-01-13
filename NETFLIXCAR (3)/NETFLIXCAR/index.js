
var quantity = screen.width/285;
var slide = 0;

var clicright = 0;
var clicleft = 1; 
var maxclicright = 12/quantity;

var detailclic = 1;
const movie = document.getElementsByClassName("movie");
var i;

//all vriables needed for this task

var rbutton = document.getElementsByClassName("button-right");//.addEventListener("click", moveitright);
var lbutton = document.getElementsByClassName("button-left");//.addEventListener("click", moveitleft);



for (var i = 0; i < movie.length; i++) {
  movie[i].addEventListener('click', movedetail);
}

for (var b = 0; b < rbutton.length; b++) {
  rbutton[b].addEventListener('click', moveitright);
}

for (var i = 0; i < lbutton.length; i++) {
  lbutton[i].addEventListener('click', moveitleft);
}


//makes the pictures clickable

function moveitright(){

var bruh = this.getAttribute("data-banner");

  if(document.getElementById(bruh).style.right < 1500 + 'px'){ 
    clicright = clicright + 1; clicleft = clicleft-1;
       document.getElementById(bruh).style.right =  (clicright*quantity*285) + 'px';
  }
       else if(clicright = maxclicright){document.getElementById(bruh).style.right =  0 + 'px'; clicright = 0;};  
} 
//makes the slider go right but returns when you reach the end

function moveitleft(){

  var bruh = this.getAttribute("data-banner");

  if(document.getElementById(bruh).style.right =  0 + 'px'){document.getElementById(bruh).style.right =  0 + 'px'; clicright = 0;}
    else {
     document.getElementById(bruh).style.right =  -(clicleft*quantity*285) + 'px';
      clicleft = clicleft + 1;clicright = clicright-1;
    }      
}
//function to make the slider go left but no when it is in starting position

 
function movedetail(){
  var bigpic  = this.getAttribute("data-pic");
  var yete = this.getAttribute("data-pos");
  document.getElementById(yete).style.left = -bigpic + "px";
  document.getElementById(yete).style.visibility =  "visible"

  
}




//makes the bigger picture appear



// huidige width van items ophalen

  // get amount of items

  // calculate entire width (nr of items * width of an item)
  // this is the width of the slider

  // hoeveel items passen er op het scherm?

  // logica hieronder uitbreiden: bijhouden hoeveel keer geklikt werd
  // left/right updaten met de width * aantal