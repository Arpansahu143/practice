console.log("ok bro");

console.log("--------------------------------");

function nice(name) {
  console.log("hey " + name + " you are nice!");
}

nice("ARPAN");
nice("sivam");

console.log("--------------------------------");

function add(a, b) {
  console.log(a + b);
}

add(100, 200);

console.log("--------------------------------");

function mul1(c, d) {
  return c * d;
}
result = mul1(2, 10);
console.log("the multiplication is ", result);

console.log("--------------------------------");

// default parameter

function mul(o, j,k=2) {
    return o * j*k;
}
result1 = mul(5, 1);
console.log("the multiplication is ", result1);



console.log("--------------------------------");

