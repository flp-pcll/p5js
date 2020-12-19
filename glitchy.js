let i = 1;
let h = 0;
let s = 100;
let b = 100;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  colorMode(HSB);
}

function draw() {
  background(0);
  noStroke(0);
  fill(h, s, b);
  
  h++;
  if (h >=360) {
    h = 0;
  }
  
  s = map (mouseX, 0, width, 0, 100);
  b = map (mouseY, 0, height, 0, 100);

  for (i = 1; i < 220; i += 10) {
    rect((50 + i), (50 + i), random(100), random(100));
    rect((40 + i), (40 + i), random(100), random(100));
  }
}