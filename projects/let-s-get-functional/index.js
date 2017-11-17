// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-brentendupuy1998');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 * 
 * 4. To test your work, run the following command in your terminal:
 * 
 *    npm start --prefix ./projects/let-s-get-functional
 */
// MaleCount
var maleCount = function(customers) {
    var arr;
    arr = _.filter(customers, function(customer, index, collection) {
        if (customer.gender === "male") {
            return true;
        }
    });
    return arr.length;
};


//Female Count
var femaleCount = function(customers) {
    return _.reduce(customers, function(previousResult, customer, index) {
        if (customer.gender === "female") {
            return previousResult + 1;
        } else {
            return previousResult;
        }
    }, 0);
    
};
var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
