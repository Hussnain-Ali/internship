// let arr = [1, 2, 3, 4];
// let res = arr.__proto__
// console.log(res)

// let arr1 = String.prototype;
// console.log(arr1)

// // const cat = "blue eyes";
// // let catty = cat.grumpus()

// Array.prototype.pop = function () {
//     return 'sorry i want hehfkekf dihsh skfhs ksfhv'
// }
// console.log(arr.pop());



// function Pet(name, species) {
//     this.name = name;
//     this.species = species;
// }
// function view() {
//     return this.name + " is a " + this.species + "!";
// }
// Pet.prototype.view = view;
// var pet1 = new Pet('Gabriella', 'Dog');
// alert(pet1.view()); //Outputs "Gabriella is a Dog!"

//////////////factory function in javascript///\
// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     }
//     color.hex = function () {
//         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color
// }
// const firstColor = makeColor(35, 255, 150)


// function createRobot(name, age) {
//     return {
//         name: name,
//         age: age,
//         talk: function () {
//             console.log('my name is ' + `${name}` + ' and age is ' + age);
//         }
//     }
// }
// const robot1 = createRobot('sgs', 23);
// robot1.talk()
// const robot2 = createRobot('chitsgsti', 24);
// robot2.talk()
// const robot3 = createRobot('chitssfti', 25);
// robot3.talk()
// const robot4 = createRobot('chisstti', 26);
// robot4.talk()


/////////////constructor function in javascript////

// function Person(name, age, eyeColor, info) {
//     this.name = name,
//         this.age = age;
//     this.eyeColor = eyeColor;
//     this.info = function () {
//         console.log("Name is " + name + " His age is " + age + " and eye color is " + eyeColor)
//     }

// }

// const myfather = new Person('hussnain', 25, 'blue')
// myfather.info();

////////////classes in javascript /////////


// class Std {
//     constructor(name, age, eyeColor) {
//         this.name = name,
//             this.age = age,
//             this.eyeColor = eyeColor
//     }
// }

// class std2 extends Std {
//     func = function (age, name, eyeColor) {
//         console.log(age + name + eyeColor)
//     }
// }
// let std1 = new std2('hussnain', 23, 'blue')
// console.log(std1.func())





// find maximun in the array///


// function largest(array) {
//     let max = array[0]
//     let min = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }

//         // if the current element is smaller than the minimum found so far
//         else if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return console.log(max), console.log(min)
// }
// largest([1, 33, 2, 3, 4])


// function largest1(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let J = 1; J < array.length; J++) {
//             if (array[i] < array[J]) {
//                 return array[i] = array[J]
//             }
//             else if (array[i] > array[J]) { array[i] }
//         }

//     }
//     return array[i]
// }

// console.log(largest1([22, 3, 45, 21]))

// function person(name, age, height) {
//     this.name = name,
//         this.age = age,
//         this.height = height,

//         this.filter = function (array) {
//             let max = array[0];
//             let min = array[0];
//             for (let i = 0; i < array.length; i++) {
//                 if (array[i] > max) {
//                     max = array[i]
//                 }
//                 else if (array[i] < min) {
//                     min = array[i]
//                 }
//             }
//             return console.log(max)

//         }
// }

// const max = new person('hussnain', 25, 6.5)
// max.filter([1, 3, 55, 66, 44, 33])



// function person(name, age, height) {
//     this.name = name,
//         this.age = age,
//         this.height = height
// }
// person.prototype.getName = function () {
//     return "name is " + this.name;
// }
// let father = new person('hussnain', 25, 6)

// console.log(father.getName())





/////////////////////////////prototype inheritence/////////
////in javascript inheritence is achieve by using prototype//

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// Person.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastName
// }
// let fulname = new Person('hussnain', 'ali')
// let fulName = fulname.getFullName();
// console.log(fulName)

// class Animals {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} run with speed ${this.speed}`)

//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still.`);
//     }
// }
// let animal = new Animals('Murga');
// animal.run('23km')

// animal.stop()



// function Person(fName, lName) {
//     this.fName = fName;
//     this.lName = lName;

// }

// Person.prototype.getFullName = function () {
//     return this.fName + " " + this.lName;
// }

// function Student(fName, lName, school, grade) {
//     Person.call(this, fName, lName);
//     this.school = school;
//     this.grade = grade;
// }

// Student.prototype = new Person()
// Student.prototype.constructor = Student;

// var std = new Student('hussnain', 'ali', 'govt', 3.01);


// alert(std.getFullName())
// alert(std instanceof Student)
// alert(std instanceof Person)


////what to do if we want to add some new properties in //
////a function on some later stage ,,,this will be done by prototypes//

// function Student() {
//     this.name = 'hussnain';
//     this.age = 25;
// }
// Student.prototype.class = 'bsit';
// Student.prototype.fname = 'nazir ahmad';


// var obj2 = new Student();
// console.log(alert(obj2.fname));


// function Person(fName, lName) {
//     this.fName = fName;
//     this.lName = lName;

// }

// Person.prototype.color = function (color) {
//     return document.querySelector('h1').style.color = color;
// }
// function Student(fName, lName, school, city, age) {
//     Person.call(this, fName, lName);

//     this.School = school;
//     this.City = city;
//     this.Age = age;

// }

// Student.prototype = new Person();
// Student.prototype.constructor = Student

// const std = new Student('husnain', 'ali', 'skp', 23)
// console.log(std.Age)
// console.log(std.City)
// console.log(std.School)
// console.log(std.color('red'))



//////////// consider a objecrt have properties like ////
// let obj = {
//     name: "hussnain",
//     age: 25
// }
// let obj2 = {
//     name: "ali",
// }
// function func() {
//     console.log('hussnain ali')
// }
// let array = [1, 2, , 3, 4]

// obj2.__proto__ = obj
// console.log(obj2.age)


class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
}

const red = new Color(255, 255, 255)

console.log(red.innerRGB())