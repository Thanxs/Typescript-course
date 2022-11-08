function logMiddleware<T>(data: T): T {
  console.log(data);
  return data;
}

logMiddleware(21);

function getSplittedHalf<T>(arr: T[]): T[] {
  const half = arr.length / 2;

  return arr.splice(0, half);
}

getSplittedHalf<string>(['1', '2', '3', '4']);

interface ILogLine<T> {
  timeStamp: Date;
  data: T,
}

const logLine: ILogLine<{ revenue: number }> = {
  timeStamp: new Date(),
  data: {
    revenue: 5500,
  }
};


/* --------------------- */
class Vehicle {
  constructor(public run: number) {}
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle; 
}

class LCV extends Vehicle {
  capacity: number;
}

console.log(kmToMiles(new Vehicle(10000)));
console.log(kmToMiles(new LCV(20000)));
console.log(kmToMiles({ run: 21 }));
// console.log(kmToMiles({ another: 21 })); // error

const data = [
  { id: 1, name: 'Alex' },
  { id: 3, name: 'Igor' },
  { id: 2, name: 'Demis' },
];

interface ID {
  id: number;
}

function sortData<T extends ID>(data: T[], type: 'desc' | 'asc' = 'asc'): T[] {
  return data.sort((a: T, b: T) => {
    switch(type) {
      case 'asc':
        return a.id - b.id;
      case 'desc':
        return b.id - a.id;
    };
  })
}

console.log(sortData(data, 'desc'));

class Resp<D, E> {
  data: D;
  error: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }

    if (error) {
      this.error = error;
    }
  }
}

console.log(new Resp<string, number>('data', 500));

class HTTPResp<D> extends Resp<string, number> {
  code: D;

  setCode(code: D) {
    this.code = code;
  }
}


class Entity2<D = ID> {
  data: D;
  constructor(data: D) {
    this.data = data;
  }
}

console.log(new Entity2({ id: 123 }));
console.log(new Entity2('some data'));


function create<T>(cls: { new(): T; } ): T {
  return new cls();
}
class Tax {
  percent = 100;
}
console.log(create(Tax));