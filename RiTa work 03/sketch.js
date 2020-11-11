let mensaje; 
let rMess;
let rPos;
let rWords;
let lexicon;
let mensajeGen;

function setup(){
    createCanvas(windowWidth, windowHeight);
    mensaje = "Expect poison from standing water"; // mensaje inicial
    rMess = new RiString(mensaje); // Objeto Rita string
    rPos = rMess.pos(); // arreglo de Position of speach
    rWords = rMess.words(); // arreglo de palabras
    supMess = " "; // espacio
    lexicon = new RiLexicon; // lexico
    mensajeGen = " "; // string vacio para el mensaje generado
}

function draw(){
    background(125);
    drawText();
}

function poesiaGenerativa(){ //funcion para generar el texto
    let supMess = " ";// variable para almancear el texto
    for(let i = 0; i < rWords.length; i++){
        if(rPos[i] === "nn"){ // busca por los nouns
            supMess += lexicon.randomWord("nn", 5); // aqui se podria cambiar para que buscara otro elemento del pos
        }else{
            supMess += rWords[i]; // si no es ninguno de los elementos buscados queda como esta
        }
        supMess += " "; // agrega un espacio
    }
    return supMess; // regresa el mensaje
}

function mousePressed(){
    console.log("funcion generativa activada"); // mensaje a la consola
    mensajeGen = poesiaGenerativa(); // carga el mensaje generado en la variable global
}

function drawText(){
    push(); // aqui se dibuja el texto
    stroke(125, 10, 125);
    fill(125, 50, 125);
    textSize(36);
    text(mensajeGen, mouseX, mouseY); 
    pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}