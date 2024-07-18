// space.query.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { insertUsers, getShips } from '@/services/api/space.service';
import { InsertUsersVariables, InsertUsersResponse, Ship } from '@/types/space';

export const useInsertUsers = () =>
  useMutation<InsertUsersResponse, Error, InsertUsersVariables>(insertUsers);

export const useShips = () =>
  useQuery<Ship[]>(['ships'], async () => {
    const res = await getShips();
    return res;
  },
  {
    staleTime: 10000,
  },
);
