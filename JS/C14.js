let name= "arPan"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

for(let i in name){
    console.log(name[i])
}

// OR 

for(let i=0;i<name.length;i++){
    console.log(name[i])
}


console.log(name.slice(2,4))
// this will print character at position 2 and 3 

let name2="engineer"
console.log(name2.slice(0,5))
// print from 0 to 4 

console.log(name.replace("ar","dar"))
// it will just simply replace the given charachters

let name3="dj"
let name4='okbro'
console.log(name3.concat(name4," yes"))
// it will just add strings 

let name5="    arpan sahu    "
console.log(name5.trim())
// it'll remove all spaces from left and right


