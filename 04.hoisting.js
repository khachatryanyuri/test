console.log(sum(1, 2));// 3

function sum(a, b) {
    return a+b

console.log(sum(1, 2));// 3    
}

//===============================

console.log(i) // undefined
var i = 42
console.log(i) // 42

//===============================

//console.log(num) // ReferenceError: Cannot access 'num' before initialization
const num = 42
console.log(num) // 42

//console.log(num) // ReferenceError: Cannot access 'num' before initialization
let num1 = 42
console.log(num1) // 42

//function Declaration
//при Declaration можно вызвать функцию до и после объявления 
console.log(square(5))
function square(num) {
    return num ** 2
}

//function Expression
//при Expression можно вызвать функцию только после объявления

const square1 = function(num) {
    return num ** 2
}

console.log(square1(5))





