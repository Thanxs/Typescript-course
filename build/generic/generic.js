"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
logMiddleware(21);
function getSplittedHalf(arr) {
    const half = arr.length / 2;
    return arr.splice(0, half);
}
getSplittedHalf(['1', '2', '3', '4']);
const logLine = {
    timeStamp: new Date(),
    data: {
        revenue: 5500,
    }
};
/* --------------------- */
class Vehicle {
    constructor(run) {
        this.run = run;
    }
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
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
function sortData(data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
        ;
    });
}
console.log(sortData(data, 'desc'));
class Resp {
    constructor(data, error) {
        if (data) {
            this.data = data;
        }
        if (error) {
            this.error = error;
        }
    }
}
console.log(new Resp('data', 500));
class HTTPResp extends Resp {
    setCode(code) {
        this.code = code;
    }
}
class Entity2 {
    constructor(data) {
        this.data = data;
    }
}
console.log(new Entity2({ id: 123 }));
console.log(new Entity2('some data'));
function create(cls) {
    return new cls();
}
class Tax {
    constructor() {
        this.percent = 100;
    }
}
console.log(create(Tax));
