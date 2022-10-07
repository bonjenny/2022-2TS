/* Spread
 *
 */
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 };

/* Rest Operators
 *
 */
function sortArgs(...args) {
  return args.sort();
}

/* Spread (Array)
 *
 */
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1, 2, 3, 4]

// 점 3개(...)를 안 쓰는 경우
const newNumbers2 = [numbers, 4];
console.log(newNumbers2); // [[1, 2, 3], 4]

/* Spread (Object)
 *
 */
const person = {
  name: "Max",
};
const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson); // name과 age 출력

/* Rest
 *
 */
const filter = (...args) => {
	return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));