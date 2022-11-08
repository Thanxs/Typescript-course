"use strict";
const nameKey = 'name';
const genderKey = 'gender';
function getValue(obj, key) {
    return obj[key];
}
const userAlex = {
    name: 'Alex',
    age: 32,
};
console.log(getValue(userAlex, 'name'));
console.log(getValue(userAlex, 'gender'));
const dataE = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(array, key) {
    return array.reduce((map, item) => {
        const itemKey = item[key];
        let curEl = map[itemKey];
        if (Array.isArray(curEl)) {
            curEl.push(item);
        }
        else {
            // @ts-ignore
            curEl = [item];
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
const gRes = group(dataE, 'group');
console.log(gRes);
// function aaa(arr: any[], key: any) {
//   return arr.reduce((acc, el) => {
//     const currEl = acc[key];
//   }, {});
// }
