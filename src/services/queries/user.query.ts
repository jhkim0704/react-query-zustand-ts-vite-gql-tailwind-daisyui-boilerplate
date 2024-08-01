// user.query.ts
import { useQuery, useMutation } from '@tanstack/react-query';
import { insertUsers, getUser, getUsers } from '@/services/api/user.service';
import { InsertUsersResponse, InsertUsersVariables, User } from '@/types/user';

export const useInsertUsers = () =>
  useMutation<InsertUsersResponse, Error, InsertUsersVariables>(insertUsers);

export const useUser = (id: string) =>
  useQuery<User>(['user'], async () => {
    const res = await getUser(id);
    return res;
  },
);

export const useUsers = () =>
  useQuery<User[]>(['users'], async () => {
    const res = await getUsers();
    return res;
  },
);
