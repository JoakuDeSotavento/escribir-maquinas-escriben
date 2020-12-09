/**
 *  Play a random note
 *  every time you press a key
 */

var monoSynth;


function setup() {

    createCanvas(400, 400);
    
    text('press to play a random note at a random velocity', 20, 20);
}

function draw(){
    background(0);

}

function mousePressed() {
    // pick a random midi note
    monoSynth = new p5.MonoSynth();
    var midiVal = midiToFreq(round( random(50,72) ));
    monoSynth.triggerAttack(midiVal, random() );
}

function mouseReleased() {
    monoSynth.triggerRelease();
}
