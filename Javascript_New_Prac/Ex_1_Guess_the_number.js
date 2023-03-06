console.log('Exercise:1 Guess the Number');

let guessNum = Math.floor(Math.random()*100)+1; //generate random number 1 to till 100
//let guessNum = 23
let score=1;
let userInput;
console.log(guessNum);
do {
    userInput = Number.parseInt(prompt('Enter a guess Number between 1 to 100:'));
    if(userInput===guessNum){
        console.log(`Congrats your guest it right`);
    }
    else if(userInput>guessNum){
        score++;
        console.log(`OOPS SORRY!! TRY A SMALLER NUMBER`);

    }
    else{
        score++
        console.log("OOPS SORRY!! TRY A GREATER NUMBER");
    }

} while (userInput!==guessNum);
console.log(`Your score is ${100-score}`);
