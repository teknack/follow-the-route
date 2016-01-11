var canvas = document.getElementById("canvas");
canvas.width=1300;
canvas.height=750;
var context = canvas.getContext("2d");
context.fillStyle="green";

var keys= [];
speed=4;

var cube = {
x: 250,
y: 250,
width: 20,
height: 20,
dead: false,
deadTime: 100
};

var player = {
x: 200,
y: 200,
width: 20,
height: 20
};

window.addEventListener("keydown", function(e){
keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
delete keys[e.keyCode];
}, false);

function game()
{
	update();
	render();
}

function update()
{

if(keys[38]) //up
{
if ((player.x>5 && player.x<150 && player.y>255 && player.y<350) || (player.x>150 && player.x<350 && player.y>105 && player.y<350) || 
(player.x>=350 && player.x<450 && player.y>257 && player.y<350) || (player.x>450 && player.x<600 && player.y>52 && player.y<=453 ) ||
(player.x>=450 && player.y>453 && player.y<550) || (player.x>=250 && player.x<450 && player.y>453 & player.y<550) || 
(player.x>=400 && player.x<900 && player.y>653 && player.y<=750) || (player.x>=900 && player.x<1050 && player.y>52&& player.y<=750) ||
(player.x>600 &&player.x<1300 && player.y>52 && player.y<150) || (player.x>=1150 && player.x<1300 && player.y>53 && player.y<550) ||   
(player.x>=600 && player.x<1300 && player.y>252 && player.y<350) || (player.x>=600 && player.x<900 && player.y>253 && player.y<350) || 
(player.x>=250 && player.x<400 && player.y>453 & player.y<=750))

player.y-=speed;
}
	
if(keys[40]) //down
 {
 if ((player.x>5 && player.x<450 && player.y>100 && player.y<330) || (player.x>450 && player.x<600 && player.y>50 && player.y<450) || 
 (player.x>=450 && player.y>=450 && player.y<525) || (player.x>=250 && player.x<400 && player.y>450 & player.y<747) || 
 (player.x>=400 && player.x<900 && player.y>650 && player.y<747) || (player.x>=900 && player.x<1050 && player.y>50 && player.y<747)|| 
 (player.x>600 && player.x<1300 && player.y>50 && player.y<130) || (player.x>=1150 && player.x<1300 && player.y>146 && player.y<525) || 
 (player.x>=600 && player.x<1300 && player.y>250 && player.y<330)|| (player.x>=600 && player.x<900 && player.y>250 && player.y<330) || 
 (player.x>=400 && player.x<450 && player.y>450 & player.y<525) || (player.x>=1050 && player.x<1300 && player.y>450 && player.y<525))
 
 player.y+=speed;
}
	
if(keys[37]) //left
	{
	if ((player.x>=5 && player.x<=155 && player.y>255 && player.y<350) || (player.x>155 && player.x<350 && player.y>100 && player.y<350) || 
	(player.x>=350 && player.x<=455 && player.y>252 && player.y<350) || (player.x>455 && player.x<600 && player.y>50 && player.y<450) || 
	(player.x>253 && player.x<1300 && player.y>=450 && player.y<550) || (player.x>253 && player.x<1050 && player.y>650 && player.y<750)|| 
	(player.x>253 && player.x<400 && player.y>550 && player.y<650) || (player.x>600 &&player.x<1300 && player.y>50 && player.y<150)|| 
	(player.x>=600 && player.x<1300 && player.y>250 && player.y<350) ||  (player.x>=1153 && player.x<1300 && player.y>50 && player.y<550) || 
	(player.x>=905 && player.x<1050 && player.y>50 && player.y<750) || (player.x>905 && player.x<1050 && player.y>550 && player.y<650))
		
	player.x-=speed;
	}
	
if(keys[39]) //right
 {
if ((player.x>=5 && player.x<150 && player.y>255 && player.y<350) || (player.x>=150 && player.x<330 && player.y>105 && player.y<350) || 
(player.x>=330 && player.x<450 && player.y>252 && player.y<350) || (player.x>=450 && player.x<580 && player.y>50 && player.y<450)|| 
(player.x>=250 && player.x<1297 && player.y>=450 && player.y<550) || (player.x>=250 && player.x<1047 && player.y>650 && player.y<750) || 
(player.x>=250 && player.x<380 && player.y>=550 && player.y<650) || (player.x>=580 && player.x<1297 && player.y>50 && player.y<150)|| 
(player.x>=580 && player.x<1297 && player.y>250 && player.y<350) ||  (player.x>=1050 && player.x<1297 && player.y>50 && player.y<550) || 
(player.x>=900 && player.x<1030 && player.y>50 && player.y<=750)) 
	
player.x+=speed;
}
	
	if(player.x <0) player.x=0;
	if(player.y <0) player.y=0;
	if(player.x >= canvas.width - player.width) {player.x=canvas.width - player.width;
	}
	if(player.y >= canvas.height - player.height) player.y=canvas.height - player.height ; 

	if(collision(player, cube)) {console.log("collision");
	process();
}

}

function render()
{
context.clearRect(0,0,canvas.width,canvas.height);
context.fillRect(player.x,player.y,player.width,player.height);

context.fillRect(cube.x,cube.y,cube.width,cube.height);
context.beginPath();

			context.moveTo(1300,50);

			context.lineTo(450,50);

			context.lineTo(450,250);

			context.lineTo(350,250);

			context.lineTo(350,100);

			context.lineTo(150,100);

			context.lineTo(150,250);

			context.lineTo(0,250);

			context.stroke();

			

			context.strokeRect(1050,150, 100, 100);

			context.strokeRect(1050,350, 100, 100);

			

			context.strokeRect(600,150, 300, 100);

			context.strokeRect(600,350, 300, 100);

			

			context.moveTo(0,350);

			context.lineTo(450,350);

			context.lineTo(450,450);

			context.lineTo(250,450);

			context.lineTo(250,750);

			context.lineTo(1050,750);

			context.lineTo(1050,550);

			context.lineTo(1300,550);

			context.lineTo(1300,50);			

			context.stroke();			
			context.strokeRect(400,550, 500, 100);
			context.closePath();
}

function process(){
	
	cube.x= 0;
	cube.y= 0;
cube.width=0;
cube.height=0;
}

function collision(first, second)
{
	return !(first.x > second.x + second.width || first.x + first.width < second.x || first.y > second.y + second.height || first.y + first.height < second.y);
}

setInterval(function()
{
game();
},1000/30);