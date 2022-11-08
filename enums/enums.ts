function getComputed(a: number, b: number) {
  return a * b;
}

const someNumber = 21;

enum Values {
  A,
  B,
  C,
  D,
  E = getComputed(C, D),
  F = 4,
  G,
  H,
  I = someNumber
  // J = 'some str' // Если компьютед валью в енами - то нельзя использовать гетерогенные енамы
}

// Merge enums
enum Values {
  Hello = 1
}

console.log(Values);

const someVariable = 'someVariable';

// Гетерогенные енамы
enum GeterogenEnums {
  First = 1,
  Second = 'second',
  Third = 3,
  // Fourth = { name : 'Alex' } // Error, только строки и числа (за исключением NaN, Infinity)
  // Fourth = true // Error 
  // Fourth = NaN  // Error
  Fifth = 7.2813687126387125e+43,
  Sixth = -21,
  Seventh = 0.123,
  Eight = First,
  // Nineth = someVariable // Error, это тоже считается компьютед велью
}

console.log(GeterogenEnums);

console.log(GeterogenEnums.Eight); // 1
console.log(GeterogenEnums[1]); // 'Eight'

const enum Roles {
  USER,
  ADMIN
}

// const roles = Roles // Error
const admin = Roles.ADMIN;

for (const value in Values) {
  console.log('Value: ', Values[value]);
}

for (const value in Values) {
  console.log('Value: ', value);
}

// for (const role in Roles) { // Error

// }