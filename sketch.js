function setup(){
    createCanvas(1080, 1080);
    background("blue");
}
function draw(){
    fill("yellow");
    ellipse(100, 285, 300, 300);

    fill("green");
    rect(0, 320, 1080,760);

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
}
