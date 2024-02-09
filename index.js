const buttonColors= ["red", "blue", "green", "yellow"];
const gamePattern= [];
console.log(gamePattern);
userClickedPattern= [];
let level= 0;
const started= false;

// button clicks 
$(".btn").click(function() {
    let userChosenColor= $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};



function nextSequence() {
    userClickedPattern= [];
    level++;
    $("#level-title").text("Level " + level);

    const randomNum= Math.ceil(Math.random() * 4);
    console.log(randomNum);

    const randomChosenColor= buttonColors[randomNum];
    console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    

};

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success.");
    }

    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence();
        }, 1000);
 
    } else {
        console.log("Wrong.");
    }

}



$(document).keypress(function() {
   if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started= true;
   }


})


// plays sounds when buttons clicked
function playSound(name) {
    const audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
    
};

