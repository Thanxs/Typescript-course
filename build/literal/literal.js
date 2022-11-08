"use strict";
function fetchWithAuth(url, method) {
    return { url, method };
}
fetchWithAuth('https://lalala.com', 'get');
// fetchWithAuth('https://lalala.com', 'another string') // compile Error
let method = 'post';
// fetchWithAuth('https://lalala.com', method); // compile Error; method имеет тип string, а не 'post';
// чтобы не было ошибки: let method: 'post' = 'post' или const method = 'post';
// Можно еще кастануть fetchWithAuth('https://lalala.com', method as 'post'); но аккуратно => если
// let method = 'lalala', а внутри функции fetchWithAuth('https://lalala.com', method as 'post');
