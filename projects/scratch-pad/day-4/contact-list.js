// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 * Create a factory Function 
 * called makeContact(id, nameFirst, nameLast) 
 *     that returns 
 * a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast :'Gaudin'}
 *     
 * 
 * Create a factory Function 
 * called makeContactList that returns an Object 
 *     that manages contacts. 
 * The contact-list object should have the following API:
 *       
 *      1. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      2. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      3. length(): returns the number of contacts within the list.
 *      4. find(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 * 
 * BONUS : add a all() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The all() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.add(); // => Max Gaudin
 *                                 John Fraboni
 *                                 Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#contact-list"
 */
 
// var contacts = require('./data/contact.json');

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
   var contact = {
       id: id,
       nameFirst: nameFirst,
       nameLast: nameLast,
   }; return contact;
}

function makeContactList() {
    
    var contacts = [];
    return {
      addContact: function(contact) {
        return contacts.push(contact);
      },
    
      removeContact: function(contact) {
        var contactName = contact.nameFirst + " " + contact.nameLast;
        var newName = "";
        for (var i = 0; i < contacts.length; i++) {
          newName += contacts[i].nameFirst + " " + contact.nameLast;
          if (contactName === newName) {
            contacts.splice(i, 1)          
          }        
        }      
      },
    
        // we implemented the length api for you //
      
      length: function() {
        return contacts.length;
      },
      
      
      find: function(fullName) {
        var newName = "";
        for (var i = 0; i < contacts.length; i++) {
             newName += contacts[i].nameFirst + " " + contacts[i].nameLast;
             if (newName === fullName) {
            	return contacts[i];	
             } else {
             return undefined;
             }
        }
      },
      
      
      all: function() {
      var contactList = "";
      for (var i = 0; i < contacts.length; i++) { 
           if (i === contacts.length - 1) {
        			contactList += contacts[i].nameFirst + " " + contacts[i].nameLast;
           } else {
             	contactList += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
           }
      }	return contactList;
      }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}