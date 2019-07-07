var colors = [];
var pickedColor;
var numSquares = 6;
var squares = document.getElementsByClassName("square");
var colorDisp = document.getElementById("colorDisp");
var h1 = document.querySelector("h1");
var newColorsBtn = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode"); 
var messageDisp = document.querySelector("#message");


setup();
function setup(){
		//mode buttons event listeners
         setupModeButtons();
		//setup squares
		setupSquares();
	 reset();
}


function setupSquares(){
	for(var i=0;i<squares.length;i++){
		
		//adding click listeners
		squares[i].addEventListener("click",function(){
	    
	     //check color of clicked square 
	     var clickedColor = this.style.backgroundColor;

	     //compare color with pickedColor
	     if(clickedColor===pickedColor){
	     	messageDisp.textContent = "Correct!";
	     	changeColors(clickedColor);
	     	h1.style.backgroundColor = clickedColor;
	     	newColorsBtn.textContent = "Play Again?";
	     }
	     else{
	     	this.style.backgroundColor = "#232323";
	     	messageDisp.textContent = "Try Again!";
	     }
	   });
	 }
}



function setupModeButtons(){
	for(var i=0;i<modeBtns.length;i++){
			modeBtns[i].addEventListener("click",function(){
				//remove class selectedBtn from both and add to clicked one
			 modeBtns[0].classList.remove("selectedBtn");
			 modeBtns[1].classList.remove("selectedBtn");
		     this.classList.add("selectedBtn");
		     //decide numSquares
		      this.textContent === "Easy"?numSquares = 3:numSquares = 6;
		     reset();
			});
		}
}

function reset(){
	messageDisp.textContent = "New Colors";
colors = generateRandomColors(numSquares);
for(var i=0;i<squares.length;i++){
	if(colors[i])
	    {
	    	squares[i].style.display = "block";
	    	squares[i].style.backgroundColor = colors[i];
	    }
    else
       squares[i].style.display = "none";
}
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisp.textContent = "";
}


//adding event listener to newColorsBtn
newColorsBtn.addEventListener("click",reset);


function changeColors(color){
	//loop through all squares and change its color to pickedColor
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var randomNumber = Math.floor(Math.random()*colors.length);
	return colors[randomNumber];
}

function generateRandomColors(length){
	var result = [];
	for(var i=0;i<length;i++)
	{
		result[i] = randomColor();
	}
	return result;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
    var color = "rgb("+r+", "+g+", "+b+")";
    return color;
}