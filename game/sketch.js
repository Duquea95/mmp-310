/*
	mmp 310 week 9
	spaceship object
*/

var spaceship;
var asteroids = [];
var lasers = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	spaceship = new Spaceship();
}

function draw() {
	background(51);

	// adds random asteroid
	if (random(100) > 99) {
		// create an asteroid
		asteroids.push(new Asteroid());
	}

	spaceship.controls();
	spaceship.display();
	spaceship.update();

	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
		asteroids[i].collide();

        // Collision with Spaceship
        if(asteroids[i].collide(spaceship)){
            // end game
        }

        for(let j = 0; j < lasers.length; j++){
            if(asteroids[i].collide(lasers[j])){
                asteroids[i].died = true;
                lasers[j].died = true;
            }
        }
	}

	for (let i = 0; i < lasers.length; i++) {
		lasers[i].display();
		lasers[i].update();
	};

    // clean up dead asteroids and lasers
    for(let i = 0; i < asteroids.length; i++){
        if(asteroids[i].died){
            asteroids[i].remove();
        }
    }

    for(let i = 0; i < lasers.length;i++){

    }

}
