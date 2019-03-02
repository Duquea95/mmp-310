// Homework 4: Loop Variation
var bgColor = "Orange";

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(bgColor);

    var total = random(10)

    for (let x = 0; x < total ; x++) {
        var randomChoice = random(3); // making random choices

        let r = random(0, 255);
        let g = random(0, 255);
        let b = random(0, 255);
        fill(r, g, b);

        let randX = random(0, width);
        let randY = random(0, height);
        let faceSize = random(50, 200);


        if (randomChoice > 2) {
            ellipse(randX, randY, faceSize); // circle
        } else if (randomChoice > 1) {
            rect(randX, randY, faceSize, faceSize); // rectangle
        } else {
            triangle(randX, randY, faceSize, faceSize); // triangle
        }

        if (randomChoice > 2) {
            fill("purple");
        } else if (randomChoice > 1) {
            fill("blue");
        } else {
            fill("green");
        }

        let eyeSize = faceSize / 5;

        if (random(1) > 0.5) {
            ellipse(randX + eyeSize, randY - eyeSize, eyeSize); // left eye
            ellipse(randX - eyeSize, randY - eyeSize, eyeSize); // right eye
        } else {
            rect(randX + eyeSize, randY - eyeSize, eyeSize, eyeSize); // left eye
            rect(randX - eyeSize, randY - eyeSize, eyeSize, eyeSize); // right eye
        }

        // mouth
        fill(random(0,255));
        let mouthSize = faceSize / 2;
        rect(randX, randY + mouthSize / 2 + random(20), mouthSize, mouthSize / 8, mouthSize/ 16);
    }
}
