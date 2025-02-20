//  matches , closest and contains 

console.log(id1)
// or 
let jj=document.getElementById("id1")
console.log(jj)


console.log(jj.matches(".class"))
// this will return false because we dont have any class named as class 

console.log(jj.matches(".box"))




console.log(sp1.closest(".box"))
// will start from its own i.e. sp1 

console.log(id1.contains(sp1))
// will return true 
