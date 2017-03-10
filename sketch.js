var yPos = 0;
var lastYPos = 0;
var x = 0;
let hueCap = 200;

var leadingLine = function(xPos, highRed, highGreen, highBlue, lowRed, lowGreen, lowBlue) {
	
	stroke(255, 0, 0);
	line(xPos + 6, height, xPos + 6, 0);
	stroke(highRed, highGreen, highBlue);
	line(xPos + 3, height, xPos + 3, yPos);
	stroke(lowRed, lowGreen, lowBlue);
	line(xPos + 3, 0, xPos + 3, yPos);
	stroke(0);
	
}

var randomPoint = function(xPos) {

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
	
	highRed = random(255);
	highGreen = random(255);
	highBlue = random(255);
	lowRed = random(255);
	lowGreen = random(255);
	lowBlue = random(255);
}

function draw() {

	leadingLine(x, highRed, highGreen, highBlue, lowRed, lowGreen, lowBlue);
	randomPoint(x);
	
	x++;
	if (x >= width) {
		x = 0;
	}
	
	highRed = random(highRed - 10, highRed + 10);
	highGreen = random(highGreen - 10, highGreen + 10);
	highBlue = random(highBlue - 10, highBlue + 10);
	lowRed = random(lowRed - 10, lowRed + 10);
	lowGreen = random(lowGreen - 10, lowGreen + 10);
	lowBlue = random(lowBlue - 10, lowBlue + 10);
	
	//ensure that the color does not go beyond hueCap or below 0
	if (highRed > hueCap) {
		highRed = random(hueCap - 25, hueCap);
	} else if (highRed < 0) {
		highRed = random(0, 25);
	}
	if (highGreen > hueCap) {
		highGreen = random(hueCap - 25, hueCap);
	} else if (highGreen < 0) {
		highGreen = random(0, 25);
	}
	if (highBlue > hueCap) {
		highBlue = random(hueCap - 25, hueCap);
	} else if (highBlue < 0) {
		highBlue = random(0, 25);
	}
	if (lowRed > hueCap) {
		lowRed = random(hueCap - 25, hueCap);
	} else if (lowRed < 0) {
		lowRed = random(0, 25);
	}
	if (lowGreen > hueCap) {
		lowGreen = random(hueCap - 25, hueCap);
	} else if (lowGreen < 0) {
		lowGreen = random(0, 25);
	}
	if (lowBlue > hueCap) {
		lowBlue = random(hueCap - 25, hueCap);
	} else if (lowBlue < 0) {
		lowBlue = random(0, 25);
	}
}