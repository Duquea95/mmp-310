/*
	array drawing
	week 7 mmp 310
*/

var points = []; // empty array
var cats = []; // empty array
var r = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// noStroke();
}

function draw() {
	background(51);

	if (mouseIsPressed) {
		points.push([mouseX, mouseY]);
	}
	translate(width/2, height/2);
	scale(r);
	r += 0.01;

	for (let i = 0; i < points.length; i++){
		butterfly(points[i][0] - width/2, points[i][1] - height/2);
	}

}

function butterfly(x,y){
    fill('black');

    // Left Wing
    ellipse(x, y, 40);
    ellipse(x, y - 30, 40);

    // Right Wing
    ellipse(x + 60, y, 40);
    ellipse(x + 60, y - 30, 40);

    // Body
    ellipse(x + 30, y - 10, 30, 80);
    fill('white');
    ellipse(x + 30, y - 10, 24, 68);

    // Antenna
    strokeWeight(1);
    stroke('white');
    line(x + 30,y - 50, x + 35, y - 55);

    line(x + 30 , y - 50, x + 25, y - 55);

    // Right Inner Wing
    noStroke();
    fill(100, 50, 150);
    ellipse(x + 60, y, 20);
    ellipse(x + 60, y - 30, 20);

    // Left Inner Wing
    ellipse(x, y, 20);
    ellipse(x, y - 30, 20);
}
