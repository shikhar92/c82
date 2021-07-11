var mouseevent="";
var start_x="";
var end_x="";
var start_y="";
var end_y="";
canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="red";
width=2;


canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
color=document.getElementById("Colour").value;
width=document.getElementById("Width"). value;
mouseevent="mousedown";
}


canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
end_x=e.clientX-canvas.offsetLeft;
end_y=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;

ctx.moveTo(start_x,start_y);
ctx.lineTo(end_x,end_y);
ctx.stroke ();
}
start_x=end_x;
start_y=end_y;
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
mouseevent="mouseleave";
}
