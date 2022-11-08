type HttpMethod = 'get' | 'post' | 'put' | 'delete';

type coolString = string;

type strings = [string[], coolString[]];

type User = {
  name: coolString;
  age: number;
  skills: [...strings];
}

const userOne: User = {
  name: 'Alex',
  age: 32,
  skills: [['run', 'swim'], ['TypeScript', 'React']]
};

type Role = {
  role: 'user' | 'admin'
}

type UserWithRole = User & Role;

const adminOne: UserWithRole = {
  name: 'Demis',
  age: 24,
  skills: [['gym'], ['TS', 'React', 'Cypress']],
  role: 'admin',
  // gender: 'male' // Дополнительные несуществующие поля добавлять нельзя
};