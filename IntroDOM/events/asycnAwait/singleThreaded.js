///////////////function hell in javascript//

// setTimeout(() => {
//     console.log("1")
//     setTimeout(() => {
//         console.log("2")
//         setTimeout(() => {
//             console.log("3")
//             setTimeout(() => {
//                 console.log("4")
//                 setTimeout(() => {
//                     console.log("5")
//                     setTimeout(() => {
//                         console.log("6")
//                         setTimeout(() => {
//                             console.log("7")
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// for (let i = 1; i <= 60; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 5000)
// }


///////promises/////////

// const fakeRequestPromises = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500 + 500);
//     setTimeout(() => {
//         if (delay > 3000) {
//             failure('connection tomeout')
//         } else {
//             success(`here is your fake data from ${url}`)
//         }

//     }, delay);
// }

// fakeRequestPromises('books.com', () => {
//     console.log('it worked!!!!')
// }, () => {
//     console.log("Not worked!!!!")
// })
///
///
//
//
//
//
// var promise = new Promise(function (resolve, reject) {
//     const x = "shahiq";
//     const y = "shahiw"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then(function () {
//         console.log('Success, You are a shahiq');
//         then(function () {
//             console.log('Success, You are a shahiw');
//         })
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });


/////// Magic with promises//////

// const fakeRequestPromise = ('http://google.com')
//     .then(() => {
//         console.log('shahiq shahzad')
//         return fakeRequestPromise('http://google.com')
//     })

//     .then(() => {
//         console.log('shahiq shahzad2')
//         return fakeRequestPromise('http://google.com')
//     })
//     .then(() => {
//         console.log('shahiq shahzad3')
//         return fakeRequestPromise('http://google.com')
//     })
//     .then(() => {
//         console.log('shahiq shahzad4')
//         return fakeRequestPromise('http://google.com')
//     })
//     .catch(() => {
//         console.log(Error)
//     })
// console.log(func());