// activity 01

// 01

let a = [1,2,3,4,5]
console.log(a);




// 02

let b = [1,2,3,4,5]
console.log(a[0]); // first element in array
console.log(a[a.length - 1]);// last element in array



// activity 02

// 01

a.push(6)
console.log(a);// [1,2,3,4,5,6]


// 02
b.pop()
console.log(b);//[1,2,3,4]




// 03

a.shift()
console.log(a);//[2,3,4,5,6]


// 04

b.unshift('first')
console.log(b)//[first,1,2,3,4];





// activity 03


// 01

let number = [1,2,3,4,5]

number.map((element)=>{
    number = element*2
    console.log(number);
})


// 02

let evennumber = [1,2,3,4,5,6]

even = []
evennumber.filter((element)=>{
element % 2 == 0 ?even.push(element):console.log("ADDNUMBER");})
console.log(even);//[2,4,6]



// 03

let sumnumber =[1,2,3,4,5]
sum = sumnumber.reduce((elem,p)=>{
    return elem + p
})
console.log(sum);





// activity 04


// 01

for (let i = 0; i < sumnumber.length; i++) {
    console.log(sumnumber[i]);
    
}


// 02

sumnumber.forEach((elem)=>{
     console.log(elem);
})



// activity 05

// 01

let dimarray =[
    [1,2,3]
    ,[4,5,6]
]

for (let i = 0; i < dimarray.length; i++) {
    
    console.log(dimarray[i]);
}



// 02

console.log(dimarray[1][2]);


