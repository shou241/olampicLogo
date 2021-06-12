canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(274, 250, 40, 0, 2*Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(166, 250, 40, 0, 2*Math.PI);
ctx.stroke();


color="orange";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(110, 200, 40, 0, 2*Math.PI);
ctx.stroke();


color="green";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(220, 200, 40, 0, 2*Math.PI);
ctx.stroke();


color="blue";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=2;
ctx.arc(330, 200, 40, 0, 2*Math.PI);
ctx.stroke();


























































































canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log (color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
       
}