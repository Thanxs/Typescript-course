"use strict";
class PaymentData {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate(a) {
        console.log('additional argument', a);
        return this.date;
    }
}
const p = new PaymentData();
const userData = {
    id: '12345',
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow,
};
console.log(userData.paymentDate(21));
console.log(userData.paymentDateArrow());
class PaymentPersistent extends PaymentData {
    save() {
        return super.getDate(21);
    }
    saveArrow() {
        // return super.getDateArrow() // Error - так как в прототипе объектов стралочные функции отсутсвуют
        return this.getDateArrow();
    }
}
console.log(new PaymentPersistent().save());
console.log(new PaymentPersistent().saveArrow());
// -------------------------------- //
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
    constructor() {
        super(...arguments);
        this.roles = ['Admin'];
    }
}
const res = new UserBuilder().setName('Alex');
const res2 = new AdminBuilder().setName('Demis');
const user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user.roles);
}
else {
    console.log(user.name);
}
