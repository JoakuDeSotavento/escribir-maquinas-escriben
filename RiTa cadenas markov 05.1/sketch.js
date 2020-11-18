 let textoMarkov, frases, x, y;


function setup() {

    createCanvas(windowWidth, windowHeight);
    textFont('times', 16);
    textAlign(LEFT);

    frases = ["click to (re)generate!"];
    textoMarkov = new RiMarkov(2);
    textoMarkov.loadText("The girl went to a game after dinner. The teacher went \ to dinner with a girl.");
    
    x = 160; 
    y = 240;

}

function draw() {
  background(250);
  text(frases, x, y, 400, 400);
}

function mouseClicked() {
    x = mouseX;
    y = mouseY;
  frases = textoMarkov.generateSentences(2);
}

 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}