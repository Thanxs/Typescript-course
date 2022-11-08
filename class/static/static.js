"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    // static name: string = 'Some name' // Error - есть встроенное Function.name
    static getUser(id) {
        console.log('getUser', id);
    }
    static getAsyncUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch('');
        });
    }
    create() {
        console.log('Created...');
    }
}
(() => {
    UserService.db = {
        findById(id) {
            return this.ids.find((i) => id === i);
        },
        ids: ['qwq1233', 'asd4325', 'acs3444']
    };
    console.log('static block', UserService.db);
})();
UserService.getUser('acs3444');
UserService.getUser('qwq1233');
