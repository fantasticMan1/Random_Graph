var yPos = 0;
var xPos = 0;
var lastYPos = 0;
var drawPlease = true;
var interval = 500;

var connectDots = function(x1, y1, y2) {
	
	strokeWeight(1);
	
	var yDistance = y1 - y2;
	
	if (yDistance > 0) {
		for (var i = 0; i < yDistance; i++) {
			point(x1, y1 + i);
		}
	} else if (yDistance < 0) {
		for (var i = 0; i > yDistance; i--) {
			point(x1, y1 + i);
		}
	}
	
	strokeWeight(3);
	
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
		
	if (drawPlease) {
		for(var i = 0; i < width; i++) {
			
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
				
				connectDots(xPos, lastYPos, yPos);

				if (j === 25) {
					stroke(255);
					line(xPos, height, xPos, 0);
				}
			}
			xPos = i;
			point(xPos, yPos);

			lastYPos = yPos;
		}
	}
	
	drawPlease = false;
}