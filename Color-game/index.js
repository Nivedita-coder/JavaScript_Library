document.addEventListener("DOMContentLoaded", function(event){
			 var colors = squaresColor(6);
		var square = document.querySelectorAll(".square");
		var display = document.getElementById("display");
		var navigation = document.getElementById("navigation");
		var select = pickColor();
		var message = document.getElementById("message");
		var easyBtn = document.getElementById("easyBtn");
		var hardBtn = document.getElementById("hardBtn");
		var h1 = document.querySelector("h1");
		display.textContent = select;
		for(var i=0 ; i< square.length ; i++)
		{
			//give cololo to all square
			square[i].style.background = colors[i];
			//select a color for the headline
			//cheak if the color matches
			square[i].addEventListener("click",function(){
				var x= (this .style.background);
				if(x == select)
				{
					selectColor(x);
					message.textContent = "correct!";
					h1.style.background = select;

				}
				else{
					this.style.background = "#232323";
					message.textContent = "try again!!";
				}
			});//

			//if match then alert
		}
		function selectColor(color)
		{
			for(var j=0 ; j< square.length ; j++)
					{
						square[j].style.background = color;
					}
		}
			function pickColor()
			{
				var random = Math.floor(Math.random() * colors.length);
				return colors[random];
			}

		function squaresColor(num)
		{
			var arr = [];
			// select color for red
			for( var i=0 ; i< num; i++)
			{
				arr.push(randomColor());
			}
			return arr;
		}
			function randomColor()
			{
				var r = Math.floor(Math.random() * 256);
			//select color for green
			var g = Math.floor(Math.random() * 256);
			// select color for blue
			var b = Math.floor(Math.random() * 256);
			return "rgb(" + r + ", " + g + ", " + b +")";
			}


		navigation.addEventListener("click",function(){
			colors = squaresColor(6);
				select = pickColor();
				console.log(select);
			display.textContent = select;

			
			for(var i=0 ; i< square.length ; i++)
			{
				console.log(colors[i]);
				square[i].style.background = colors[i];
			}
			h1.style.background = "steelblue";
		})
		easyBtn.addEventListener("click",function(){
			
			colors = squaresColor(3);
				select = pickColor();
				display.textContent = select;
				for(var i=0 ; i< square.length ; i++)
					if(colors[i])
			{
				console.log(colors[i]);
				square[i].style.background = colors[i];
			}
			else
			{
				square[i].style.background = "none";
			}
			
						});
		hardBtn.addEventListener("click",function(){
			colors = squaresColor(6);
				select = pickColor();
				display.textContent = select;
				for(var i=0 ; i< square.length ; i++)
				{
				square[i].style.background = colors[i];
		
			
				square[i].style.background = "block";
			}
			
		})

});







// how to pic a random color from there 6 color
//how to give random color to these 6 squares
// how to reset game
//change the game mode easy or hard

//
//If you want console.log() to spit out the DOM element, you need to log the DOM element and not the jQuery object. The DOM element is always accessible as the 0th element of the jQuery selector. So, the way you would access the actual DOM element from a jQuery selector is like this:
  // $("#someSingleDOMObjectSelector")[0]
//And to get the DOM element to appear in the log the way you would like, you would do this:
  // console.log($("#someSingleDOMObjectSelector")[0]);
//And for jQuery selectors which contain/return multiple DOM elements, you could loop them, like this:
  // $('.someMultipleDOMObjectSelector').each(function(){
           //console.log($(this)[0]); //or -->
    //       console.log(this);
  // });