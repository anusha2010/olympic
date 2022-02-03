var canvas=document.getElementById("canvas");
ctx= canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle="darkblue";
ctx.linerWidth=1;
ctx.rect(250,250,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="darkblue";
ctx.linerWidth=1;
ctx.arc(300,300,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.linerWidth=1;
ctx.arc(400,300,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.linerWidth=1;
ctx.arc(500,300,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.linerWidth=1;
ctx.arc(350,330,40,0,360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.linerWidth=1;
ctx.arc(450,330,40,0,360);
ctx.stroke();