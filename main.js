canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "blue";
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_Y = e.clientY - canvas.offsetTop;
    console.log(mouse_x)
    console.log(mouse_Y)
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_x, mouse_Y, 40, 0, 2*Math.PI);
    ctx.stroke();
}