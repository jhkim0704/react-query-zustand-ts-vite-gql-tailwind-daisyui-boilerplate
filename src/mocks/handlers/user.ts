// src/mocks/handlers.ts
import { http, HttpResponse, graphql } from 'msw'
import { userData, usersData } from 'mocks/data/user'
 
// 타입 정의
type User = {
    id: string
    name: string
    rocket: string
  }
  
  type GetUserQuery = {
    user: User
  }

  type GetUsersQuery = {
    users: User[]
  }
  
  export interface GetUserQueryVariables {
    id: string;
  }
  
export const userHandlers = [
  http.get('/api/users', ()=>{
    return HttpResponse.json([
      {
        id : 1,
        name : "Ham"
      }
    ])
  }),

  graphql.query<GetUserQuery, GetUserQueryVariables>(
    'GetUser',
    ({ variables }) => {
      if (variables.id === '999') {
        return HttpResponse.json(
          {
            errors: [{ message: 'User not found' }]
          },
          { status: 404 }
        )
      }

      const user: User = userData
      return HttpResponse.json({
        data: {
          user: user,
        },
      })
    }
  ),

  graphql.query<GetUsersQuery, never>(
    'GetUsers',
    () => {
      const users: User[] = usersData
      return HttpResponse.json({
        data: {
          // Convert all posts to an array
          // and return as the "posts" root-level property.
          users: Array.from(users.values()),
        },
      })
    }
  ),
]
