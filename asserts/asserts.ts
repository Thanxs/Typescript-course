interface IUserA {
  name: string;
}

const userA = {};

assertUser(userA);

userA.name = 'Alex';

function assertUser(user: unknown): asserts user is IUserA {
  if(typeof user === 'object' && !!user && 'name' in user) {
    return;
  }

  throw new Error('This is not user.');
}