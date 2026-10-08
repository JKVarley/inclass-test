let frames = [];
let myAge = 10;
let myName = "Kyle";
let myStudentsAges = [];
let numFrames = 8;

let firstName = "John Kyle";
let lastName = "Varley";

let fullName = firstName + " " + lastName;

async function setup() {
  createCanvas(800, 420);

  for (let i = 0; i < numFrames; i++) {
    // let fileName = `dance_frames/dance${i}.png`;
    let fileName = "dance_frames/dance" + i + ".png";

    frames.push(await loadImage(fileName));
  }
}

let imageWidth = 150;
let imageHeight = 150;

function draw() {
  background(120);
  fill("black");
  text(fullName, 100, 100);

  let speed = 10;
  let slowFrame = floor(frameCount / speed);
  let index = slowFrame % frames.length;

  text(index, 20, 400);

  animate(10, 300, 100, imageWidth, imageHeight);
  animate(20, 400, 100, 200, 200);
  animate(30, 600, 100, 200, 200);
}

function animate(speed, xposition, yposition, imageWidth, imageHeight) {
  let index = getframeindex(speed);
  let currentFrame = frames[index];
  let origWidth = currentFrame.width;
  let origHeight = currentFrame.height;

  if (imageWidth && imageHeight) {
    let scale = imageWidth / origWidth;
    imageHeight = scale * origHeight;
  }
  image(frames[index], xposition, yposition, imageWidth, imageHeight);
}
function getframeindex(speed) {
  let slowFrame = floor(frameCount / speed);
  let index = slowFrame % frames.length;
  return index;
}
