//__proto__

function Cat(name, color){
    this.name = name
    this.color = color
}

Cat.prototype.voice = function(){
    console.log(`Cat ${this.name} says voise`);
}

const cat = new Cat("Bobik", "black")
console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto__);
console.log(cat.constructor);
//cat.voice()


//=====================

function Persone(){

}

Persone.prototype.legs = 2
Persone.prototype.skin = "white"

const person = new Persone()
person.name = "Bobik"

console.log("skin" in person);
console.log(person.legs);
console.log(person.name);

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('skin'));


//Object create

const proto = {year: 2019}

const myYear = Object.create(proto)

console.log(myYear.year);



