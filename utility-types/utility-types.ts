interface IPaymentPersistent {
  id: number;
  sum: number;
  from: string;
  to: string;
}

type PaymentType = Omit<IPaymentPersistent, 'id'>;
type PaymentType2 = Pick<IPaymentPersistent, 'from' | 'to'>;

type ExtractEx = Extract<'from' | 'to' | PaymentType, string>;
type ExcludeEx = Exclude<'from' | 'to' | PaymentType, string>;

class UserClass {
  constructor(public id: number, public name: string) {

  }
}

function getUserData(id: number, name: string): UserClass {
  return new UserClass(id, name);
}

type RT = ReturnType<typeof getUserData>; // UserClass
type PT = Parameters<typeof getUserData>; // [id: number, name: string]
type FirstP = Parameters<typeof getUserData>[1]; // string
type CP = ConstructorParameters<typeof UserClass>; // [id: number, name: string]

// type A1 = Awaited<Promise<string>>; // string
// type A2 = Awaited<Promise<Promise<string>>>; // string