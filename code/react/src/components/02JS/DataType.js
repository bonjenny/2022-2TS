/* Reference Type
 *
 */
const number = 1;
const num2 = number;

console.log(num2); //1

/* Pratice
 *
 */
const person = {
  name: "Max",
};

let secondPerson = person;
console.log(secondPerson); //Max

person.name = "Manu";
console.log(secondPerson); //Max가 아닌 Manu

/* Spread (Deep Copy)
 *
 */
const person = {
  name: "Max",
};

secondPerson = {
  ...person,
};
console.log(secondPerson); //Max

person.name = "Manu";
console.log(secondPerson); //Max
