import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cart from '@/assets/images/cart.png';
import logo from '@/assets/images/logo.png';
import menu from '@/assets/images/menu.png';
import user from '@/assets/images/user.png';

import Button from '../Button';

function Header() {
  const [search, setSearch] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className='w-full bg-[#fed700] py-2 px-5 flex justify-between content-center place-items-center'>
      <div className='flex gap-6'>
        <Button>
          <img src={menu} alt='menu' className='h-[45px]' />
        </Button>
        <Button>
          <img src={logo} alt='logo' className='h-[45px]' />
        </Button>
      </div>
      <div>
        <div
          className={`bg-white py-1 px-2 flex rounded-md gap-2 outline outline-2 ${
            isFocused ? 'outline-black' : 'outline-transparent'
          }`}
        >
          <input
            className='bg-transparent outline-none'
            placeholder='Search...'
            value={search}
            onChange={handleSearch}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={e => {
              if (search !== '' && e.key === 'Enter') {
                navigate(`/search/${search}`);
              }
            }}
          />
          <Button
            onClick={() => {
              if (search === '') {
                ref.current?.focus();
              } else {
                navigate(`/search/${search}`);
              }
            }}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>
      <div className='flex gap-6'>
        <Button>
          <img src={user} alt='user' className='h-[45px]' />
        </Button>
        <Button>
          <img src={cart} alt='cart' className='h-[45px]' />
        </Button>
      </div>
    </div>
  );
}

export default Header;
