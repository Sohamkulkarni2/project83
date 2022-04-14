screenwidth=screen.width;
var newwidth=screen.width-70;
var newheight=screen.height-300;

var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    if(screenwidth<992){
    canvas.width=newwidth;
    canvas.height=newheight;
    document.body.style.overflow="hidden";
    }
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
        
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    var Color="Yellow";
    var crntmousex=0;
    var crntmousey=0;
    var startmousex=0;
    var startmousey=0;
    linewidth=2;
    var canvasname =document.getElementById("myCanvas");
    var context=canvasname.getContext("2d");
    var mouseev=" ";
    canvasname.addEventListener("mousedown" ,my_mousedown);
    function my_mousedown(e){
    mouseev= "mousedown";
    }
    canvasname.addEventListener("mousemove" ,my_mousemove);
    
    canvasname.addEventListener("mouseleave" ,my_mouseleave);
    function my_mouseleave(e){
    mouseev= "mouseleave";
    }
    
    canvasname.addEventListener("mouseup" ,my_mouseup);
    function my_mouseup(e){
    mouseev= "mouseup";
    }
    function my_mousemove(e){
    crntmousex=e.clientX-canvasname.offsetLeft;
    crntmousey=e.clientY-canvasname.offsetTop;
    
    if(mouseev=="mousedown"){
        context.beginPath();
        context.strokeStyle=Color;
        context.lineWidth=linewidth;
        context.moveTo(startmousex,startmousey);
        context.lineTo(crntmousex,crntmousey);
        console.log("srart xandy="+startmousex,startmousey, "crnt xandy="+crntmousex,crntmousey);
        context.stroke();
    }
        
    startmousex=crntmousex;
    startmousey=crntmousey;
    }
    
    
    

    

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        
 
        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }

