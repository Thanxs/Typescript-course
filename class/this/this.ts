class PaymentData {
  private date: Date = new Date();

  getDate(this: PaymentData, a: number) {
    console.log('additional argument', a)
    return this.date;
  }

  getDateArrow = () => {
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
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[] = ['Admin'];
}

const res: UserBuilder = new UserBuilder().setName('Alex');
const res2: AdminBuilder = new AdminBuilder().setName('Demis');

const user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
  console.log(user.roles);
} else {
  console.log(user.name);
}
