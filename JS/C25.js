// all type of consoles 
console.error("hey this is an error")
console.assert(5>53)
console.assert(555>53)
// if the statement is true , no problem, if false , then assertion will finally.

// console.clear()
// it will clear the whole console 

let obj={a:1,b:2,c:3}
console.table(obj)
// this will print as table like structure 

console.warn("hey please dont drink daaru!")


console.info("hello world")


console.time("a")
console.timeEnd("a")
console.time("b")
console.timeEnd("b")


console.time("forloop")
for(let i=0;i<5;i++){
    console.log(69)
}
console.timeEnd("forloop")