// let random1 = Math.floor(Math.random() * 100);
// let random2 = Math.floor(Math.random() * 100);
// let random3 = Math.floor(Math.random() * 100);
// let random4 = Math.floor(Math.random() * 100);

// let array = [random1, random2, random4, random3]
// let sum = 0;
// function show() {
//     console.log(array)
//     return sum = array.reduce((a, b) => {
//         return a + b;
//     })
// }
// const array2 = array.map((d) => {
//     console.log(d)
// })
// console.log(show())

import React, { useState } from 'react';

function SimpleJs(props) {
    const [counter, setCounter] = useState(1)
    setCounter(counter + 1)
    return (
        <div>
            <h1>hellow{setCounter}</h1>
        </div>
    );
}

export default SimpleJs;