let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball

//2. Add variables (size, speed, colorVal) for controlling the sketch

let speedX = 10;
let directionX = 1;
let speedY = 10;
let directionY = 1;

function setup() {
    //Creating a canvas to draw on, using the existing canvas element.
    createCanvas(600, 600, canvasElement);
    noStroke();
}

function draw() {
    background(220);

    // 3.1 Animate position
    x += speedX * directionX;
    y += speedY * directionY;

    // 3.2 Bounce logic: check the edges

    // 3.3 Draw
    fill(colorVal);
    circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging