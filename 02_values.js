//Примитивние типи: null, undefined, boolean, number, string, symbol
//Копирует данные с ячейки и добавляет в новую ячейку в раме(Ram)

let a = 42
let b = a
b++
console.log("a ",a);//42
console.log("b ",b);//43

//Не Примитивние типи: onject
//Копирует ссылку данные с ячейки и добавляет в новую ячейку в раме(Ram)

let c = [1,2,3]
let d = c
d.push(4)

let e = [1,2,3,4]

console.log("c ",c);// c  [ 1, 2, 3, 4 ]
console.log("d ",d);// d  [ 1, 2, 3, 4 ]

console.log(c === d)//true
console.log(c === e)//false


