// document.querySelector('.click').innerHTML = Date();







// document.querySelector('h1').style.color = 'red';


// let array1 = [1, 2, 3, 4];
// let array2 = [...array1]
// console.log(array2)
// array1 = [1, 2, 3, 4, 5]
// console.log(array1)


// let array11 = [1, 2, 3, 4, 5]
// let array22 = array11;
// array11[5] = 6;
// console.log(array22)
// array22[7] = 7;
// console.log(array22)
// console.log(array11)

// let array33 = [...array11]
// console.log(array33);
// if (array11 === array22) {
//     console.log('true')
// } else { console.log('fsle') }


// const obj = {
//     name: 'hussnain',
//     age: 25
// }


// const obj1 = obj;
// obj1.age = 35;
// console.log(obj.age)
// console.log(obj1.age)
// if (obj == obj1) {
//     console.log('true');

// } else {
//     console.log('fsle')
// }


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('imran khan !')
})
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${b},${g})`
}

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', () => {
        button.style.backgroundColor = randomColor();
    })
};




// const button = document.querySelector('button');
// button.addEventListener(setInterval(() => {

//     document.body.style.backgroundColor = randomColor()
// }, 2000))


///////////////////multidimensional arrays in js////////

////// two dimensional array in javascript/////////

// let array = [1, 2, 3, 4]
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     let sqr = array[i] ** 2;
//     sum += sqr;

// }
// console.log(sum)




////////////////create a new array using a map function whose each element is equal to the original array plus 4/////


// let array = [1, 2, 3, 4, 5]

// const newArray = array.map((x) => x + 4
// )
// console.log(newArray)

////from the array of numbers,choose even double even numbers and compute the sum using arrays filter map and reduce method///

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array1 = array.filter(x => x % 2 === 0).map(x => x * 2).reduce((prious, next) => prious + next)
// console.log(array1)7



////////create a new array whose element is in uppercase of words present in the original array

// let strings = ["avengers", "captain america", "ironman", "black panther"];

// let upper = strings.map(up => up.toUpperCase())
// console.log(upper)


////// use the map method to return a new array of heros
///rename the name key to heros
//should have a new key called id
//id is equal to index of key//


// const heros = [{ name: 'hussnain' }, { name: 'shahiq' }, { name: 'faizan tidda' }, { name: 'usman' }]
// let arr = heros.map((hero, index) => {
//     return { id: index, hero: hero.name }
// })

// console.log(arr)


/////// array containig number//////
///array of odd number //
//array of number divisible by 2,5
///divisible by 3 and then sqr of those number
//sum of follwing sqaure the number divisilbe by 5




// let array = [1, 2, 3, 4, 5, 6, 67, 8, 9, 10, 5, 6, 54, 54, 15, 68, 20, 55, 85, 45];

// let array2 = array.filter(odd => odd % 2 !== 0)
// let div2And5 = array.filter(div => ((div % 2 === 0) || (div % 5 === 0)))
// let divBy3 = array.filter(div3 => (div3 % 3 === 0))
// let mapping = divBy3.map(sqr => sqr ** 2)
// let reducing = array.filter(num => num % 5 == 0).map(m => m ** 2)
//     .reduce((fst, next) => fst + next)
// console.log(reducing)


//////////////////////////consider the following array

// let nums = [11, 22, 33, 46, 75, 86, 97, 98];
// let sqaureEvensNums = nums.filter(num => num % 2 === 0)
//     .map(num => num ** 2);
// let sum = nums.reduce(function (prvs, crnt, index, array) {
//     return index, prvs + crnt, array
// }, 0)
// console.log(sum)
// console.log(sqaureEvensNums);

let listener = document.querySelector('#home');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
listener.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('li');
    newLi.innerHTML = catName;
    list.append(newLi)
    input.value = '';
});



let form = document.querySelector('#form');
let name = document.querySelector('#name');
let password = document.querySelector('#password');
let lists = document.querySelector('#list')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.elements.name.value;
    const password = form.elements.password.value;
    const newLi = document.createElement('li');
    const newLii = document.createElement('li');
    newLii.innerHTML = name;
    newLi.innerHTML = password;
    lists.append(newLii);
    lists.append(newLi)

});














