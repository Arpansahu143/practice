// element only navigation 


const changeBgRed = ()=>{
    document.body.firstElementChild.style.background="red"
}

let b= document.body
console.log("first child of b is", b.firstChild)
console.log("last element child of b is", b.firstElementChild)