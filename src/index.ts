export {};

// Variable 'X' is used before being assigned in TypeScript

// // EXAMPLE 1 - Initialize the variable to solve the error

// type Employee = {
//   name: string;
//   country: string;
// };

// const employee: Employee = {
//   name: '',
//   country: '',
// };

// employee.name = 'bobby hadz';

// // ------------------------------------

// const arr: string[] = [];

// arr[0] = 'bobbyhadz.com';

// ---------------------------------------------------

// // EXAMPLE 2 - Update the variable's type to be possibly undefined

// type Employee = {
//   name: string;
//   country: string;
// };

// let employee: Employee | undefined; // 👈️ could be undefined

// // 👉️ somewhere in your code this should be set to an object

// if (employee !== undefined) {
//   employee.name = 'Bobby Hadz';
// }

// // ---------------------

// let arr: string[] | undefined; // 👈️ could be undefined

// // 👉️ somewhere in your code this should be set to an array

// if (arr !== undefined) {
//   arr[0] = 'bobbyhadz.com';
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Using the Partial utility type to solve the error

// type Employee = {
//   name: string;
//   country: string;
// };

// const employee: Partial<Employee> = {};

// employee.name = 'Bobby Hadz';
// employee.country = 'Brazil';

// // 👇️ {name: 'Bobby Hadz', country: 'Brazil'}
// console.log(employee);

// ---------------------------------------------------

// EXAMPLE 4 - Assigning a value to a variable only if a condition is met
let salary: number;

if (Math.random() > 0.5) {
  salary = 100;
}

// ---------------------------------------------------
