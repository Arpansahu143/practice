let arr=[1,2,3,4]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
// to get all ements of array 


arr.forEach((element)=>{
    console.log(element*element)
})
// this will print square of each numbers 

// function for getting all html collections by class name 
// let a=document.getElementsByClassName("example_class")
// console.log(a)
// this will print all html collections by their class name 
// Array.from(a)
// this function make all emelents in an array 

let name="Arpan"
let arrr=Array.from(name)
console.log(arrr)
// print all elements of staring arpan as a array 

for(let i of name){
    console.log(i)
}
// print all elements of staring arpan as a array

