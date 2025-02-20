// practice set 


// Q1 
// let a navbar is there and i have to color the first element 
document.getElementsByTagName("nav")[0].firstElementChild.color="red"
// this will color the 1st child only 


// Q2- create a table without tbody 
// if u dont use tbody , browser will automatically add it in inspect tab 
// but in pagesource page , it wont add 



// Q3- color green to first child and last child 
document.getElementsByTagName("nav")[0].firstElementChild.color="red"
document.getElementsByTagName("nav")[0].lastElementChild.color="red"


// Q4- js code to change background of all <li> tags to cyan 
document.querySelectorAll("li").forEach(function(item){
    item.style.background="cyan"
    })