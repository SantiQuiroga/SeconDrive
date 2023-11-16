import useSearchParams from '@/app/hooks/search/useSearchParams';

function Search() {
  const search = useSearchParams();

  return (
    <div className='grid h-full place-content-center text-3xl font-bold'>
      {search}
    </div>
  );
}

export default Search;
