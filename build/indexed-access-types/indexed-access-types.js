"use strict";
const persona = {
    name: 'Alex',
    roles: [],
    permission: {
        endDate: new Date(),
    }
};
const personaName = persona['name'];
const endDate = persona['permission']['endDate'];
const rolesStr = 'roles';
const roles = ['user', 'admin', 'super-admin'];
