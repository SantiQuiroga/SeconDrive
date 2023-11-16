import React from 'react';

import Header from '../components/header/Header';
import SideBar from '../components/side-bar/SideBar';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <div className='h-screen flex flex-col overflow-y-scroll relative'>
      <header className='w-full z-30 top-0 flex sticky'>
        <Header setIsOpen={setIsOpen} />
      </header>
      <main className='flex grow'>
        <div
          className={`fixed left-0 h-full z-10 w-full bg-black/20 py-3 px-5 transform transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        />
        <SideBar isOpen={isOpen} />
        {children}
      </main>
    </div>
  );
}

export default Layout;
