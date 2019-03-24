function setup() {
	createCanvas(840, 840);
	background(220);
	strokeWeight(2);


	// draw a line at each column
	for (let x = 0; x <= width; x += 60) {
		for (let y = 0; y <= height; y += 60) {
			triangle(x, x + random(- 20, 30), y + 50, x, y + random(width), x + random(50, 150));
			r = random(0, 255);
			g = random(0, 255);
			b = random(0, 255);
			randX = random(width);
			randY = random(width);
			randW = random(5, 30)
			fill(r,g,b);
			line(randX, randY, randW);
		}
	}

	function mouseClicked() {
			save('grid.jpg');
	}
	
}
