// LOADING MODELS
// Using loadModel("path/to/obj") you can load 3D models (.obj files) in your page

var faceMask;

function preload(){
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
  faceMask = loadModel("assets/faceMesh.obj", true) // true sets NORMALIZATION ON --> meaning it scales the model to a standard size
  // !!! WebGL DOES NOT LOAD !!!
}

function draw() {
  background(255,0,0);
  // ortho(); // sets orthogonal position for the camera() object
  // camera(mouseX - width/2, mouseY-height/2, 100, 0, 0, 0, 0, 1, 0,) // the camera is positioned @ x = mouseX - width/2  --> camera moves with mouse on X
  //                                                                   //                            y = mouseY - height/2 --> camera moves with mouse on Y
  //                                                                   //                            z = 100
  //                                                                   // the camera points at the center of the canvas (0,0,0)
  //                                                                   // the orientation is towards Y
  //
  // ambientLight(100,0,100);
  // directionalLight(255,255,255,0,1,-1);
  normalMaterial(255);
  rotateZ(180);
  rotateX(frameCount*0.5);
  rotateY(frameCount*0.5);
  model(faceMask);

}


// CANNOT LOAD OBJECT
