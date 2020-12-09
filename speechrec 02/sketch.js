var words = ["He visto cosas que ustedes personas no podrian creer, naves espaciales en llamas junto al hombro de orion, Rayos C brillando en la oscuridad de la puerta de Tanhauser, pero todos esos recuerdos se perderan en el tiempo como lagrimas en la lluvia. Es la hora de morir", "Mi corazon ha sido herido", "Puedes pasar", "cinco dias a la semana"]; // some words
var iptr = 0; // a counter for the words

var myVoice = new p5.Speech(); // new P5.Speech object
var myVoice2 = new p5.Speech(); // new P5.Speech object
var listbutton; // button

function setup()
{
    // graphics stuff:
    createCanvas(400, 400);
    background(255, 0, 0);
    fill(255, 255, 255, 100);
    // instructions:
    textSize(72);
    textAlign(CENTER);
    text("click me", width/2, height/2);
    // button:
    listbutton = createButton('List Voices');
    listbutton.position(180, 430);
    listbutton.mousePressed(doList);

    // say hello:
    myVoice.speak('testing one two three!!!');
    myVoice2.speak('testing one two three!!!');


}

function draw()
{
    // why draw when you can click?
}

function doList()
{
    myVoice.listVoices(); // debug printer for voice options
}

function keyPressed()
{
    background(255, 0, 0); // clear screen
}

function mousePressed()
{
    // if in bounds:
    if(mouseX<width && mouseY<height) {
        ellipse(mouseX, mouseY, 50, 50); // circle
        myVoice.setVolume(1);
        // randomize voice and speak word:
        myVoice.setVoice("Google español de Estados Unidos");
        myVoice2.setVoice("Google español");

        //myVoice.setVoice(Math.floor(random(myVoice.voices.length)));
       //myVoice.speak("Feliz Cumpleaños Raffi. He visto cosas que ustedes personas no podrian creer, naves espaciales en llamas junto al hombro de orion, Rayos C brillando en la oscuridad de la puerta de Tanhauser, pero todos esos recuerdos se perderan en el tiempo como lagrimas en la lluvia. Es la hora de morir");
        myVoice2.speak("He visto cosas que ustedes personas no podrian creer, naves espaciales en llamas junto al hombro de orion, Rayos C brillando en la oscuridad de la puerta de Tanhauser, pero todos esos recuerdos se perderan en el tiempo como lagrimas en la lluvia. Es la hora de morir");
        //myVoice.speak("En un lugar de la Mancha de cullo nombre no quiero acordarme");
        //iptr = (iptr+1) % words.length; // increment
    }
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