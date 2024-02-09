const buttonColors= ["red", "blue", "green", "yellow"];
const gamePattern= [];
console.log(gamePattern);
userClickedPattern= [];


$(".btn").click(function() {
    let userChosenColor= $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    const audio = new Audio("./sounds/" + userChosenColor + ".mp3");
    audio.play();
});


function playSound(name) {
    const audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
    
}


function nextSequence() {
    const randomNum= Math.ceil(Math.random() * 4);
    console.log(randomNum);

    const randomChosenColor= buttonColors[randomNum];
    console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound();
    

};

