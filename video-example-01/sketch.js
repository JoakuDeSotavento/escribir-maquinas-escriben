let fingers;

function setup() {
  createCanvas(710, 400);
  // especificar múltiples formatos para diferentes navegadores
  fingers = createVideo('sonic.mp4');
  fingers.hide(); // por defecto el video aparece en un elemento dom separado.
  // escóndelo y dibújalo en el lienzo en vez de eso.
}

function draw() {
  background(150);
  image(fingers, 10, 10); // dibuja el cuadro del video en el lienzo.
  filter(GRAY);
  image(fingers, 150, 150); // dibuja una segunda copia en el lienzo.
}

function mousePressed() {
  fingers.play(); // configurar el video para empezar a reproducirse en bucle 
}

function mouseReleased() {
  fingers.stop(); // configurar el video para empezar a reproducirse en bucle   
}
