canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color= "purple";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.rect(150,143,430,200);
ctx.stroke();


color= "blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(250,210,40,0,Math.PI*2);
ctx.stroke();


color= "black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(350,210,40,0,Math.PI*2);
ctx.stroke();

color= "red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(450,210,40,0,Math.PI*2);
ctx.stroke();

color= "yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,250,40,0,Math.PI*2);
ctx.stroke();

color= "green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400,250,40,0,Math.PI*2);
ctx.stroke();