
var gamePattern = [];
var userClickedPattern = [];
var buttonsColors = ["red", "blue", "green", "yellow"];
var userChosenColor;
var started = false;
var level = 0 ;

$(".btn").click(function () {
    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});



function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonsColors[randomNumber];

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3")
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")
    },100)
}

function checkAnswer(currentLevel){
    
        if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
            console.log("success");
            if(userClickedPattern.length === gamePattern.length){
                setTimeout(function(){
                    nextSequence();
                },1000);
            }
        }
        else{
            console.log("wrong");
            playSound("wrong")
            $("#level-title").text("Game Over, Press Any Key to Restart");
            $("body").addClass("game-over");
            setInterval(() => {
                $("body").removeClass("game-over");
            }, 200);
            
        }
}


$(document).keydown(function(event){
        if(!started){
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true ;
    }
})

function startGame(){
    userClickedPattern =[];
    gamePattern =[];
    started=false;
    level =0;
}