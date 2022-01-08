
canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");

var mouseEvent="empty";
var last_possition_of_X;
var last_possition_of_Y;
var width_of_line = "2";


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    
    color=document.getElementById("color_text_input").value;
    width_of_line = document.getElementById("width_text_input").value;
    mouseEvent="mouseDown";
}




canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    
    current_possition_mouse_X = e.clientX-canvas.offsetLeft;
    current_possition_mouse_Y = e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mouseDown"){
        
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      console.log("Y = " + last_possition_of_Y + " , " + "X = " + last_possition_of_X);
      ctx.moveTo(last_possition_of_X, last_possition_of_Y);
      console.log("Y = " + current_possition_mouse_Y + " , " + "X = " + current_possition_mouse_X);
      ctx.lineTo(current_possition_mouse_X,current_possition_mouse_Y);
      ctx.stroke();

    }
    last_possition_of_X=current_possition_mouse_X;
    last_possition_of_Y=current_possition_mouse_Y;
}



canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";}
    
    
    function clear_area() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
