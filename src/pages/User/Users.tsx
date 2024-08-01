// Space.tsx
import { useState } from 'react';
import { useInsertUsers, useUser, useUsers } from '@/services/queries/user.query';
import Button from '@/components/Button';
import { GetUsersResponse, User } from '@/types/user';

const UserList: React.FC<GetUsersResponse> = ({ users }) => {
  if (!users?.length) {
    return <div>No movies found</div>;
  }

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                  {user.name}
              </h1>
              <p className="text-grey-darker text-sm">{user.rocket}</p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <span className="btn">
                  평점<i className="fa fa-heart"></i>
                  <div className="badge badge-secondary">{user.id}</div>
                </span>
              </a>
            </footer>
          </article>
        </div>
      ))}
    </>
  );
};


const Users = () => {
  const [name, setName] = useState('');
  const [rocket, setRocket] = useState('');
  const mutation = useInsertUsers();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { isLoading, data } = useUser('9991');
  const { isLoading: isUserLoading, data: users } = useUsers();

  if(!data && !users) return null
  const handleSubmit = () => {
    const newUser: User = {
      id: 'c78b04fb-b61b-4232-b194-c58c092d46fa', // 유니크 아이디 생성 방법은 다양합니다.
      name,
      rocket,
    };
    mutation.mutate([newUser]);
  };

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div>
        <h1>유저 등록</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className='mt-4'>
          Name:
            <input type="text" placeholder="input here" className="input input-bordered w-full max-w-xs" 
              onChange={(e) => {
                setName(e.target.value);
            }}
            />
          </div>
          <div className='mt-4'>
            Rocket:
            <input type="text" placeholder="input here" className="input input-bordered w-full max-w-xs" 
              onChange={(e) => {
                setRocket(e.target.value);
            }}
            />
          </div>
          <div className='mt-4'><Button text="등록" type='submit' /></div>
        </form>
        {mutation.isLoading && <p>Loading...</p>}
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
        {mutation.isSuccess && (
          <div>
            <p>등록 성공!</p>
            <p>Returning:</p>
            <ul>
              {mutation.data.returning.map((user) => (
                <li key={user.id}>
                  {user.id}: {user.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {isUserLoading ? (
          <div>Loading...</div>
        ) : (
          <UserList users={users ?? []} />
        )}
      </div>
    </div>
  );
};

export default Users;
