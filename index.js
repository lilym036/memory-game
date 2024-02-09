const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
console.log(gamePattern);
userClickedPattern = [];
let level = 0;
let started = false;


// kepypress to start the game
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }


})


// button clicks 
$(".btn").click(function () {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

// checks game answers
const checkAnswer = (currentLevel) => {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success.");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        } 
    } else {
        console.log("Wrong.");

            playSound("wrong");

            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 200);
            
            startOver();
        }




    }

    // gets random color 
    const nextSequence = () => {
        userClickedPattern = [];
        level++;
        $("#level-title").text("Level " + level);

        const randomNum = Math.ceil(Math.random() * 4);
        console.log(randomNum);

        const randomChosenColor = buttonColors[randomNum];
        console.log(randomChosenColor);

        gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        playSound(randomChosenColor);


    };

    // animates box when pressed 
    const animatePress = (currentColor) => {
        $("#" + currentColor).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColor).removeClass("pressed");
        }, 100);
    };

    // plays sounds when buttons clicked
    const playSound = (name) => {
        const audio = new Audio("./sounds/" + name + ".mp3");
        audio.play();

    };

    // resets everything back to start over 
    const startOver = () => {
        level = 0;
        gamePattern = [];
        started = false;
    }