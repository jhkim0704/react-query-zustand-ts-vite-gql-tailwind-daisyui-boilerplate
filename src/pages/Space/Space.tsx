// Space.tsx
import { useState } from 'react';
import { useInsertUsers } from '@/services/queries/space.query';
import { User } from '@/types/space';
import Button from '@/components/Button';

const Space = () => {
  const [name, setName] = useState('');
  const [rocket, setRocket] = useState('');
  const mutation = useInsertUsers();

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
    </div>
  );
};

export default Space;
