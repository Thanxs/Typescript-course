"use strict";
const userA = {};
assertUser(userA);
userA.name = 'Alex';
function assertUser(user) {
    if (typeof user === 'object' && !!user && 'name' in user) {
        return;
    }
    throw new Error('This is not user.');
}
