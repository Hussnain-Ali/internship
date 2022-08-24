

// let input = prompt("what would you like todo")
// while (input !== "quit") {
//     input=prompt("what would you like to do?")
// }
// console.log("Ok Quit the app")


///////////functions//////////

// function rolldie(dienum) {
//     var randomNumber=Math.floor(Math.random()*dienum)+1
//     console.log(randomNumber)
// }
// rolldie(123)


// function check(str, number) {
//     let result = ' ';
//     for (let i = 0; i < number; i++){
//         result += str;
//     }
//     console.log(result)
// }
// check("hello",4)

// function isSnakeEyes(die1, die2) {
//     var random1 = Math.floor(Math.random() * die1) + 1
//     var random2 = Math.floor(Math.random() * die2) + 1
//     if (random1 ===  random2 ) {
//         console.log('snake eyeys')
//     }
//     else {
//         console.log("not snake eyes")
//         console.log(random1+"  "+random2)
//     }
// }
// isSnakeEyes(6,6)

////////////////return keyword in function//////


// function sum(a, b) {
//     return a + b;
// }
// sum((3,4),8)

///////////////return array single last element/////las
// function lastElement(array) {
//     if (array !== null) {
//         let lastEle = array[array.length - 1];
//         return lastEle[array];
//     } else if (array === null) {
//         return [];
//     }
// }
// console.log(lastElement([1, 2, 3, 4]));
// let array = [1, 2, 3, 5,3]
// let array1 = array[array.length - 1]
// console.log(array1)
//     // DEFINE YOUR FUNCTION BELOW:

// function capitalize(str){
//     return str.toUpperCase() + str.slice(1);
// }
// function lastElemesnt(arr){
//     if(arr === [])
//        console.log("empty");
        
//      if(arr!==[])
//               console.log("empty1");
   
// }
// // console.log(lastElement[1, 2, 3])
// var a
// // console.log(a)
// // console.log(a)
// function lastElement(arr) {
//     if (arr.length === 0) {
//         return null
//     } else {
//         return (arr[arr.length-1])
//     }
// }
// console.log(lastElement([]))
 


// function capitalize(str) {
//     return str.charAt(0).toUpperCase()+str.slice(1)
    
// }
// console.log(capitalize("elephent"))
// function sumArray(arraySum) {
//     let sum = 0;
//     for (let i = 0; i < arraySum.length; i++){
//         sum +=arraySum[i]
//     }
//     return sum;
// }
// console.log(sumArray([1,2,3,4,5]))

function chek() {
    var s='hello hussnain'
}
console.log(s)