function sayHelloTo(name){
    const message = "Hello " + name 
    return function(){
        console.log(message)
    }
}

const helloToElena = sayHelloTo("Elena")
console.log(helloToElena)//Возрошает функцию
helloToElena() // Hello Elena

function createFrameworkManager(){
    const fw = ["Angular", "React"]
    return{
        print: function(){
            console.log(fw)
        },
        add: function(framework){
            fw.push(framework)
        }
    }
}

const manager = createFrameworkManager()
console.log(manager)

manager.print()

manager.add("JS")

manager.print()


// SetTimeOut


const fib = [1,2,3,5,8,13]

for(let i = 0; i < fib.length; i++){
    setTimeout(function(){
        console.log(`fib[${i}] = ${fib[i]}`)
    },1500)
}

const arr = [1,2,3,5,8,13]

for(var i = 0; i < arr.length; i++){
    (function(j){
        setTimeout(function(){
            console.log(`arr[${j}] = ${arr[j]}`)
        },1500)
    })(i)    
}
