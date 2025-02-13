// practice set 
// Q1
const sentence=" my name is arpan sahu"
const word="sahu"
console.log(sentence.includes(word))
console.log(`the word "${word}" ${sentence.includes(word)? "is":"is not"} in the sentence`)


// Q2
const str1="my dog name is happy"
console.log(str1.endsWith("happy"))
console.log(str1.startsWith("my"))
// these will return boolean values 

// Q3
let str2="price is 1000"
let amount=str2.slice("price is ".length)
console.log(amount)
// this will return the price as a string
amount=Number.parseInt(amount)
console.log(amount)
console.log(typeof amount)
// this will return number 


// Q4
const str3="hello world"
console.log(str3.replace(str3[4],"z"))