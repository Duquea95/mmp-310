var asteroids = [];
// Spaceship constructor
var spaceship = {
	x: 0,
	y: 200,
	size: 50,
	speed: 5,
	display: function () {
		fill(200,100, 100);
		triangle(
			this.x, this.y,
			this.x - this.size, this.y + this.size * 2,
			this.x + this.size, this.y + this.size * 2
		);

	    fill(30,30,30);

	    ellipse(this.x - this.size / 1,
	            this.y + this.size * 2,
	            this.size - this.size / 2,
	            this.size * 1.5);

	    ellipse(this.x + this.size / 1,
	            this.y + this.size * 2,
	            this.size - this.size / 2,
	            this.size * 1.5);
	},
	update: function () {
		if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed;
		}

		if (keyIsDown(LEFT_ARROW)) {
			this.x -= this.speed;
		}
	}
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	// position the spaceship at start of game
	spaceship.x = width/2;
	spaceship.y = height - 200;
}

function draw() {
	background(51);

	// adds random asteroid
	if (random(100) > 99) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}

	spaceship.display();
	spaceship.update();

	// Asteroid Object Loop
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();
	}
}
