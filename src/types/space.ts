export interface Ship {
  id: string;
  name: string;
  image: string;
}

export interface GetShipsGqlType {
  (): Promise<Ship[]>;
}
export interface GetShipsResponse {
  ships: Ship[];
}
