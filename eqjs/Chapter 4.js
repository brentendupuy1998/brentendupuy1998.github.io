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

console.log(reverseArray(["1,2,3,4"]));

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, 
// and write a listToArray function that produces an array from a list. 
// Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element 
// to the front of the input list, and nth, which takes a list and a number and returns the element 
// at the given position in the list, or undefined when there is no such element.


function arrayToList(arr){
	var list = null;
	for (var i = arr.length -1; i >= 0; i--) {
		list = {value: arr[i], rest: list};
	}
	return list;
}

function listToArray(list) {
	var result = [];
	
	function listOne(list) {
		for (var prop in list) {
			if (Number.isInteger(list[prop])) {
				result.push(list[prop]);
			 } else if (typeof list[prop] === "object") {
				listOne(list[prop]);
			}
        }
		return result;
	}
	return listOne(list);
}

function prepend(element, list){
	return {
		value: element,
		rest: list
	}
}

function nth(list, num){
	if (!list) {
		return undefined;
	} if (num === 0) {
		return list.value;
	}
	return nth(list.rest, num -1);
}











// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are
// objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

var deepEqual = function (x, y) {
  if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {  
        if (! deepEqual(x[prop], y[prop]))
         return false;
      }
      else
        return false;
    }

    return true;
  }
  else if (x !== y) {
    return false;
  }
  else
    return true;
    };
}