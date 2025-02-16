// practice sets 

// Q1
function getData() {
    let a = parseInt(document.getElementById("age").value); 

    if (a > 18) {
        document.getElementById("res").innerHTML = "You can drive";
    } else {
        document.getElementById("res").innerHTML = "You cannot drive";
    }
}


//Q2
// let age=prompt("enter your age: ")

// if (age > 18) {
//     alert("you can drive.")
// } else {
//     alert("you cannot drive.")
// }


// let ok=confirm("do you want to see what u have inputed?")
// if(ok){
//     document.write(age)
// }
// else{
//     console.log("yes sir!")
// }




// Q3
// let age=prompt("enter your age: ")
// if(age>0){
// if (age > 18) {
//     alert("you can drive.")
// } else {
//     alert("you cannot drive.")
// }}
// else{
//     alert("enter positive or valid age.")
// }


// let ok=confirm("do you want to see what u have inputed?")
// if(ok){
//     document.write(age)
// }
// else{
//     console.log("yes sir!")
// }







// Q4
// let num=prompt("enter a number lesser than 4 to go to my portfolio")
// num=Number.parseInt(num)
// if(num<4){
//     location.href="https://arpan-sahu.netlify.app"
// }
// else{
//     alert("you cannot go to my portfolio")
// }





// Q5
// let color=prompt("enter a color.")
// let color1=color.toLowerCase();
// document.body.style.background=color1;