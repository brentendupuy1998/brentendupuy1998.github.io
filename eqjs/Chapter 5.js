// Use the reduce method in combination with the concat method to “flatten” an 
//array of arrays into a single array that has all the elements of the input arrays.
var myArray = [[1, 2, 3], [4, 5], [6]];
// Your code here.

var flattenArray = myArray.reduce(function(array,flat){
   return array.concat(flat);
  }, []);


console.log(flattenArray);

//Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

//Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.

function average(array) {
  function plus(a, b) {
      return a + b;
  }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

// → 31.2

//When we looked up all the people in our data set that lived more than 90 years, 
//only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

// Compute and output the average age of the people in the ancestry data set per century. 
// A person is assigned to a century by taking their year of death, dividing it by 100, and 
// rounding it up, as in Math.ceil(person.died / 100).

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

// Arrays also come with the standard methods every and some. 
// Both take a predicate function that, when called with an array element as argument, 
// returns true or false. Just like && returns a true value only when the expressions on both sides are true,
// every returns true only when the predicate returns true for all elements of the array. 
// Similarly, some returns true as soon as the predicate returns true for any of the elements. 
// They do not process more elements than necessary—for example, if some finds that the predicate holds for the first element of the array, 
// it will not look at the values after that.

//Write two functions, every and some, that behave like these methods, except that they take the a
// array as their first argument rather than being a method.

function every(array,element) {
    for(var i = 0; i < array.length; i++) {
        if(!element(array[i])) { 
          return false
        }     
    }
    return true
}

function some(array, element) {
    for(var i = 0; i < array.length; i++) {
        if(element(array[i])) {
          return true
        }  
    }
    return false
}