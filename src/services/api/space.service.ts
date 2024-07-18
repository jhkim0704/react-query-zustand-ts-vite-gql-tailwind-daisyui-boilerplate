// spcae.service.ts
import { spaceClient } from '@/lib/graphql-client';
import { GetShipsGqlType, GetShipsResponse, InsertUsersGqlType, InsertUsersResponse, InsertUsersVariables } from '@/types/space';
import Insert_users from '@/services/api/graphql/mutaions/insert_users.gql';
import { _queries } from '@/services/api/graphql/queries/space.gql';

export const insertUsers: InsertUsersGqlType = async (objects: InsertUsersVariables) => {
  const { data } = await spaceClient.mutate<InsertUsersResponse>({
    mutation: Insert_users,
    variables: { objects },
  });

  if (!data || !data.insert_users) {
    throw new Error("Failed to insert users");
  }

  return data.insert_users;
};

export const getShips:GetShipsGqlType = async () => {
  const { data } = await spaceClient.query<GetShipsResponse>({
    query: _queries.GetShips,
  });
  return data.ships
};
