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
var oldestCustomer = function(customers) {
    var customer = _.reduce(customers, function(previousResult, customer, index) {
        if (customer.age > previousResult.age) {
            return customer;
        } else return previousResult;
    });
    return customer.name;
};


var youngestCustomer = function(customers) {
    var customer = _.reduce(customers, function(previousResult, customer, index) {
        if (customer.age < previousResult.age) {
            return customer;
        } else return previousResult;
    });
    return customer.name;
};


var averageBalance = function(array) {
    var totalMoney = _.reduce(array, function(previousSum, currentValue, currentIndex) {
    var removeSymbols = currentValue.balance.replace("$", "");
    removeSymbols = removeSymbols.replace(",", "");
    var numberWithoutSymbols = Number(removeSymbols);
    return previousSum + numberWithoutSymbols;
        }, 0);
        return totalMoney / array.length;
    };



var firstLetterCount = function(array, letter) {
    var filteredArray = _.filter(array, function(value,index, collection) {
       if (letter.toLowerCase() === value.name[0].toLowerCase()) {
           return true;
       }
    });
    return filteredArray.length;
};



var friendFirstLetterCount = function(array, customer, letter) {
  var customerWorkingWith = _.filter(array, function(value, index, collection) {
      if (customer === value.name) {
          return true;
      }
  });
  var filteredArray = _.filter(customerWorkingWith[0].friends, function(value, index, collection) {
  if (letter.toLowerCase() === value.name[0].toLowerCase()) {
      return true;
  }
  });
  return filteredArray.length;
};



var friendsCount = function(array, friendsName) {
    var listOfCustomerObjects = _.filter(array, function(value, index, collection) {
      var friendsList = _.pluck(value.friends, 'name'); 
       return _.contains(friendsList, friendsName);
    });
    return _.pluck(listOfCustomerObjects, 'name'); 
};

    var topThreeTags = function(array) {
    var customerTagValuesArray = _.map(array, function(value) {
        return value.tags;
    });   
    customerTagValuesArray = _.reduce(customerTagValuesArray, function(previousResult, element, index) {
         return previousResult.concat(element);
    }, []);

    var counters = [];
    var highestTagList = [];
    
    
    _.each(customerTagValuesArray, function(tag, index, collection) {
        var tagCounter = _.filter(counters, function(value, index, collection) {
            return value.tag === tag; 
        });
        if (tagCounter.length > 0) {
            tagCounter[0].count++;
        } else {
            counters.push({ tag: tag, count: 1 });
        }
    });

     function findHighestTag(counters) {
        var highestIndex = 0;
        var highest = _.reduce(counters, function(highestTag, tagCounter, index) {
            if (tagCounter.count > highestTag.count) {
                highestIndex = index; 
                return tagCounter;
            } else {
                return highestTag;
            }          
        });
        counters.splice(highestIndex, 1);
        return highest;
    }
    
    var highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    // Second highest
    highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    // Third highest
    highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    return highestTagList;
};

var transgenderCount = function(customers) {
    return _.reduce(customers, function(previousResult, customer, index) {//reduce array to single value
        if(customer.gender === 'transgender') {
            return previousResult + 1; 
        } else {
            return previousResult;
        }
    }, 0); 
};


var genderCount = function(array) {
    var genderCountObject = {
        "male": maleCount(customers),
        "female": femaleCount(customers),
        "transgender": transgenderCount(customers)
    };
    return genderCountObject;
};

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