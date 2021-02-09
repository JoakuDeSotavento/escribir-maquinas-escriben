let rg;
let mensajeGen;

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    rg = new RiTa.grammar();
    //rg.addRule("<start>", "El rinoceronte se mira en el espejo", 1);
    rg.addRule("<start>", "El <S> se <V> <Pr> <A> <N>", 1);
    rg.addRule("<S>", "Rinoceronte | Simio | Perro");
    //rg.addRule("<N>", "Simio", 1);
    rg.addRule("<V>", "mira | toca | susurra | lame | escuha");
    rg.addRule("<N>", "espejo | cuerpo | facebook | cocina | cueva");   
    rg.addRule("<A>", "el | la");
    rg.addRule("<Pr>", "en | dentro | fuera | arriba");
    for(let i = 0; i < 100; i++ ){
        let result = rg.expand(); 
        console.log(result);  
    }
    mensajeGen = " ";
}

function draw(){
    background(250, 164, 5);
    drawText();
}

function poesiaGenerativa(){ //funcion para generar el texto
    let supMess = rg.expand(); // variable para 
    
    return supMess; // regresa el mensaje
}

function mousePressed(){
    console.log("funcion generativa activada"); // mensaje a la consola
    mensajeGen = poesiaGenerativa(); // carga el mensaje generado en la variable global
}

function drawText(){
    push(); // aqui se dibuja el texto
    //stroke(125, 10, 125);
    fill(100, 100, 255, 125);
    textSize(50);
    text(mensajeGen, mouseX, mouseY); 
    pop();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
/*let font, grammar, lines, yaml;

function preload() {

  //font = loadFont('../../fonts/Resagokr.otf');
  yaml = loadStrings('haiku.yaml');
}

function setup() {

  createCanvas(650, 200);
  textFont("Roboto", 30);
  textAlign(CENTER);
  grammar = new RiGrammar(yaml.join('\n'));
  lines = ["click to", "generate", "a haiku"];
}

function draw() {

  background(230, 240, 255);
  text(lines[0], width / 2, 75);
  text(lines[1], width / 2, 110);
  text(lines[2], width / 2, 145);
}

function mouseReleased() {

  let result = grammar.expand();
  let haiku = result.split("%");
  for (let i = 0; i < lines.length; i++) {
    lines[i] = haiku[i];
  }
}

 */