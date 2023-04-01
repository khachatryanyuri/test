// let

let a = "variable a"
let b = "variable b"

{
    a = "new variable a"
    let b = "Local variable b"
    console.log("Scope A:", a)//Scope A: new variable a
    console.log("Scope A:", b)//Scope A: Local variable b
}

console.log("A:", a)//A: new variable a
console.log("B:", b)//B: variable b


// const

const PORT = 8000
//PORT = 5000 //TypeError: Assignment to constant variable.
const arr = ['Javascript', 'is', 'Awesome']
arr.push = ('!')
arr[0] = "JS"       
console.log(...arr)

const obj = {}
obj.name = "Yuri"
obj.age = 23

console.log(obj)
