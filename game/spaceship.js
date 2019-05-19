/*
	spaceship class
*/

class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 300);
	}

	display() {
		fill('pink');
		triangle(
			this.x, this.y,
			this.x - this.size, this.y + this.size * 2,
			this.x + this.size, this.y + this.size * 2
		);
	}

	controls() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speed.x = 5;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speed.x = -5;
		} else {
			this.speed.x = 0;
		}
	}
}
