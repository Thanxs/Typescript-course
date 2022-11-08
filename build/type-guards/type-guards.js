"use strict";
function isStringHere(x) {
    return typeof x === 'string';
}
// TypeGuards не могут быть асинхронными
function isBackEndDeveloper(user) {
    // return (user as BackEndDeveloper).skills !== undefined;
    return 'skills' in user;
}
function logDiffDevPositionProp(developer) {
    if (isBackEndDeveloper(developer)) {
        console.log(developer.skills);
    }
    else {
        console.log(developer.language);
    }
}
