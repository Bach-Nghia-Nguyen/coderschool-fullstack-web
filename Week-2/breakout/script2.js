var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height / 2;

var a = canvas.width;
var b = canvas.height;

var dx = 1;
var dy = 1;

var ballRadius = 10;

// draw ball, paddle and brick
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
  ctx.fillStyle = "#ff9f43";
  ctx.fill();
  ctx.closePath();
}

// draw and set the motion of stuffs
function draw() {
  // Start with a blank canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw
  drawBall();
  // Update
  // Check to see if the ball touches the edge
  if (x === canvas.width - ballRadius || x === ballRadius) {
    dx = -dx;
  }
  if (y === canvas.height - ballRadius || y === ballRadius) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}

setInterval(draw, 10);
