class Spaceship extends Entity {
	constructor() {
		super(width/2, height - 200);
        this.color = color(random(255), random(255), random(255));
        this.color2 = color(random(255), random(255), random(255));
	}

	display() {
		fill(this.color);
		triangle(
			this.x, this.y,
			this.x - this.size, this.y + this.size * 2,
			this.x + this.size, this.y + this.size * 2
		);
        fill(this.color2);
        ellipse(this.x - this.size / 1,
                this.y + this.size * 2,
                this.size - this.size / 2,
                this.size * 1.5);

        ellipse(this.x + this.size / 1,
                this.y + this.size * 2,
                this.size - this.size / 2,
                this.size * 1.5);
	}

	update() {
		super.update();
		if (this.x > width) {
			this.x = 0;
		}
		if (this.x < 0) {
			this.x = width;
		}
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
