  function setup() {

    createCanvas(800,600);
    background(50);
    textSize(20);
    noStroke();

    let words = RiTa.tokenize("The elephant took a bite!")
    for (let i=0; i < words.length; i++) {
        text(words[i], 50, 50 + i*20);
    }
  }