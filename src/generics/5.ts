export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

type RoleDescription = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
