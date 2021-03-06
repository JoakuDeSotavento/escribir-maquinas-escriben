let input;
let button;
let lexicon;

function setup(){
    noCanvas();
    lexicon = new RiLexicon();
    input = createInput("Espect poison from standing water.");
    button = createButton("Envia");
    input.changed(processRita);
    button.mousePressed(processRita);
    input.size(300);
}

function processRita(){
    let s = input.value();
    let rs = new RiString(s);
    let rWords = rs.words();
    let rPos = rs.pos();
    
    console.log(rWords);
    console.log(rPos);
    
    let output = " ";
    
    for(let i = 0; i < rWords.length; i++){
        if(rPos[i] === "nn"){
            output += lexicon.randomWord("nn", 1);
        }else{
            output += rWords[i];   
        }
            output += " ";
    }
    createP(output);
    
}