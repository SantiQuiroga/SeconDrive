import React from 'react';

import Header from '@/components/header/Header';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className='h-screen flex flex-col'>
      <header className='grow-0'>
        <Header />
      </header>
      <div className='grow'>
        <div
          className={`fixed left-0 h-full z-10 w-full bg-black/20 py-3 px-5 transform transition-transform ${'-translate-x-full'}`}
        />
        <div className='bg-red-100 fixed h-full w-full z-0'>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
