// practice sets 

// Q1
let marks={
    Arpan:96,
    Ankit:78,
    Aryan:90
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Mark of",Object.keys(marks)[i],"is",marks[Object.keys(marks)[i]])
}
// Object.keys(marks) stores all data in a array like storage 
// Object.keys(marks)[i] is used to access each key in the array
// marks[Object.keys(marks)[i]] is used to access each value in the array

// using for in loops 

for (let key in marks){
    console.log("Mark of",key,"is",marks[key])
}

// Q2 mean of 4 numbers

let marks2=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(marks2(10,20,30,40))

