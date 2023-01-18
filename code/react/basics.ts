// Primitives: number, string, boolean
// More complex type: array, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string | string[];
userName = "Mike";
userName = ["Mike", "Max"];

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Type Alias

type Person = {
  name: string,
  age: number,
};

let person: Person;

// let person: {
//   name: string;
//   age: number;
// };

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

people = [
  {
    name: "Max",
    age: 32,
  },
  {
    name: "Mike",
    age: 20,
  },
];

// Type Inference

let title = "React 완벽 가이드";
// title = 12341; // 'number' 형식은 'string' 형식에 할당할 수 없습니다.

let course: string | number = "React 완벽 가이드";
course = 12341;

// Functions & Types

function add(a: number, b: number): number | string {
  return  a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginnig<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginnig(demoArray, -1); // [-1, 1, 2, 3]
insertAtBeginnig(['a', 'b', 'c'], 'd');

console.log(updatedArray);