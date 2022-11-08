type U = unknown | string; // unknown
type S = unknown & string; // string

let u: unknown;
u = 'hello'; // type unknown

function getStr(str: string): string {
  return str;
}

// getStr(u); // compile Error

async function getUserAsync() {
  try {
    await fetch('');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

// Кейс, когда используют unknown = когда приходят данные извне и не понятно, что пришло