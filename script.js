var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById('button');




setGradient();


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var rannumber1=Math.floor(Math.random() * 256 );
	var rannumber2=Math.floor(Math.random() * 256 );
	var rannumber3=Math.floor(Math.random() * 256 );
	var ranrgb1="rgb("+rannumber1+","+rannumber2+","+rannumber3+")";
	var rannumber4=Math.floor(Math.random() * 256 );
	var rannumber5=Math.floor(Math.random() * 256 );
	var rannumber6=Math.floor(Math.random() * 256 );
	var ranrgb2="rgb("+rannumber4+","+rannumber5+","+rannumber6+")";

	
	

	body.style.background = "linear-gradient(to right, " 
	+ ranrgb1 
	+ ", " 
	+ ranrgb2
	+ ")";

	css.textContent = body.style.background;

	//this seems to work but need to convert rgb to hex
	//color1.value = ranrgb1;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener('click', randomColor);