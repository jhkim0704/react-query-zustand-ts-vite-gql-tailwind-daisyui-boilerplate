// spcae.service.ts
import { spaceClient } from '@/lib/graphql-client';
import { GetShipsGqlType, GetShipsResponse } from '@/types/space';
import { _queries } from '@/services/api/graphql/queries/space.gql';

export const getShips: GetShipsGqlType = async () => {
  const { data } = await spaceClient.query<GetShipsResponse>({
    query: _queries.GetShips,
  });
  return data.ships;
};
