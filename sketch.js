var yPos = 0;
var xPos = 0;
var lastYPos = 0;
var drawPlease = true;
var interval = 500;
var x = 0;

var randomPoint = function(x) {
	
	stroke(255);
	line(xPos + 3, height, xPos + 3, 0);
	stroke(0);

	for(var j = 0; j < 25; j++) {

		if (lastYPos < (height - 10) && lastYPos > 10) {

			yPos = random((lastYPos + 10), (lastYPos - 10));

		} else if (lastYPos > (height - 10)) {

			yPos = random(height - 40, height);

		} else if (lastYPos < 10) {

			yPos = random(0, 40);

		}

		//conect the dots
		strokeWeight(1);
		line(xPos - 1, lastYPos, xPos, yPos);
		strokeWeight(3);

		if (j === 25) {
			stroke(255);
			line(xPos, height, xPos, 0);
		}
	}
	xPos = x;
	point(xPos, yPos);

	lastYPos = yPos;
}

function setup () {
	createCanvas(windowWidth, windowHeight);
	background(255);
	stroke(0);
	strokeWeight(3);
	
	yPos = random(height);
	lastYPos = yPos;
	
}

function draw() {
		
	/*if (drawPlease) {
		for(var i = 0; i < width; i++) {
			window.setTimeout(randomPoint(i), 5000);
		}
	}
	
	drawPlease = false;*/
	randomPoint(x);
	x++;
	if (x >= width) {
		x = 0;
	}
}