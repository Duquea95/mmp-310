function setup() {
	createCanvas(840, 840);
	background('blue');
	strokeWeight(2);


	// draw a line at each column
	for (let x = 0; x <= width; x += 60) {
		for (let y = 0; y <= height; y += 60) {
			ellipse(x + random(0, 20), x + 25, y + 25);
			r = random(0, 255);
			g = random(0, 255);
			b = random(0, 255);
			randX = random(width);
			randY = random(width);
			randW = random(5, 30)
			randH = random(25, 50)
			fill(r,g,b);
			rect(randX, randY, randW, randH);
		}
	}
}

function mouseClicked() {
	save('grid.jpg');
}
