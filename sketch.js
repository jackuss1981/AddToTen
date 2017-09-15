/*
	========================================
	========== Een rekenspelletje ==========
	==========    Gemaakt door:   ==========
	==========   Jack Reinieren   ==========
	========== Datum: 08-08-2017  ==========
	========================================
 	========== Alle functies e.d.   ========
 	========== staan in het bestand ========
 	========== GameLogic.js         ========
	========================================
 */
var gl;
var snd;
function preload() {
	LoadSounds(); //Laadt de geluiden
	gl = new gameLoop;
	gl.loadImages();
}

function setup () {
 	var parentDiv = document.getElementById('canvasDiv');
 	var canvas = createCanvas(1600,550);
 	canvas.style('height:100%');
 	canvas.style('width:100%');
 	canvas.id('mainCanvas');
 	canvas.parent('canvasDiv');

}

function draw () {
	gl.displayHeader();
	gl.displayImages();
	gl.escPressed();
	
	if(nextNumbers){
		gl.randomize();
	}
	
	if(noLoops) {
		gl.goodOrNot();
	}

} // einde functie draw

