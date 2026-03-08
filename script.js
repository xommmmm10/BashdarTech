const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

for(let i=0;i<200;i++){
snowflakes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
d:Math.random()*1
});
}

function drawSnow(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";
ctx.beginPath();

for(let i=0;i<snowflakes.length;i++){

let f = snowflakes[i];

ctx.moveTo(f.x,f.y);
ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true);

}

ctx.fill();
moveSnow();
}

let angle = 0;

function moveSnow(){

angle += 0.01;

for(let i=0;i<snowflakes.length;i++){

let f = snowflakes[i];

f.y += Math.cos(angle+f.d)+1+f.r/2;
f.x += Math.sin(angle)*2;

if(f.x>canvas.width || f.x<0 || f.y>canvas.height){

snowflakes[i] = {
x:Math.random()*canvas.width,
y:0,
r:f.r,
d:f.d
};

}

}

}

setInterval(drawSnow,33);
