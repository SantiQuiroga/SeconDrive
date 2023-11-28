import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';

import ProductCard from '@/app/components/product-Card/ProductCard';

import jsonData from '../home/assets/data.json';

interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  brand: string;
  price: string;
  image: string;
  stock: string;
  discount: string;
  unitsold: string;
}

function Search() {
  const [gridData, setGridDate] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { search } = useParams<{ search: string }>();
  const itemsPerPage = 25;

  useEffect(() => {
    if (!search) return;
    setGridDate(
      jsonData
        .filter(item => item.name.includes(search))
        .sort((a, b) => Number(b.stock) - Number(a.stock))
    );
    setTotalPages(Math.ceil(gridData.length / itemsPerPage));
  }, [gridData.length, search]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subData = gridData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='h-full w-full flex flex-col gap-2 px-40 py-10'>
      <div className='h-full flex flex-col justify-center gap-10'>
        <div
          className={`grid gap-20 h-full w-full ${
            gridData.length === 0 ? '' : 'grid-cols-5'
          }`}
        >
          {gridData.length === 0 ? (
            <div className='h-full grid place-content-center w-full'>
              <h1 className='text-2xl font-bold text-center'>
                No results Found
              </h1>
            </div>
          ) : (
            subData.map(card => (
              <ProductCard
                key={card.id}
                id={card.id}
                discount={Number(card.discount)}
                image={card.image}
                price={Number(card.price)}
                alt={card.name}
              >
                {card.name}
              </ProductCard>
            ))
          )}
        </div>
        <div className={`${gridData.length < 26 ? 'hidden' : ''}`}>
          <ReactPaginate
            pageCount={totalPages}
            onPageChange={(e: { selected: number }) =>
              handlePageChange(e.selected)
            }
            containerClassName='w-full flex justify-center gap-10 items-center text-3xl'
            activeClassName='text-[#0038FF]'
            previousLabel=''
            nextLabel=''
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
