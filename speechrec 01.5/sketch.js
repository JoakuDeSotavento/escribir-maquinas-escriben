var myRec = new p5.SpeechRec('es', parseResult); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var palabra = " ";

function setup()
{
    // graphics stuff:
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 255);

    textFont("Roboto");
    stroke(255);
    strokeWeight(2);


    //myRec.onResult = parseResult; // now in the constructor
    myRec.start(); // start engine
}

function draw()
{
    background(255, 10);
    push;
    // instructions:
    textSize(20);
    textAlign(LEFT);
    text("Habla libremente, te escucho", 20, 20);
    pop;

    push;
    textSize(32);
    //text(palabra, random(windowWidth), windowHeight/2);
    text(palabra, windowWidth/2, windowHeight/2);
    pop;

}

function parseResult()
{
    // recognition system will often append words into phrases.
    // so hack here is to only use the last word:
    //var mostrecentword = myRec.resultString.split(' ').pop();
    var mostrecentword = myRec.resultString;
    palabra = mostrecentword;
    console.log(mostrecentword);

}