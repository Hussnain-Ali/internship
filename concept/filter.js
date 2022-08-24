// let array1 = [1, 2, 3, 4, 5, 56, 600]

// let filtr =array1.filter(n => {
//     return n > 4;
// })
// console.log(filtr)


//////////////dunamic coding for filter /////


// const array1 = [1, 2, 3, 4, 5, 56, 600]
// function filtr(array, filtrArr = []) {

//     for (let i = 0; i < array.length; i++){
//         if (array[i] > 4) {
//             filtrArr.push(array[i])
//         }
//     }
//     return filtrArr;
// }
// console.log(filtr(array1))
// ////////////////////////////////find words greater than 6 letter////////



// // const words = ['asdfvdvsdf', 'asdf', 'adfdsd', 'wsx', 'sdwws', 'wef', 'defdcx'];
// // let filtr = words.filter(word => {
// //     return word.length > 5;
// // })
// // console.log(filtr)
// ///////////////////////////check is prime////////


// const array = [1, 2, 3, 4, 5, 6, 7, 89, 34, 34, 21, 435, 23];
// function isPrime(num) {
//     if (num < 2) {
//         console.log(`${num} is not a prime number `)
//     }                   //num = array elements
//     for (let i = 2; i < num; i++){          //initial value of i is 2
//         if (num % i == 0) {                  // 13/2,13/3,13/4,13/5,13/6...
//             return console.log(`${num} is not a prime number`);
//         }

//     }
//     if( num > 1){
//         console.log(`${num} is prime number`)
//         }

// }
// console.log(array.filter(isPrime).map(isPrime))

///////////////////////find digit less than 10///
// function validUserNames(usernames) {
//   // your code here
//   return usernames.filter(name=>name.length<10)
// }
// console.log(validUserNames(['fsdgvdffad', 'fadfafasf', 'afdafda', 'dfdsa']))



/////////////custom code with out using filter/////

// function validUserNames(array,newarray = []) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i].length<10) {
//         newarray.push(array[i]);
//         console.log(newarray)
//         }
//     }
//     return newarray;
    
// }
// console.log(validUserNames(['dfsafgsafa','fadfrefdafd','fdfafd']))