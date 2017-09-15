/*
	========================================
	==========   An AddingGame    ==========
	==========    Created by:     ==========
	==========   Jack Reinieren   ==========
	========================================
*/


// ========== Global variables ==========
var imgs = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"];
var Loc = ''; // PLEASE ADD YOUR OWN FILE LOCATION HERE
var loadedImg = [];
var nextNumbers = true;
var total;
var nr1;
var nr2;
var noLoops = false; //noLoop is a P5 function, so that is why I settled for noLoops
var goed; // "goed" means "correct" in Dutch
var fout; // "fout" means "incorrect" in Dutch
		
// ========== Functions ==========

function gameLoop () {

	this.displayHeader = function() {
			var heading = document.getElementById('heading')
			heading.innerHTML = '<h1>What is: ' + nr1 + " + " +nr2 + "?</h1>"
		}

	this.loadImages = function() {
 		for (var i = 0; i < imgs.length; i++) { 
		loadedImg[i] = loadImage(Loc + '/img/' + imgs[i]);		
		}
	
	}
	
	this.randomInt = function(min,range) {
		return Math.floor((Math.random()*(range))+min)
	}

	this.randomNrs = function () {
		nr1 = this.randomInt(0,imgs.length);
		nr2 = this.randomInt(0,imgs.length);
	}

	
	this.randomize = function() {
		if(nextNumbers === true) {
			do { 

			} while (nr1 + nr2 > 10)
				console.log("numbers: "+ nr1 + " " + " + " + nr2)
				nextNumbers = false;	

			} 
	 	}
	this.randomize();
	
	this.displayImages = function () { 
		img1 = image(loadedImg[nr1], -150,0);
		img2 = image(loadedImg[nr2], -300 +(width / 2), 0);
	} 
	
	this.escPressed = function() {		
		document.onkeydown = function(evt) {
	    evt = evt || window.event;
    	if (evt.keyCode == 27) {
        alert('Esc key pressed.');
        noLoop();
    			}
		}
	}
	
	this.goodOrNot = function() {
		if (nr1 + nr2 == total) {
			goed.play();
        		goed.onended(function(){ //called because otherwise the mushrooms will change BEFORE the complete soundfile is played.
         	 	nextNumbers=true;
         });			
			} else {
				fout.play();
			}
		noLoops = false;
		}
	} 
	
	//==========  Functions not directly related to the loop for the Game ==========

	function speechRec (){
		var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
		var transcript;
		var property = document.getElementById('SpeechRec_On');
		recognition.lang = 'nl-NL';
		recognition.maxAlternatives = 2;

		recognition.start();
		  property.style.backgroundColor = '#ef0000';
		 console.log(property.style.backgroundColor)
		recognition.onresult = function(event) {
	 		var interimTransc = '';
	 		
		 		for(var i = event.resultIndex; i < event.results.length; i++) {
		 			transcript = event.results[i][0].transcript;
		  	  if(event.results[i].isFinal) {	
		  	  	if (transcript.includes("een")) {
		  	  			transcript = transcript.replace("een", 1);
		  	  		} else if (transcript.includes("vier")) {
		  	  				transcript = transcript.replace("vier", 4)
		  	  			console.log("replace vier: " + transcript)
		  	  		}
		  	  	transcript = transcript.replace(/\D/g,'');
		  	  } else {
		  	   	interimTransc += transcript;
	  	  }
	  		property.style.backgroundColor = "";
				total = transcript;
				 
				console.log("total is: " + total)
				noLoops = true; 
			} 
		} 

	} 

	function LoadSounds () {
		var goedAntwoord = '00_Base_GoedAntwoord.ogg';
		var foutAntwoord = '00_Base_FoutAntwoord.ogg';
		
		goed = loadSound(Loc + '/snd/' + goedAntwoord);
 	 	fout = loadSound(Loc + '/snd/'+ foutAntwoord);

}

// ================================= End of all Functions ========================================
