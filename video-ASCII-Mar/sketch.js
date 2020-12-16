let mar;

let ordenL = " .`-_':,;^=+/\"|)\\<>)iv%xclrs{*}I?!][1taeo7zjLu" +
    "nT#JCwfy325Fp6mqSghVd4EgXPGZbYkOA&8U$@KHDBWNMR0Q";

let letras = [];
let brillo = [];
let char = [];
let tamF = 1.5;

function setup() {
    createCanvas(1080, 720);
    // especifica múltples formatos para distintos navegadores
    mar = createVideo("videomar.mp4");
    //fingers.loop();
    mar.hide();
    textFont("Arial");
    textSize(32);
    noStroke();
    fill(0);

    let cuenta = mar.width * mar. height;

    for(let i = 0; i < 256; i++){
        let index = floor(map(i, 0, 256, 0, ordenL.length));
        //letras[i] = ordenL[index];
        append(letras, ordenL[index]);
        console.log(letras[i]);
    }

    for(let i = 0; i< cuenta; i++){
        brillo[i] = 128;

    }

}

function draw() {

    background(0);
    
    
    push();
    let hgap = width / mar.width;
    let vgap = height/ mar.height;

    let indice = 0;
    mar.loadPixels();

    for(let y = 1; y < mar.height; y++){
        translate(0, 1.0 / tamF);

        push();

        for(let x = 0; x < mar.width; x++){
            let colorPix = mar.pixels[indice];
            let r = (colorPix >> 16) & 0xff;
            let g = (colorPix >> 8) & 0xff;
            let b = colorPix & 0xff;
            
            let colores = [r, g, b];

            let brilloPix = max(colores);

            let diff = brilloPix - brillo[indice];
            fill(colorPix);
            let num = floor(brillo[indice]);
            text(letras[num], 0, 0);

            indice++;

            translate(1.0 / tamF, 0);

        }

        pop();
    }

    pop();

    /*
    mar.loadPixels();
    const stepSize = round(constrain(mouseX / 32, 3, 32));
    //console.log(stepSize);
    for (let y = 0; y < mar.height; y += stepSize) {
        for (let x = 0; x < mar.width; x += stepSize) {
            const i = y * width + x;
            const darkness = (255 - mar.pixels[i * 4]) / 255;
            const radius = stepSize * darkness;
            rect(x, y, radius, radius);
        }
    }
    */
}

function keyPressed(){
    switch(key){
        case "f": tamF *= 1.1; break;
        case "F": tamF *= 0.9; break;  
    }   
}

function mousePressed(){
    mar.loop();
    //fingers.hide();
}