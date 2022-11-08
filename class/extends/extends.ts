enum PaymentStatus {
  New = 'new',
  Paid = 'paid',
}

class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.New;

  constructor(id: number) {
    this.id = id;
  }

  pay(): void {
    this.status = PaymentStatus.Paid;
  }
}

class PersistedPayment extends Payment {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  override pay(date?: Date): void {
    // this.status = PaymentStatus.Paid;
    super.pay();

    if (date) {
      this.paidAt = date;
    }
  }
}

/* ------------------------------- */
class Entity {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Entities extends Array<Entity> {
  searchByName(name: string) {
    return this.find((entity: Entity)=> entity.name === name);
  }

  override toString(): string {
    return this.map(({ name }: Entity) => name).join(', ');
  }
}

const entities = new Entities();

entities.push(new Entity('Task'));
console.log(entities.searchByName('Task'));
console.log(entities.toString());

// В этом случае лучше использовать композицию вместо наследования

class EntityList {
  entities: Entity[];

  push(entity: Entity): void {
    this.entities.push(entity);
  }
}
