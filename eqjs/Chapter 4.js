/** The introduction of this book alluded 
to the following as a nice way to compute the sum of a range of numbers:

        console.log(sum(range(1, 10)));
*/

/** Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.
*/
function range(start, end, increment ) {

var range = function(start, end, step) {
    var arr = [];
    for (var i = start; step > 1 || step === undefined ? i <= end : i >= end; step ? i = i + step : i++)
        arr.push(i);
    return arr;
};

var sum = function(arr) {
    return arr.reduce(function(x, y) {
        return x + y;
    });
};
console.log(sum(range(2, 10)));

// Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. 
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements 
// in the inverse order. 
// The second, reverseArrayInPlace, does what the reverse method does: 
// it modifies the array given as argument in order to reverse its elements. 
// Neither may use the standard reverse method.

var reverseArray = function(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--)
        newArr.push(arr[i]);
    return newArr;
};

var reverseArrayInPlace = function(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
};
console.log(reverseArray(["a, b, c, d"]));