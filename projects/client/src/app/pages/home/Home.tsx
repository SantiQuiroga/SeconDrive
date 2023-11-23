import { useEffect, useState } from 'react';

import ProductCard from '@/app/components/product-Card/ProductCard';

import carBanner from './assets/car.png';
import jsonData from './assets/data.json';
import leftIcon from './assets/left.png';
import rightIcon from './assets/right.png';

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

function Home() {
  const [brands, setBrands] = useState<Set<string>>(new Set());
  const [offersData, setOffersData] = useState<Product[]>([]);
  const [bestSellersData, setBestSellersData] = useState<Product[]>([]);
  const [offersBrand, setOffersBrand] = useState<string>('Brand');
  const [bestSellersBrand, setBestSellersBrand] = useState<string>('Brand');
  const [currentOffersIndex, setCurrentOffersIndex] = useState(0);
  const [currentBestSellersIndex, setCurrentBestSellersIndex] = useState(0);

  useEffect(() => {
    setBrands(new Set(jsonData.map(item => item.brand)));
    setOffersData(
      jsonData
        .filter(item => Number(item.discount) > 0)
        .sort((a, b) => Number(b.stock) - Number(a.stock))
    );
    setBestSellersData(
      jsonData
        .filter(item => Number(item.discount) === 0)
        .sort((a, b) => Number(b.unitsold) - Number(a.unitsold))
    );
  }, []);

  useEffect(() => {
    if (offersBrand === 'Brand') {
      setOffersData(
        jsonData
          .filter(item => Number(item.discount) > 0)
          .sort((a, b) => Number(b.stock) - Number(a.stock))
      );
    } else {
      setOffersData(
        jsonData
          .filter(item => Number(item.discount) > 0)
          .filter(item => item.brand === offersBrand)
          .sort((a, b) => Number(b.stock) - Number(a.stock))
      );
    }
  }, [offersBrand]);

  useEffect(() => {
    if (bestSellersBrand === 'Brand') {
      setBestSellersData(
        jsonData
          .filter(item => Number(item.discount) === 0)
          .sort((a, b) => Number(b.unitsold) - Number(a.unitsold))
      );
    } else {
      setBestSellersData(
        jsonData
          .filter(item => Number(item.discount) === 0)
          .filter(item => item.brand === bestSellersBrand)
          .sort((a, b) => Number(b.unitsold) - Number(a.unitsold))
      );
    }
  }, [bestSellersBrand]);

  function handleOffersCarousel(direction: 'prev' | 'next') {
    if (offersData.length < 5) return;
    if (direction === 'prev' && currentOffersIndex === 0) return;
    if (
      direction === 'next' &&
      (currentOffersIndex + 5 === 10 ||
        currentOffersIndex + 5 === offersData.length)
    )
      return;
    const maxCards = 10;
    const newIndex =
      direction === 'prev' ? currentOffersIndex - 1 : currentOffersIndex + 1;
    const maxIndex = Math.min(offersData.length - 1, maxCards - 1);
    const newCurrentIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentOffersIndex(newCurrentIndex);
  }

  function handleBestSellersCarousel(direction: 'prev' | 'next') {
    if (bestSellersData.length < 5) return;
    if (direction === 'prev' && currentBestSellersIndex === 0) return;
    if (
      direction === 'next' &&
      (currentBestSellersIndex + 5 === 10 ||
        currentBestSellersIndex + 5 === bestSellersData.length)
    )
      return;
    const maxCards = 10;
    const newIndex =
      direction === 'prev'
        ? currentBestSellersIndex - 1
        : currentBestSellersIndex + 1;
    const maxIndex = Math.min(bestSellersData.length - 1, maxCards - 1);
    const newCurrentIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentBestSellersIndex(newCurrentIndex);
  }
  /*
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  */
  return (
    <div
      className='h-full w-full flex flex-col px-40
    '
    >
      <div className='w-full flex justify-center items-center'>
        <img src={carBanner} alt='offers icon' />
      </div>
      <div>
        <div className='flex gap-5 items-center'>
          <h1 className='text-[40px] pl-24'>Offers</h1>
          <select
            className='bg-transparent border border-black p-2 text-[20px]'
            defaultValue='Brand'
            placeholder='Brand'
            onChange={e => {
              setOffersBrand(e.target.value);
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
            offersData.length > 5 ? 'justify-between' : 'justify-center'
          }`}
        >
          {offersData.length > 5 && (
            <button
              type='button'
              className='py-2'
              onClick={() => handleOffersCarousel('prev')}
            >
              <img src={leftIcon} alt='left icon' />
            </button>
          )}
          {offersData.length === 0 ? (
            <div className='h-full grid place-content-center w-full'>
              <h1 className='text-2xl font-bold text-center'>
                No offers found with this Brand
              </h1>
            </div>
          ) : (
            offersData
              .slice(
                currentOffersIndex,
                Math.min(10, offersData.length - currentOffersIndex)
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
          {offersData.length > 5 && (
            <button
              type='button'
              className=' py-2 '
              onClick={() => handleOffersCarousel('next')}
            >
              <img src={rightIcon} alt='right icon' />
            </button>
          )}
        </div>
      </div>
      <div>
        <div className='flex gap-5 items-center'>
          <h1 className='text-[40px] pl-24'>Best sellers</h1>
          <select
            className='bg-transparent border border-black p-2 text-[20px]'
            defaultValue='Brand'
            placeholder='Brand'
            onChange={e => {
              setBestSellersBrand(e.target.value);
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
            bestSellersData.length > 5 ? 'justify-between' : 'justify-center'
          }`}
        >
          {bestSellersData.length > 5 && (
            <button
              type='button'
              className='py-2'
              onClick={() => handleBestSellersCarousel('prev')}
            >
              <img src={leftIcon} alt='left icon' />
            </button>
          )}
          {bestSellersData.length === 0 ? (
            <div className='h-full grid place-content-center w-full'>
              <h1 className='text-2xl font-bold text-center'>
                No Best Sellers found with this Brand
              </h1>
            </div>
          ) : (
            bestSellersData
              .slice(
                currentBestSellersIndex,
                Math.min(10, bestSellersData.length - currentBestSellersIndex)
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
          {bestSellersData.length > 5 && (
            <button
              type='button'
              className=' py-2 '
              onClick={() => handleBestSellersCarousel('next')}
            >
              <img src={rightIcon} alt='right icon' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
