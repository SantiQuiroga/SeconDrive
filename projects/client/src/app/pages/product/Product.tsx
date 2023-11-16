import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [isUsd, setIsUsd] = useState(true);
  const [isBol, setIsBol] = useState(false);
  const [priceUsd, setPriceUsd] = useState(0);
  const [priceBol, setPriceBol] = useState(0);

  useEffect(() => {
    if (!jsonData.some(item => item.id === id)) return;
    setProduct(jsonData.find(item => item.id === id) as Product);
    setPriceUsd(Number(jsonData.find(item => item.id === id)?.price));
    setPriceBol(Number(jsonData.find(item => item.id === id)?.price) * 6.97);
  }, [id]);

  const toggleIsUsd = () => {
    if (isUsd) return;
    setIsUsd(true);
    setIsBol(false);
  };

  const toggleIsBol = () => {
    if (isBol) return;
    setIsBol(true);
    setIsUsd(false);
  };

  if (!product)
    return (
      <div className='h-full w-full grid place-content-center'>
        <h2 className='text-4xl font-bold'>Product Not Found</h2>
      </div>
    );

  return (
    <div className='h-full w-full flex'>
      <div className='h-full w-1/2 grid place-content-center'>
        <img src={product.image} alt={product.name} height={336} width={472} />
      </div>
      <div className='h-full w-1/2 flex flex-col gap-10 px-20 py-10 bg-[#ded9e1]'>
        <h2 className='w-full text-center text-[60px]'>{product.name}</h2>
        <div className='flex gap-32 px-20 items-center'>
          <div>
            <label htmlFor='isUSD' className='flex items-center text-[25px]'>
              USD&nbsp;
              <input
                id='isUSD'
                className='rounded-full appearance-none bg-white w-6 h-6 border-2 border-gray-300 checked:bg-[#ff0000] checked:border-white focus:outline-none'
                type='checkbox'
                checked={isUsd}
                onChange={toggleIsUsd}
              />
            </label>
          </div>

          <div>
            <label htmlFor='isBol' className='flex items-center text-[25px]'>
              Bs&nbsp;
              <input
                id='isBol'
                className='rounded-full appearance-none bg-white w-6 h-6 border-2 border-gray-300 checked:bg-[#ff0000] checked:border-white focus:outline-none'
                type='checkbox'
                checked={isBol}
                onChange={toggleIsBol}
              />
            </label>
          </div>

          <span className='text-[25px]'>Change 1 (USD) = 6,97 (Bs)</span>
        </div>
        <h3 className='text-[40px]'>Description:</h3>
        <p className='text-[30px]'>{product.description}</p>
        <h3 className='text-[40px]'>
          Brand:&nbsp;&nbsp;&nbsp;
          <span className='text-[30px]'>{product.brand}</span>
        </h3>
        <h3 className='text-[40px]'>
          Category:&nbsp;&nbsp;&nbsp;
          <span className='text-[30px]'>
            {items[Number(product.categoryId) - 1]}
          </span>
        </h3>
        <h3 className='text-[40px]'>
          Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className='text-[35px]'>
            {isUsd
              ? `[USD] ${priceUsd.toFixed(0)}`
              : `[BOL] ${priceBol.toFixed(0)}`}
          </span>
        </h3>
        <button
          type='button'
          className='flex items-center text-[35px] justify-center bg-white rounded w-full p-4 font-medium font-ropa'
        >
          Add to Cart +
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
