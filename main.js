//variables 

// let number1 = document.getElementById("number1").value
// let number2 = document.getElementById("number2").value
// let output;

let sum = () => { 
    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    console.log(number1,number2);
   let sum = (parseInt(number1) + parseInt(number2)); 
    document.getElementById("output").innerHTML = sum;
}
let subtraction = (number1,number2) => { number1 - number2}
let division = (number1,number2) => { number1 / number2}
let multiply = (number1,number2) => { number1 * number2}

document.getElementById("sum").addEventListener("click", sum);