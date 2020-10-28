// Introducimos los comentarios
/*
estos son de vital importancia para aprender, recordar y mantener el honor

recordamos para que sirve todo lo que hemos estado programando, usualmente se olvida despues de unas semanas

aprendemos al ir entendiendo un codigo y poner un comentario en las partes que nos parecen importante

reconocemos el trabajo de otros programadores al citar el autor original del codigo

Muchos de los ejemplos que veremos vienen de codigos de otras personas, así que el nuestro podría formar parte tambien del
codigo de otras personas y nos gustara que nos nnombren.
*/

//ejemplo tomado del libro Getting Started with p5.js de Lauren McCarthy, Casey Reas y Ben Fry

let d = 80;
let y = 300;


let x1 = 75;
//let x2 = 175;
//let x3 = 275;

/*
let y1, y2, y3;
y1 = 80;
y2 = 80;
y3 = 80;
*/

function setup() {
    createCanvas(1080, 720);
    print("Comenzamos");
}

function draw() {
    background(204);
    fill(125, 200, 10);
    //ellipse(x1, y1, d, d); // Left
    ellipse(175, y, d, d); // Middle
    ellipse(275, y, d, d); // Right
    console.log("y seguimos");
    
    x1++;
    y1 = y1 + 0.1;
    
}