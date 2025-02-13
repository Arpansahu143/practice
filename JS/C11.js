// functions in javascript 

let a=10
let b=20
let c=30

function add(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}

function findAvg(x,y){
    return (x+y)/2
}

console.log("addition of a and b is ", add(a,b))
console.log("subtraction of c and b is ", sub(c,b))
console.log("average of 15 and 20 is: ", findAvg(15,20))
console.log("round of average of 15 and 20 is: ", Math.round(findAvg(15,20)))

console.log("a random number is: "+ Math.round(Math.random()*10))



// now modern style js functions, most used 

const sum = (p,q)=>{
    return p+q
}
console.log("sum of 1,2 is: ", sum(1,2))

let mul=(p,q)=>{
    return p*q
    
}
console.log("product of 2,3 is: ", mul(2,3))



const hello=()=>{
    console.log("hello buddy")
}
hello()