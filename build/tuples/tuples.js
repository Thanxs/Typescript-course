"use strict";
const users = ['Alex', 'Igor'];
const developers = users.map((user) => ({
    name: user,
    position: 'Software Engineer',
}));
const arr = [1, 'dev', { name: 'Demis', position: 'Software Engineer' }];
const arr2 = ['dev', { name: 'Vasya', position: 'Software Engineer' }];
const arr3 = [1, 2, 3, '4'];
const arr4 = [1, '2', true];
// const arr5: [...number[], string, ...boolean[]] = [1, 2, 3, '4', true, false]; // error: A rest element cannot follow another rest element
