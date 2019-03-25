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

// function draw() {
// 	background(0);
// 	for (let i = 0; i < cats.length; i++) {
// 		cat(cats[i][0], cats[i][1], 100);
// 		cats[i][1] += 2;
// 	}
// }

// function cat(x, y, s) {
//     fill('white');
//
// 	// cat drawing
// 	fill(s/ 2, 0, s + x/4);
//     noStroke();
// //	triangle(x - s*0.75, y - s/4, x + s*0.75, y - s/4, x, y + s/2); // ears
//     ellipse(x - 60, y - 10, s/2); // left ear
//     ellipse(x + 60, y - 10, s/2); // right ear
//
//     fill(0);
//     noStroke();
//     ellipse(x - 60, y - 10, s/4); // inner left ear
//     ellipse(x + 60, y - 10, s/4); // inner right ear
//
//
//     fill(s/ 2, 0, s + x/4);
//     noStroke();
// 	ellipse(x, y, s); // face
//
//     ellipse(x, y + s/2, s * 0.5); // upper trunk
//     ellipse(x, y + s * 0.7, s* 0.4); // mid trunk
//     ellipse(x, y + s * 0.85, s * 0.3); // lower trunk
//
// 	fill(255, y);
// 	ellipse(x - s/4, y, s/4, s/2); // left eye
// 	ellipse(x + s/4, y, s/4, s/2); // right eye
//
//     fill(0);
// 	ellipse(x - s/4, y, s/6, s/4); // left eye
// 	ellipse(x + s/4, y, s/6, s/4); // right eye
//
// }
