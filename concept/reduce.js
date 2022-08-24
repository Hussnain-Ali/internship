// let array = [1, 2, 3, 4, 5];
// let total=array.reduce((sum, num) =>  sum +num)
// console.log(total)

//////////////find max adn minimum value using reduce method/////

// let array = [34, 32, 34, 3211, 2343, 3434, 432]   //first call     //second call  //3rd call
// let minprice = array.reduce((min, price) => {  // (34,32)         //(34,34)       (34,3211)
//     if (price > min) {          //(32>34)false;                   //34>34;fasle    (3211>43) true
//         return price;
//     }
//     return min;                 //return 34                      return 34
// })
// console.log(minprice)

 
// let array = [1,2,3,4];
// let total=array.reduce((sum, num,h) => {
//     return num
// })

// console.log(array.find((a) =>a>2))
// console.log(array.filter((a) =>a>2))
////////////////////////////////


/////////////////////////this keyword with arrow functions//////////

// const person = {
//     firstName: 'hussnain',
//     lastname: 'ali',
//     fullName: function () {
//          return `${this.firstName} ${this.lastname}`
//      }
// }

// console.log(person.fullName())

