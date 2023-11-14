type Props = {
  isOpen: boolean;
};

function SideBar({ isOpen }: Props): JSX.Element {
  const items: string[] = [
    'Engines',
    'Electrical System',
    'Wheels and Tires',
    'Filters',
    'Radiator',
    'Air Bags',
    'Brake Components',
    'Belts and Hoses',
    'Electrical Components',
    'Suspension',
  ];

  return (
    <div
      className={`fixed left-0 h-full z-20 w-[349px] bg-[#fed700] py-3 px-5 transform transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='p-4'>
        <h2 className='text-[26px] font-bold text-black mb-1 text-base font-ropa-sans'>
          CATEGORIES:
        </h2>
        <hr className='border-black border-[1.2px] mb-5' />
        <ul>
          {items.map((item, i) => {
            return (
              <li className='mb-5 ml-3'>
                <a
                  href={`/category${i + 1}`}
                  className='text-[26px] font-bold text-black hover:text-blue-500 text-base font-ropa-sans'
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <hr className='border-black border-[1.2px]' />
      </div>
      <div className='absolute bottom-4 left-4'>
        <button
          type='button'
          className='text-black hover:text-blue-500 text-base font-ropa-sans'
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export default SideBar;
