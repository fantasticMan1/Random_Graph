var yPos = 0;
var lastYPos = 0;
var x = 0;

var randomPoint = function(xPos) {

	stroke(255, 0, 0);
	line(xPos + 6, height, xPos + 6, 0);
	stroke(255);
	line(xPos + 3, height, xPos + 3, 0);
	stroke(0);

	if (lastYPos < (height - 10) && lastYPos > 10) {

		yPos = random((lastYPos + 10), (lastYPos - 10));

	} else if (lastYPos > (height - 10)) {

		yPos = random(height - 40, height);

	} else if (lastYPos < 10) {

		yPos = random(0, 40);

	}
	
	line(xPos - 1, lastYPos, xPos, yPos);

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

	randomPoint(x);
	x++;
	if (x >= width) {
		x = 0;
	}
}