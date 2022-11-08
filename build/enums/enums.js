"use strict";
function getComputed(a, b) {
    return a * b;
}
const someNumber = 21;
var Values;
(function (Values) {
    Values[Values["A"] = 0] = "A";
    Values[Values["B"] = 1] = "B";
    Values[Values["C"] = 2] = "C";
    Values[Values["D"] = 3] = "D";
    Values[Values["E"] = getComputed(Values.C, Values.D)] = "E";
    Values[Values["F"] = 4] = "F";
    Values[Values["G"] = 5] = "G";
    Values[Values["H"] = 6] = "H";
    Values[Values["I"] = someNumber] = "I";
    // J = 'some str' // Если компьютед валью в енами - то нельзя использовать гетерогенные енамы
})(Values || (Values = {}));
// Merge enums
(function (Values) {
    Values[Values["Hello"] = 1] = "Hello";
})(Values || (Values = {}));
console.log(Values);
const someVariable = 'someVariable';
// Гетерогенные енамы
var GeterogenEnums;
(function (GeterogenEnums) {
    GeterogenEnums[GeterogenEnums["First"] = 1] = "First";
    GeterogenEnums["Second"] = "second";
    GeterogenEnums[GeterogenEnums["Third"] = 3] = "Third";
    // Fourth = { name : 'Alex' } // Error, только строки и числа (за исключением NaN, Infinity)
    // Fourth = true // Error 
    // Fourth = NaN  // Error
    GeterogenEnums[GeterogenEnums["Fifth"] = 7.2813687126387125e+43] = "Fifth";
    GeterogenEnums[GeterogenEnums["Sixth"] = -21] = "Sixth";
    GeterogenEnums[GeterogenEnums["Seventh"] = 0.123] = "Seventh";
    GeterogenEnums[GeterogenEnums["Eight"] = 1] = "Eight";
    // Nineth = someVariable // Error, это тоже считается компьютед велью
})(GeterogenEnums || (GeterogenEnums = {}));
console.log(GeterogenEnums);
console.log(GeterogenEnums.Eight); // 1
console.log(GeterogenEnums[1]); // 'Eight'
// const roles = Roles // Error
const admin = 1 /* ADMIN */;
for (const value in Values) {
    console.log('Value: ', Values[value]);
}
for (const value in Values) {
    console.log('Value: ', value);
}
// for (const role in Roles) { // Error
// }
