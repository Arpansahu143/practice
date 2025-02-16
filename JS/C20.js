let arr=[45,23,67]
arr.map((value)=>{
    console.log(value)
})
// mapp is also like a loop  


// array map mehtod 
let a=arr.map((value, index)=>{
    console.log(value , index)
    return value+1
})
// this will print values along with index value 


console.log(a)
// it will print new array 


// filter mehtod 
let arr2=[45,23,21,0,3,5]
let b=arr2.filter((a)=>{
    return a<10
})
console.log(b)
// this will return values as per condition like a<10

let c=arr2.filter((a)=>{
    return a>10
})
console.log(c)
// this will return values as per condition like a>10


// these all function never change original array 
// they always return new array
console.log(arr)
console.log(arr2)


// reduce method 
let arr3=[1,2,3,5,2,1]
let sum=arr3.reduce((h1,h2)=>{
return h1 + h2
})
console.log(sum)
// this is a loop like structuredClone, it will take 1 and 2 then add, then 3 and 3
// add, then 6 + 5, then 11 +2, then 13+1, and will return 14


