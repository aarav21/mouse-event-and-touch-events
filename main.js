canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "";
 
var last_position_of_X, last_position_of_Y;

color = "black";
line_Width = "10";
width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992 ){
    canvas.width = new_width;
    canvas.height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e){
    console.log(e);
    color = document.getElementById("color").value;
    line_Width = document.getElementById("width").value;

    last_position_of_X = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_Y = e.touches[0].clientY - canvas.offsetTop;  
}

canvas.addEventListener("touchmove", touch_Move);

function touch_Move(e){
    current_position_of_X = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_Y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_Width;
    console.log("last position:" + last_position_of_X + "," + last_position_of_Y);

    ctx.moveTo(last_position_of_X , last_position_of_Y);
    console.log("current position:" + current_position_of_X + "," + current_position_of_Y);
    ctx.lineTo(current_position_of_X , current_position_of_Y);
    ctx.stroke();
    last_position_of_X = current_position_of_X;
    last_position_of_Y = current_position_of_Y;
}

function clearScreen(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{

     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.line_Width = line_Width;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;
}

