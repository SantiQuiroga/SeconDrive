import React from 'react';

import Header from '@/app/components/header/Header';
import SideBar from '@/app/components/side-bar/SideBar';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className='h-screen flex flex-col'>
      <header className='grow-0'>
        <Header setIsOpen={setIsOpen} />
      </header>
      <div className='grow'>
        <div
          className={`fixed left-0 h-full z-10 w-full bg-black/20 py-3 px-5 transform transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        />
        <SideBar isOpen={isOpen} />
        <div className='bg-red-100 fixed h-full w-full z-0'>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
