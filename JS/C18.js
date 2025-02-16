// some more js array methods 
let num=[1,2,3,4,5,6,7,8,9]
delete num[0]
console.log(num)
console.log(num.length)
// with delete operator length will not be changed although after deleting one element 


let num_more=[10,11]
let newArray=num.concat(num_more)
console.log(newArray)
// it will merge 2 array 

let x=[3,5,798,5,2,9,1]
x.sort()
console.log(x)
// this will sort alphabatically
// while sorting 798 in order , it will be before 9 because 798's starting alphabet is 7
// smaller than 9
// it will sort in ascending order

let compare=(a,b)=>{
    return b-a
}
x.sort(compare)
console.log(x)
// this will return array in descending order 

let compare1=(a,b)=>{
    return a-b
}
x.sort(compare1)
console.log(x)
// this will return array in ascending order

x.reverse()
console.log(x)
// it just reverses the array 


// concept of splice 
let a=[1,2,3,4,5,6,7,8,9]
let b=a.splice(2,2,10,11)
console.log(a,b)
// this will add 11 and 12 in the position 2 by removing 2 element as per argument 
// it will return the removed element as well


