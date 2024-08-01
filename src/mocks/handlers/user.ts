// src/mocks/user.ts
import { http, HttpResponse, graphql } from 'msw';
import { userData, usersData } from 'mocks/data/user';
import { GetUserQueryVariables, GetUserResponse, GetUsersResponse, User } from '@/types/user';

export const userHandlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Ham',
      },
    ]);
  }),

  graphql.query<GetUserResponse, GetUserQueryVariables>('GetUser', ({ variables }) => {
    if (variables.id === '999') {
      return HttpResponse.json(
        {
          errors: [{ message: 'User not found' }],
        },
        { status: 404 }
      );
    }

    const user: User = userData;
    return HttpResponse.json({
      data: {
        user: user,
      },
    });
  }),

  graphql.query<GetUsersResponse, never>('GetUsers', () => {
    const users: User[] = usersData;
    return HttpResponse.json({
      data: {
        // Convert all posts to an array
        // and return as the "posts" root-level property.
        users: Array.from(users.values()),
      },
    });
  }),
];
