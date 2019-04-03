/*
	Data Visualization
	Mmp310 Week 8
 */

 var lakers;
 function preload(){
	 lakers = loadTable('lakers.csv', 'csv', 'header');
 }

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(50);
	noStroke();
}

function draw(){
	background(51);

	for(let i = 0; i < lakers.getRowCount(); i++){
		let pts = lakers.getNum(i, 'PTS');
		let h = map(pts,0,1505, 0, height);
		let w = 50;
		let x = i * (w+3);

		fill('white');
		if (mouseX > x && mouseX < x + w){
			let player = lakers.getString(i, 'Player').split('\\')[0];
			text(player, 600, 200);
			text(pts + ' Total Points', 600, 250);
			fill('gold');
		}

		textAlign(LEFT, CENTER);
		rect(x, height - h, w, h);
	}

}
