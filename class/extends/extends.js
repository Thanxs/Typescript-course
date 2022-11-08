"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["New"] = "new";
    PaymentStatus["Paid"] = "paid";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.New;
        this.id = id;
    }
    pay() {
        this.status = PaymentStatus.Paid;
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    pay(date) {
        // this.status = PaymentStatus.Paid;
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
/* ------------------------------- */
class Entity {
    constructor(name) {
        this.name = name;
    }
}
class Entities extends Array {
    searchByName(name) {
        return this.find((entity) => entity.name === name);
    }
    toString() {
        return this.map(({ name }) => name).join(', ');
    }
}
const entities = new Entities();
entities.push(new Entity('Task'));
console.log(entities.searchByName('Task'));
console.log(entities.toString());
// В этом случае лучше использовать композицию вместо наследования
class EntityList {
    push(entity) {
        this.entities.push(entity);
    }
}
