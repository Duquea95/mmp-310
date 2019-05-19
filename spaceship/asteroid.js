class Asteroid {
	// Asteroid constructor
	constructor() {
		this.x = random(width);
		this.y = -100;
		this.size = random(100);
		this.speed = {
			x: random(-1, 1),
			y: random(2, 5)
		};
		this.color = color(random(255), random(255), random(255));
	}
	// Display
	display() {
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	// Update Speed
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	// Collide Detection
	collide() {
		var d = dist(this.x, this.y, spaceship.x, spaceship.y);
		if (d < this.size / 2) {
			textSize(100);
			textAlign(CENTER, CENTER);
			fill('orange');
			text("Game Over", width/2, height/2);
			noLoop();
		}
	}
}
