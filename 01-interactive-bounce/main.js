let canvasElement = document.querySelector("#canvas");

//1. Add variables needed for animating the ball
let x = Math.random() * 600;
let y = Math.random() * 600;

//2. Add variables (size, speed, colorVal) for controlling the sketch
let size = 50;
let speed = 10; 
let colorVal = "red";

let speedX = 10;
let speedY = 10;
let directionX = 1;
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
                    //anders helft vd cirkel gaat uit het scherm
    if(x > width - size / 2 || x < size / 2) {
        directionX *= -1; // als * -1 verwisselt de direction altijd
    }
    if(y > height - size / 2 || y < size / 2) {
        directionY *= -1;
    }

    // 3.3 Draw
    fill(colorVal);
    circle(x, y, size);
}

// --- DOM Interaction ---

// 4. Select the input elements
let sizeI = document.querySelector("#size-input");
let speedI = document.querySelector("#speed-input");
let colorI = document.querySelector("#color-input");

// 5. Add Event Listeners; listen to the "input" event for real-time updates while dragging
sizeI.addEventListener("input", function(){
    size = Number(sizeI.value);
});
speedI.addEventListener("input", function(){
    speedX = Number(speedI.value);
    speedY = Number(speedI.value);
});
colorI.addEventListener("input", function(){
    colorVal = colorI.value;
});