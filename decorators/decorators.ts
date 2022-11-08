interface IUserService {
  users: number;
  getUsersInDataBase(): number;
}

@nullUser
class UserServiceClass implements IUserService {
  users: number;
  getUsersInDataBase(): number {
    return this.users;
  }
}

function nullUser(target: Function) {
  target.prototype.users = 0;
}

console.log(new UserServiceClass().getUsersInDataBase());