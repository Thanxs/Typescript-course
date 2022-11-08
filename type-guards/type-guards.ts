function isStringHere(x: string | number): x is string {
  return typeof x === 'string';
}

interface FrontEndDeveloper {
  name: string;
  age: number;
  language: string;
}

interface BackEndDeveloper {
  name: string;
  age: number;
  skills: string[];
}

// TypeGuards не могут быть асинхронными

function isBackEndDeveloper(user: FrontEndDeveloper | BackEndDeveloper): user is BackEndDeveloper {
  // return (user as BackEndDeveloper).skills !== undefined;
  return 'skills' in user;
}

function logDiffDevPositionProp(developer: FrontEndDeveloper | BackEndDeveloper) {
  if(isBackEndDeveloper(developer)) {
    console.log(developer.skills);
  } else {
    console.log(developer.language);
  }
}