import settingsIcon from './assets/setting.png';

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
      <div className='p-4 h-full flex flex-col'>
        <h2 className='text-[26px] text-black mb-1 text-base font-ropa-sans'>
          CATEGORIES:
        </h2>
        <hr className='border-black border-[1.2px] mb-3' />
        <ul>
          {items.map((item, index) => {
            return (
              <li key={item} className='mb-3 ml-3'>
                <a
                  href={`/${index + 1}/${item}`}
                  className='text-[26px] text-black hover:text-blue-500 text-base font-ropa-sans'
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <hr className='border-black border-[1.2px]' />
        <div className='h-full flex justify-end flex-col'>
          <div className='mb-10'>
            <button
              type='button'
              className='text-black hover:text-blue-500 text-base font-ropa-sans'
            >
              <img src={settingsIcon} alt='settings logo' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
