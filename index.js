const buttonColors= ["red", "blue", "green", "yellow"];
const gamePattern= [];
console.log(gamePattern);


function nextSequence() {
    const randomNum= Math.ceil(Math.random() * 3);
    console.log(randomNum);

    for (let i= 0; i < buttonColors.length; i++) {
        let randomChosenColor= buttonColors[randomNum];
        console.log(randomChosenColor);
        gamePattern.push(randomChosenColor);
    }


};

nextSequence();