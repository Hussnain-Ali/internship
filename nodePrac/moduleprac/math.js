const add = (x, y) => x + y;
const PI = 3.14159;
const sqaure = x => x * x;

const obj = {
    add: add,
    sqaure: sqaure,
    PI: PI,
}
module.exports.obj = obj;
///or write in that way//
module.exports.adds = add;
module.exports.sqaure = sqaure;
module.exports.PI = PI;

///or simply write in that way///

exports.PI = PI;
exports.sqaure = sqaure;
exports.add = add;
