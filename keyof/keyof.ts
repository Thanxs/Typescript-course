interface IUser {
  name: string;
  age: number;
  gender?: 'male' | 'female';
}

type KeysOfUser = keyof IUser;

const nameKey: KeysOfUser = 'name'; 
const genderKey: KeysOfUser = 'gender';

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const userAlex: IUser = {
  name: 'Alex',
  age: 32,
};

console.log(getValue(userAlex, 'name'));
console.log(getValue(userAlex, 'gender'));


// ------------------- //

interface Data {
  group: number;
  name: string;
}

const dataE: Data[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

interface IGroup<T> {
  [key: string]: T;
}

type key = string | number | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    const itemKey = item[key];
    let curEl = map[itemKey];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      // @ts-ignore
      curEl = [item];
    }
    map[itemKey] = curEl;
    return map;
  }, {});
}

const gRes = group<Data>(dataE, 'group');
console.log(gRes);

// function aaa(arr: any[], key: any) {
//   return arr.reduce((acc, el) => {
//     const currEl = acc[key];


//   }, {});
// }