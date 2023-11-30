import React, { useState } from 'react';

import { login } from '@/app/api/LoginAPI';

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const response = await login(email, password);

    if (!response) {
      setError(true);
    } else {
      setError(false);
      console.log('loged as', response.email);

      // TODO: Save User in local storage and State and redirect to home, show a toast with success message
    }
  };

  return (
    <main className='bg-black h-screen w-screen flex justify-center items-center font-ropa'>
      <section className='bg-[#d0d0d0] h-fit w-1/2 lg:w-1/4 p-10 flex flex-col gap-5'>
        <h1 className='text-[26px] w-full flex justify-center'>Login</h1>
        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
          <label htmlFor='email' className='flex flex-col'>
            <span className='text-lg'>Email</span>
            <input
              id='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='outline-none px-2 py-3 rounded-md text-lg'
              placeholder='Enter your email...'
              required
            />
          </label>
          <label htmlFor='password' className='flex flex-col'>
            <span className='text-lg'>Password</span>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='Enter your password...'
              className='outline-none px-2 py-3 rounded-md text-lg'
              required
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='mt-5'
            >
              {showPassword ? 'Hide' : 'Show'} Password
            </button>
          </label>
          <div className='flex justify-center flex-col items-center gap-4'>
            <button
              type='submit'
              className='mt-3 bg-white py-3 px-16 rounded-md text-[20px] text-lg w-fit transition duration-100 active:transform active:scale-90 cursor-pointer hover:bg-slate-white/80 active:bg-white'
            >
              login
            </button>
            {error && (
              <span className='text-red-500 font-bold flex w-full justify-center text-lg'>
                Invalid Credentials
              </span>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
