"use strict";
function logId(id) {
    console.log(id);
}
const loggedId = logId('qwert2131242');
console.log(loggedId);
function muliplyValues(a, b) {
    // Если в хоть одной ветке, мы что-то возвращаем, то функция вернет что-то, или undefined
    // Но тут можно использовать вовращаемое значенеие number | void
    if (!b) {
        return a * a;
    }
}
const ignore = () => {
    return true; // Для нас не важно, что вернет (будет проигнорировано)
};
console.log(ignore()); // true
const arrHere = [1, 2, 3];
const arrThere = [];
const innerFn = (el) => arrThere.push(el);
arrHere.forEach(innerFn);
