// table navigation 

// if there is a table in the page we can access every row 

let t= document.body.firstElementChild.firstElementChild
console.log(t)

console.log(t.rows)
// this will return all table rows in a html tag like structure 
console.log(t.caption)
console.log(t.thead)
console.log(t.thead.firstChild)
console.log(t.tfoot) 