type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
  customers?: Modifier;
  projects?: Modifier;
  adminPanel?: Modifier;
}

type ModifierToAccess<Type> = {
  +readonly[Property in keyof Type as `canAssess${Capitalize<string & Property>}`]-?: boolean;
}

type UserAccess = ModifierToAccess<UserRoles>;