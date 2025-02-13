let arr=[1,7,9]
console.log(arr)
arr.join("_")
console.log(arr)


arr.pop()
console.log(arr)
// it will pop the last element 

arr.push(9)
console.log(arr)
// it will add 9 at the end 

delete arr[2]
console.log(arr)
// it will delete the element at index 2

let r=arr.push(56)
console.log(arr,r)
// it will add 56 at the end and return the length of the array

let arrr=arr.shift()
console.log(arrr)
// it will remove the first element and return it

let x=arr.unshift(5)
console.log(arr,x)

