// activity 01
// 01

function numbercheck(number) {

   if (number % 2 === 0) {
    console.log("number is even");
    
   }
   else{
    console.log("number is odd");
   }
    
}

numbercheck(983)


// 02

let squareroot = function sqauarnumber(number) {
    
        number *= number
        return  number

}
console.log(squareroot(6));



// activity 02

// 01


function findMax(number1,number2) {
   return number1 > number2 ? number1 :number2

    
}

console.log(findMax(68,87));



// 02

function concate(name1 ,name2) {
    return name1+name2
    
}

console.log(concate("muhammad","farhan"));






// activity 03

// 01

let sum = (a,b)=>a+b
console.log(sum(2,8))


// 02

let checkString = (id,nam)=>  id === "0123" ||  nam === "farhan" ? true:false


console.log(checkString("0123","farhan"));


// activity 04
// 01

let product = (id,proName="keela")=>`your${id} and your ${proName}`
console.log(product(11));


// 02

// let newname = function newfunction(name){
//     // console.log("farhan");
//     return name
// }

// function addNumber(a , b) {
//     for (let i = 1; i <= b; i++) {
//         // a()
//         console.log(a("jawad"));
        
//     }
    

// }
// addNumber(newfunction(),10)
// // addNumber(newname, 5)




// const repeatFunction = (func, times) => {
//     for (let i = 0; i < times; i++) {
//         func();
//     }
// };
// // Example usage:
// const sayHello = () => {
//     console.log("Hello!");
// };
// repeatFunction(sayHello, 3);









let name5 = function newfunction(name,b){
    console.log(b(name));
    return `${name} is 19 year old`

}
let name6 = function newfunction(name){
    // console.log("farhan");
    return name
}


function addNumber(a , b ,c) {
    for (let i = 1; i <= c; i++) {
        // a()

        // console.log(a("jawad"));
        
    }
    console.log(a("Muhammad jawad" , b))
    

}
addNumber(name5,name6,10)


