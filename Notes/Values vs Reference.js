//Use let in for loops
// Refers to an object
//Left of the dot at call time
// If nothing is to the left, it will be bound to the global object

'use strict';
// var hello = function() {
//     console.log(this);
// };

//It always has to be an object no matter what at call time

var age = 2000;

var name = {
    age: 19
};

var hello = function () {
    console.log(this.age);
};

console.log(hello());