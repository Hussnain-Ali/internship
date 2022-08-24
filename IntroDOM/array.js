////////chehck is array or not/////

// function checkArray(input) {
//     if (toString.call(input) === "[object Array]")
//         return true;

//     return false;

// }
// console.log(checkArray("1"))
// console.log(checkArray([1]))
/////////////////////////////clonign of array /////////

///slice method is use to clone the array element
// //it will take two(start,end) not index it work on elements
// //it return the value that are between the start value and the end value//
// //it does not change the original array and return the new array


// let cloning = input => input.slice(1, 3);
// console.log(cloning([1, 2, 3, 4, [2, 4]]))

//////////////

// let x = [1, 2, 3, 4, 4, 4, 55, 1, 1, 1, 413, 43, , , 1]
// let y = x.map(i => i)
// console.log(y)

///////////////////return first element in the array with 'n' parameter
// function parameter(array, n) {
//     if (n === null)
//         return array[0];
//     if (array === null)
//         return void 0;
//     if (n < 0)
//         return [];
//     return array.slice(0, n)
// }
// console.log(parameter([1, 2, 3], 2))

// function parameter(array, n) {
//     if (n === null)
//         return array[array.length - 1];
//     if (array === null)
//         return void 0;

//     return array.slice(Math.max(array.length - n, 0))
// }
// console.log(parameter([1, 2, 3], 2))
////
//
//
/////////////////////write a javascript program to join all element in the array//////


// let array = ['red', 'green', 'white', 'black'];
// console.log(array.join(',').toUpperCase())



/////write a javascript program that accept a number a
///put dashed (-) between two even number///


///////////////sorting an array//////
// var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// console.log(arr1.sort())


////manually sorting of and array////

// var array = [1, 2, 56, 3, 6, 8, 4]
// let temp = []
// for (var i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] < array[j]) {
//             temp = array[i];
//             array[i] = array[j]
//             array[j] = temp
//         }
//     }

// }
// console.log(array)


// const container = document.querySelector('#container');
// const baseURL = 'https://gith/sprites'

// for (let i = 1; i < 100; i++) {
//     const newImg = document.createElement('img')
//     newImg.src = `${baseURL}${i}.png`
//     container.appendChild(newImg)
// }

