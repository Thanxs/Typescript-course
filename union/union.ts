const unionArr = [1.23, 'dev', true];

// Сужение типов

for (const union of unionArr) {
  if (typeof union === 'string') {
    console.log(union.endsWith('ev', 3));
    break;
  }

  if (typeof union === 'number') {
    console.log(union.toPrecision(2));
    break;
  }

  console.log(union); // boolean type heres
}

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logError(error: string | string[]) {
  if (Array.isArray(error)) {
    console.log(error.map(e => e.toUpperCase()));
  } else {
    console.log(error.toUpperCase());
  }
}