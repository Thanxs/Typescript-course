interface ILogger {
  log: (...args: any[]) => void;
  error(...args: any[]): void;
}

class Logger implements ILogger {
  log: (...args: any[]) => void;
  //@ts-ignore
  async error(...args: any[]): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

interface IPayable {
  pay(id: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class UserP implements IPayable, IDeletable {
  pay(id: string | number): void { // Можно расширять аргумент
    console.log(id);
  }
  // pay(id: string): void { // Error
  //   console.log(id);
  // }
  // price?: number | undefined;
  delete(): void {
    console.log('deleting...');
  }
}
//@ts-ignore
const fn = (a: string, b: string, c: string, d: string) => {

}

fn('alex', 'igor', 'demis', 'galo4ka');