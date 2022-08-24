
////////////this is a example of promises chaining/////
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         return resolve(1)
//     }, 2000)
// }).then(function (result) {
//     alert(result)
//     return result * 2
// }).then(function (result) {
//     alert(result)
//     return result * 2
// }).then(function (result) {
//     alert(result)
//     return result + 1
// })
// console.log(promise)
///////////////////////////a promise also return a promise///

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         return resolve(1);
//     }, 2000)
// }).then(result => {
//     alert(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 2000)
//     });
// }).then(function (result) {
//     alert(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 2000)
//     });
// }).then(function (result) {
//     alert(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 2000)
//     });
// })


// console.log(promise)

///////////nested promise/////////////

// let promise = loadScript("/article/promise-chaining/one.js").then(script1 => {
//     loadScript("/article/promise-chaining/two.js").then(script2 => {
//         loadScript("/article/promise-chaining/three.js").then(script3 => {
//             // this function has access to variables script1, script2 and script3
//             one();
//             two();
//             three();
//         });
//     });
// });
// console.log(promise)

