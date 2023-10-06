// function isclick(){
//     alert("I got clicked!");

// }

// document.querySelector("button").addEventListener("click",isclick);

//anonymous function


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
             
             var buttonInnerHtnl=this.innerHTML;
             makesound(buttonInnerHtnl);
             buttonAnimation(buttonInnerHtnl);
         });

}



document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;


        case "s":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;

        case "d":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
     }
     

}

function buttonAnimation(currentKey){
    var activebutton =document.querySelector("."+currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}