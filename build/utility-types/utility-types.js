"use strict";
class UserClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function getUserData(id, name) {
    return new UserClass(id, name);
}
// type A1 = Awaited<Promise<string>>; // string
// type A2 = Awaited<Promise<Promise<string>>>; // string
