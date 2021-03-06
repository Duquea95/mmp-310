// Settings: Dawn, Morning, Evening, Night
var bgColor = "Orange";
var chapter = "Dawn";
var whichChar = " ";

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
        drawSun();
        // grass
        drawGrass();
        // Pig Character
        drawPig();
        // Person Character
        drawHuman();
        narrative("There once was a boy named Rusty. One morning while hunting for food, he encountered a pig.", "Click anywhere to continue");
    }
    else if(chapter == "Morning"){
        bgColor = "lightblue";
        fill("yellow");
        drawSun();
        // grass
        drawGrass();
        // Pig Character
        drawPig();
        // Person Character
        drawHuman();
        narrative("What good fortune! I have found food for the next 3 days!", "Click anywhere to continue");
    }
    else if(chapter == "Day"){
        bgColor = "darkblue";
        fill("yellow");
        drawSun();
        // grass
        drawGrass();
        // Pig Character
        drawPig();
        // Person Character
        drawHuman();
        if(whichChar == "pig"){
            narrative("WAIT NO!!", "Click anywhere to continue");
        }
        // bgColor = "darkblue";
        // fill("yellow");
        // drawSun();
        // // grass
        // drawGrass();
        // // Pig Character
        // drawPig();
        // // Person Character
        // drawHuman();
        // narrative("WAIT!! I am no snack. I'm Tim the pig!.", "Click anywhere to continue");
        // ellipse(sunX + 600, sunY - 150, sunSize);
        // noStroke();

        if(whichChar == "man"){
            bgColor = "purple";
            fill("yellow");
            drawSun();
            // grass
            drawGrass();
            // Pig Character
            // drawPig()
            // Person Character
            drawHuman();
            narrative("What a great meal!", "Click anywhere to continue");
        }
    }
    else if(chapter == "Night"){
        if(whichChar == "pig"){
            bgColor = "purple";
            fill("yellow");
            drawSun();
            // grass
            drawGrass();
            // Pig Character
            drawPig();
            // Person Character
            drawHuman();
            narrative("Thank you for sparing my life friend!.", "Click anywhere to continue");
        }
        if(whichChar == "man"){
            bgColor = "purple";
            fill("yellow");
            drawSun();
            // grass
            drawGrass();
            // Pig Character
            drawPig();
            // Person Character
            drawHuman();
            narrative("That was delicious. Time for sleep!.", "Click anywhere to continue");
        }
    }
}

function mouseClicked(){
    if(chapter == "Dawn") chapter = "Morning";
    // else if(chapter == "Morning") chapter = "Day";
    else if (chapter == "Morning"){
        // If Human clicked
        // var humanDist = dist(mouseX, mouseY, 0, 1200);
        if (mouseX < 400 ) {
            whichChar = "man";
            chapter = "Day";
            console.log('man clicked');
            // console.log(humanDist);
        }
        // If pig clicked
        // var pigDist = dist(mouseX, mouseY, 0, 1200);
        if (mouseX > 600) {
            // console.log(pigDist);
            whichChar = "pig";
            chapter = "Day";
            console.log('pig clicked');
        }
    }
    else if(chapter == "Day") chapter = "Night";
    else if(chapter == "Night") chapter = "Dawn";
}

function drawGrass() {
    fill("green");
    rect(0, 400, 1080,760);
}

function drawSun(){
    noStroke();

    if(chapter == "Dawn"){
        ellipse(sunX, sunY, sunSize);
        // noStroke();
    }
    if(chapter == "Morning"){
        ellipse(sunX + 300, sunY - 150, sunSize);
    }
    if(chapter == "Day"){
        ellipse(sunX + 600, sunY - 150, sunSize);
    }
    if(chapter == "Night"){
        ellipse(sunX + 880, sunY, sunSize);
    }
}

