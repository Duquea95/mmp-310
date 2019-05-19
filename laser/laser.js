class Laser extends Entity {
	constructor() {
		super(spaceship.x, spaceship.y);
		this.speed.y = -10;
		this.width = 40;
		this.height = 50;
	}

	display() {
		noStroke();
		rectMode(CENTER);
		image(laser, this.x, this.y, this.width, this.height);
	}

	update() {
		super.update();

		// remove lasers above canvas
		if (this.y < -this.height) {
			this.remove(lasers);
		}
	}
}
