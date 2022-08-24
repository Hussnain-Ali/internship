
///////////destructuring of array//////////
// const array = [1313, 23213, 332132, 42321, 43221, 3443];
// const [hussnain, shahiq, ahmad, hassan] = array;
// console.log(hussnain)


// ////////destructuring of object//////
// const person = {
//     fname: 'hussnain',
//     age: 25,
//     email: 'hussnainali517580@gmail.com',
//     password: 'hussnain124',
//     city: 'lahore',
//     zipCode: '35577'
// }

// const {fname, age, email, ...everyone} = person;
// console.log(fname)


const myObj = {
    city: "lahore",
    greet: function () {
        console.log(`greeting from ${this.city}`)
    }
}
console.log(myObj.greet())
