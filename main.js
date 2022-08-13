var mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    color = "red";
    width_of_the_line = 1;
    radius = 20;

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_the_line = document.getElementById("width_of_the_line").value;
        radius = document.getElementById("radius").value;

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);

    function my_mouseup(e)
    {
        mouseEvent = "mouseUp";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);

    function my_mouseleave(e)
    {
        mouseEvent = "mouseLeave";
    }

    canvas.addEventListener("mousemove", my_mousemove);

    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
        
        if (mouseEvent == "mouseDown")
        {
            console.log("Current postion of x and y cordinates = ");
            console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_the_line;
            ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }

    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }