// Gloabl Vars
var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;
var ballY;

// Main Game Logic
window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 30;
  setInterval(function(){
    movement();
    playArea();
  }, 1000/framesPerSecond);
}

// Functions for game
function movement(){
  // main function for ball movement
  ballX = ballX + ballSpeedX;
  if(ballX < 0){
    ballSpeedX = -ballSpeedX;
  }
  if(ballX > canvas.width){
    ballSpeedX = -ballSpeedX;
  }
}

// use this color for divison lines steelblue
function colorRect(leftX, topY, width, height, color){
  // main function to draw on canvas and maintain DRY
  canvasContext.fillStyle = color;
  canvasContext.fillRect(leftX,topY,width,height);
}

function playArea(){
  // canvas
  colorRect(0,0,canvas.width,canvas.height,'lightsteelblue');
  // left paddle
  colorRect(0,210,10,100,'midnightblue');
  // right paddle
  colorRect(790,210,10,100,'midnightblue');
  // ball
  colorRect(ballX,280,20,20,'midnightblue');
}
