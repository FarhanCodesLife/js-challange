//activity 01

var number = 10 
console.log(number);
// answer : 10

let string = "farhan" 
console.log(string);// farhan



//activity 02

const boolean = true 
console.log(boolean);// true



// activity 03 

let age = 10
let fname = "farhan"
let muslim = true
let hobies = ["circket",'gaming','reels scroling']
let address ={
    contry:"Pakistan",
    province:"Sindh",
    city:"Karachi"
}
console.log(typeof age);// number 
console.log(typeof fname);// string
console.log(typeof muslim);// boolean
console.log(typeof hobies);// object
console.log(typeof address);//object



//activity 04

let myage = 19
console.log(myage);// 19
myage = 20
console.log(myage);// 20



//activity 05 

const myname = "Muhmmad farhan"
const myname = "farhan" // Cannot redeclare block-scoped variable 'myname'.ts(2451)

// SyntaxError: Identifier 'myname' has already been declared (at app.js:52:7)





// feature request

// 01

let a = "a"
let b = 10
let c = false 
let d = ["1","2","3"]
let e = {
    a:"1",
    b:"2",
    c:"3"}

console.log(typeof a ,a);//string a
console.log(typeof b ,b);//number 10
console.log(typeof c ,c);//boolean false
console.log(typeof d ,d);//object [1","2","3"]
console.log(typeof e ,e);//object {a:"1",b:"2",c:"3"}





// 02

let day = "friday"
day = "saturday" 
console.log(day);// saturday
// let :
// let k name k variable ko ham redeclare nhi karsakty lakin isko reassgin
// kar sakte he .



const month = "july"
const month = "july"//Cannot redeclare block-scoped variable 'month'.ts(2451)
month = "june"
console.log(month);// TypeError: Assignment to constant variable.

//  const :
//  const k name se bane variable ko ham na hi redeclare kar sakty he or na 
//  hi reassign karsakty.

