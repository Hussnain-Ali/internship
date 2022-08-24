////////object literal means defining a object ///

// const obj = {
//     radius: 31.4,
//     location: {
//         x: 1,
//         y: 2,
//     },
//     count: function () {
//         return this.radius * this.location.y
//     }
// }
// const obj2 = {
//     radius: 31.4,
//     location: {
//         x: 1,
//         y: 2,
//     },
//     count: function () {
//         return this.radius * this.location.y
//     }
// }
// let a = obj2.count()
// let a1 = obj.count()
// console.log(a1)

//////////////to overcome these situation where we have multiple objects
////////////// with the same value and methods we use factory functions
//////////////and constructor functions for example
//////////////////////////factory functions//////

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log(radius * 2)
//         }
//     };
// }

// const circle = createCircle(1)
// circle.draw();

///////////////////constructor function in javascript/////
/////////here "this" is the reference to the  object that is executing
///////by default this is pointing to the global object////
///////but here this is pointing to the circle object///


// class CreateCircle {
//     constructor(radius, diameter, draw) {
//         this.radius = radius,
//             this.diameter = diameter,
//             this.draw = function () {
//                 console.log(radius * diameter)
//             }
//     }
// }

// const circle = new CreateCircle(2, 3)


// circle.draw()

// let array = [1, 2, 3, 4, 4, 5];
// let arr = array.map(m => m)
// console.log(arr)

// function circle(radius) {
//     this.radius = radius,
//         this.draw = function () {
//             console.log('drea')
//         }
// }

// const cir = new circle(1);
// console.log(circle.call({}, 1))
// cir.draw()


/////////////abstraction in javascript/////////

// function circle(radius) {
//     this.radius = radius,
//         this.computeOptimumLocation = function () {

//         }

//     this.draw = function () {
//         this.computeOptimumLocation();
//         console.log('draw')
//     }
// }
// const circle1 = new circle(3);
// circle1.computeOptimumLocation()
// circle1.draw()