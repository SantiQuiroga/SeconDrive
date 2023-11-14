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
      <div className='grow'>{children}</div>
    </div>
  );
}

export default Layout;
