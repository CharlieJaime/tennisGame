// Gloabl Vars
var canvas;
var canvasContext;
var ballX;
var ballY;

// Main Game Logic
window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  var framesPerSecond = 30;
  setInterval(function(){
    movement();
    drawEverything();
  }, 1000/framesPerSecond);
}

// Functions for game
function movement(){
  ballX = ballX + 5;
}

function drawEverything(){
  canvasContext.fillStyle = 'lightsteelblue';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'midnightblue';
  canvasContext.fillRect(0,210,10,100);
  canvasContext.fillStyle = 'midnightblue';
  canvasContext.fillRect(790,210,10,100);
  canvasContext.fillStyle = 'steelblue';
  canvasContext.fillRect(380,280,20,20);
}
