//ejemplo tomado del libro Getting Started with p5.js de Lauren McCarthy, Casey Reas y Ben Fry
// modificado por Joaku de Sotavento @joakusotavento
// joaquindiazescultor@gmail.com

let d = 80;
let y = 300;


let x1 = 75;
let x2 = 27;
let x3 = 275;


let y1, y2, y3;
y1 = 80;
y2 = 190;
y3 = 80;

let texto = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme...";

function setup() {
    createCanvas(1080, 720);
    
    textFont("Castoro");
    stroke(255);
    strokeWeight(2);
}


function draw() {
    background(102, 50);
        
    textSize(32);
    text("En un lugar de la Mancha, de cuyo nombre no quiero acordarme...", x1, y1, mouseX, mouseY);
    //text("En un lugar de la Mancha, de cuyo nombre no quiero acordarme...", x1, y1, 200, 400);
    textSize(20);
    text(texto, 27, 90);
    
    text(mouseX, x2, y2);
    text(hour() + " : " + minute() + " : " + second() + " : " + millis(), x3+10, y3);
    
    x1++;
    y1++;
}