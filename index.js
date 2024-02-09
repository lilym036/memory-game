const buttonColors= ["red", "blue", "green", "yellow"];
const gamePattern= [];
console.log(gamePattern);


function nextSequence() {
    const randomNum= Math.ceil(Math.random() * 4);
    console.log(randomNum);

    const randomChosenColor= buttonColors[randomNum];
    console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    const audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
    audio.play();

    

};

nextSequence();