function drawHuman(){
    strokeWeight(5);

    // Rusty Head Dimensions
    var rustyHeadX = 200;
    var rustyHeadY = 500;
    var rustyHeadSize = 150;

    // Rusty Arms Dimensions
    var rustyArmLX = 90;
    var rustyArmRX = 240;
    var rustyArmsY = 600;
    var rustyArmsW = 80;
    var rustyArmsH = 30;

    // Rusty Legs Dimensions
    var rustyLegLX = 150;
    var rustyLegRX = 210;
    var rustyLegsY = 730;
    var rustyLegsW = 40;
    var rustyLegsH = 100;

    // Rusty Body Dimensions
    var rustyBodyX = 150;
    var rustyBodyY = 560;
    var rustyBodyW = 105;
    var rustyBodyH = 200;
    var rustyBodyR = 75;

    var rustyEyesXL = 170;
    var rustyEyesXR = 230;
    var rustyEyesY = 490;
    var rustyEyesW = 45;
    var rustyEyesH = 20;

    fill("beige");
    strokeWeight(2);
    // arms
    // left
    rect(rustyArmLX, rustyArmsY, rustyArmsW, rustyArmsH);
    // right
    rect(rustyArmRX, rustyArmsY, rustyArmsW, rustyArmsH);

    // legs
    rect(rustyLegLX, rustyLegsY, rustyLegsW, rustyLegsH);
    rect(rustyLegRX, rustyLegsY, rustyLegsW, rustyLegsH);

    // body
    rect(rustyBodyX, rustyBodyY, rustyBodyW, rustyBodyH, rustyBodyR);

    strokeWeight(5);
    // head
    ellipse(rustyHeadX, rustyHeadY, rustyHeadSize, rustyHeadSize);

    // eyes
    fill("white");
    ellipse(rustyEyesXL, rustyEyesY, rustyEyesW, rustyEyesH);
    ellipse(rustyEyesXR, rustyEyesY, rustyEyesW, rustyEyesH);

    // pupils
    var rustyPupilsLX = 170;
    var rustyPupilsRX = 230;
    var rustyPupilsY = 490;
    var rustyPupilsW = 20;
    var rustyPupilsH = 15;

    fill("black");
    ellipse(rustyPupilsLX, rustyPupilsY, rustyPupilsW, rustyPupilsH);
    ellipse(rustyPupilsRX, rustyPupilsY, rustyPupilsW, rustyPupilsH);

    // mouth
    var rustyMouthX = 200;
    var rustyMouthY = 540;
    var rustyMouthSize = 25;
    ellipse(rustyMouthX, rustyMouthY, 25, 25);
}

function drawPig(){
    strokeWeight(5);
    fill("pink");

    // body
    var pigBodyX = 480;
    var pigBodyY = 660;
    var pigBodyW = 300;
    var pigBodyH = 150;
    rect(pigBodyX, pigBodyY, pigBodyW, pigBodyH);

    // head
    var pigHeadX = 400;
    var pigHeadY = 600;
    var pigHeadSize = 150;
    rect(pigHeadX, pigHeadY, 150, 150);

    strokeWeight(2);
    // legs
    var pigLegsX = 500;
    var pigLegsY = 800;
    var pigLegsW = 75;
    var pigLegsH = 75;
    rect(pigLegsX, pigLegsY, pigLegsW, pigLegsH);
    rect(540, pigLegsY, pigLegsW, pigLegsH);
    rect(660, pigLegsY, pigLegsW, pigLegsH);
    rect(700, pigLegsY, pigLegsW, pigLegsH);

    // eyes
    fill("white");
    var pigEyeLX = 440;
    var pigEyeRX = pigEyeLX+70;
    var pigEyesY = 650;
    var pigEyesW = 40;
    var pigEyesH = 70;
    ellipse(pigEyeLX, pigEyesY, pigEyesW, pigEyesH);
    ellipse(pigEyeRX, pigEyesY, pigEyesW, pigEyesH);

    // pupil
    fill("black");
    var pigPupilLx = 440;
    var pigPupilRx = 510;
    var pigPupilsY = 650;
    var pigPupilsW = 20;
    var pigPupilsH = 35;
    ellipse(pigPupilLx, pigPupilsY, pigPupilsW, pigPupilsH);
    ellipse(pigPupilRx, pigPupilsY, pigPupilsW, pigPupilsH);

    // nose
    fill("pink");
    // strokeWeight(5);
    ellipse(475, 700, 40, 30);


}

function narrative(story, instructions){
	// narrative
	stroke(255);
	textSize(25);
	text(story, 300, 50, 800, 800);
	// instructions
	textSize(20);
	text(instructions, width - 250, height - 50);
}
