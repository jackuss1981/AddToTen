/*
	========================================
	========== Een rekenspelletje ==========
	==========    Gemaakt door:   ==========
	==========   Jack Reinieren   ==========
	=========================================================================================
	*/

// ========== Globale variabelen ==========
var imgs = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"];
var Loc = 'https://jackuss.nl/wp-content/themes/twentyseventeen-child/Optellen';
var loadedImg = [];
var nextNumbers = true; //Zorgen dat er weer 2 getallen @random gekozen worden
var total;
var nr1;
var nr2;
var noLoops = false; //om te zorgen dat de nieuwe nummers niet continue over het beeldscherm gaan op 60 fps
var goed;
var fout;
		
// ========== Functies ==========

// Deze functie roep ik aan in de sketch.js onder de fn draw. 
function gameLoop () {

	// ========== variabelen voor de functie gameLoop ==========
	
	// functie die de header op de pagina laat zien.
	this.displayHeader = function() {
			//code om de header te vullen met text ("Hoeveel is: <nr1> + <nr2>")
			var heading = document.getElementById('heading')
			heading.innerHTML = '<h1>Hoeveel is: ' + nr1 + " + " +nr2 + "?</h1>"
		}



	//functie om alle afbeeldingen in een Array te laden
	this.loadImages = function() {
 		for (var i = 0; i < imgs.length; i++) { 
		loadedImg[i] = loadImage(Loc + '/img/' + imgs[i]);		
		}
	
	}
	
	// functie om makkelijker 2 hele getallen @random te maken.
	this.randomInt = function(min,range) {
		return Math.floor((Math.random()*(range))+min)
	}

	// functie moet 2 nummers @random selecteren. 
	this.randomNrs = function () {
		nr1 = this.randomInt(0,imgs.length);
		nr2 = this.randomInt(0,imgs.length);
	}

	// functie maak ik aan, zodat ik, als ik de variabele 'nextNumbers' op true zet, ik niet opnieuw de Do-While loop hoef in te kloppen
	this.randomize = function() {
		if(nextNumbers === true) {
			do { 												// Do-While loop, die ervoor zorgt dat de rekensom niet boven de 10 uitkomt.
				this.randomNrs()

			} while (nr1 + nr2 > 10)
				console.log("getallen: "+ nr1 + " " + " + " + nr2) //ter test
				nextNumbers = false;	

			} // einde randomize functie
	 	}
	 	this.randomize(); //aanroepen om deze functie daadwerkelijk uit te voeren.
	 	// functie om de images op het scherm te toveren
	this.displayImages = function () { 
		img1 = image(loadedImg[nr1], -150,0);
		img2 = image(loadedImg[nr2], -300 +(width / 2), 0);
	} 
	// einde displayImages
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
         goed.onended(function(){ //Deze functie zorgt ervoor dat er pas NADAT het geluid gespeeld is, een volgende 2 random getallen gekozen worden
         	 	nextNumbers=true;
         });			
			} else {
				fout.play();
			}
		noLoops = false;
		}


	//=============================
}  // einde gameLoop
	
	//========== extra functies, die niet direct met het verloop van het spel te maken hebben.

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
			} // einde Forloop
		} //einde onresult functie

	} // einde speechRec functie


//Geluiden laden, voor als iets goed of fout is
function LoadSounds () {
	var goedAntwoord = '00_Base_GoedAntwoord.ogg';
	var foutAntwoord = '00_Base_FoutAntwoord.ogg';

	goed = loadSound(Loc + '/snd/' + goedAntwoord);
  fout = loadSound(Loc + '/snd/'+ foutAntwoord);

}
// ================================= Einde alle functies ========================================
/*




*/