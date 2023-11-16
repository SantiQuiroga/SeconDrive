import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';

import ProductCard from '@/app/components/product-Card/ProductCard';

import jsonData from '../home/assets/data.json';
import leftIcon from '../home/assets/left.png';
import rightIcon from '../home/assets/right.png';

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

function Category() {
  const { category, name } = useParams<{ category: string; name: string }>();

  const [gridData, setGridDate] = useState<Product[]>([]);
  const [carouselData, setCarouselData] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Set<string>>(new Set());
  const [carouselBrand, setCarouselBrand] = useState<string>('Brand');
  const [gridBrand, setGridBrand] = useState<string>('Brand');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 25;

  useEffect(() => {
    setBrands(new Set(jsonData.map(item => item.brand)));
    setCarouselData(
      jsonData
        .filter(item => Number(item.categoryId) === Number(category))
        .filter(item => Number(item.discount) > 0)
        .sort((a, b) => Number(b.stock) - Number(a.stock))
    );
  }, [category]);

  useEffect(() => {
    setGridDate(
      jsonData
        .filter(item => Number(item.categoryId) === Number(category))
        .filter(item => Number(item.discount) === 0)
    );
    setTotalPages(Math.ceil(gridData.length / itemsPerPage));
  }, [gridData.length, category]);

  useEffect(() => {
    if (carouselBrand === 'Brand') {
      setCarouselData(
        jsonData
          .filter(item => Number(item.categoryId) === Number(category))
          .filter(item => Number(item.discount) > 0)
          .sort((a, b) => Number(b.stock) - Number(a.stock))
      );
    } else {
      setCarouselData(
        jsonData
          .filter(item => Number(item.categoryId) === Number(category))
          .filter(item => Number(item.discount) > 0)
          .filter(item => item.brand === carouselBrand)
          .sort((a, b) => Number(b.stock) - Number(a.stock))
      );
    }
  }, [carouselBrand, category]);

  useEffect(() => {
    if (gridBrand === 'Brand') {
      setGridDate(
        jsonData
          .filter(item => Number(item.categoryId) === Number(category))
          .filter(item => Number(item.discount) === 0)
      );
    } else {
      setGridDate(
        jsonData
          .filter(item => Number(item.categoryId) === Number(category))
          .filter(item => Number(item.discount) === 0)
          .filter(item => item.brand === gridBrand)
      );
    }
    setTotalPages(Math.ceil(gridData.length / itemsPerPage));
  }, [gridBrand, gridData.length, category]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subData = gridData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  function handleCarousel(direction: 'prev' | 'next') {
    if (carouselData.length < 5) return;
    if (direction === 'prev' && currentIndex === 0) return;
    if (
      direction === 'next' &&
      (currentIndex + 5 === 10 || currentIndex + 5 === carouselData.length)
    )
      return;
    const maxCards = 10;
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    const maxIndex = Math.min(carouselData.length - 1, maxCards - 1);
    const newCurrentIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(newCurrentIndex);
  }

  return (
    <div className='h-full w-full flex flex-col gap-2 px-40 py-10'>
      <h1 className='text-[60px]'>{name}</h1>
      <div className='mb-10'>
        <div className='flex gap-5 items-center'>
          <h1 className='text-[40px] pl-24'>Offers</h1>
          <select
            className='bg-transparent border border-black p-2 text-[20px]'
            defaultValue='Brand'
            placeholder='Brand'
            onChange={e => {
              setCarouselBrand(e.target.value);
            }}
          >
            <option>Brand</option>
            {Array.from(brands).map(brand => (
              <option className='' key={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div
          className={`flex gap-2 w-full h-full min-h-[280px] ${
            carouselData.length > 5 ? 'justify-between' : 'justify-center'
          }`}
        >
          {carouselData.length > 5 && (
            <button
              type='button'
              className='py-2'
              onClick={() => handleCarousel('prev')}
            >
              <img src={leftIcon} alt='left icon' />
            </button>
          )}
          {carouselData.length === 0 ? (
            <div className='h-full grid place-content-center w-full'>
              <h1 className='text-2xl font-bold text-center'>
                No products found with this Brand
              </h1>
            </div>
          ) : (
            carouselData
              .slice(
                currentIndex,
                Math.min(10, carouselData.length - currentIndex)
              )
              .slice(0, 5)
              .map(item => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  discount={Number(item.discount)}
                  image={item.image}
                  price={Number(item.price)}
                  alt={item.name}
                >
                  {item.name}
                </ProductCard>
              ))
          )}
          {carouselData.length > 5 && (
            <button
              type='button'
              className=' py-2 '
              onClick={() => handleCarousel('next')}
            >
              <img src={rightIcon} alt='right icon' />
            </button>
          )}
        </div>
      </div>
      <div className='flex gap-5 items-center'>
        <h1 className='text-[40px]'>All</h1>
        <select
          className='bg-transparent border border-black p-2 text-[20px]'
          defaultValue='Brand'
          placeholder='Brand'
          onChange={e => {
            setGridBrand(e.target.value);
          }}
        >
          <option>Brand</option>
          {Array.from(brands).map(brand => (
            <option className='' key={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className='h-full flex flex-col justify-center gap-10'>
        <div
          className={`grid gap-20 h-full w-full ${
            gridData.length === 0 ? '' : 'grid-cols-5'
          }`}
        >
          {gridData.length === 0 ? (
            <div className='h-full grid place-content-center w-full'>
              <h1 className='text-2xl font-bold text-center'>
                No products found with this Brand
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
            forcePage={currentPage}
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

export default Category;
