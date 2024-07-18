// Activity 01

// 01

let number = 10

if (number > 0 ) {
    console.log("number is positive");
    
}
else if (number < 0) {
    console.log("number is nagative");
    
} else {
    console.log("number is zero");
}


// 02

let voterAge = 23

if (voterAge >= 18) {
    console.log("eligible to vote");
    
}
else{
    console.log("not eligible");
}



// Activity 02

// 01


let num1 = 10
let num2 = 30
let num3 = 20 


if (num1 > num2 && num1 > num3) {

    console.log("number 1 is greterthen");
    
}
else if (num2 > num1 && num2 > num3) {
    console.log("number 2 is greterthen");
    
} else {
    console.log("number 3 is greterthen");
    
}


// Activity 03

// 01

let day = "wednesday"

switch (day) {
    case "monday":
        console.log("monday");
        break;
        case"tuesday":
        console.log("tuseday");
        break;

         case"wednesday":
        console.log("wednesday"); 
        break;

        case"tursday":
        console.log("tursday");
        break;

         case"friday":
        console.log("friday");
        break;

        case"saturday":
        console.log("saturday");
        break;

        

    default:console.log( "enter a day name");
        break;
}




// 02


let marks = 5

switch (true) {
    case marks>90&&marks<=100:
        console.log("grade A1+");
        break;
        case marks>80&&marks<=90:
            console.log("grade A+");
            break;
            case marks>70&&marks<=80:
                console.log("grade A");
                break;
                case marks>60&&marks<=70:
                    console.log("grade b");
                    break;
                    case marks>50&&marks<=60:
                        console.log("grade c");
                        break;

                        case marks>40&&marks<=50:
                            console.log("grade d");
                            break;
        default:
        console.log("fail");

        break;
}






// Activity  04

// 01 

let num = 9

num % 2  == 0 ? console.log("number is even"):console.log("number is odd");
 



// Activity 05 


let leapyear = 2024
if (leapyear % 4 == 0 && leapyear % 100 != 0 || leapyear % 400 == 0 ) {

    console.log("this year is leap year");
    
}
else{
    console.log("this year is not leap year");

}


// Activity 06