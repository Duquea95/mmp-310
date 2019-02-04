function preload() {
    // pig = loadSound('assets/pig.mp3');
}

function setup(){
    createCanvas(1080, 1080);
    background("blue");
}
function draw(){

    // sun
    fill("yellow");
    ellipse(100, 285, 300, 300);

    // grass
    fill("green");
    rect(0, 320, 1080,760);

    // Pig Character
    // fill("white");
    fill("pink");

    // body
    rect(480, 660, 300, 150);

    // head
    rect(400, 600, 150, 150);

    // legs
    rect(500, 800, 75, 75);
    rect(540, 800, 75, 75);
    rect(660, 800, 75, 75);
    rect(700, 800, 75, 75);

    // eyes
    fill("white");
    ellipse(440, 650, 40, 70);
    ellipse(510, 650, 40, 70);

    // pupil
    fill("black");
    ellipse(440, 650, 20, 35);
    ellipse(510, 650, 20, 35);

    // nose
    fill("pink");
    strokeWeight(5);
    ellipse(475, 700, 40, 30);


    // Person Character

    // neck
    fill("beige");
    strokeWeight(1);
    rect(185, 560, 35, 60);
    strokeWeight(5);

    // arms
    // left
    rect(90, 600, 80, 30);
    // right
    rect(240, 600, 80, 30);

    // legs
    rect(150, 730, 40, 100);
    rect(210, 730, 40, 100);

    // body
    rect(150, 560, 105, 200, 75);

    // head
    ellipse(200, 500, 150, 150);

    // eyes
    ellipse(170, 490, 45, 20);
    ellipse(230, 490, 45, 20);

    // pupils
    fill("black");
    ellipse(170, 490, 25, 15);
    ellipse(230, 490, 25, 15);

    // mouth
    ellipse(200, 540, 25, 25);

}

// function mousePressed(){
//
// }
