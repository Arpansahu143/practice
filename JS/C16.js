// Arrays
const fruits=["banana","apple","mango"]
for(let i in fruits){
    console.log(fruits[i])
}
const numbers=[1,2,3,4,5]
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
console.log(numbers)


// we can also change values
numbers[0]=10
numbers[5]=50;
console.log(numbers)


console.log(typeof numbers)
// it will print object  
