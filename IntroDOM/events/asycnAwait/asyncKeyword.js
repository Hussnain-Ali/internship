// async function print() {
//     return Error('hello is not definded')
// }
// print();

// async function myFunction() {
//     return "hello";
// }
// myFunction().then(
//     function (value) { myDisplayer(value) },
//     function (error) { myDisplayer(error) }
// )
// console.log(myFunction())


///////////////login example of async function ///////


// const login = async (usrname, password) => {
//     if (!usrname || !password) { throw 'missing Credential' }
//     if (password === 'admin123') { return 'welcome sir' }
//     throw ' invalid password'
// }

// login('admin123', 'admin123')
//     .then(msg => {
//         console.log('logged in')
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log(Error)
//         console.log(err)
//     })

// function highOrder(data) {

//     data()

// }



// function callback() {

//     console.log("this is callback");

// }



// highOrder();


// function funct() {
//     console.log('hell1')
// }

// function funct2() {
//     console.log('shahiwwq')
// }
// function funct3h(sum) {
//     sum(3, 4)
//     console.log('shahiwwqasd')
// }
// function sumNum(a, b) {
//     console.log(a + b);
// }

// funct(funct2(funct3h(sumNum)))



// const delayedColor = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//         reject(() => {
//             return Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'black';
//                     resolve()
//                 }, 1000)
//             })
//         })
//     })
// }


// async function rainbow() {
//     await delayedColor('red', 1000)
//     await delayedColor('orange', 1000)
//     await delayedColor('pink', 1000)
//     await delayedColor('purple', 1000)
// }

// console.log(rainbow());

//     setTimeout(() => {
//         console.log("je")
//     }, 1000);

// }




// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
// }

// asyncCall();



// function func(color, delay) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay);
//     });
// }

// async function login() {
//     func('red', 2000);
//     func('orange', 2000);
//     func('black', 2000);
//     func('purple', 2000);

// }

// login();


// const posts = [
//     { title: "post1", body: 'this is first post1' },
//     { title: "post2", body: 'this is second post2' }
// ]


// function getPost() {
//     setTimeout(() => {
//         let ouput = '';
//         posts.forEach((post, index) => {
//             ouput += `<li> ${post.title}</li>`
//         });
//     }, 2000)
// }
// getPost()

// function promise() {
//     new Promise((resolve, reject) => {
//         let str = 'shahq';
//         if (str == 'shahiq') {
//             posts.forEach(post => {
//                 document.body.innerHTML += `<li>${post.title}</li>`
//                 document.body.style.backgroundColor = 'red'
//                 resolve();
//             });

//         } else {
//             posts.forEach(post => {
//                 document.body.innerHTML += `<li>${post.body}`;

//                 document.body.style.backgroundColor = 'pink';
//                 reject();
//             })

//         }
//     })
// }

// promise.then(() => {
//     console.log('this is in the then')
// }).catch()
// console.log('this is for reject state')

// async function practice() {
//     setTimeout(() => {
//         console.log('check post title');

//     }, 2000)
//     const details = await promise()

// }
// practice()












//////////////////////////async await//////

// const url = 'https://github.com/MamtaW/ToDooApp/blob/master/todos1'
// fetch(url).then((res) => {
//     return res.json();

// }).then((data) => {
//     console.log(data);
// })
//     .catch((err) => {
//         console.log(Error)
//     })



/////async function return a promise//////
// async function func() {
//     console.log('inside calling func')
//     const response = await fetch(`https://jsonpLaceholder.typicode.com/todos/1 `)
//     console.log('before response')
//     const users = await response.json()
//     console.log('users resolved')
//     return users;

// }

// let a = func()
// console.log(a)
// a.then(data => console.log(data))



// function func() {
//     return new Promise((resolve, reject) => {
//         if (2 === 2) {
//             document.body.style.backgroundColor = 'red';
//             resolve()
//         } else {
//             reject('not done!')
//         }
//     })
// }

// func()







/////////////////// details of async function //////////

///async ensure that the function return a promise,and wrap non-promise inn it?
// async function func() {
//     return Promise.resolve('return a promise');
// }

// func().then('helo')


///////////////now use of await function in async function it only work in async function///

// async function func() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve('done')
//         }, 4000)
//     })
//     let result = await promise;
//     console.log(result)
// }
// func()

///////await is only used in async function..not in regular function//


// async function showData() {
//     let response = await fetch('https://jsonpLaceholder.typicode.com/todos/1');
//     let user = await response.json();
//     await new Promise((resolve, reject) => setTimeout(resolve, 2000))
//     return user;
// }

// showData();



//////mordern browser allow top level await in module///////

// async function func() {
//     response = await fetch('https://jsonpLaceholder.typicode.com/todos/1').then('solve');
//     let user = await response.json();
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             return resolve(('solve'))
//         }, 1000)
//         console.log(user);
//     })
// }
// func().then(() => {
//     return 'shahiq'
// }).catch(() => {
//     return 'catch'
// });

// async function demo() {
//     let response = await fetch('https://jsonpLaceholder.typicode.com/todos/1');
//     console.log(response)

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//             console.log('inside then')
//         }, 2000);

//         console.log('outside')
//     })
// }
// demo().then(() => {
//     console.log('then statement')
// }).catch(() => {
//     console.log('catch statement')
// })


//////////fetching the specific property////

// const func = async () => {
//     let response = await fetch('https://jsonpLaceholder.typicode.com/todos/1')
//     let user = await response.json()
//     console.log(user.title)


// }

// func()
// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'lightBlue';
//             resolve()
//         }, 3000);
//     })
// }
// async function func() {
//     await login();
//     setTimeout(() => {
//         console.log('hussnain')
//     }, 2000);
// }
// func()

// function add() {

//     return new Promise((resolve, reject) => {
//         if (100 > 4) {
//             setTimeout(() => {
//                 resolve("thos is resolve");

//             }, 2000);
//         } else {
//             reject({ name: "reject", message: "this is rejected by Hussnain Ali " });

//         }

//     });



// }

// async function func() {
//     let sinc = await add();
//     console.log(sinc)
//     console.log("hello")
// }
// func()
// // add().then((res) => {
// //     console.log(res)
// // })




// async function hello() {
//     return new Promise((resolve, reject) => {
//         if (10 === 10) {
//             console.log('resolve')

//         } else {
//             console.log(reject);
//         }
//     })


// }

// hello().then(() => {
//     console.log('this is resolve')
// }).catch(() => {
//     console.log('this is reject')
// })


function func() {
    return new Promise((resolve, reject) => {
        if (resolve) {
            resolve('resolved')
        }
        else {
            reject('reject')
        }
    })
}

async function hello() {
    func().then(() => {
        console.log('hamza');
    }).catch(() => {
        console.log('munna')
    })
}
hello()
