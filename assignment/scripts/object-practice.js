console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
     firstName: 'Opal ',
     lastName: 'Nebulosa ',
     hasSiblings: true,
     shoeCount: 12 ,
     favThreeFoods: ['Tuna ', 'Salmon ', 'Milk ' ],

  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = me.firstName + me.lastName;
// check that Opal Nebulosa has been defined as variable fullName
console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[me.favThreeFoods.length -1]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/

console.log(me.shoeCount);
me.shoeCount =++ me.shoeCount;
console.log(me.shoeCount);

    //for some fun:
    //lets create a function to add one more shoe to our inventory
    //tried to create a function that would add one to our array
    // BUT it wont save the value to me.Shoecount only when we are in the function
              console.log(me.shoeCount);
                function shoeShop (array) {
                  array =++ array
                  return array
                  }
                console.log(shoeShop(me.shoeCount));
                console.log(me.shoeCount);
/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me['favoriteColor'] = 'Opal';
console.log(me);
