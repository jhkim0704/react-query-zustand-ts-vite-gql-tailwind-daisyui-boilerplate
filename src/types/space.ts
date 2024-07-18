
export interface User  {
  id: string;
  name: string;
  rocket: string;
};

export interface InsertUsersResponse  {
  insert_users: null;
  returning: User[];
};

export type InsertUsersVariables = User[];

export interface InsertUsersGqlType {
  (objects: InsertUsersVariables): Promise<InsertUsersResponse>;
}

export interface Ship  {
  id: string;
  name: string;
  image: string;
};

export interface GetShipsGqlType {
  (): Promise<Ship[]>
}
export interface GetShipsResponse {
  ships: Ship[]
}