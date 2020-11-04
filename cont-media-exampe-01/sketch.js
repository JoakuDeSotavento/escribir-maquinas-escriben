let img;
let mySound;

function preload() {
	img = loadImage('est.jpg');
    
    soundFormats('mp3', 'ogg');
    mySound = loadSound('tc-free');
}

function setup() {
	createCanvas(img.width, img.height);
	background(0);
}

function draw() {
    image(img, 0, 0);
    /*if(mouseIsPressed){
        mySound.play();
    }else{
        mySound.stop();
    }*/
}

function mousePressed() {
    mySound.play();
}

function doubleClicked() {
    mySound.stop();
}