export const UserRole = {
  ADMIN: "ADMIN",
  CLIENT: "CLIENT",
  CONSUMER: "CONSUMER",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
