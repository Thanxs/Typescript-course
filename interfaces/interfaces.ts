type PrimitiveType = string | number;

// interface L extends PrimitiveType {} // Error  ... Interfaces can extend only object types

type ObjectType = {
  skills: string[]
}

interface Skillable extends ObjectType {
  label: PrimitiveType;
}

const skills1 = <Skillable> {
  skills: ['JS', 'TS', 'React'],
  label: 'Senior Software Engineer'
}

const skills2: Skillable = {
  skills: ['JS', 'TS', 'React'],
  label: 'Middle Software Engineer'
}

interface IUser1 {
  name: string;
  login: string;
  age: number;
}

interface Admin1 {
  name: string;
  role: number;
}

const user1: IUser1 = {
  name: 'Alex',
  login: 'santiagos',
  age: 32,
};

const admin1: Admin1 = {
  ...user1,
  role: 1
} // это не очень хороший подход, так как попадут ненужные поля
// лучше создать функцию маппинга

function userToAdmin(user: IUser1): Admin1 {
  return {
    name: user.name, // user.login
    role: 1
  }
}
