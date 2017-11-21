/** Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var arr = [1,2,3,4,5,6,7];
var hashTag = "#";
    for (var i = 0; i < arr.length; i++) {
     console.log(hashTag.repeat(arr[i]));
     }
     
/** Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead.
*/

for (var i = 1; i <= 100; i++) {
    var f = i % 3 === 0, b = i % 5 === 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

/** Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. 
The characters should form a chess board.
*/
