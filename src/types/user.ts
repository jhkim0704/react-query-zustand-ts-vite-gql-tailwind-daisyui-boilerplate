
export interface User  {
  id: string;
  name: string;
  rocket?: string;
};

export interface InsertUsersResponse  {
  insert_users: null;
  returning: User[];
};

export type InsertUsersVariables = User[];

export interface InsertUsersGqlType {
  (objects: InsertUsersVariables): Promise<InsertUsersResponse>;
}
export interface GetUserGqlType {
  (id: string): Promise<User>
}

export interface GetUserResponse {
  user: User
}

export interface GetUsersGqlType {
  (): Promise<User[]>
}

export interface GetUsersResponse {
  users: User[]
}