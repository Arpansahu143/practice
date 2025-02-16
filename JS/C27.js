// alert, confirm and prompt 

alert("hello buddy")
confirm("are you sure?")
let a=prompt("what is your name?")
console.log(a)
console.warn("you entered a value of",(typeof a))


let write=confirm("do u want to write to page?")
if(write){
    let text=prompt("what do u want to write?")
    document.write(text)
}
else{
    alert("please allow me to write")
    let text=prompt("what do u want to write?")
    document.write(text)
}


