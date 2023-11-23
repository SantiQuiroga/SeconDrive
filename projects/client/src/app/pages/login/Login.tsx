import { useState } from 'react';

function Login() {
  const [error] = useState<boolean>(true);

  return (
    <main className='bg-black h-screen w-screen flex justify-center items-center font-ropa'>
      <section className='bg-[#DED9E1] h-fit w-1/2 lg:w-1/4 p-10 flex flex-col gap-5'>
        <h1 className='text-[26px] w-full flex justify-center'>Login</h1>
        <form className='flex flex-col gap-5'>
          <label htmlFor='email' className='flex flex-col'>
            <span className='text-lg'>Email</span>
            <input
              id='email'
              type='email'
              className='outline-none px-2 py-3 rounded-md text-lg'
              placeholder='Enter your email...'
              required
            />
          </label>
          <label htmlFor='password' className='flex flex-col'>
            <span className='text-lg'>Password</span>
            <input
              id='password'
              type='password'
              placeholder='Enter your password...'
              className='outline-none px-2 py-3 rounded-md text-lg'
              required
            />
          </label>
          <div className='flex justify-center flex-col items-center gap-4'>
            <button
              type='submit'
              className='mt-3 bg-white py-3 px-16 rounded-md text-[20px] text-lg w-fit transition duration-100 active:transform
              active:scale-90 cursor-pointer hover:bg-slate-white/80
              active:bg-white'
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
