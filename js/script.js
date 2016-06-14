var canvas;
var canvasContext;

window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  canvasContext.fillStyle = 'lightsteelblue';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
}
