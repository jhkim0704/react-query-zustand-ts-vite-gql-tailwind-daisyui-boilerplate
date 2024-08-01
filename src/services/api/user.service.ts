// spcae.service.ts
import { spaceClient } from '@/lib/graphql-client';
import Insert_users from '@/services/api/graphql/mutaions/insert_users.gql';
import { _queries } from '@/services/api/graphql/queries/user.gql';
import { InsertUsersGqlType, InsertUsersVariables,  InsertUsersResponse, GetUserGqlType, GetUserResponse, GetUsersGqlType, GetUsersResponse} from '@/types/user';

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

export const getUser:GetUserGqlType = async (id: string) => {
  const { data } = await spaceClient.query<GetUserResponse>({
    query: _queries.GetUser,
    variables: { id },
  });
  return data.user
};

export const getUsers:GetUsersGqlType = async () => {
  const { data } = await spaceClient.query<GetUsersResponse>({
  query: _queries.GetUsers,
  });
  return data.users
};

