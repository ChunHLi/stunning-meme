var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var addButton = document.getElementById("add");
var removeButton = document.getElementById("remove");
var animation;
var pausestate = true;

var balls = [];

var createBall = function(){
  var rad = Math.floor(Math.random() * 50);
  var xPos = Math.floor(Math.random() * (c.width-2*rad) + rad);
  var yPos = Math.floor(Math.random() * (c.height-2*rad) + rad);
  var xDir = Math.random()*2-1;
  var yDir = Math.random()*2-1;
  var color = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
  var xSpd = Math.floor(Math.random() * 5)+1;
  var ySpd = Math.floor(Math.random() * 5)+1;
  var xVel = xSpd * xDir;
  var yVel = ySpd * yDir;
  var Ball = function(){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(xPos, yPos, rad, 0, 2 * Math.PI);
    ctx.fill();
    xPos = xPos + xVel;
    yPos = yPos + yVel;
  };
  var Bounce = function(){
    if (Math.abs(xPos-c.width/2) >= c.width/2 - rad){
	    xVel = xVel * -1;
	  }
    if (Math.abs(yPos-c.height/2) >= c.height/2 - rad){
	    yVel = yVel * -1;
    }
    //for(var i = 0; i<balls.length; i++){
    //  var d = Math.pow(this.xPos - balls[i].xPos, 2) + Math.pow(this.yPos - balls[i].yPos, 2);
    //  if (d >= 0.1 && d < Math.pow(this.rad + balls[i].rad, 2)) {
    //	  	xPos = 
    //	}
    //}
    //still needs part of function to bounce off other balls; not
    //edit: not really necessary
  };
  return {
    ball : Ball,
    bounce : Bounce  
  };
};

var playBalls = function(){
	ctx.clearRect(0,0,c.width,c.height);
	for(var i = 0; i<balls.length; i++){
		balls[i].ball();
		balls[i].bounce();
	}
	animation = requestAnimationFrame(playBalls);
};
//needs code
var pauseBalls = function(){
	if (!pausestate){
	cancelAnimationFrame(animation);
	} else {
	animation = requestAnimationFrame(playBalls);
	}
	pausestate = !pausestate;
};
//needs code
var addBall = function(){ balls.push(createBall());};

var removeBall = function() { balls.pop(); };

playButton.addEventListener("click", function(){ if (pausestate) { pausestate = false; playBalls(); } });
pauseButton.addEventListener("click", pauseBalls);
addButton.addEventListener("click", addBall);
removeButton.addEventListener("click", removeBall);
