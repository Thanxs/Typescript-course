const userD = {
  name: 'Demis',
  age: 24,
}

type UserD = typeof userD;
type KeysOfUserD = keyof typeof userD;

const userD2: UserD = {
  name: 'Debys',
  age: 10,
}

const ageD: KeysOfUserD = 'age';

let someStrOrBool: string | boolean = 'hello';
if (Math.random() > 0.5) {
  someStrOrBool = true;
} else {
  someStrOrBool = 'some str';
}

type StrOrBool = typeof someStrOrBool; // string | true

enum Direction {
  Up,
  Down,
  Left = 'Left'
}

type DirectionType = typeof Direction;

const direction: DirectionType = { Up: 0, Down: 1, Left: Direction.Left };

type KeyOfDerection = keyof typeof Direction;

const directionKeyUp: KeyOfDerection = 'Up';
// const directionKeyDown: KeyOfDerection = Direction.Down; // error
const directionKeyLeft: KeyOfDerection = Direction.Left;