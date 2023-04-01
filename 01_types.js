// null, undefined, boolean, number, string, onject, symbol

console.lod(typeof 0)
console.lod(typeof true)
console.lod(typeof "javascrept")
console.lod(typeof undefined)
console.lod(typeof Math)
console.lod(typeof Symbol('JS'))
console.lod(typeof null)
console.lod(typeof function() {})
console.lod(typeof NaN)

//Приведение типов

let language = "javascrept"

if(language){
    console.log("The bast language is: " + language)
}

//'', 0, null, underfined, NaN, false

console.log(Boolean("")) //false
console.log(Boolean(0)) //false
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(false)) //false 

// Строки и число

console.log(1 + "2") // string 12(для string есть оператора + по етому string)
console.log("" + 1 + 0) // string 10 (для string есть оператора + по етому string)
console.log("" - 1 + 0) // number -1 (для string нет оператора - по етому number)
console.log("8" * "3") // number 24 (для string нет оператора * по етому number)
console.log(4 + 10 + "px") //string 14px(для чисел + оператор сработал как у number)
console.log("px" + 10 + 5) //string px105( + оператор сработал как у string)
console.log('42px' - 2) //NaN
console.log(null + 2) //2
console.log(undefined + 2) //NaN

// == vs ===

console.log(2 == "2") //true
console.log(2 === "2") //false
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log('0' == false) //true
console.log('0' == 0) //true

//==================

console.log(false == "")//true
console.log(false == [])//true
console.log(false == {})//false
console.log("" == 0)//true
console.log("" == [])//true
console.log("" == {})//false
console.log(0 == [])//true
console.log(0 == {})//false
console.log(0 == null)//false






