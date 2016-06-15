// Gloabl Vars
var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;
var paddle1Y = 210;
const PADDLE_HEIGHT = 100;

// Main Game Logic

function calMousePos(evt){
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = evt.clientX - rect.left - root.scrollLeft;
  var mouseY = evt.clientY - rect.top - root.scrollTop;
  return{
    x:mouseX,
    y:mouseY
  };
}

window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  var framesPerSecond = 30;
  setInterval(function(){
    movement();
    playArea();
  }, 1000/framesPerSecond);

  canvas.addEventListener('mousemove', function(evt){
    var mousePos = calMousePos(evt);
    paddle1Y = mousePos.y-(PADDLE_HEIGHT/2);
  });
}

// Functions for game
function movement(){
  // main function for ball movement
  ballX = ballX + ballSpeedX;
  ballY = ballY + ballSpeedY;

  if(ballX < 0){
    ballSpeedX = -ballSpeedX;
  }
  if(ballX > canvas.width){
    ballSpeedX = -ballSpeedX;
  }
  if(ballY < 0){
    ballSpeedY = -ballSpeedY;
  }
  if(ballY > canvas.height){
    ballSpeedY = -ballSpeedY;
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
  colorRect(0,paddle1Y,10,PADDLE_HEIGHT,'midnightblue');
  // right paddle
  colorRect(790,210,10,100,'midnightblue');
  // ball
  colorRect(ballX,ballY,20,20,'midnightblue');
}
