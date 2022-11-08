const users: ReadonlyArray<string> = ['Alex', 'Igor'];

interface SoftwareEngineer {
  name: typeof users[0],
  position: 'Software Engineer' 
}

type Engineers = SoftwareEngineer[];

const developers: Array<SoftwareEngineer> = users.map((user: string): SoftwareEngineer => ({
  name: user,
  position: 'Software Engineer',
}));

const arr: [number, string, ...SoftwareEngineer[]] =
[1, 'dev', { name: 'Demis', position: 'Software Engineer' }];

const arr2: [string, ...Engineers] = ['dev', { name: 'Vasya', position: 'Software Engineer' }];
const arr3: [...number[], string] = [1, 2, 3, '4'];
const arr4: [number, ...string[], boolean] = [1, '2', true];
// const arr5: [...number[], string, ...boolean[]] = [1, 2, 3, '4', true, false]; // error: A rest element cannot follow another rest element