let choice;
let choice1;

let winCount = 0;
let loseCount = 0;

// 0=stone 
// 1=paper 
// 2=scisor 

for (let i = 0; i < 5; i++) {
    choice = prompt("Enter your choice");
    choice1 = choice.toLowerCase();
    let computer = Math.round(Math.random() * 2);
    
    if (choice == "stone" && computer == 0) {
        document.write(`number ${i+1} is a tie.<br>`);
        winCount += 0;
        loseCount += 0;
    } else if (choice == "stone" && computer == 1) {
        document.write(`number ${i+1} is a lose.<br>`);
        winCount += 0;
        loseCount += 1;
    } else if (choice == "stone" && computer == 2) {
        document.write(`number ${i+1} is a win.<br>`);
        winCount += 1;
        loseCount += 0;
    } else if (choice == "paper" && computer == 0) {
        document.write(`number ${i+1} is a win.<br>`);
        winCount += 1;
        loseCount += 0;
    } else if (choice == "paper" && computer == 1) {
        document.write(`number ${i+1} is a tie.<br>`);
        winCount += 0;
        loseCount += 0;
    } else if (choice == "paper" && computer == 2) {
        document.write(`number ${i+1} is a lose.<br>`);
        winCount += 0;
        loseCount += 1;
    } else if (choice == "scisor" && computer == 0) {
        document.write(`number ${i+1} is a lose.<br>`);
        winCount += 0;
        loseCount += 1;
    } else if (choice == "scisor" && computer == 1) {
        document.write(`number ${i+1} is a win.<br>`);
        winCount += 1;
        loseCount += 0;
    } else if (choice == "scisor" && computer == 2) {
        document.write(`number ${i+1} is a tie.<br>`);
        winCount += 0;
        loseCount += 0;
    }
}

document.write(`number of win is ${winCount}.<br>`);
document.write(`number of lose is ${loseCount}.<br>`);

if (winCount == loseCount) {
    document.write("whole match is tied.<br>");
} else if (winCount > loseCount) {
    document.write("Congratulations you win!<br>");
} else {
    document.write("Sorry you lose!<br>");
}
