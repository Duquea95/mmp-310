// Settings: Dawn, Morning, Evening, Night
var bgColor = "Orange";

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(bgColor);

    let size = random(10, 1000);
    let increment = size;
    for (let x = 0; x <= width; x += increment) {

        let y = height/2 + random(-100, 100);

        faceSize = random(50, 500);

        let r = random(255);
        let g = random(200, 255);
        let b = random(255);
        fill(r, g, b);
        ellipse(x, y, faceSize); // face

        var randomChoice = random(3); // making random choices
        if (randomChoice > 2) {
            fill('purple');
        } else if (randomChoice > 1) {
            fill('green');
        } else {
            fill('blue');
        }

        let eyeSize = faceSize / 5;

        if (random(1) > 0.5) {
            ellipse(x + eyeSize, y - eyeSize, eyeSize); // left eye
            ellipse(x - eyeSize, y - eyeSize, eyeSize); // right eye
        } else {
            rect(x + eyeSize, y - eyeSize, eyeSize, eyeSize); // left eye
            rect(x - eyeSize, y - eyeSize, eyeSize, eyeSize); // right eye
        }

        fill('yellow');
        let mouthSize = faceSize / 2;
        rect(x, y + mouthSize / 2 + random(20), mouthSize, mouthSize / 4, mouthSize/8);
    }

    // for (let x = 0; x < width; x += 200) {
	// 	fill('plum');
	// 	ellipse(x, 100, 200); // face
	// 	fill(0);
	// 	ellipse(x + 50, 50, 50); // left eye
	// 	ellipse(x - 50, 50, 50); // right eye
	// 	fill('gold');
	// 	rect(x, 150, 100, 25, 10); // mouth
	// }
    //
	// let x = width/10;
	// for (let i = 0; i < 5; i++) {
	// 	var c = map(i, 0, 4, 0, 255); // map color
	// 	fill(c);
	// 	var s = map(i, 0, 4, 50, 200); // map size
	// 	var y = map(i, 0, 4, 300, 500);
	// 	ellipse(x, y, s);
	// 	x += width/5;
	// }
}
