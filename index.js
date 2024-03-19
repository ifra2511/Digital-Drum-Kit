var w = new Audio("sounds/tom-1.mp3");
var a = new Audio("sounds/tom-2.mp3");
var s = new Audio("sounds/tom-3.mp3");
var d = new Audio("sounds/tom-4.mp3");
var j = new Audio("sounds/snare.mp3");
var k = new Audio("sounds/crash.mp3");
var l = new Audio("sounds/kick-bass.mp3");
var y = document.querySelectorAll(".drum").length;
for(var i=0; i<y; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var x = this.innerHTML;
    switch(x){
    case "w": 
        w.play();
        break;
    case "a":
        a.play();
        break;
    case "s":
        s.play();
        break;
    case "d":
        d.play();
        break;
    case "j":
        j.play();
        break;
    case "k":
        k.play();
        break;
    case "l":
        l.play();
        break;
    case "y":
        y.play();
        break;
    }
    addAnimation(x);
    
         });
}

    document.addEventListener("keydown", function(event){
     var z = event.key;
     switch(z){
        case "w": 
        w.play();
        break;
    case "a":
        a.play();
        break;
    case "s":
        s.play();
        break;
    case "d":
        d.play();
        break;
    case "j":
        j.play();
        break;
    case "k":
        k.play();
        break;
    case "l":
        l.play();
        break;
    case "y":
        y.play();
        break;
     }
     addAnimation(event.key);
    });
    function addAnimation(currentButton){
    document.querySelector("." + currentButton).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("." + currentButton).classList.remove("pressed");
    }, 100);
    }
