// ///high order function are functions that take one or more functions as a parameter//////
// //////example without higher order///

// ////lets increase array each element by one///
 
// // const number = [1, 2, 3, 4, 3, 5]
// // function addOne(array) {
// //     for (let i = 0; i < array.length; i++){
// //         console.log(array[i] + 1);
// //     }
// // }
// // addOne(number)


// /////////using foreach high order function/////

// // const numbers = [1, 2, 3, 4, 5]
// // numbers.forEach(number => {
// //     console.log(number+1)
// // })



// // ///////////without highorder function create an array of odd number////////


// // // const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // // function isOdd(array,oddArray=[]) {
// // //     for (let i = 0; i < array.length; i++){
// // //         if (array[i] % 2 != 0) {
// // //             oddArray.push(array[i])
            
// // //         }
// // //     }
// // //     return oddArray;
// // // }
// // // console.log(isOdd(number))


// // ///////using high order function filter////

// // const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // const oddArray = number.filter(number => number % 2 !== 0);
// // console.log(oddArray)






// ///////////higher order function map/////
// // var array = [1, 2, 3, 4, 5]
// // var arrdoubled = array.map(num => {
// //     return num*2
// // })
// // console.log(arrdoubled)



// /////////////some function in //////////////


// // let array = [1, 2, 3, 4, 5];
// // var check = array.some(number => number > 3);


function check(array) {
    let newarr = [];
    for (let i = 0; i < array.length; i++) {
        // newarr.push((array[i]))
        if (array[i]> 3) {
        return true;
    }
    }
    return false;
    
}
console.log(check([3,3,2,7,1]))
  



