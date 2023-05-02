let video;
let facemesh;
let img;

function preload() {
  img = loadImage('filter.JPG'); // load the filter image
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  facemesh = ml5.facemesh(video, modelReady);
  facemesh.on('predict', gotResults);
}

function modelReady() {
  console.log('Model is ready!');
}

function gotResults(results) {
  if (results.length > 0) {
    let face = results[0].scaledMesh;
    let nose = face[4];
    let leftEye = face[362];
    let rightEye = face[263];

    // calculate the distance between the eyes
    let d = dist(leftEye[0], leftEye[1], rightEye[0], rightEye[1]);

    // calculate the size of the filter
    let filterSize = d * 2;

    // draw the filter image on the nose
    image(img, nose[0] - filterSize / 2, nose[1] - filterSize / 2, filterSize, filterSize);
  }
}

function draw() {
  background(255);
  image(video, 0, 0, width, height);
}