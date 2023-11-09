import { useParams } from 'react-router-dom';

function Search() {
  const { search } = useParams<{ search: string }>();

  return (
    <div className='grid h-full place-content-center text-3xl font-bold'>
      {search}
    </div>
  );
}

export default Search;
