// src/mocks/handlers.ts
import { http, HttpResponse, graphql } from 'msw'
 
// 타입 정의
type User = {
    id: string
    name: string
    email: string
  }
  
  type GetUsersQuery = {
    users: User[]
  }
  
  type GetUserQuery = {
    user: User
  }
  
  const json = {
    "data": {
        "countries": [
            {
                "phone": "376",
                "code": "AD",
                "name": "Andorra",
                "currency": "EUR",
                "__typename": "Country"
            },
            {
                "phone": "971",
                "code": "AE",
                "name": "United Arab Emirates",
                "currency": "AED",
                "__typename": "Country"
            },
        ]
        },
    }
export const handlers = [
  http.get('/api/users', ()=>{
    return HttpResponse.json([
      {
        id : 1,
        name : "Ham"
      }
    ])
  }),

  graphql.query<GetUsersQuery, never>(
    'GetUser',
    () => {
      const users: User[] = [
        { id: '1', name: 'Alice', email: 'alice@example.com' },
        { id: '2', name: 'Bob', email: 'bob@example.com' },
      ]
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
