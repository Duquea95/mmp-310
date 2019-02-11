// Characters
// pig

var story = "There once was a boy named Rusty. He was best friend with a pig named Bacon."

var sceneCount = 0;

// Settings: Dawn, Morning, Evening, Night
var bgColor = "orange";
var chapter = "Dawn";

// Sun Attributes
var sunX = 100;
var sunY = 285;
var sunSize = 300;

function setup(){
    createCanvas(1080, 1080);
}

function draw(){
    background(bgColor);

    if(chapter == "Dawn"){
        bgColor = "orange";
        fill("yellow");
        noStroke();
        ellipse(sunX, sunY, sunSize);
    }
    if(chapter == "Morning"){
        bgColor = "lightblue";
        fill("yellow");
        noStroke();
        ellipse(sunX + 300, sunY - 150, sunSize);
    }
    if(chapter == "Day"){
        bgColor = "darkblue";
        fill("yellow");
        noStroke();
        ellipse(sunX + 600, sunY - 150, sunSize);
    }
    if(chapter == "Night"){
        bgColor = "purple";
        fill("yellow");
        noStroke();
        ellipse(sunX + 880, sunY, sunSize);
    }


    // grass
    fill("green");
    rect(0, 320, 1080,760);

    // Pig Character
    drawPig();

    // Person Character
    drawHuman();

}
// function evening(){
//     currentSetting = "Evening";
//     bgColor = "darkblue";
// }

function mouseClicked(){
    console.log("Click");
    if(chapter == "Dawn") chapter = "Morning";
    else if(chapter == "Morning") chapter = "Day";
    else if(chapter == "Day") chapter = "Night";
    else if(chapter == "Night") chapter = "Dawn";
}

function drawHuman(){
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
    fill("white");
    ellipse(170, 490, 45, 20);
    ellipse(230, 490, 45, 20);

    // pupils
    fill("black");
    ellipse(170, 490, 20, 15);
    ellipse(230, 490, 20, 15);

    // mouth
    ellipse(200, 540, 25, 25);
}

function drawPig(){
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
