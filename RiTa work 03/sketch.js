let mensaje;
let rMess;
let rPos;
let rWords;
let lexicon;
let mensajeGen;



function setup(){
    
    createCanvas(800, 600);
    mensaje = "Expect poison from standing water";
    rMess = new RiString(mensaje);
    rPos = rMess.pos();
    rWords = rMess.words();
    supMess = " ";
    lexicon = new RiLexicon;
    mensajeGen = " ";    
}

function draw(){
    background(125);
    
    drawText();
    


}

function poesiaGenerativa(){
    
    let supMess = " ";
    
    for(let i = 0; i < rWords.length; i++){
        if(rPos[i] === "nn"){
            supMess += lexicon.randomWord("nn", 5);
        }else{
            supMess += rWords[i];
        }
        supMess += " ";
    }
    
    return supMess;
}

function mousePressed(){
    console.log("funcion generativa activada");
    mensajeGen = poesiaGenerativa();
}

function drawText(){
    push();
    stroke(125, 10, 125);
    fill(125, 50, 125);
    text(mensajeGen, mouseX, mouseY); 
    pop();
}