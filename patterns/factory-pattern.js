/* 
With this pattern we can create new objects without the use of the "new" keyword
*/

const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

/* Now we can create multiple users */

const user1 = createUser({
  firstName: "Doug",
  lastName: "Mckea",
  email: "dougm@gmail.com",
});

const user2 = createUser({
  firstName: "Lia",
  lastName: "Nova",
  email: "lian@gmail.com",
});

console.log(user1);
console.log(user2);

/* 

This pattern is useful when we need to create relatively complex and custom objects.
If Keys and Values depend on env or config values.

*/

const createObjectFromArray = ([key, value]) => ({
  [key]: value,
});

const objectFromArray1 = createObjectFromArray(["name", "Jonas"]);
console.log(objectFromArray1);

/* 

In Js/Ts ES6 arrow functions allow us to create small factory functions that implicitly return an object each time.

*/
