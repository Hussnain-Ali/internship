
// // const age = prompt('enter your age')
// // if (age < 8) {
// //     console.log("you are a baby u get in for free")

// // } else if (age < 12) {
// //     console.log("you are a child. you have to pay 10$")

// // } else if (age < 40) {
// //     console.log("you are a adult .You have to pay 30$")

// // } else {
// //     console.log("this party is not for you")
// // }


// // let password = prompt('enter your password')

// // if (password.length >= 6) {
// //     if (password.indexOf(' ') === -1) {
// //     console.log("Good Job! No Space")
// // } else {
// //     console.log("password cannot contain space")
// // }
// // } else {
// //     console.log("password is too short")
// // }

// // let password = prompt("enter password");
// // if (password.length >= 6 && password.indexOf(" ") === -1) {
// //     console.log("valid password")
// // } else {
// //     console.log("incorrect password")
// // }
 
// // ////////////OR operator/////////

// // const age = -1;
// // if (age>=0 && age < 5 || age >= 65) {
// // } else if (age > 5 && age<=10 || age < 65 && age>=10) {
// //     console.log("you need to buy ticket upto 20$")
// // } else {
// //     console.log("you are not allowed")
// // }\

// // function a() {
// //     console.log('called a')
// //     return true;
// // }
// // function b() {
// //     console.log('called b')
// //     return false
// // }
// // console.log(a() && b())

// /////////logical not operator////////

// // const password = prompt('please enter your password')
// // if (!(password.length >= 6 && password.length <= 8)){
// //     console.log('please enter password greater than 6 and less than 8')
// // } else {
// //     console.log('ggod')
// // }

// //////////switch statement///////

// // var age = 30;
// // switch (true) {
// //     case ( (age >= 0 && age < 5) || age >= 65):
// //         console.log('free')
// //         break;
// //     case (age <= 20 && age >= 10):
// //         console.log('10$')
// //         break;
// //     case (age > 20 && age < 65):
// //         console.log('20$')
// //         break;
 
// //     default:
// //         console.log("not eligible")
// // }


// //////////object in javascript/////
// // let comments = {
// //     username : "hussnain ali",
// //     upVotes  : 124,
// //     downVotes: 200,
// //     netScore : 190,
// //     commentsText: 'please dont share vulgur videos',
// //     isGilded:false
// // }
// // comments.hussnain = "420";
// // console.log(comments);
// ///////////loop os js////////////



// // const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // // WRITE YOUR LOOP BELOW THIS LINE:
// // for(let i=0;i<people.length;i++){
// //     let x=people[i];
// //     console.log(x.toUpperCase())
// // }
// // for (let i = 0; i<3; i++){
// //     console.log("*")
// //     for (let j = 0; j<i; j++){
// //         console.log("*")
       
// //     }
// // }

// ////////////////////////while loop/////
// // let num = 9;
// // while (num < 10) {
// //     console.log(num)
// //     num++;
// // }


// // const secret = "taya";
// // let guess = prompt("Enter your friend name");
// // while (guess !== secret) {
// //    guess=prompt('this is not your friend name')
// // }
// // console.log("congratulations")

// // let maximum = parseInt(prompt("enter the maximum number"));
// // while (!maximum) {
// //     maximum=parseInt(prompt("enter a valid number"))
// // }

// // const targetNum = Math.floor(Math.random() * maximum) + 1;
// // console.log(targetNum);
// // let guess = parseInt(prompt("Enter your first guess"));
// // let attemps = 1;
// // while (guess !== targetNum) {
// //     attemps++;
// //     if (guess > targetNum) {
// //         guess=parseInt(prompt("Too High! Enter a new guess"))
// //     } else {
// //         guess=parseInt(prompt("Too low! Enter a new guess"))
        
// //     }
// // }
// //     console.log('You got it! in'+"  "+attemps+"attempts")


// // let array1 = [1, 2, 3,6,5]
// // let array2 = [3, 4, 5,6]
// // for (let i = 0; i < array1.length; i++){
// //     for (let j = 0; j < array2.length; j++){
// //         if (array1[i] === array2[j]) {
// //             let array3 = Array.from(String(array1[i]));
// //             console.log(array3)
            
           
// //         }
// //     }
// // }
// //



// ////////////////using includes method /////////

// // let array1 = [1, 2, 3, 3];
// // let array2 = [3, 2, 4, 5, 6];

// // function findcommon(arr1, arr2) {
// //     arr1.includes(arr2)
// // }
// // console.log(findcommon(array1,array2))
      
// //////////////////////for in loop//////


// // const subcredits =[1,2,3,4,5]
// // for (let sub in subcredits+1) {
// //     console.log(sub*sub)
// // }


// //////for in loop////


// const testScore = {
//     hussnain: 80,
//     shahiq: 70,
//     haris: 60,
//     faisal: 50,
//     salman: 40,
//     faizan: 30,
//     shams:20
// }
// for (let person in testScore) {
//     console.log(`${person} scored ${testScore[person]}`)
//     let type = typeof (person);
//     console.log(type)
// }
