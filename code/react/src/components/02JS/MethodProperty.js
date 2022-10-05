// ES6/Babel

class Human {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";
  gender = "female";
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

/* Method
*
*/
function myMethod() {
    // ...
} // ES6
myMethod = () => {
    // ...
} // ES7

/* Property
*
*/
function constuctor() {
	this.myProperty = 'value'
} // ES6
// ES7
myProperty = 'value'