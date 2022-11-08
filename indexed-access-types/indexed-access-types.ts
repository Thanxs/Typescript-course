interface IRole {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface IPerson {
  name: string;
  roles:  IRole[];
  permission: Permission;
}

const persona: IPerson = {
  name: 'Alex',
  roles: [],
  permission: {
    endDate: new Date(),
  }
};

const personaName = persona['name'];
const endDate = persona['permission']['endDate'];

type PesronaRoles = IPerson['roles'];
type EndDate = IPerson['permission']['endDate'];

const rolesStr = 'roles';
// let roles = 'roles'; // error
type PesronaRoles2 = IPerson[typeof rolesStr];

type RoleType = IPerson['roles'][number]; // IRole - обобщенное обращение к любому элементу массива IRoles[]

const roles = ['user', 'admin', 'super-admin'] as const;

type RolesUnion = typeof roles[number];
