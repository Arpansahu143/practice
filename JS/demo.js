function addNumbers() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let sum = num1 + num2;
    document.getElementById("result").innerText = sum;
}