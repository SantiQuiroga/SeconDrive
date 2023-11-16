import banner from '@/assets/images/banner.png';

function Home() {
  return (
    <div className='grid place-content-center text-3xl font-bold'>
      <img
        src={banner}
        alt='Banner'
        className='w-full object-cover object-center h-80'
      />
      Home Page
    </div>
  );
}

export default Home;
