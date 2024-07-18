// activity 01

// 01

for (let i = 0; i <= 10; i++) {
console.log(i);    
}



// 02

for (let i = 1; i <= 10; i++) {
console.log(`5 * ${i} = ${5*i}`);    
}



// Activity 02


// 01

let a = 1
let b = 11
while (a<=10) {
    b += a
    a++}
    console.log(b);   
    




// 02


b = 11

while (b>=1) {

    b--
    
    
    console.log(b);
}


// activiti 03
console.log("activity 03");
// 01

let na = 1

do {
    console.log(na);
    na++
    
} while (na<=5);



// 02

number = 5

function any(a){
    let res = 1
do {
    res *= a
    a--
    
} while (a > 0);

return res



}
console.log(any(number));

// fuctorial number wo nnmber he jo apne number se nechy sare number se muntiplue ho.

// For number = 5, the factorial is 5! = 5 * 4 * 3 * 2 * 1.
// The loop will run as follows:
// result = 1 * 5 (i = 4)
// result = 5 * 4 (i = 3)
// result = 20 * 3 (i = 2)
// result = 60 * 2 (i = 1)
// result = 120 * 1 (i = 0, loop ends)
// The final result, 120, is returned and printed.







// activity 04

// 01

// let has = "*"

// for (let i = 10; i > 10; i--) {
//     let has=""
//     for (let j = 0; j < i; j++) {
        
//         has+="*"
//     }
//     console.log(has);
//     console.log("gab");
// }


for (let i = 10; i > 0; i--) {
    let has = "";
    for (let j = 0; j < i; j++) {
        has += "*";
    }
    console.log(has);
    // console.log("gab");
}


