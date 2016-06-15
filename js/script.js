// Gloabl Vars
var canvas;
var canvasContext;
// Balls
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;
// paddles
var paddle1Y = 210;
var paddle2Y = 210;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 15;
// scores
var score1 = 0;
var score2 = 0;
const WIN_SCORE = 3;
var showWin = false;
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
function aiPaddle(){
  var paddle2YCen = paddle2Y + (PADDLE_HEIGHT/2);
  if(paddle2YCen < ballY-35){
    paddle2Y = paddle2Y + 10;
  } else if(paddle2YCen > ballY+35){
    paddle2Y = paddle2Y - 10;
  }
}

function movement(){
  if(showWin){
    return;
  }

  aiPaddle();
  // main function for ball movement
  ballX += ballSpeedX;
  ballY +=ballSpeedY;

  if(ballX < 0){
    if(ballY > paddle1Y && ballY < paddle1Y+PADDLE_HEIGHT){
      ballSpeedX = -ballSpeedX;
      var deltaY = ballY - (paddle1Y+PADDLE_HEIGHT/2);
      ballSpeedY = deltaY * 0.35;
    } else{
      score2 += 1;
      ballRest();
    }
  }
  if(ballX > canvas.width){
    if(ballY > paddle2Y && ballY < paddle2Y+PADDLE_HEIGHT){
      ballSpeedX = -ballSpeedX;
    } else{
      score1 += 1;
      ballRest();
    }
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

  if(showWin){
    canvasContext.fillStyle = 'midnightblue';
    canvasContext.fillText('Click to Continue', 100, 100);
    return;
  }

  // left paddle
  colorRect(0,paddle1Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'midnightblue');
  // right paddle
  colorRect(canvas.width-PADDLE_THICKNESS,paddle2Y,PADDLE_THICKNESS,PADDLE_HEIGHT,'midnightblue');
  // ball
  colorRect(ballX,ballY,20,20,'midnightblue');
  // scores
  canvasContext.fillText(score1, 100, 100);
  canvasContext.fillText(score2, canvas.width-100, 100);
}

function ballRest(){
  if (score1 >= WIN_SCORE || score2 >= WIN_SCORE) {
    score1 = 0;
    score2 = 0;
    showWin = true;
  }
  ballSpeedX = -ballSpeedX;
  ballX = canvas.width/2;
  ballY = canvas.height/2;
}
