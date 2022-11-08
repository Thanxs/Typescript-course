"use strict";
const userD = {
    name: 'Demis',
    age: 24,
};
const userD2 = {
    name: 'Debys',
    age: 10,
};
const ageD = 'age';
let someStrOrBool = 'hello';
if (Math.random() > 0.5) {
    someStrOrBool = true;
}
else {
    someStrOrBool = 'some str';
}
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction["Left"] = "Left";
})(Direction || (Direction = {}));
const direction = { Up: 0, Down: 1, Left: Direction.Left };
const directionKeyUp = 'Up';
// const directionKeyDown: KeyOfDerection = Direction.Down; // error
const directionKeyLeft = Direction.Left;
