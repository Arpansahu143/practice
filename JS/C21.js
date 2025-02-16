// practice set for arrays 
// Q1

// let arr=[1,2,3,4,5,6,83]
// let a=prompt("enter a new number: ")
//  a=Number.parseInt(a)
//  arr.push(a)
//  console.log(arr)


//  Q2
// let arr2=[1,2,3,4]
// let a;
// do {
//     a=prompt("enter a nonzero number to add and zero to stop")
//     a=Number.parseInt(a)
//     arr2.push(a)
// } while (a!=0);
// console.log(arr2)
 



// Q3
// let arr3=[1,20,3,40,5,60,7,80]
// let c=arr3.filter((k)=>{
//     return k%10==0
// })
// console.log(c)


// Q4
// let arr4=[]
// alert("you have to enter 5 numbers")
// for (let i=0;i<5;i++){
//     let a=prompt("enter a number")
//     a=Number.parseInt(a)
//     arr4.push(a*a)
// }
// console.log(arr4)



// Q4 using map
// let arr4=[1,2,3,4,5]
// let n=arr4.map((x)=>{
//     return x*x
// })
// console.log(n)



// Q5
let arr5=[1,2,3,4,5]
let n=arr5.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)