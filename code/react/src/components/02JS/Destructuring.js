/* Array Destructuring
*
*/
[a, b] = ['Hello', 'Max']
console.log(a) //Hello
console.log(b) //Max

/* Object Destructuring
*
*/
var {name} = {name: 'Max', age: 28}
console.log(name) //Max
console.log(age) //undefined

/* Practice
*
*/
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); //1과 2 출력
[num1, ,num3] = numbers;
console.log(num1, num3); //1과 3 출력