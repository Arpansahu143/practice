// practice excercise 
// a game for guessing number 

let num = Math.round(Math.random() * 100);
let count = 0;
let guess;

while (true) {
    guess = parseInt(prompt("Hello sir, please guess the random number:")); 
    count++;

    if (guess < num) {
        console.log("Lesser");
    } else if (guess > num) {
        console.log("Greater");
    } else {
        console.log("You got it right, sir!");
        break; 
    }
}

let score = 100 - count;
console.log("Your score is:", score);

