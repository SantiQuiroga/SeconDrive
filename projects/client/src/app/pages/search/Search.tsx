import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';

import { GetProductsByName, Product } from '@/app/api/ProductAPI';
import ProductCard from '@/app/components/product-Card/ProductCard';

function Search() {
  const [products, setProducts] = useState<Product[]>([]);
  const [subData, setSubData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<Error>();
  const { search } = useParams<{ search: string }>();
  const itemsPerPage = 25;

  useEffect(() => {
    if (!search) return;
    GetProductsByName(search)
      .then(res => {
        return res.json();
      })
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.products.length / itemsPerPage));
      })
      .catch((err: Error) => setError(err));
  }, [search]);

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slice = products.slice(startIndex, endIndex);
    setSubData(slice);
  }, [currentPage, products]);

  if (error) {
    return (
      <div>
        Error: {error.message} :--{error.name} :--{error.stack}
      </div>
    );
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='h-full w-full flex flex-col gap-2 px-40 py-10'>
      <div className='h-full flex flex-col justify-center gap-10'>
        <div
          className={`grid gap-20 h-full w-full ${
            products.length === 0 ? '' : 'grid-cols-5'
          }`}
        >
          {products.length === 0 ? (
            <div className='h-full grid place-content-center w-full'>
              <h1 className='text-2xl font-bold text-center'>
                No results Found for {search}
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
        <div className={`${products.length < 26 ? 'hidden' : ''}`}>
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
