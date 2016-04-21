var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var addButton = document.getElementById("add");

var balls = [];

var createBall = function(){
  var xPos = Math.floor(Math.random() * c.width);
  var yPos = Math.floor(Math.random() * c.height);
  var xDir = 1;
  var yDir = 1;
  var xVel = Math.floor(Math.random() * 10);
  var yVel = Math.floor(Math.random() * 10);
  var rad = Math.floor(Math.random() * 50);
  var Ball = function(){
    ctx.beginPath();
    ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    ctx.arc(xPos, yPos, rad, 0, 2 * Math.PI);
    ctx.fill();
    xPos = xPos + (xVel * xDir);
    yPos = yPos + (yVel * yDir);
  }
  var Bounce = function(){
    if (Math.abs(xPos-c.width/2) >= c.width/2 - rad){
	    xDir = xDir * -1;
	  }
	  if (Math.abs(yPos-c.height/2) >= c.height/2 - rad){
	    yDir = yDir * -1;
    }
    //still needs part of function to bounce off other balls; not
    //edit: not really necessary
  }
  return {
    ball : Ball,
    bounce : Bounce  
  };
};

var playBalls = function(){ };
//needs code
var pauseBalls = function(){ };
//needs code
var addBall = function(){ balls.push(createBall());};

playButton.addEventListener("click", playBalls)
pauseButton.addEventListener("click". pauseBalls)
addButton.addEventListener("click", addBall)
