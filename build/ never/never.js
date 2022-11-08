"use strict";
function generateError() {
    throw new Error('Error was generated');
}
generateError();
function dumpError() {
    while (true) { }
}
function recursion() {
    return recursion();
}
function processAction(action) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default:
            // @ts-ignore
            const _ = action;
            throw new Error('Such action doesn\'t exist');
    }
}
// Исчерпывающая проверка
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError();
}
// never помогает нам ограничить какие-то случаи, когда мы должны проходить явную проверку по типам
