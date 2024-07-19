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
console.log(product(11 ));