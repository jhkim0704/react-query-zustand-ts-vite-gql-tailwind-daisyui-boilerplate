// space.query.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { insertUsers, getShips, getUser } from '@/services/api/space.service';
import { InsertUsersVariables, InsertUsersResponse, Ship, User } from '@/types/space';

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

export const useUser = () =>
  useQuery<User>(['user'], async () => {
    const res = await getUser();
    return res;
  },
  {
    staleTime: 10000,
  },
);

