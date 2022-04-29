var myAudio = new Audio('intro (1).mp3'); 
var soundcount = 0
var color = document.getElementById("colorpicker");
var mode = document.getElementById("mode");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


canvas.addEventListener("click", my_mousedown)

function my_mousedown(e){
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop;
    circle(mousex, mousey)
}

function circle(mousex, mousey){
    context.beginPath()
    context.strokeStyle = "black"
    context.lineWidth = 2
    context.arc(mousex,mousey,20,0,360)
    context.fillStyle = color.value
    context.fill()
    context.stroke()
}

function reset()
{
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0,0, canvas.width, canvas.height);
}


function sound()
{
    soundcount = soundcount + 1

    if(soundcount > 1){
        soundcount = 0
    }

    if(soundcount == "1"){
       document.getElementById("music").style.display = "none";
       document.getElementById("unmusic").style.display = "block";
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        myAudio.play();
    }
 
    if(soundcount == "0"){
        document.getElementById("unmusic").style.display = "none";
        document.getElementById("music").style.display = "block";
        myAudio.pause();
    }
   
}



function go() {
    console.log(mode.value);
    if (mode.value == "drag") {
        canvas.removeEventListener("mousedown", my_mousedown);
        canvas.addEventListener("mousemove", my_mousedown);

    } else if (mode.value == "dot") {
        canvas.removeEventListener("mousemove", my_mousedown);
        canvas.addEventListener("mousedown", my_mousedown);
    }

}
