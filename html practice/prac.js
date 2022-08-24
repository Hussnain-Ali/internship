// let array = [2, 33, 44, 66, 88, 54, 45, 56, 65];
// let remainder = 0;
// for (let i = 0; i <= array.length; ++i){
//    if (array[i] % 2 == 0){
//        remainder = array[i]
// console.log(remainder)

//     }

// }
/////////////boolean or not////////
// let isLogin = false;
// let number = 7;
// function check() {
//     if (number % 2 === 0) {
//         return Boolean
//     }
// }
// console.log(check())
///////////String practice//////
// let price = 3.5;
// let qty = 5;
// let totalPrice = 3.5 * 5;
// console.log("You have Bought"+' '+ qty+"products with price"+":"+price+"So Your total price is"+":"+totalPrice)

// let userInput = prompt("please enter a number")
// console.log(userInput)



///////write a javascript program to display the current day and time /

// let array = 2;
// switch (array) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log('Eid day')
// }

// let date = Date();
// console.log(date)


///write a javascript program to print the contetn of current window////

// function printContentPage() {
//     window.print();
// }
// console.log(printContentPage())


// let a = 3;
// let b = 3;
// let sum = a + b;
// if (a === b) {
//     sum = sum * sum * sum;
// }
// console.log(sum)

///write a javascript program to check wether a given integers is within 20 of 100 or 400////

// function check(num) {
//     return (400 - num) <= 20 ? "true" : (100 - 90) <= 20 ? "true" : "false"
// }
// console.log(check(90))

////////////////////////
//write a javascript program to check to given number and return true if the
// number is 50 or if their sum is 50


// function check(a, b) {
//     let sum = a + b;
//     return a == 50 ? "true" : b == 50 ? 'true' : sum == 50 ? 'true' : ' false'
// }
// console.log(check(50, 30))

////program to add "Py" in front of a given string. if the given string begins
// with the 'Py" then return as it is

function checkString(str) {
    if (str[0] === 'P' && str[1] == 'y') {
        return str;
    }
    else {
        const replace = str.replace(str[0], 'P').replace(str[1], 'y');
        console.log(replace)
    }
}
checkString('shahiq')
