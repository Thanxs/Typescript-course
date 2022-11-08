class UserService {
  private static db: any;
  // static name: string = 'Some name' // Error - есть встроенное Function.name

  static getUser(id: string) {
    console.log('getUser', id);
  }

  static async getAsyncUser(): Promise<void> {
    await fetch('');
  }

  create() {
    console.log('Created...');
  }

  static { // static async - error
    UserService.db = {
      findById(id: string) {
        return this.ids.find((i: string) => id === i)
      },
      ids: ['qwq1233', 'asd4325', 'acs3444']
    }
    console.log('static block', UserService.db);
  }
}

UserService.getUser('acs3444');
UserService.getUser('qwq1233');
