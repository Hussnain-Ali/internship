// const req = new XMLHttpRequest();
// req.onload = function () {
//     console.log('ONLOAD!!!');
//     const data = JSON.parse(this.responseText)
//     data.name = "hussnain"
//     console.log(data)
// };
// req.onerror = function () {
//     console.log('ERROR!!!');
// };

// req.open("GET", "https://swapi.dev/api/people/1")
// req.send("POST", "https://swapi.dev/api/people/1")

//////the easy and simple way to "GET" data from api in by using Fetch method////

// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("resolves", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         return fetch('https://swapi.dev/api/people/2')
//     }).then(res => {
//         console.log("second request", res.json())
//     })

////this above example is more important by using async function///

// const func = async () => {
//     try {
//         let data = await fetch('https://swapi.dev/api/people/2')
//         let res = await data.json();
//         console.log(res.films)
//         let data2 = await fetch('https://swapi.dev/api/people/1')
//         let res2 = await data2.json();
//         console.log(res2.films)
//     } catch (expression) {
//         console.log("Errors ")
//     }
// }
// func();

// const data = fetch('https://swapi.dev/api/people/2').then(
//     console.log('hussnain')
// ).catch(
//     console.log("catch")
// )

// async function func() {
//     let res = await data;
//     let result = await res.json()
//     console.log(result.name)
// }
// func()

// ///////////using axios///////////
// let persondata = async (id) => {
//     try {
//         let res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log(res.data.name)
//     } catch (error) {
//         console.log(error)
//     }
// }

// persondata(1)
// persondata(2)
// persondata(3)
// persondata(4)


////////////////

// async function func() {
//     let res = await fetch('https://swapi.dev/api/people/1');
//     let data = await res.json()
//     console.log(data);

// }

// func()

// let data = new Promise((resolve, reject) => {
//     let data = resolve(fetch('https://swapi.dev/api/people/1'))
//     console.log(data.json())

// })
// console.log(data)

// function func() {
//     let data = fetch('https://swacpi.dev/api/people/1')
//     return data
// }
// func().then(resolve => {
//     console.log(resolve.json())

// }).catch(error => {
//     console.log('reject', error)
// })

// const array = [
//     {
//         name: "hussnain1",
//         age: 25
//     }, {
//         name: "shahiq",
//         age: 25
//     },
// ];
// const array1 = [
//     {
//         name: "hussnain",
//         age: 25
//     }, {
//         name: "shahiq",
//         age: 25
//     },
// ];


// for (let i in array) {
//     for (let j in array1) {
//         if (array[i].name == array1[j].name) {
//             console.log(array[i])
//         }
//     }
// }


////////////////find common element from three array;
// let array1 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let array2 = [2, 5, 7, 8, 11, 12];
// let array3 = [2, 3, 44, 5, 6]

// for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//         if (array1[i] === array2[j]) {
//             let data = (array1[i])
//             for (let k = 0; k < array3.length; k++) {
//                 if (data === array3[k]) {
//                     console.log(array3[k])
//                 }
//             }
//         }
//     }
// }

// //////////other method//////
// let commonFT = array1.filter(d => array2.includes(d))
// let common3th = commonFT.filter(d => array3.includes(d))
// console.log(common3th)


