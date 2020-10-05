alert("GAME INSTRUCTIONS: RGB() is a color model in which 'r' denotes red, 'g' denotes green and 'b' denotes blue color. The values represented in brackete ranging from 0 to 255 represents the intensity of color where (255, 0, 0) gives red color and (0, 255,0) gives green color and (0, 0, 255) gives blue color with dark intensities. SO IDENTIFY THE FOLLOWING COLORS AND ENJOY THE GAME!")

var numsquares=6;
var colors=[];
var pickedcolor;
var squares=document.querySelectorAll(".square");
var colordis=document.querySelector("#colordis");
var messagedis=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetBut=document.querySelector("#reset");
var modeBut=document.querySelectorAll(".mode");

init();

function init(){
	for(var i=0;i<modeBut.length;i++)
	{
		modeBut[i].addEventListener("click",function(){
		modeBut[0].classList.remove("selected");
		modeBut[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"? numsquares=3: numsquares=6;
		reset();
		});
	}

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click",function(){
		//grab color of picked square
		var clickedcolor=this.style.backgroundColor;
		//and compare color to pickedcolor
		if (clickedcolor===pickedcolor) {
			messagedis.textContent="CORRECT!";
			resetBut.textContent="Play Again?";
			changeColor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
		}
		else{
			this.style.backgroundColor="#232323";
			messagedis.textContent="Try Again";
		}

	});
	}

	reset();	
}


resetBut.addEventListener("click",function(){
	colors=generateRandomColors(numsquares);
	pickedcolor=pickcolor();
	colordis.textContent=pickedcolor;
	this.textContent="New Colors";
	messagedis.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
});



function reset(){
	colors=generateRandomColors(numsquares);
	pickedcolor=pickcolor();
	colordis.textContent=pickedcolor;
	this.textContent="New Colors";
	messagedis.textContent="";
	for(var i=0;i<squares.length;i++){
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


