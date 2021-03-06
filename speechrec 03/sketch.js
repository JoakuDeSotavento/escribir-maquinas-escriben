    // funcion clave ********************************
    var myVoice = new p5.Speech('Google español de Estados Unidos', speechLoaded); // new P5.Speech object

	//myVoice.onLoad = speechLoaded; // could do it this way
	myVoice.onStart = speechStarted; // funcion clave ********************************
	myVoice.onPause = speechPaused; // not working
	myVoice.onResume = speechResumed; // not working
	myVoice.onEnd = speechEnded;

	var lyric = "He visto cosas que ustedes personas no podrian creer, naves espaciales en llamas junto al hombro de orion, Rayos C brillando en la oscuridad de la puerta de Tanhauser, pero todos esos recuerdos se perderan en el tiempo como lagrimas en la lluvia. Es la hora de morir";

	var speakbutton; // UI

	function setup()
	{
		createCanvas(400, 400);

		// button:
		speakbutton = createButton('Speak');
  		speakbutton.position(180, 200);
  		speakbutton.mousePressed(buttonClicked);

	}

	function draw()
	{
		// why draw when you can click?
	}

	function buttonClicked()
	{
		if(speakbutton.elt.innerHTML=='Speak') myVoice.speak(lyric); // funcion clave ********************************
		else if(speakbutton.elt.innerHTML=='Pause') myVoice.pause(); // not working
		else if(speakbutton.elt.innerHTML=='Resume') myVoice.resume(); // not working
		else if(speakbutton.elt.innerHTML=='Stop') myVoice.stop();
	}

	function speechLoaded()
	{
  		// say cheers:
		myVoice.speak("testing one two three!!!");
	}

	function speechStarted()
	{
		background(0, 255, 0);
		speakbutton.elt.innerHTML = 'Stop';
	}

	// not working...
	function speechPaused()
	{
		background(0, 255, 0);
		speakbutton.elt.innerHTML = 'Resume';
	}

	// not working...
	function speechResumed()
	{
		background(0, 255, 0);
		speakbutton.elt.innerHTML = 'Pause';
	}

	function speechEnded()
	{
		background(255, 0, 0);
		speakbutton.elt.innerHTML = 'Speak';
	}
/*

Listado de voces

Google Deutsch
Google US English
Google UK English Female
Google UK English Male
Google español
Google español de Estados Unidos
Google français
Google हिन्दी
Google Bahasa Indonesia
Google italiano
Google 日本語
Google 한국의
Google Nederlands
Google polski
Google português do Brasil
Google русский
Google 普通话（中国大陆）
Google 粤語（香港）
Google 國語（臺灣）


*/