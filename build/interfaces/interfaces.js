"use strict";
const skills1 = {
    skills: ['JS', 'TS', 'React'],
    label: 'Senior Software Engineer'
};
const skills2 = {
    skills: ['JS', 'TS', 'React'],
    label: 'Middle Software Engineer'
};
const user1 = {
    name: 'Alex',
    login: 'santiagos',
    age: 32,
};
const admin1 = Object.assign(Object.assign({}, user1), { role: 1 }); // это не очень хороший подход, так как попадут ненужные поля
// лучше создать функцию маппинга
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1
    };
}
